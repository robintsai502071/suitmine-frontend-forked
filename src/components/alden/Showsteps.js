import { Steps } from 'antd';
import { useState } from 'react';
const { Step } = Steps;

const Showsteps = (props) => {
  const [current, setCurrent] = useState(0);
  const { steps } = props;

  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
  };

  return (
    <>
      <Steps current={steps} onChange={onChange}>
        <Step title="First" description="確認購物車" />
        <Step title="Second" description="付款與運送方式" />
        <Step title="Third" description="填寫資料" />
        <Step title="Final" description="完成訂購" />
      </Steps>
    </>
  );
};

export default Showsteps;
