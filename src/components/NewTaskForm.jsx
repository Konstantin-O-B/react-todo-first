import React from 'react'


function NewTaskForm(props) {

    return ( 
        <input 
        className="new-todo" 
        placeholder="What needs to be done?" 
        autoFocus 
        {...props}
       
        />
     );
}

export default NewTaskForm;