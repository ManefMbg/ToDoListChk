import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../../JS/Actions/actions'

const AddTask = () => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()
  const handleClick = (e) => {

    e.preventDefault()
    task
      ? dispatch(addTask({ id: Math.random(), caption: task, isDone: false }))
      : alert("Task can't be empty")
    setTask('')
  }
  return (
    <div style={{marginRight:'35rem', marginLeft:'35rem'}}>
      <Form onSubmit={handleClick}>
        <Form.Control type="text" 
        placeholder="Task" 
        value={task} onChange={(e) => setTask(e.target.value)} 
        
        style={{
        marginTop:'3rem',  
        borderStyle:'round', 
        borderColor:'blue'}}/>
      <br></br>
        <Button variant="outline-warning" type="submit">Add Task</Button>
      </Form>
    </div>
  )
}
export default AddTask
