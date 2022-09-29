import React from 'react'
import { ITask } from '../App'

type Props = {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}
const TaskList = ({task, completeTask}: Props) => {
  return (
    <div className="main-content">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadlineName}</span>
      </div>
      <button onClick={() => completeTask(task.taskName)}> X</button>
    </div>
  );
}

export default TaskList