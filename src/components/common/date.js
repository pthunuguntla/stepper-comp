import React, { useState } from 'react';
import { DatePicker } from 'antd';


const DateComp = ({ onDateChange }) => {

  const [date, setDate] = useState('');

  const onChange = (value, dateString) => {
    onDateChange ? onDateChange(dateString): setDate(dateString);
  };
  const onOk = (value) => {
    console.log('onOk: ', value);
    console.log('Date::', date);
  };
  return(
    <DatePicker showTime onChange={onChange} onOk={onOk} />
  )
}

export default DateComp;