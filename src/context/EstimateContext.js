import React, { createContext, useState, useRef, useEffect } from "react";

export const EstimateContext = createContext();

const EstimateProvider = (props) => {
  const adminTimeRef = useRef();
  const hourlyValueRef = useRef();
  const totalTimeRef = useRef();
  const [estimate, setEstimate] = useState({});

  const calculateTotalHours = () => {
    const adminTime = adminTimeRef.current.value;
    const thirdsRule = (totalTimeRef.current.value / 100) * adminTime;
    const totalTime = (+totalTimeRef.current.value + thirdsRule).toFixed(
      2
    );

    setEstimate({
      time: {
        subTotal: totalTimeRef.current.value,
        adminTime,
        totalTime
      }
    });

    console.log('running');

    // if (isNaN(totalPrice) || totalPrice === 0) {
    // } else {
    //   this.calculateTotalPrice();
    // }
  };

  const calculateTotalPrice = () => {
    const hourlyValue = parseFloat(hourlyValueRef.current.value);
    const totalPrice = totalTimeRef.current.value * hourlyValue;

    setEstimate({
      cost: {
        hourlyValue,
        totalPrice
      }
    })

    // this.calculateDeadlines();
  };

  return(
    <EstimateContext.Provider
      value={{
        estimate: estimate,
        adminTimeRef: adminTimeRef,
        hourlyValueRef: hourlyValueRef,
        totalTimeRef: totalTimeRef,
        calculateTotalHours: calculateTotalHours,
        calculateTotalPrice: calculateTotalPrice
      }}
    >
      {props.children}
    </EstimateContext.Provider>
  )
}

export default EstimateProvider;