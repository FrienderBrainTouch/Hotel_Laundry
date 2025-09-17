import React, { useState } from 'react';
import esgCert from '../../../image/esg 확인서.png';
import innovationCert from '../../../image/혁신중소기업확인서.png';
import ventureCert from '../../../image/벤처기업.png';
import trademarkCert from '../../../image/상표등록증.png';
import copyrightCert from '../../../image/저작권.png';
import brandAward from '../../../image/브랜드대상.png';
import techInnovationAward from '../../../image/기술혁신확인서.png';
import patent1 from '../../../image/특허1.png';
import patent2 from '../../../image/특허2.png';
import patent3 from '../../../image/특허3.png';
import patent4 from '../../../image/특허4.png';
import patent5 from '../../../image/특허5.png';
import patent6 from '../../../image/특허6.png';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const patents = [
    { image: patent1 },
    { image: patent2 },
    { image: patent3 },
    { image: patent4 },
    { image: patent5 },
    { image: patent6 },
  ];

  const certifications = [
    { image: esgCert },
    { image: innovationCert },
    { image: ventureCert },
    { image: trademarkCert },
    { image: copyrightCert },
    { image: brandAward },
    { image: techInnovationAward },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 메인 이미지 */}
          <div className="mb-[30px] sm:mb-[30px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px] 2xl:mb-[50px]">
            <img
              src="/images/CompanyInfo/Company-2-1.png"
              alt="호텔런드리 세탁 시설"
              className="mx-auto object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[50px] 2xl:rounded-[50px] w-full h-auto xs:w-[355px] xs:h-[180px] sm:w-[535px] sm:h-[200px] md:w-[728px] md:h-[300px] lg:w-[924px] lg:h-[300px] xl:w-[1200px] xl:h-[350px] 2xl:w-[1400px] 2xl:h-[400px]"
            />
          </div>

          {/* 제목 */}
          <div className="text-center mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
            <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px]">
              기술과 신뢰로 증명하는 호텔런드리
            </h1>

            {/* 구분선 */}
            <div
              className="mx-auto mb-[50px]"
              style={{
                width: '50px',
                height: '5px',
                background: '#102254',
              }}
            ></div>

            {/* 부제목 */}
            <div className="text-center mx-auto text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-light leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]">
              <div className="block sm:hidden">
                <p className="mb-8">
                  실사용 환경에서 검증된 기술을 기반으로 누구나 쉽게 믿고 사용할 수 있는 세탁
                  서비스를 제공합니다.
                </p>
                <p>다양한 특허와 인증을 통해 고객에게 안정성과 효율성을 동시에 전달합니다.</p>
              </div>
              <div className="hidden sm:block lg:hidden">
                <p>
                  실사용 환경에서 검증된 기술을 기반으로 누구나 쉽게 믿고 사용할 수 있는 세탁
                  서비스를 제공합니다.
                </p>
                <p>
                  다양한 특허와 인증을 통해 <br />
                  고객에게 안정성과 효율성을 동시에 전달합니다.
                </p>
              </div>
              <div className="hidden lg:block xl:hidden">
                <p>
                  실사용 환경에서 검증된 기술을 기반으로 누구나 쉽게 믿고 사용할 수 있는 세탁
                  서비스를 제공합니다.
                </p>
                <p>다양한 특허와 인증을 통해 고객에게 안정성과 효율성을 동시에 전달합니다.</p>
              </div>
              <div className="hidden xl:block">
                <p>
                  실사용 환경에서 검증된 기술을 기반으로 누구나 쉽게 믿고 사용할 수 있는 세탁
                  서비스를 제공합니다.
                </p>
                <p>다양한 특허와 인증을 통해 고객에게 안정성과 효율성을 동시에 전달합니다.</p>
              </div>
            </div>
          </div>

          {/* 특허 영역 */}
          <div className="mb-16">
            <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] text-center">
              특허 내역
            </h2>
            <p className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-light leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px] text-center mb-12">
              호텔런드리의 핵심 기술은 공식 등록된 특허로 보호받고 있습니다.
            </p>

            {/* 특허 그리드 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
              {patents.map((patent, index) => (
                <div
                  key={index}
                  className="cursor-pointer rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  onClick={() => setSelectedImage(patent.image)}
                >
                  <img
                    src={patent.image}
                    alt={`특허 ${index + 1}`}
                    className="w-full h-[200px] md:h-[220px] lg:h-[250px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 인증 및 등록 현황 영역 */}
          <div className="mb-16">
            <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] text-center">
              인증 및 등록 현황
            </h2>
            <p className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-light leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px] text-center mb-12">
              가맹 및 제휴를 위한 기술력과 사업 안정성을 갖춘 기업입니다.
            </p>

            {/* 인증서 그리드 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="cursor-pointer rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <img
                    src={cert.image}
                    alt={`인증서 ${index + 1}`}
                    className="w-full h-[200px] md:h-[220px] lg:h-[250px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 이미지 모달 */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-bold text-[#102254]">문서 상세보기</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <img
                src={selectedImage}
                alt="문서 상세보기"
                className="max-w-full max-h-[70vh] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
