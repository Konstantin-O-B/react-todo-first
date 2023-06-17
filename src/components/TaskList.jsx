import React, { useState } from 'react'
import Task from './Task';



function TaskList({arrayTasks, setArrayTasks, remove, change, edit, filtered, status, setStatus, changeComplete}, ...props) {
  
 
/* console.log(props); */
    return (  
        <ul className="todo-list">
                {filtered.map(itemTask => 
                  <Task 
                  arrayTasks = {arrayTasks}
                  setArrayTasks = {setArrayTasks}
                  itemtask={itemTask}
                  remove = {remove}
                  key = {itemTask.id}
                  change = {change}
                  edit = {edit}
                  status = {status}
                  setStatus = {setStatus}
                  changeComplete = {changeComplete}
              />
                )}
      
                
         
          
          
        {/* <li class="editing">
          <div class="view">
            <input class="toggle" type="checkbox">
            <label>
              <span class="description">Editing task</span>
              <span class="created">created 5 minutes ago</span>
            </label>
            <button class="icon icon-edit"></button>
            <button class="icon icon-destroy"></button>
          </div>
          <input type="text" class="edit" value="Editing task">
        </li>
        <li>
          <div class="view">
            <input class="toggle" type="checkbox">
            <label>
              <span class="description">Active task</span>
              <span class="created">created 5 minutes ago</span>
            </label>
            <button class="icon icon-edit"></button>
            <button class="icon icon-destroy"></button>
          </div>
        </li> */}
      </ul>
    );
}

export default TaskList;