
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns'



function Task({arrayTasks, setArrayTasks, itemtask, remove, edit, status, setStatus, changeComplete/* , status, setStatus *//* , setCondition, condition */}, props) {
const [check, setCheck] = useState(false);
const [showEdit, setShowEdit] = useState('')



let result = formatDistanceToNow(new Date(itemtask.id),{includeSeconds: true})


const handleClick = function(element) {
itemtask.status = !itemtask.status
setStatus(itemtask.status)
element.classList.add('completed')
}

const changeEdit = () => {
  /* setCondition('') */
  setShowEdit(!showEdit)
}



    return ( 
        <li /* className={status ? 'active' : 'completed'} */
            onClick={(e) => {handleClick(e.target.closest('li'))
            changeComplete(itemtask.id)
          }}
            /* onChange={changeComplete(itemtask.id)} */
        >
            <div className="view">
              <input className="toggle" type="checkbox"  checked={check}/>
              <label>
                <span className="description">{itemtask.task}</span>
                <span className="created">created {result} ago</span>
              </label>
              <button 
              className="icon icon-edit"
              onClick={handleClick}
              >

              </button>
              <button className="icon icon-destroy"
              onClick={() => remove(itemtask)}
              ></button>
            </div>
            {showEdit && <input type="text" className="edit" 
            
            /* value={} */
            onChange={ e => { edit(itemtask, e.target.value)}}
            onKeyUp={
              (e) => {if (e.key === 'Enter') {changeEdit()}}
            }

            />}
          </li>
     );
}

export default Task;
