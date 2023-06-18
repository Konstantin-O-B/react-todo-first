import React from 'react'

function TaskFilter({todoFilter}) {




    return ( 
        <ul className="filters"
        onClick={(e) => 
        {
          todoFilter(e.target.value);
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