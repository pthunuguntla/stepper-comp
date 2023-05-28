import { Button, message, Steps, theme } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Appointment.module.css';
import { submitUserDetails } from './appointmentAPI';
import {  selectUserDetails, userDetailsAsync } from './appointmentSlice';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import SuccessStep from './SuccessStep';

const steps = [
  {
    title: 'Information',
  },
  {
    title: 'Submission',
  },
  {
    title: 'End',
  },
];
export default function Appointment() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const userDetails = useSelector(selectUserDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userDetailsAsync())
  }, [dispatch])

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };


  const onSubmit = async (date) => {
    const {  name, email } = userDetails;
    const body = {
      name,
      email
    }
    const result = await submitUserDetails(body);
    if(result.status === 'success') {
      message.success('Details Submitted Successfully', 1000);
      next()
    } else {
      message.error('Error in Submitting');
    }
  }

  const onSuccessButtonClick = () => {
    setCurrent(0);
  }

  return (
    <div className={styles.AppointmentContainer}>
      <Steps current={current} items={items} />
      { userDetails.status === 'fail' && message.error('Unable to fetch user details') }
      <div style={contentStyle}>
        {current === 0 && <FirstStep userDetails={userDetails}/>}
        {current === 1 && <SecondStep onSubmit={onSubmit}/>}
        {current === 2 && <SuccessStep onSuccessButtonClick={onSuccessButtonClick} />}
      </div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};
