import { Switch } from 'antd';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const SwitchButton = () => <Switch defaultChecked onChange={onChange} />;

export default SwitchButton;
