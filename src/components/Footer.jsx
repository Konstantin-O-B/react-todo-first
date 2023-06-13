import React from 'react'
import TaskFilter from './TaskFilter';

function Footer({arrayTasks, todoFilter}, props) {
    return (  
        <footer className="footer">
          <span className="todo-count">{arrayTasks.length} items left</span>
            <TaskFilter
              todoFilter = {todoFilter}
            />
          <button className="clear-completed">Clear completed</button>
        </footer>
    );
}

export default Footer;