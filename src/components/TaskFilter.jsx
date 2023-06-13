import React, { useState } from 'react'

function TaskFilter({todoFilter}, props) {




    return ( 
        <ul className="filters"
        onClick={(e) => 
        {
          todoFilter(e.target.value);
          /* console.log(e.target.value); */
          /* console.log(e.target.innerText); */
        }}
        >
            <li>
              <button value={'all'}>All</button>
            </li>
            <li>
              <button value={'active'}>Active</button>
            </li>
            <li>
              <button value={'completed'}>Completed</button>
            </li>
          </ul>
     );
}

export default TaskFilter;