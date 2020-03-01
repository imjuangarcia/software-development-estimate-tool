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
  const ref = firebaseApp.database().ref(`${props.estimateId}/`);

  // State
  const [estimate, setEstimate] = useState({});

  // Sync with firebase on component mount
  useEffect(() => {

    // Get the data on mount
    ref.once('value', snapshot => {
      setEstimate(snapshot.val());
    });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to update the database
  const updateDB = (params) => {
    ref.update({
      ...params
    })
  }

  const calculateTotalHours = () => {
    const adminTime = adminTimeRef.current.value;
    const thirdsRule = (totalTimeRef.current.value / 100) * adminTime;
    const totalTime = Math.round((+totalTimeRef.current.value + thirdsRule));

    // Update state
    setEstimate(prevState => {
      return {
        ...prevState,
        time: {
          subTotal: totalTimeRef.current.value,
          adminTime,
          totalTime
        }
      }
    });

    // Update DB
    updateDB({
      time: {
        subTotal: totalTimeRef.current.value,
        adminTime,
        totalTime
      }
    });

    // After that, run the total price function
    if (isNaN(totalTimeRef.current.value) || totalTimeRef.current.value === 0) {
      return;
    } else {
      calculateTotalPrice();
    }
  };

  const calculateTotalPrice = async () => {
    const hourlyValue = !isNaN(hourlyValueRef.current.value) ? parseFloat(hourlyValueRef.current.value) : 0;
    let totalTime;
    
    // Get the total time from the database
    await ref.once('value', snapshot => {
      totalTime = snapshot.val().time.totalTime;
    });

    // Do the math to figure out the total price
    const totalPrice = totalTime * hourlyValue;

    // Update state
    setEstimate(prevState => {
      return {
        ...prevState,
        cost: {
          hourlyValue,
          totalPrice
        }
      }
    });

    // Update DB
    updateDB({
      cost: {
        hourlyValue,
        totalPrice
      }
    })
  };

  const addResource = resource => {
    const resources = {
      ...estimate.resources
    };

    resources[`resource${Date.now()}`] = resource;

    setEstimate(prevState => {
      return {
        ...prevState,
        resources
      }
    });
    
    updateDB({
      resources
    });
  };

  return(
    <EstimateContext.Provider
      value={{
        estimate: estimate,
        adminTimeRef: adminTimeRef,
        hourlyValueRef: hourlyValueRef,
        totalTimeRef: totalTimeRef,
        minTimeRef: minTimeRef,
        avgTimeRef: avgTimeRef,
        maxTimeRef: maxTimeRef,
        expectedTimeRef: expectedTimeRef,
        calculateTotalHours: calculateTotalHours,
        calculateTotalPrice: calculateTotalPrice,
        addResource: addResource,
      }}
    >
      {props.children}
    </EstimateContext.Provider>
  )
}

export default EstimateProvider;