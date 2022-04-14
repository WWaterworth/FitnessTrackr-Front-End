import React, { useState, useEffect } from "react";
import { callApi } from "../api";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getActivities = async () => {
      const data = await callApi({
        url: `/activities`,
        method: "GET",
      });
      setActivities(data);
    };
    getActivities();
  }, []);
  return (
    <>
      <h1>This is the activities page</h1>
      {activities.map((activity) => {
        return (
          <div key={activity.id}>
            <h2>Activity: {activity.name}</h2>
            <p>Description: {activity.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Activities;