import React, { useEffect, useState } from "react";

const GoalForm = (props) => {
    const {allGoals, setAllGoals} = props;
    const [goal, setGoal] = useState('');
    const [by, setBy] = useState('');
    const [formData, setFormData] = useState({
      goal: "",
      by: ""
    });

    const addGoals = (event) => {
      event.preventDefault();
      setAllGoals([...allGoals, {goal:goal, by:by}]);
      setGoal('');
      setBy('');
    }

    
  
    return (
      <>
        <h1>My Goals</h1>
        <form onSubmit={addGoals}>
          <input 
            type="text" 
            name='goal' 
            placeholder='Goal...'
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
          />
          <input 
            type="text"
            name="by"
            placeholder='By...'
            value={by}
            onChange={(event) => setBy(event.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </>
    )
}

export default GoalForm;