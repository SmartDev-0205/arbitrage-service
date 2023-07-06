import React, { useEffect, useState } from 'react';
import './verifyinput.scss';

interface IProps {
  value?: string;
  setValue: Function;
}

const VerifyInput = (props: IProps) => {
  const [verifyCode, setVerifyCode] = useState<any>({
    0: '',
    1: '',
    2: '',
    3: ''
  });
  const [pasted, setPasted] = useState(false);

  const handlePaste = (value: string, order: number) => {
    if (order === 0 && value) {
      const ele = value.split('');
      setVerifyCode({
        0: ele[0],
        1: ele[1],
        2: ele[2],
        3: ele[3]
      });
      setPasted(false);
    }
  };
  const handleRemove = (keyCode: number, value: string, order: any) => {
    keyCode === 8 && document.getElementById(String(Number(order) - 1))?.focus();
  };
  const handleChange = (value: string, order: any) => {
    setVerifyCode({ ...verifyCode, [order]: value });
    value && document.getElementById(pasted ? String(3) : String(Number(order) + 1))?.focus();
  };

  useEffect(() => {
    props.setValue(
      Object.keys(verifyCode)
        .map((key: string) => verifyCode[key])
        .join('')
    );
    // eslint-disable-next-line
  }, [verifyCode]);

  return (
    <div className="verify-code-group">
      {Object.keys(verifyCode).map((key: any, ind: number) => {
        return (
          <input
            id={key}
            key={ind}
            type="text"
            value={verifyCode[key]}
            onKeyDown={(e: any) =>
              setTimeout(() => {
                handleRemove(e.keyCode, verifyCode[key], key);
              }, 4)
            }
            onFocus={(e: any) => e.target.select()}
            onPaste={(e: any) => {
              e.persist();
              setPasted(true);
              setTimeout(() => {
                handlePaste(e.target.value, ind);
              }, 4);
            }}
            onChange={(e: any) => handleChange(e.target.value, key)}
            maxLength={ind === 0 && pasted ? 4 : 1}
          />
        );
      })}
    </div>
  );
};

export default VerifyInput;
