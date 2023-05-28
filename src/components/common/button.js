import { Button } from 'antd';
const ButtonComp = ({ type = 'primary', name= 'submit', onButtonClick }) => (
  <Button type={type} onClick={onButtonClick}>
    {name}
  </Button>
);
export default ButtonComp;