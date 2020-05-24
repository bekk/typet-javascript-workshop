import React, { useContext } from "react";
import Intro from "../components/Intro";
import Table from "../components/Table";
import { ActivityContext } from "../data/ActivityProvider";

const Overview = () => {
  const { activities } = useContext(ActivityContext);

  return (
    <>
      <Intro title="Din treningsoversikt">
        <p>Her kan du se alle dine registrerte treningsøkter.</p>
      </Intro>
      <Table activities={activities} />
    </>
  );
};

export default Overview;
