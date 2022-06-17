import { Input } from 'antd';
const { TextArea } = Input;

const TextAreaAntd = (props) => (
  <>
    <TextArea rows={10} placeholder={props.TextAreaText} maxLength={12} />
  </>
);

export default TextAreaAntd;

//請先const TextAreaText
//TextAreaText: 預先顯示的文字
