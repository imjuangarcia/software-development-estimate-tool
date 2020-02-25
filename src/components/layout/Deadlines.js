import React, { useEffect } from 'react';

const Deadlines = (props) => {
  useEffect(() => {
    const calculation = props.resources ? Math.round(
      props.time.totalTime /
        Object.values(props.resources).reduce(function(
          prevNumber,
          resource
        ) {
          return +prevNumber + +resource.availability;
        },
        "")
    ) : '';
  
    props.minTimeRef.current.innerHTML = calculation;
    props.avgTimeRef.current.innerHTML = calculation * 1.5;
    props.maxTimeRef.current.innerHTML = calculation * 2;
    props.expectedTimeRef.current.innerHTML =
      (+props.maxTimeRef.current.innerHTML +
        +props.minTimeRef.current.innerHTML +
        +props.avgTimeRef.current.innerHTML * 4) /
      6;
  }, [props.avgTimeRef, props.expectedTimeRef, props.maxTimeRef, props.minTimeRef, props.resources, props.time, props.time.totalTime]);

  return (
    <React.Fragment>
      <h3>
        Deadlines<sup>*</sup> (rounded)
      </h3>
      <table>
        <thead>
          <tr>
            <td>Minimum</td>
            <td>Average</td>
            <td>Maximum</td>
            <td>Expected</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span ref={props.minTimeRef} /> weeks
            </td>
            <td>
              <span ref={props.avgTimeRef} /> weeks
            </td>
            <td>
              <span ref={props.maxTimeRef} /> weeks
            </td>
            <td>
              <strong>
                <span ref={props.expectedTimeRef} /> weeks
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Deadlines;