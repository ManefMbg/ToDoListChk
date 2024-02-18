import React, { useState } from 'react'
import Task from '../Task/Task'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'

const TaskList = () => {
  const tasks = useSelector((state) => state.taskReducer.listTasks)
  const [flag, setFlag] = useState('all')
 
  return (
    <div style={{ margin: '5%' }}>
      <Button variant='outline-primary' onClick={() => setFlag('all')} style={{ marginRight:'20px' }}>All</Button>
      <Button variant='outline-primary' onClick={() => setFlag('done')} style={{ marginRight:'20px' }}>Done</Button>
      <Button variant='outline-primary' onClick={() => setFlag('unDone')}>UnDone</Button>
      <br></br><br></br><br></br>
      {flag === 'done'
        ? tasks
            .filter((elt) => elt.isDone === true)
            .map((elt, key) => <Task task={elt} key={elt.id} />)
        : flag === 'unDone'
        ? tasks
            .filter((elt) => elt.isDone === false)
            .map((elt, key) => <Task task={elt} key={elt.id} />)
        : tasks.map((elt, key) => <Task task={elt} key={elt.id} />)}
    </div>
  )
}

export default TaskList
