import React, { useState } from 'react';
import './App.css';
import TaskList from './componets/TaskList';

export  type ITask = {
    taskName: string;
    deadlineName: number;
  };

function App() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);


  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) : void=>{
    setTask(e.target.value)
  
  }
  const handleDeadlineChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDeadline(Number(e.target.value))
  };

  const AddTask = (): void => {
    const newTask ={ taskName: task, deadlineName: deadline}
    setTodoList([...todoList, newTask])
    setTask('')
    setDeadline(0)
  }
 
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
      })
    );   
       console.log(taskNameToDelete);
  };
  

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className="todo">
        <div className="input-todo">
          <input
            type="text"
            value={task}
            onChange={handleTaskChange}
            placeholder="add your todo"
          />
          <input
            type="number"
            onChange={handleDeadlineChange}
            value={deadline}
            placeholder="set your deadline ..."
          />
        </div>
        <button onClick={AddTask}> Add todo</button>
      </div>

      <div className='todoList'>
        <div className="todos">
          {todoList.map((task: ITask, key: number) =>{
            return <TaskList key={key} task={task} completeTask={completeTask} />}
         )}
         </div>
      </div>
    </div>
  );
}

export default App;
