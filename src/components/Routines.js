import React, { useState, useEffect } from "react";
import { callApi } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const getRoutines = async () => {
      const data = await callApi({
        url: `/routines`,
        method: "GET",
      });
      setRoutines(data);
    };
    getRoutines();
  }, []);

  return (
    <>
      <h1>This is the routines page</h1>
      {routines.map((routine) => {
        console.log(routine.activities);
        return (
          <div key={routine.id}>
            <h2>Routine: {routine.name}</h2>
            <p>Creator: {routine.creatorName}</p>
            <p>Goal: {routine.goal}</p>

            {routine.activities.map((activity) => {
              return (
                <>
                  <ul>
                    <li>Activity Name: {activity.name}</li>
                    <li>Activity Description: {activity.duration}</li>
                    <li>Activity Duration: {activity.duration}</li>
                    <li>Activity Count: {activity.count}</li>
                  </ul>
                </>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Routines;
