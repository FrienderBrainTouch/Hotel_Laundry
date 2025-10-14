import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import StoreList from '../components/StoreInfo/StoreStatus/StoreList';
import StoreFinder from '../components/StoreInfo/FindStore/StoreFinder';
import StoreDetail from './StoreDetail';
import { useMetaTags } from '../hooks/useMetaTags';

// 매장별 serialNumber 매핑 객체 (역매핑용)
const STORE_SERIAL_MAPPINGS = {
  신길점: '1001',
  관악조원점: '20002',
  조원점: '20002',
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
  평촌아이에스비즈점: '20037',
  아이에스비즈점: '20037',
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
  return entry ? entry[0] : null;
};

// 매장 목록 데이터 생성 (브레드크럼 셀렉터용)
const getStoreListForSelector = () => {
  return Object.entries(STORE_SERIAL_MAPPINGS)
    .map(([name, serialNumber]) => {
      // 지역 분류 (간단한 분류)
      let region = '서울';
      if (serialNumber.startsWith('2')) region = '경기';
      else if (serialNumber.startsWith('4')) region = '전라';
      else if (serialNumber.startsWith('9')) region = '서울'; // 독산점은 서울

      return {
        name,
        serialNumber,
        region,
      };
    })
    .sort((a, b) => {
      // 지역별, 매장명별 정렬
      if (a.region !== b.region) {
        const regionOrder = ['서울', '경기', '전라'];
        return regionOrder.indexOf(a.region) - regionOrder.indexOf(b.region);
      }
      return a.name.localeCompare(b.name);
    });
};

const StoreInfo = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const currentPath = pathParts.pop() || 'store-status';

  // 매장 상세 페이지인지 확인 (serialNumber가 있는지)
  const isStoreDetail = pathParts.includes('store-status') && /^\d+$/.test(currentPath);
  const serialNumber = isStoreDetail ? currentPath : null;
  
  // 매장 안내 페이지 전용 메타태그 설정 (기본값 사용)
  useMetaTags();
  const storeName = serialNumber ? getStoreNameBySerial(serialNumber) : null;

  const breadcrumbItems = [
    {
      label: '매장 안내',
      link: '/store-info',
      isActive: false,
    },
    {
      label: getCurrentPageLabel(isStoreDetail ? 'store-status' : currentPath),
      hasDropdown: !isStoreDetail,
      dropdownItems: !isStoreDetail
        ? [
            {
              label: '전국 매장 현황',
              link: '/store-info/store-status',
              isActive: currentPath === 'store-status',
            },
            {
              label: '매장 찾기',
              link: '/store-info/find-store',
              isActive: currentPath === 'find-store',
            },
          ]
        : undefined,
      ...(isStoreDetail && { link: '/store-info/store-status' }),
    },
    // 매장 상세 페이지인 경우 매장명 추가 (셀렉터로)
    ...(isStoreDetail && storeName
      ? [
          {
            label: storeName,
            isActive: true,
            isStoreSelector: true, // 매장 셀렉터로 표시
          },
        ]
      : []),
  ];

  function getCurrentPageLabel(path) {
    switch (path) {
      case 'store-status':
        return '전국 매장 현황';
      case 'find-store':
        return '매장 찾기';
      default:
        return '전국 매장 현황';
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 브레드크럼 */}
          <Breadcrumb
            items={breadcrumbItems}
            storeSelector={
              isStoreDetail
                ? {
                    stores: getStoreListForSelector(),
                    currentSerialNumber: serialNumber,
                  }
                : null
            }
          />

          {/* 개별 라우팅 */}
          <Routes>
            <Route path="/" element={<StoreList />} />
            <Route path="/store-info" element={<StoreList />} />
            <Route path="/store-status" element={<StoreList />} />
            <Route path="/store-status/:serialNumber" element={<StoreDetail />} />
            <Route path="/find-store" element={<StoreFinder />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;
