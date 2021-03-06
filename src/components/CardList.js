import React from "react";
import Card from "./Card";

const CardList = props => {
  return (
    <div>
      {props.robots.map(robot => (
        <Card
          id={robot.id}
          name={robot.name}
          email={robot.email}
          key={robot.id}
        />
      ))}
    </div>
  );
};

export default CardList;
