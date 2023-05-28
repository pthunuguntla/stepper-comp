import React, { useState } from 'react';
import Button from '../../common/button';
import Date from '../../common/date';
import styles from './Appointment.module.css';

export default function SecondStep({onSubmit}) {
  
  const [ date, setDate ] = useState('');

  const onDateChange = (value) => {
    setDate(value)
  }

  const onButtonClick = () => {
    onSubmit(date);
  }

  return(
    <div className={styles.StepContainer}>
      <Date onDateChange={onDateChange}/>
      <Button name="Submit" type= "primary" onButtonClick={onButtonClick}/>
    </div>
  )
};
