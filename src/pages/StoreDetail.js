import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMetaTags } from '../hooks/useMetaTags';

// SVG 아이콘들을 URL로 불러옵니다. 이 방식은 모든 React 환경에서 동작합니다.
import subImage from '../components/StoreInfo/StoreStatus/ModalImage/modal_sub.svg';
import washerUrl from '../components/StoreInfo/StoreStatus/ModalImage/modal_washer.svg';
import shoeWasherUrl from '../components/StoreInfo/StoreStatus/ModalImage/modal_shoe.svg';
import hangerUrl from '../components/StoreInfo/StoreStatus/ModalImage/modal_hanger.svg';
import modal_chart from '../components/StoreInfo/StoreStatus/ModalImage/modal_chart.svg';

// 매장별 serialNumber 매핑 객체
const STORE_SERIAL_MAPPINGS = {
  신길점: '1001',
  관악조원점: '20002',
  조원점: '20002', // 기존 호환성 유지
  서울대입구점: '1003',
  신림점: '20004',
  미사헤븐시티점: '20006',
  성내점: '1007',
  청룡점: '1008',
  동탄역점: '20009',
  동탄실리콘앨리점: '20010',
  송도랜드마크점: '20011',
  광교상현점: '20012',
  상도점: '1013',
  보라매점: '1014',
  평택점: '20015',
  광주용봉점: '40016',
  화곡점: '1017',
  낙성대점: '1018',
  서울대행운점: '1020',
  평촌역점: '20021',
  봉천점: '1022',
  샤로수길점: '1023',
  갈매점: '20024',
  한양대학로점: '20025',
  도래울점: '20026',
  서울대학점: '1027',
  분당장안점: '20028',
  장항점: '20029',
  성남금광점: '20030',
  독산점: '9031',
  서교점: '1032',
  안산중앙역점: '20033',
  광양중동점: '40034',
  봉천중앙점: '1035',
  사당점: '1036',
  평촌아이에스비즈점: '20037', // CSV와 매칭
  아이에스비즈점: '20037', // 기존 호환성 유지
  경희대점: '1038',
  신림서원점: '1039',
  곡반정점: '20040',
  신림서림점: '1041',
  금정점: '20042',
  신림역점: '1043',
  신림본점: '1044',
  포천이동교점: '20045',
  항동점: '1046',
  서울대점: '1047',
  수진역점: '20048',
  마장점: '1049',
  난곡점: '1050',
};

// serialNumber로 매장명 찾기 (역매핑)
const getStoreNameBySerial = (serialNumber) => {
  const entry = Object.entries(STORE_SERIAL_MAPPINGS).find(
    ([name, serial]) => serial === serialNumber
  );
  return entry ? entry[0] : '알 수 없는 매장';
};

// API 호출 함수
const fetchMachineData = async (serialNumber) => {
  try {
    const baseUrl = process.env.REACT_APP_HOTEL_BASE_URL;
    const response = await fetch(`${baseUrl}/kiosk/machine/machines-by-store/${serialNumber}`);
    const result = await response.json();

    if (result.success) {
      return result.data;
    } else {
      throw new Error('API 호출 실패');
    }
  } catch (error) {
    console.error('세탁기 데이터 조회 실패:', error);
    return null;
  }
};

// API 데이터를 UI에 맞게 변환하는 함수
const mapApiDataToMachines = (apiMachines) => {
  if (!Array.isArray(apiMachines)) return [];

  return apiMachines.map((machine) => ({
    id: machine.id,
    name: machine.name,
    type: machine.type,
    nameType: machine.nameType,
    thumbnail: machine.thumbnail,
    isAvailable: machine.state.key === 1, // 1: 사용가능
    isRunning: machine.state.key === 2, // 2: 사용중
    state: machine.state,
    serialNumber: machine.serialNumber,
  }));
};

// API 세탁기 데이터로부터 타입별 개수를 계산하는 함수
const getMachineTypesSummary = (apiMachines) => {
  if (!Array.isArray(apiMachines)) {
    return [];
  }

  // 타입별 개수 집계
  const typeCounts = {
    washing: 0,
    shoe: 0,
    dryer: 0,
    styler: 0,
  };

  apiMachines.forEach((machine) => {
    switch (machine.type) {
      case 'WASHING_L':
      case 'WASHING_S':
        typeCounts.washing++;
        break;
      case 'SHOE_WASHING':
      case 'SHOE_DRY_CLEANING':
        typeCounts.shoe++;
        break;
      case 'DRYER_L':
      case 'DRYER_S': // 소형 건조기 추가
        typeCounts.dryer++;
        break;
      case 'STYLER':
        typeCounts.styler++;
        break;
      default:
        // 알 수 없는 타입은 무시
        break;
    }
  });

  // UI에 표시할 형태로 변환 (0개인 항목은 표시하지 않음)
  const result = [];
  if (typeCounts.washing > 0) {
    result.push({ name: '프리미엄 살균 세탁기', count: typeCounts.washing, icon: WasherIcon });
  }
  if (typeCounts.shoe > 0) {
    result.push({ name: '운동화 세탁기', count: typeCounts.shoe, icon: ShoeWasherIcon });
  }
  if (typeCounts.dryer > 0) {
    result.push({ name: '건조기', count: typeCounts.dryer, icon: HangerIcon });
  }
  if (typeCounts.styler > 0) {
    result.push({ name: '스타일러', count: typeCounts.styler, icon: HangerIcon });
  }

  return result;
};

// 세탁기 타입에 따른 아이콘 선택 함수
const getMachineIcon = (machineType) => {
  switch (machineType) {
    case 'WASHING_L':
    case 'WASHING_S':
      return WasherIcon;
    case 'DRYER_L':
    case 'DRYER_S':
      return HangerIcon; // 건조기는 행거 아이콘
    case 'SHOE_WASHING':
    case 'SHOE_DRY_CLEANING':
      return ShoeWasherIcon; // 운동화 세탁기
    case 'STYLER':
      return HangerIcon; // 스타일러는 행거 아이콘
    default:
      return WasherIcon; // 기본은 세탁기 아이콘
  }
};

// 각 지점별 전화번호 가져오기 함수
const getStorePhone = (storeName) => {
  const phoneMap = {
    항동점: '070-8211-3074',
    평촌역점: '070-8855-7242',
    송도랜드마크점: '032-255-2030',
    신길점: '02-1577-2657',
    화곡점: '070-7732-0728',
    한양대학로점: '070-4110-6065',
    사당점: '070-8211-1680',
    안산중앙역점: '070-8211-1680',
    봉천점: '070-8889-1698',
    아이에스비즈점: '031-344-1649',
    신림점: '070-7612-1411',
    서울대행운점: '070-7705-2229',
    독산점: '070-7705-2229',
    도래울점: '070-7510-5623',
    관악조원점: '1577-2657',
    상도점: '02-6674-1880',
    갈매점: '070-8065-1353',
    서울대입구점: '070-7601-7507',
    청룡점: '02-6747-1952',
    서교점: '070-7503-8043',
    낙성대점: '070-4150-1383',
    보라매점: '070-7607-1411',
    서울대학점: '070-4922-1698',
    금정점: '070-7728-7112',
    신림역점: '070-4917-1816',
    광주용봉점: '070-4150-2523',
    안성석정점: '070-7775-5594',
    포천이동교점: '070-7775-5594',
    광양중동점: '070-4282-4882',
    평택점: '0507-1309-1435',
    성남금광점: '070-7733-7995',
    동탄역점: '070-4288-6388',
    수진역점: '070-8211-0173',
    미사헤븐시티점: '070-8691-2904',
    곡반정점: '070-4240-6413',
    동탄실리콘앨리점: '070-7771-7889',
    분당장안점: '070-4110-5519',
    난곡점: '070-4400-7385',
    마장점: '02-1577-2657', // 번호없음 -> 기본번호
    신림본점: '070-4924-1411',
    경희대점: '070-7607-5995',
    샤로수길점: '070-4495-3606',
    봉천중앙점: '070-8104-0019',
    광교상현점: '070-7731-2030',
    서울대점: '070-7780-4090',
    신림서림점: '070-4239-1411',
    성내점: '02-6080-7218',
    장항점: '070-4607-5622',
    신림서원점: '070-4202-1411',
  };

  return phoneMap[storeName] || '02-1577-2657'; // 기본 전화번호
};

// 각 지점별 이미지 가져오기 함수
const getStoreImages = (storeName) => {
  const imageMap = {
    독산점: ['image 332.png', 'image 333.png', 'image 334.png'],
    관악조원점: ['image 312.png', 'image 313.png', 'image 314.png'],
    신림본점: [
      'image 225.png',
      'image 226.png',
      'image 227.png',
      'image 228.png',
      'image 229.png',
      'image 230.png',
    ],
    신림점: ['image 329.png', 'image 331.png'],
    신림역점: [
      'image 354.png',
      'image 355.png',
      'image 356.png',
      'image 357.png',
      'image 358.png',
      'image 359.png',
      'image 360.png',
      'image 361.png',
      'image 362.png',
    ],
    서울대학점: ['image 350.png', 'image 351.png', 'image 352.png', 'image 353.png'],
    서울대점: ['image 350.png', 'image 351.png', 'image 352.png', 'image 353.png'],
    성내점: [
      'image 385.png',
      'image 386.png',
      'image 387.png',
      'image 388.png',
      'image 389.png',
      'image 390.png',
      'image 391.png',
    ],
    보라매점: ['image 262.png', 'image 263.png', 'image 265.png'],
    신림서원점: ['image 242.png', 'image 243.png', 'image 244.png', 'image 245.png'],
    신길점: ['image 287.png', 'image 289.png', 'image 290.png', 'image 291.png'],
    봉천점: [
      'image 301.png',
      'image 302.png',
      'image 303.png',
      'image 304.png',
      'image 305.png',
      'image 306.png',
      'image 307.png',
      'image 309.png',
    ],
    신림서림점: ['image 242.png', 'image 243.png', 'image 244.png', 'image 245.png'],
    청룡점: [
      'image 268.png',
      'image 270.png',
      'image 271.png',
      'image 272.png',
      'image 273.png',
      'image 274.png',
    ],
    상도점: ['image 292.png', 'image 293.png', 'image 294.png', 'image 295.png', 'image 296.png'],
    봉천중앙점: [
      'image 231.png',
      'image 232.png',
      'image 233.png',
      'image 234.png',
      'image 235.png',
      'image 236.png',
    ],
    서울대입구점: [
      'image 251.png',
      'image 252.png',
      'image 253.png',
      'image 254.png',
      'image 255.png',
      'image 256.png',
      'image 257.png',
    ],
    샤로수길점: [
      'image 246.png',
      'image 247.png',
      'image 248.png',
      'image 249.png',
      'image 250.png',
    ],
    서울대행운점: ['image 346.png', 'image 347.png', 'image 348.png'],
    사당점: ['image 315.png', 'image 316.png', 'image 317.png'],
    항동점: ['image 261.png', 'image 264.png', 'image 266.png'],
    낙성대점: ['image 259.png', 'image 260.png'],
    평촌역점: ['image 275.png', 'image 276.png', 'image 278.png'],
    화곡점: ['image 297.png', 'image 298.png', 'image 299.png', 'image 300.png'],
    서교점: [
      'image 277.png',
      'image 279.png',
      'image 280.png',
      'image 281.png',
      'image 282.png',
      'image 283.png',
      'image 284.png',
      'image 285.png',
      'image 286.png',
      'image 288.png',
    ],
    아이에스비즈점: [
      'image 318.png',
      'image 320.png',
      'image 321.png',
      'image 322.png',
      'image 323.png',
      'image 324.png',
      'image 325.png',
      'image 326.png',
    ],
    도래울점: [
      'image 335.png',
      'image 336.png',
      'image 337.png',
      'image 339.png',
      'image 340.png',
      'image 342.png',
      'image 344.png',
      'image 345.png',
    ],
    안산중앙역점: ['image 327.png', 'image 328.png', 'image 330.png'],
    한양대학로점: ['image 308.png', 'image 310.png', 'image 311.png'],
    갈매점: ['image 338.png', 'image 341.png', 'image 343.png'],
    광교상현점: [
      'image 237.png',
      'image 238.png',
      'image 239.png',
      'image 240.png',
      'image 241.png',
    ],
    경희대점: ['image 220.png'],
    송도랜드마크점: ['image 267.png', 'image 269.png', 'image 349.png'],
    장항점: ['image 258.png'],
    성남금광점: [
      'image 189.png',
      'image 190.png',
      'image 191.png',
      'image 192.png',
      'image 193.png',
      'image 194.png',
      'image 195.png',
    ],
    분당장안점: [
      'image 205.png',
      'image 206.png',
      'image 207.png',
      'image 208.png',
      'image 209.png',
      'image 210.png',
      'image 211.png',
      'image 212.png',
      'image 213.png',
    ],
    곡반정점: ['image 185.png', 'image 186.png', 'image 187.png', 'image 188.png'],
    미사헤븐시티점: ['image 202.png', 'image 203.png', 'image 204.png'],
    동탄실리콘앨리점: [
      'image 214.png',
      'image 215.png',
      'image 216.png',
      'image 217.png',
      'image 218.png',
      'image 219.png',
    ],
    수진역점: ['image 197.png', 'image 198.png', 'image 199.png', 'image 200.png', 'image 201.png'],
    동탄역점: ['image 180.png', 'image 181.png', 'image 182.png', 'image 183.png', 'image 184.png'],
    포천이동교점: ['image 174.png', 'image 175.png', 'image 176.png', 'image 177.png'],
    마장점: ['image 221.png', 'image 222.png', 'image 223.png', 'image 224.png'],
    평택점: ['image 178.png', 'image 179.png'],
    안성석정점: [
      'image 159.png',
      'image 160.png',
      'image 161.png',
      'image 162.png',
      'image 163.png',
    ],
    광양중동점: [
      'image 164.png',
      'image 165.png',
      'image 166.png',
      'image 167.png',
      'image 168.png',
      'image 169.png',
      'image 171.png',
      'image 173.png',
    ],
    광주용봉점: ['image 156.png', 'image 157.png', 'image 158.png'],
  };

  const imageNames = imageMap[storeName];
  if (imageNames && imageNames.length > 0) {
    try {
      // 최대 5개까지만 가져오기 (첫 번째는 대표 이미지, 나머지 4개는 슬라이더용)
      const limitedImages = imageNames.slice(0, 5);
      const loadedImages = [];

      limitedImages.forEach((imageName) => {
        try {
          const imagePath = require(`../components/StoreInfo/StoreStatus/RealStoreImage/${storeName}/${imageName}`);
          loadedImages.push(imagePath);
        } catch (imageError) {
          console.warn(`개별 이미지 로드 실패: ${storeName}/${imageName}`, imageError);
        }
      });

      // 성공적으로 로드된 이미지가 있으면 반환, 없으면 기본 이미지
      return loadedImages.length > 0 ? loadedImages : [subImage];
    } catch (error) {
      console.warn(`이미지 폴더 접근 실패: ${storeName}`, error);
      return [subImage]; // 기본 이미지 사용
    }
  }
  return [subImage]; // 기본 이미지 사용
};

// 각 아이콘을 <img> 태그를 사용하는 컴포넌트로 만듭니다.
// 이렇게 하면 className으로 크기 조절이 가능합니다.
const WasherIcon = ({ className }) => <img src={washerUrl} alt="Washer" className={className} />;
const ShoeWasherIcon = ({ className }) => (
  <img src={shoeWasherUrl} alt="Shoe Washer" className={className} />
);
const HangerIcon = ({ className }) => <img src={hangerUrl} alt="Hanger" className={className} />;

const Chart = ({ data }) => {
  // data가 import된 이미지인 경우 이미지로 표시
  if (data && typeof data === 'string' && data.includes('.svg')) {
    return (
      <div className="flex items-center justify-center h-full w-full bg-gray-50 p-4 rounded-lg">
        {' '}
        {/* h-32 w-64에서 h-full w-full로 변경 */}
        <img src={data} alt="차트" className="max-w-full max-h-full object-contain" />
      </div>
    );
  }

  // 기존 배열 데이터인 경우 기존 차트 표시
  if (Array.isArray(data)) {
    if (data.length === 0) {
      return (
        <div className="flex items-center justify-center h-48 bg-gray-50 p-4 rounded-lg text-gray-500 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
          차트 데이터가 없습니다.
        </div>
      );
    }
    const maxVal = Math.max(...data, 1);
    return (
      <div className="flex items-end h-48 space-x-2 bg-gray-50 p-4 rounded-lg">
        {data.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-blue-500 rounded-t-sm"
              style={{ height: `${(value / maxVal) * 90}%` }}
            ></div>
            <span className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-gray-500 mt-1">{`0${
              index + 2
            }`}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-48 bg-gray-50 p-4 rounded-lg text-gray-500 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
      차트 데이터가 없습니다.
    </div>
  );
};

// 메인 매장 상세 페이지 컴포넌트
const StoreDetail = () => {
  const { serialNumber } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [machineData, setMachineData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterType, setFilterType] = useState('전체');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const filterRef = useRef(null);

  const storeName = getStoreNameBySerial(serialNumber);

  // 매장 상세 페이지 전용 메타태그 설정 (기본값 사용)
  useMetaTags();

  // API 데이터 로드 함수
  const loadMachineData = useCallback(async () => {
    if (!serialNumber) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const data = await fetchMachineData(serialNumber);
    if (data) {
      setMachineData(data);
    } else {
      setError('데이터를 불러올 수 없습니다.');
    }

    setLoading(false);
  }, [serialNumber]);

  // 새로고침 함수
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await loadMachineData();
    setIsRefreshing(false);
  };

  // API 데이터 로드
  useEffect(() => {
    loadMachineData();
  }, [loadMachineData]);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 기본 매장 데이터 (이미지가 없는 지점용) - API 데이터 우선 사용
  const defaultStore = {
    name: machineData?.name || `호텔런드리 ${storeName}`,
    address: machineData?.address?.value || '주소 정보를 불러올 수 없습니다.',
    phone: getStorePhone(storeName), // 전화번호는 하드코딩된 매핑 사용
    tags: ['20평형', '서울'],
    images: getStoreImages(storeName),
    // API 데이터로부터 실제 세탁기 타입별 개수 계산
    machineTypes: getMachineTypesSummary(machineData?.machines || []),
    // API에서 받아온 실제 세탁기 데이터 사용
    machines: mapApiDataToMachines(machineData?.machines || []),
    chartData: modal_chart,
    chartDescription:
      '개점 이후 누적 수익이 꾸준히 증가하고 있는 매장입니다. 실제 데이터를 통해 안정적인 성장 흐름을 확인할 수 있습니다.',
  };

  // API 데이터와 기본 매장 데이터를 조합하여 currentStore 생성
  const currentStore = {
    ...defaultStore,
    // API에서 받아온 데이터가 있으면 사용, 없으면 기본값
    name: machineData?.name || defaultStore.name,
    address: machineData?.address?.value || defaultStore.address,
    phone: getStorePhone(storeName), // 전화번호는 하드코딩된 매핑 사용
    tags: defaultStore.tags,
    // 세탁기 타입별 개수 계산 (API 데이터 기반)
    machineTypes: getMachineTypesSummary(machineData?.machines || []),
    // API에서 받아온 실제 세탁기 데이터 사용
    machines: mapApiDataToMachines(machineData?.machines || []),
    chartData: defaultStore.chartData,
    chartDescription: defaultStore.chartDescription,
  };

  const images = currentStore.images || [];
  const tags = currentStore.tags || [];
  const machineTypes = currentStore.machineTypes || [];
  const allMachines = currentStore.machines || [];
  const chartData = currentStore.chartData || [];

  // 필터링된 세탁기 목록
  const filteredMachines = allMachines.filter((machine) => {
    if (filterType === '전체') return true;

    switch (filterType) {
      case '세탁기':
        return machine.type === 'WASHING_L' || machine.type === 'WASHING_S';
      case '건조기':
        return machine.type === 'DRYER_L' || machine.type === 'DRYER_S';
      case '운동화 세탁기':
        return machine.type === 'SHOE_WASHING' || machine.type === 'SHOE_DRY_CLEANING';
      case '스타일러':
        return machine.type === 'STYLER';
      default:
        return true;
    }
  });

  const nextImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // 로딩 중일 때
  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <p className="text-gray-600">매장 정보를 불러오는 중...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 에러 발생시
  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="flex flex-col items-center space-y-4">
                <div className="text-red-500 text-4xl">⚠️</div>
                <p className="text-gray-800 font-medium">오류가 발생했습니다</p>
                <p className="text-gray-600 text-sm">{error}</p>
                <button
                  onClick={() => navigate('/store-info/store-status')}
                  className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  목록으로 돌아가기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-4">
        {/* 상단 네비게이션 */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/store-info/store-status')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors font-pretendard"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            매장 목록으로 돌아가기
          </button>
        </div>

        {/* 제목 */}
        <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[30px] text-center">
          매장 상세 정보
        </h1>

        {/* 매장 기본 정보 */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <div className="text-center space-y-3">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.4px] sm:tracking-[-0.44px] md:tracking-[-0.48px] lg:tracking-[-0.52px] xl:tracking-[-0.56px] 2xl:tracking-[-0.6px]">
              {currentStore.name}
            </h2>
            <p className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]">
              📍 {currentStore.address}
            </p>
            <p className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]">
              📞 {currentStore.phone}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white text-gray-700 text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-medium px-3 py-1 rounded-full font-KoPubWorldDotum shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 매장 이미지 */}
        <div className="mb-8">
          <div className="relative w-full">
            <img
              src={
                images && images.length > 0 && images[currentImageIndex]
                  ? images[currentImageIndex]
                  : subImage
              }
              alt={currentStore.name || '매장 이미지'}
              className="w-full h-64 md:h-96 object-cover rounded-lg bg-gray-200"
            />
            {images.length > 1 && (
              <>
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button
                    onClick={prevImage}
                    className="text-white bg-black bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 transition-all"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="text-white bg-black bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 transition-all"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* 매장 장비 현황 */}
        <div className="mb-8">
          <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.4px] sm:tracking-[-0.44px] md:tracking-[-0.48px] lg:tracking-[-0.52px] xl:tracking-[-0.56px] 2xl:tracking-[-0.6px] mb-6">
            매장 장비 현황
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {machineTypes.map((machineType, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <machineType.icon className="w-8 h-8 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-medium text-[#1C262B] font-KoPubWorldDotum">
                    {machineType.name}
                  </p>
                  <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-gray-600 font-KoPubWorldDotum">
                    {machineType.count}대
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 실시간 세탁기 사용 현황 */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.4px] sm:tracking-[-0.44px] md:tracking-[-0.48px] lg:tracking-[-0.52px] xl:tracking-[-0.56px] 2xl:tracking-[-0.6px]">
                실시간 세탁기 사용 현황
              </h3>
              {/* 새로고침 버튼 */}
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="flex items-center gap-2 px-3 py-2 text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] text-gray-600 hover:text-gray-800 disabled:text-gray-400 rounded-lg transition-all font-KoPubWorldDotum"
              >
                <svg
                  className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span>{isRefreshing ? '새로고침 중...' : '새로고침'}</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              {/* 필터 드롭다운 */}
              <div className="relative" ref={filterRef}>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] border border-gray-300 rounded-lg px-4 py-2 bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-KoPubWorldDotum shadow-sm min-w-[120px] justify-between"
                >
                  <span>{filterType}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isFilterOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isFilterOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                    {['전체', '세탁기', '건조기', '운동화 세탁기', '스타일러'].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setFilterType(option);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-KoPubWorldDotum hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                          filterType === option
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {filterType === option && (
                            <svg
                              className="w-4 h-4 text-blue-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          {filteredMachines.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {filteredMachines.map((machine) => {
                const IconComponent = getMachineIcon(machine.type);
                return (
                  <div
                    key={machine.id}
                    className="border border-gray-200 rounded-lg p-2.5 flex flex-col items-center justify-between text-center min-h-[110px] max-h-[140px] hover:shadow-md transition-shadow"
                  >
                    <IconComponent className="w-7 h-7 text-gray-500 flex-shrink-0" />
                    <div className="flex-grow flex items-center justify-center px-1 overflow-hidden">
                      <p
                        className="text-xs font-medium text-[#1C262B] font-KoPubWorldDotum leading-tight text-center break-words"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: '2',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          wordBreak: 'break-word',
                        }}
                      >
                        {machine.name}
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-1 flex-shrink-0">
                      {machine.isAvailable ? (
                        <>
                          <svg
                            className="w-3 h-3 text-green-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-xs font-medium text-green-600">사용가능</span>
                        </>
                      ) : machine.isRunning ? (
                        <>
                          <svg
                            className="w-3 h-3 text-red-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-xs font-medium text-red-600">사용중</span>
                        </>
                      ) : (
                        <span className="text-xs font-medium text-white">사용불가</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-KoPubWorldDotum">
                선택한 종류의 세탁기가 없습니다.
              </p>
            </div>
          )}
        </div>

        {/* 전월 대비 수익 상승률 */}
        <div>
          <h4 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.4px] sm:tracking-[-0.44px] md:tracking-[-0.48px] lg:tracking-[-0.52px] xl:tracking-[-0.56px] 2xl:tracking-[-0.6px] mb-4">
            전월 대비 수익 상승률
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:col-span-1">
              <Chart data={chartData} />
            </div>
            <div className="md:col-span-1 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]">
              <p>{currentStore.chartDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreDetail;
