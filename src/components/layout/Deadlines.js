import React, { useRef, useEffect } from 'react';

const Deadlines = (props) => {
  const minTimeRef = useRef();
  const avgTimeRef = useRef();
  const maxTimeRef = useRef();
  const expectedTimeRef = useRef();

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
  
    minTimeRef.current.innerHTML = calculation;
    avgTimeRef.current.innerHTML = calculation * 1.5;
    maxTimeRef.current.innerHTML = calculation * 2;
    expectedTimeRef.current.innerHTML =
      (+maxTimeRef.current.innerHTML +
        +minTimeRef.current.innerHTML +
        +avgTimeRef.current.innerHTML * 4) /
      6;
  }, [props.resources, props.time, props.time.totalTime]);

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
              <span ref={minTimeRef} /> weeks
            </td>
            <td>
              <span ref={avgTimeRef} /> weeks
            </td>
            <td>
              <span ref={maxTimeRef} /> weeks
            </td>
            <td>
              <strong>
                <span ref={expectedTimeRef} /> weeks
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Deadlines;