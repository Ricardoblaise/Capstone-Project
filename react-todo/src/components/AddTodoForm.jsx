import React from 'react';      


function AddTodoForm({ newTod, setNewTod, addTodo }) {
  return ( 
    <div>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={newTod}
        onChange={(e) => setNewTod(e.target.value)}
      /> 
      <button onClick={addTodo}>Add</button>      
      {newTod && <p>Added: {newTod}</p>}
    </div>
   );
}

export default AddTodoForm;