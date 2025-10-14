import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactForm from '../components/Contact/ContactForm';
import emailjs from '@emailjs/browser';
import { useMetaTags } from '../hooks/useMetaTags';

const Contact = () => {
  // 문의 페이지 전용 메타태그 설정 (기본값 사용)
  useMetaTags();

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
    region: '',
    detailRegion: '',
    openingTime: '',
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

    // 필수 필드 검증
    const requiredFields = [
      'name',
      'age',
      'gender',
      'phone2',
      'phone3',
      'emailId',
      'emailDomain',
      'region',
      'detailRegion',
      'openingTime',
      'investment',
      'hasExperience',
      'buildingType',
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS를 사용하여 이메일 전송
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          to_name: '담당자',
          from_name: formData.name,
          from_age: formData.age,
          from_gender: formData.gender === 'male' ? '남' : '여',
          from_phone: `010-${formData.phone2}-${formData.phone3}`,
          from_email: `${formData.emailId}@${formData.emailDomain}`,
          from_region: formData.region,
          from_detail_region: formData.detailRegion,
          from_opening_time: formData.openingTime,
          from_investment: formData.investment,
          from_experience: formData.hasExperience === 'yes' ? '예' : '아니오',
          from_building_type: formData.buildingType === 'own' ? '건물소유' : '건물임대',
          from_know_path: formData.knowPath,
          from_etc: formData.etc,
          message: `
            창업 문의가 접수되었습니다.
            
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
            알게된 경로: ${formData.knowPath}
            기타 문의사항: ${formData.etc}
          `,
        },
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
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Contact;
