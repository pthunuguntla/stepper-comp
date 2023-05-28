import React from 'react';
import Input from '../../common/input';
import styles from './Appointment.module.css';

export default function FirstStep(props) {

  const { email, name='' } = props.userDetails;
  const [ firstName, lastName ] = name.split(" ");
 
  // const [ firstName, lastName ] = props?.userDetails?.name?.split('');
  return(
    <div className={styles.StepContainer}>
      <Input placeholder="First Name" value={firstName}/>
      <Input placeholder="Last Name" value={lastName}/>
      <Input placeholder="Email" value={email}/>
    </div>
  )
};
