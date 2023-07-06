import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';
import LoginImg from '../../assets/images/signin.svg';
import Input from '../../components/Input';
import { checkValidator, emailValidator, passwordView } from '../../utils';
import IconMenu from '../../components/Icons';
import Validator from '../../components/Validator';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';

const Login = () => {
  const signInInitialize = {
    email: {
      type: 'email',
      label: 'Email',
      icon: 'Email',
      value: '',
      message: ''
    },
    password: {
      type: 'password',
      label: 'Password',
      icon: 'Password',
      value: '',
      message: ''
    }
  };
  const [userData, setUserData] = useState<{ [key: string]: any }>(signInInitialize);

  const setData = (ele: string, value: string, label: string) => {
    setUserData({
      ...userData,
      [ele]: {
        ...userData[ele],
        value: value,
        message: !value
          ? `${label} is required!`
          : ele === 'email' && !emailValidator(value)
          ? 'Invalid email type!'
          : ''
      }
    });
  };

  return (
    <Zoom top>
      <div className="login-container">
        <div className="hidden xl:flex justify-center items-center">
          <img src={LoginImg} alt="register" className="xl:min-w-[640px] pt-[8vh]" />
        </div>
        <div className="login-form">
          <div className="flex flex-col gap-[20px]">
            <h2 className="font-BalsamiqSans">Sign In</h2>
            <div className="form-control">
              {Object.keys(userData).map((key: string, ind: number) => {
                return (
                  <div key={ind}>
                    <div className="relative w-[280px] 3xs:w-[320px] 2xs:w-[340px] xs:w-[400px] sm:w-[500px] h-[50px] xs:h-[60px]">
                      <Input
                        type={userData[key].type}
                        label={userData[key].label}
                        icon={userData[key].icon}
                        value={userData[key].value}
                        onBlur={() =>
                          setUserData(checkValidator(userData, key, userData[key].value, userData[key].label))
                        }
                        onChange={(e: any) => setData(key, e.target.value, userData[key].label)}
                      />
                      {key === 'password' && (
                        <div
                          className="flex items-center"
                          onClick={() => setUserData(passwordView(userData, key, userData[key].type))}
                        >
                          <IconMenu
                            icon={userData[key].type === 'password' ? 'Eye' : 'NoEye'}
                            size={20}
                            className="text-blue absolute top-[35%] right-[30px] cursor-pointer"
                          />
                        </div>
                      )}
                    </div>
                    <Validator message={userData[key].message} />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-[10px]">
              <button className="btn-primary !rounded-full">SIGN IN</button>
              <Link to="/forgot" className="text-center text-white hover:text-blue hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-center text-white">OR</p>
            <button className="btn-primary !bg-xthink-blue !rounded-full">
              <IconMenu icon="Google" />
              Sign Up with Google
            </button>
            <p className="text-center text-white">
              Don’t have an account?{' '}
              <Link to="/signUp" className="cursor-pointer hover:text-blue hover:underline">
                Sign In Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Login;
