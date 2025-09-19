import React from 'react';

const HygieneOptimization = () => {
  return (
    <div className="mb-20">
      {/* 섹션 타이틀 */}
      <div className="text-center mb-16">
        <h2 className="section-title md:text-3xl lg:text-4xl font-bold text-brand-blue font-KoPubWorldBatang mb-6">
          친환경 살균수로 빨래
        </h2>
        <p className="section-subtitle md:text-24 text-brand-dark leading-relaxed max-w-4xl mx-auto mb-4">
          친환경 살균수로 빨래하는 빨래방
        </p>
        <p className="section-subtitle md:text-20 text-brand-dark leading-relaxed max-w-4xl mx-auto">
          세탁은 물론 세탁조까지 살균되어 언제나 깨끗한 빨래를 할 수 있습니다!
        </p>
      </div>

      {/* HOCl 살균수 시스템 그리드 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 강력한 살균력 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🦠</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              강력한 살균력
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-light-blue mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              HOCl 살균수는 일반 소독제 대비
              <br />
              100배 강력한 살균력을 자랑하며
              <br />
              바이러스와 세균을 99.999% 제거합니다.
            </p>
          </div>
        </div>

        {/* 인체 친화적 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-light-blue to-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🌿</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              인체 친화적
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-light-blue to-brand-blue mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              99.9% 천연성분으로 제조되어
              <br />
              피부 자극이나 알레르기 반응 없이
              <br />
              안전하게 사용할 수 있습니다.
            </p>
          </div>
        </div>

        {/* 자동 살균 시스템 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🤖</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              자동 살균 시스템
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-dark mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              세탁 완료 후 자동으로
              <br />
              HOCl 살균수가 분사되어
              <br />
              세탁기 내부를 완벽하게 살균합니다.
            </p>
          </div>
        </div>

        {/* 냄새 제거 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-dark to-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🌸</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              냄새 제거
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-dark to-brand-blue mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              세탁물의 불쾌한 냄새를
              <br />
              근본적으로 제거하여
              <br />
              깨끗하고 상쾌한 향을 유지합니다.
            </p>
          </div>
        </div>

        {/* 환경 친화적 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🌍</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              환경 친화적
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-light-blue mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              자연 분해되는 친환경 성분으로
              <br />
              환경에 부담을 주지 않으며
              <br />
              지속 가능한 위생관리를 실현합니다.
            </p>
          </div>
        </div>

        {/* 24시간 지속 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-light-blue to-brand-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">⏰</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              24시간 지속
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-light-blue to-brand-dark mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              살균 효과가 24시간 지속되어
              <br />
              지속적인 위생 환경을
              <br />
              자동으로 유지합니다.
            </p>
          </div>
        </div>
      </div>

      {/* HOCl 살균수 시스템 강조 섹션 */}
      <div className="mt-16">
        <div className="bg-gradient-to-br from-brand-light-blue to-white rounded-2xl p-8 md:p-12 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-brand-blue to-brand-dark rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">💧</span>
          </div>
          <h3 className="text-28 md:text-32 font-bold text-brand-blue font-KoPubWorldBatang mb-6">
            IoT ON HOTEL.LAUNDRY
          </h3>
          <p className="text-24 text-brand-dark leading-relaxed max-w-3xl mx-auto mb-8">
            스마트한 IoT 기술 시스템과 프리미엄 서비스의 만남
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-20 font-bold text-brand-blue mb-4">빠르고 강력한 살균/탈취</h4>
              <div className="text-48 font-bold text-brand-blue">99.999%</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-20 font-bold text-brand-blue mb-4">천연성분 제조</h4>
              <div className="text-48 font-bold text-brand-blue">99.9%</div>
            </div>
          </div>
        </div>
      </div>

      {/* 병원균 제거 정보 섹션 */}
      <div className="mt-16">
        <div className="bg-gradient-to-br from-brand-blue to-brand-dark rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-24 md:text-28 font-bold text-white font-KoPubWorldBatang mb-8">
            제거 가능한 병원균
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-16 font-bold text-brand-blue">코로나바이러스</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-16 font-bold text-brand-blue">인플루엔자</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-16 font-bold text-brand-blue">구제역</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-16 font-bold text-brand-blue">대장균</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-16 font-bold text-brand-blue">황색포도상구균</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-16 font-bold text-brand-blue">살모넬라균</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-16 font-bold text-brand-blue">비브리오균</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-16 font-bold text-brand-blue">칸디다균</div>
            </div>
          </div>
        </div>
      </div>

      {/* 호텔런드리 소개 섹션 */}
      <div className="mt-16">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <p className="text-20 text-brand-dark leading-relaxed text-center">
            국내 최초로 HOCl 살균수로 세탁하는 프리미엄 빨래방 '호텔런드리'는
            <br />
            세균, 바이러스, 곰팡이, 탈취까지 한번에 세탁 처리하고
            <br />
            집보다 더 위생적인 빨래방 이미지를 만들어가고 있는 프리미엄 빨래방입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HygieneOptimization;
