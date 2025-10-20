import React, { useState, useEffect } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import ContactForm from '../components/Contact/ContactForm';
import emailjs from '@emailjs/browser';
import { useMetaTags } from '../hooks/useMetaTags';

const Contact = () => {
  // 문의 페이지 전용 메타태그 설정 (기본값 사용)
  useMetaTags();

  // URL 쿼리 파라미터에서 type 읽기
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');

  // 문의 유형 상태 ('general': 일반 창업 문의, 'lowCapital': 소자본 창업 문의)
  const [inquiryType, setInquiryType] = useState(
    typeParam === 'lowCapital' ? 'lowCapital' : 'general'
  );

  // URL 파라미터가 변경되면 inquiryType 업데이트
  useEffect(() => {
    if (typeParam === 'lowCapital') {
      setInquiryType('lowCapital');
    } else if (typeParam === 'general') {
      setInquiryType('general');
    }
  }, [typeParam]);

  // 폼 데이터 상태
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone1: '',
    phone2: '',
    phone3: '',
    emailId: '',
    emailDomain: '',
    // 일반 창업 문의용 필드
    region: '',
    detailRegion: '',
    openingTime: '',
    // 소자본 창업 문의용 필드
    firstChoice: '',
    secondChoice: '',
    thirdChoice: '',
    // 공통 필드
    investment: '',
    hasExperience: '',
    buildingType: '',
    knowPath: '',
    etc: '',
  });

  const [agree, setAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    // 필수 필드 검증 - 문의 유형에 따라 다름
    // 공통 필수 항목: 이름, 연락처
    let requiredFields = [
      'name',
      'phone2',
      'phone3',
    ];

    // 일반 창업 문의인 경우: 개설희망지역, 상세지역 필수
    if (inquiryType === 'general') {
      requiredFields = [...requiredFields, 'region', 'detailRegion'];
    } 
    // 소자본 창업 문의인 경우: 추가 필수 항목 없음 (1지망, 2지망, 3지망 모두 선택사항)
    // else if (inquiryType === 'lowCapital') {
    //   // 지역 선택 모두 선택사항
    // }

    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // 이메일 템플릿 데이터 준비
      const emailTemplateParams = {
        to_name: '담당자',
        from_name: formData.name,
        from_age: formData.age,
        from_gender: formData.gender === 'male' ? '남' : '여',
        from_phone: `010-${formData.phone2}-${formData.phone3}`,
        from_email: `${formData.emailId}@${formData.emailDomain}`,
        from_investment: formData.investment,
        from_experience: formData.hasExperience === 'yes' ? '예' : '아니오',
        from_building_type: formData.buildingType === 'own' ? '건물소유' : '건물임대',
        from_know_path: formData.knowPath,
        from_etc: formData.etc,
      };

      // 문의 유형에 따라 다른 메시지 생성
      let message = '';
      if (inquiryType === 'general') {
        emailTemplateParams.inquiry_type = '일반 창업 문의';
        emailTemplateParams.from_region = formData.region;
        emailTemplateParams.from_detail_region = formData.detailRegion;
        emailTemplateParams.from_opening_time = formData.openingTime;
        
        message = `
일반 창업 문의가 접수되었습니다.

이름: ${formData.name}
연령: ${formData.age}
성별: ${formData.gender === 'male' ? '남' : '여'}
연락처: 010-${formData.phone2}-${formData.phone3}
이메일: ${formData.emailId}@${formData.emailDomain}
개설희망지역: ${formData.region} ${formData.detailRegion}
개설희망시기: ${formData.openingTime}
투자가능비용: ${formData.investment}
빨래방 이용경험: ${formData.hasExperience === 'yes' ? '예' : '아니오'}
건물소유/임대: ${formData.buildingType === 'own' ? '건물소유' : '건물임대'}
알게된 경로: ${formData.knowPath || '미입력'}
기타 문의사항: ${formData.etc || '없음'}
        `;
      } else {
        emailTemplateParams.inquiry_type = '소자본 창업 문의';
        emailTemplateParams.from_first_choice = formData.firstChoice;
        emailTemplateParams.from_second_choice = formData.secondChoice || '미선택';
        emailTemplateParams.from_third_choice = formData.thirdChoice || '미선택';
        
        message = `
소자본 창업 문의가 접수되었습니다.

이름: ${formData.name}
연령: ${formData.age}
성별: ${formData.gender === 'male' ? '남' : '여'}
연락처: 010-${formData.phone2}-${formData.phone3}
이메일: ${formData.emailId}@${formData.emailDomain}
지역 선호도:
  - 1지망: ${formData.firstChoice}
  - 2지망: ${formData.secondChoice || '미선택'}
  - 3지망: ${formData.thirdChoice || '미선택'}
투자가능비용: ${formData.investment}
빨래방 이용경험: ${formData.hasExperience === 'yes' ? '예' : '아니오'}
건물소유/임대: ${formData.buildingType === 'own' ? '건물소유' : '건물임대'}
알게된 경로: ${formData.knowPath || '미입력'}
기타 문의사항: ${formData.etc || '없음'}
        `;
      }

      emailTemplateParams.message = message;

      // EmailJS를 사용하여 이메일 전송
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        emailTemplateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      alert('문의가 성공적으로 접수되었습니다.');

      // 폼 초기화
      setFormData({
        name: '',
        age: '',
        gender: '',
        phone1: '',
        phone2: '',
        phone3: '',
        emailId: '',
        emailDomain: '',
        region: '',
        detailRegion: '',
        openingTime: '',
        firstChoice: '',
        secondChoice: '',
        thirdChoice: '',
        investment: '',
        hasExperience: '',
        buildingType: '',
        knowPath: '',
        etc: '',
      });
      setAgree(false);
    } catch (error) {
      console.error('이메일 전송 실패:', error);
      setSubmitStatus('error');
      alert('문의 접수에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      {/* 문의 폼 */}
      <Routes>
        <Route
          path="/"
          element={
            <ContactForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              agree={agree}
              setAgree={setAgree}
              submitStatus={submitStatus}
              inquiryType={inquiryType}
              setInquiryType={setInquiryType}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Contact;
