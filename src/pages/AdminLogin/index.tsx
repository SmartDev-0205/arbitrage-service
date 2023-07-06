import React, { useState } from 'react';
// @ts-ignore
import Flip from 'react-reveal/Flip';
import IconMenu from '../../components/Icons';
import Validator from '../../components/Validator';
import Logo from '../../assets/images/mark.svg';
import { emailValidator } from '../../utils';

const AdminLogin = () => {
  const [userData, setUserData] = useState<{ [key: string]: any }>({
    email: {
      label: 'Email',
      type: 'email',
      value: '',
      placeholder: 'Type Here',
      message: ''
    },
    password: {
      label: 'Password',
      type: 'password',
      value: '',
      placeholder: '**********',
      message: ''
    }
  });

  const checkValidator = (ele: string, value: string, label: string) => {
    setUserData({
      ...userData,
      [ele]: {
        ...userData[ele],
        message: !value
          ? `${label} is required!`
          : ele === 'email' && !emailValidator(value)
          ? 'Invalid email type!'
          : ''
      }
    });
  };
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
  const passwordView = (ele: string, type: string) => {
    setUserData({
      ...userData,
      [ele]: {
        ...userData[ele],
        type: type === 'password' ? 'text' : 'password',
        placeholder: type === 'password' ? 'Type Here' : '**********'
      }
    });
  };

  const login = () => {};

  return (
    <div className="admin_login">
      <Flip left>
        <div>
          <img src={Logo} alt="logo" />
          <div className="login_header">
            <h2>Admin</h2>
          </div>
          <div className="form-group !gap-y-[50px]">
            {Object.keys(userData).map((key: string, ind: number) => {
              return (
                <div key={ind}>
                  <label htmlFor={key}>{userData[key].label}</label>
                  <div className="w-[280px] xs:w-[400px] relative">
                    <input
                      type={userData[key].type}
                      name={key}
                      placeholder={userData[key].placeholder}
                      value={userData[key].value}
                      onBlur={() => checkValidator(key, userData[key].value, userData[key].label)}
                      onChange={(e: any) => setData(key, e.target.value, userData[key].label)}
                    />

                    {key === 'password' && (
                      <div onClick={() => passwordView(key, userData[key].type)}>
                        <IconMenu
                          icon={userData[key].type === 'password' ? 'Eye' : 'NoEye'}
                          fill="#54586F"
                          className="absolute top-[35%] right-[30px] cursor-pointer"
                        />
                      </div>
                    )}
                  </div>
                  <Validator message={userData[key].message} />
                </div>
              );
            })}
          </div>
          <div className="w-full pt-[50px]">
            <button className="btn-primary" onClick={login}>
              Login
            </button>
          </div>
        </div>
      </Flip>
    </div>
  );
};

export default AdminLogin;
