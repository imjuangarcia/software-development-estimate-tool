import React, { createContext, useState, useRef, useEffect } from "react";

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
  
  // State
  const [time, setTime] = useState({});
  const [cost, setCost] = useState({});

  const calculateTotalHours = () => {
    const adminTime = adminTimeRef.current.value;
    const thirdsRule = (totalTimeRef.current.value / 100) * adminTime;
    const totalTime = (+totalTimeRef.current.value + thirdsRule).toFixed(
      2
    );

    setTime({
      subTotal: totalTimeRef.current.value,
      adminTime,
      totalTime
    });

    if (isNaN(totalTimeRef.current.value) || totalTimeRef.current.value === 0) {
      return;
    } else {
      calculateTotalPrice();
    }
  };

  const calculateTotalPrice = () => {
    const hourlyValue = hourlyValueRef ? parseFloat(hourlyValueRef.current.value) : 0;
    const totalPrice = time.totalTime * hourlyValue;

    setCost({
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