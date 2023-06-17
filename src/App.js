import React, { useEffect, useState } from 'react'



import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
import './style.css'




function App() {
  const [arrayTasks, setArrayTasks] = useState([]);
  const [task, setTask] = useState('');
  const [filtered, setFiltered] = useState([...arrayTasks]);
  const [status, setStatus] = useState(true);

  
  useEffect(()=>{setFiltered([...arrayTasks])}, [arrayTasks])

    /*              фильтр таски             */

    
  const todoFilter = (value) => {
    console.log(value);
    if (value === 'all') {setFiltered(arrayTasks)}
    else if (value === 'active') {
      let activeArray = [...arrayTasks].filter((item) => item.status);
      setFiltered(activeArray);
      
    } else if (value === 'completed') {
      let completeArray = [...arrayTasks].filter((item) => !item.status);
      setFiltered(completeArray);
    }

  }

  /*           изменение класса таски               */

  const changeComplete = (id) => {
    let newArr = [...arrayTasks].filter(item => {
      if (item.id === id) {item.status = !item.status}
      return item;
    })
    setArrayTasks(newArr)
  }

              /* удаление/добавление таски */

    const addNewTask = () => {
      if (!task) {return}
        const newTask = {
          id: Date.now(),
          task,
          status: true
        }
        setArrayTasks([...arrayTasks, newTask])
        setTask('')
    }
    const deleteTask = (task) => {
      setArrayTasks(arrayTasks.filter(itemTask => itemTask.id !== task.id))
    }

              /* изменение таски */
    const editTask = (task, newValue) => {

      arrayTasks.map(currentItem => {
        if (currentItem.id=== task.id)
         {currentItem.task = newValue}
      })
    }



    


    const clearCompleted = () => {
      let clearTasks = [...arrayTasks].filter(item => item.status);
      setArrayTasks(clearTasks);
    }




  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm
         onChange={e => setTask(e.target.value)}
         onKeyUp={
          (e) => {if (e.keyCode === 13) {addNewTask()}}
          }
         value={task}
        />
      </header>
      <section className="main">
        {/* {console.log(arrayTasks)} */}
          <TaskList
            arrayTasks = {arrayTasks}
            setArrayTasks = {setArrayTasks}
            remove = {deleteTask}
            edit = {editTask}
            filtered = {filtered}
            changeComplete = {changeComplete}
            /* setStatus = {setStatus}
            status = {status} */
            /* handleClick = {handleClick} */
            /* setCondition = {setCondition}
            condition = {condition} */
          />
          
        

        <Footer
        arrayTasks = {arrayTasks}
        todoFilter = {todoFilter}
        clearCompleted = {clearCompleted}

        />
        
      </section>
    </section>

  );
}

export default App;
