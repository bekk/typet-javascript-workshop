import React, { createContext, useEffect, useState } from "react";
import moment from "moment";

export const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState(
    () => JSON.parse(localStorage.getItem("activities")) || []
  );

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const addActivity = activity => {
    const newActivity = {
      id: activities.length + 1,
      date: moment().format("DD.MM.YY"),
      type: activity.type,
      description: activity.description,
      duration: Number(activity.duration),
      location: activity.location,
      satisfied: activity.satisfied === "true",
      suitableActivities: activity.suitableActivities
    };
    setActivities([...activities, newActivity]);
  };

  return (
    <ActivityContext.Provider value={{ activities, addActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityProvider;
