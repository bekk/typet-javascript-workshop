import React from "react";
import { arrayOf, bool, number, oneOf, shape, string } from "prop-types";

const Table = ({ activities }) => (
  <table className="u-full-width">
    <thead>
      <tr>
        <th>Dato</th>
        <th>Treningstype</th>
        <th>Beskrivelse</th>
        <th>Varighet</th>
        <th>Sted</th>
        <th>Fornøyd?</th>
        <th>Mulige treningstyper</th>
      </tr>
    </thead>
    <tbody>
      {activities.map(activity => (
        <tr key={activity.id}>
          <td>{activity.date}</td>
          <td>{activity.type}</td>
          <td>{activity.description}</td>
          <td>{activity.duration}</td>
          <td>{activity.location}</td>
          <td>{activity.satisfied ? "Ja" : "Nei"}</td>
          <td>{activity.suitableActivities.join(", ")}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  activities: arrayOf(
    shape({
      id: number,
      date: string,
      type: string,
      description: string,
      duration: number,
      location: string,
      satisfied: bool,
      suitableActivities: arrayOf(
        oneOf(["hiking", "running", "cycling", "skiing"])
      )
    })
  )
};

export default Table;
