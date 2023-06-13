import React from 'react'


function NewTaskForm(props) {

/*     let debounce = function (fn, ms) {
        let timeout;
        return function (...args) {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            fn.apply(this, args);
          }, ms);
        };
      }; */

    

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