import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const theDate = new Date(taskObj.deadline);
  const gunFarki = differenceInDays(theDate, new Date());

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span
         className={`${
          gunFarki > 0 && gunFarki < 3*24 ? "deadline-alert" :"deadline-info"
          }`}
          > 
        {formatDistanceToNow(theDate, {
          locale: tr,
          addSuffix: true,
          })}
        </span>
      </div>  
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
            </span>
        ))} 
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
