
import './App.css';
import { useState , useRef } from 'react'

function App() {

  const [todos , setTodos] = useState([])

  const inputRef = useRef()

  const handleAddTodo = () => {
    const text = inputRef.current.value
    const newItem = {completed : false , text}
    if(text !== ''){
      setTodos([...todos,newItem])
      inputRef.current.value = ''
    }
  }

  const handleItemDone = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const handleDeleteItem = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index , 1)
    setTodos(newTodos)
  }


  return (
    <div className="App">
        <h2>TO DO List</h2>
        <div className="to-do-container">
            <ul>
              {
                todos.map(({text , completed} , index) => {
                  return (
                    <div className='item'>
                      <li 
                      onClick={() => handleItemDone(index)}
                      className={completed ? 'done' : ''}
                      >{text}</li>

                      <span className='delete-icon' onClick={() => handleDeleteItem(index)}>❌</span> 
                    </div>
                  )
                })
              }
            </ul>
            <input ref={inputRef} placeholder='Enter Item...' autoFocus />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    </div>
  );
}

export default App;
