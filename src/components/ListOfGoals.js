import React from "react";

const ListOfGoals = (props) => {
  const {allGoals} = props;
    return (
      <ul>
        {/* <li>
            <p>My goal is to goalName, by goalDeadline.</p>
          </li> */}
          {allGoals.map((obj) => {
            return <li key={obj.goal}><p>{`My goal is to ${obj.goal}, by ${obj.by}.`}</p></li>
          })}
      </ul>
    );
}

export default ListOfGoals;