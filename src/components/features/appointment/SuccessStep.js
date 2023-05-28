import { Result } from 'antd';
import Button from '../../common/button';


const SuccessStep = (props) => {
  return (
    <Result
    title="Your operation has been executed"
    extra={
      <Button type="primary" name="Submit Again" onButtonClick={props.onSuccessButtonClick}/>
    }
  />
   
  )
};
export default SuccessStep;