import React, { useEffect, useState } from 'react'



import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
import './style.css'




function App() {
  const [arrayTasks, setArrayTasks] = useState([]);
  const [task, setTask] = useState('');
  const [filtered, setFiltered] = useState([...arrayTasks]);
  const [showEdit, setShowEdit] = useState('');
  const [value, setValue] = useState('');
  

  
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

  const changeComplete = (event, id, itemtask) => {
    if (event.target.tagName === 'SPAN' || event.target.classList.contains('toggle'))
    {let newArr = arrayTasks.map(item => {
      if (item.id === id) {return {...item, status: !item.status}}
      else {return item}
    }) 
    setArrayTasks(newArr)}

    if (event.target.classList.contains('icon-destroy')) {
      deleteTask(itemtask);
    }

    if (event.target.classList.contains('icon-edit') && event.target.closest('li').classList.contains('active')) {
      setShowEdit(id);
      event.target.closest('li').classList.remove('active')
      event.target.closest('li').classList.add('editing')
      setValue(itemtask.task)

    }

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
    const editTask = (id) => {

     let newArr = arrayTasks.map(currentItem => {
        if (currentItem.id=== id)
         {currentItem.task = value}
         return currentItem;
      })
      setArrayTasks(newArr)
      setShowEdit('')
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
          <TaskList
            remove = {deleteTask}
            editTask = {editTask}
            filtered = {filtered}
            changeComplete = {changeComplete}
            showEdit={showEdit}
            value={value}
            setValue={setValue}
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
