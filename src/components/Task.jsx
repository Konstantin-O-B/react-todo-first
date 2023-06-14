
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns'



function Task({itemtask, remove, edit, setStatus, setCondition, condition}, props) {
/* const [condition, setCondition] = useState(''); */
const [check, setCheck] = useState(false);
const [showEdit, setShowEdit] = useState('')
/* const [status, setStatus] = useState() */

/* const [editValue, setEditValue] = useState(itemtask.task) */
let result = formatDistanceToNow(new Date(itemtask.id),{includeSeconds: true})


const handleClick = function(event) {
  
  let target = event.target;
  if (target.classList.contains('icon-edit') && condition !== 'completed') {
    setCondition('editing');
    setShowEdit(true)
    return
  }
  if (target.classList.contains('description') || target.classList.contains('toggle')) {
    setCondition('completed')
    itemtask.status = false;
    setCheck(!check);
    if (condition){
      setCondition('');
      itemtask.status = true;
    }
  }
}

const changeEdit = () => {
  setCondition('')
  setShowEdit(!showEdit)
}



    return ( 
        <li className={condition}
            onClick={handleClick}
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
