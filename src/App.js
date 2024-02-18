import React from 'react'
import './App.css'
import AddTask from './Components/AddTask/AddTask'
import TaskList from './Components/TaskList/TaskList'

function App() {
  return (
    <div className="App">
      <img src='https://cdn2.downdetector.com/static/uploads/logo/Todoist_logo.png' 
      alt='logo'
      style={{width:'15rem'}}></img>
      <AddTask />
      <TaskList />
    </div>
  )
}

export default App
