import React, { useState } from 'react';
import AuthLayout from '../../components/AuthLayout';
import LoginImg from '../../assets/images/signin.svg';
import VerifyInput from '../../components/VerifyInput';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';

const OtpVerify = () => {
  const [verifyCode, setVerifyCode] = useState<string>('');

  return (
    <AuthLayout>
      <Zoom top>
        <div className="otp-container">
          <div className="hidden xl:flex justify-center items-center">
            <img src={LoginImg} alt="register" className="xl:min-w-[640px] pt-[8vh]" />
          </div>
          <div className="otp-form">
            <div className="flex flex-col gap-[20px]">
              <div>
                <h2 className="font-BalsamiqSans whitespace-nowrap">Verify Your Email</h2>
                <p className="text-center text-[14px] sm:text-[16px] text-white">
                  We have sent 4 digit OTP on your email
                </p>
              </div>
              <div className="verify-code-group">
                <VerifyInput value={verifyCode} setValue={setVerifyCode} />
              </div>
              <div className="flex flex-col gap-[10px] pt-[60px]">
                <button className="btn-primary !rounded-full">Verify Email</button>
                <p className="text-center text-white">
                  Did’t get it? <span className="cursor-pointer hover:text-blue hover:underline">Resend Again</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </AuthLayout>
  );
};

export default OtpVerify;
