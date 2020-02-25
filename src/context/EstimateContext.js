import React, { createContext, useState, useRef, useEffect } from "react";
import {firebaseApp} from '../firebase';

export const EstimateContext = createContext();

const EstimateProvider = (props) => {
  // Refs
  const adminTimeRef = useRef();
  const hourlyValueRef = useRef();
  const totalTimeRef = useRef();
  const minTimeRef = useRef();
  const avgTimeRef = useRef();
  const maxTimeRef = useRef();
  const expectedTimeRef = useRef();
  
  // References to the dabatase
  const timeRef = firebaseApp.database().ref(`${props.estimateId}/time`);
  const costRef = firebaseApp.database().ref(`${props.estimateId}/cost`);

  // State
  const [time, setTime] = useState({});
  const [cost, setCost] = useState({});

  // Sync with firebase on component mount
  useEffect(() => {
    timeRef.once('value', snapshot => {
      if(snapshot.val()) {
        setTime(snapshot.val());
      };
    });
    
    costRef.once('value', snapshot => {
      if(snapshot.val()) {
        setCost(snapshot.val());
      };
    });

  }, [costRef, timeRef]);

  const calculateTotalHours = () => {
    const adminTime = adminTimeRef.current.value;
    const thirdsRule = (totalTimeRef.current.value / 100) * adminTime;
    const totalTime = (+totalTimeRef.current.value + thirdsRule).toFixed(
      2
    );

    // Update state
    setTime({
      subTotal: totalTimeRef.current.value,
      adminTime,
      totalTime
    });

    // And sync with firebase
    timeRef.set({
      subTotal: totalTimeRef.current.value,
      adminTime,
      totalTime
    });

    // After that, run the total price function
    if (isNaN(totalTimeRef.current.value) || totalTimeRef.current.value === 0) {
      return;
    } else {
      calculateTotalPrice();
    }
  };

  const calculateTotalPrice = () => {
    const hourlyValue = !isNaN(hourlyValueRef.current.value) ? parseFloat(hourlyValueRef.current.value) : 0;
    let totalPrice;

    // Get the updated time value from firebase
    timeRef.once('value', snapshot => {
      totalPrice = snapshot.val().totalTime * hourlyValue;
    });

    // Update state
    setCost({
      hourlyValue,
      totalPrice
    });

    // Update the db
    costRef.set({
      hourlyValue,
      totalPrice
    });
  };

  return(
    <EstimateContext.Provider
      value={{
        time: time,
        cost: cost,
        adminTimeRef: adminTimeRef,
        hourlyValueRef: hourlyValueRef,
        totalTimeRef: totalTimeRef,
        minTimeRef: minTimeRef,
        avgTimeRef: avgTimeRef,
        maxTimeRef: maxTimeRef,
        expectedTimeRef: expectedTimeRef,
        calculateTotalHours: calculateTotalHours,
        calculateTotalPrice: calculateTotalPrice
      }}
    >
      {props.children}
    </EstimateContext.Provider>
  )
}

export default EstimateProvider;