import { Button, Row, Col } from 'react-bootstrap'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../../JS/Actions/actions'
import './task.css'
import EditTask from '../EditTask/EditTask'

const Task = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <div style={{marginLeft:'11rem'}}>
      <Row md={6}>
        
      <h3 className={task.isDone ? 'done' : 'undone'}>{task.caption}</h3>
      <Col md={2}>
      <EditTask task={task} />
      </Col>
      <br></br><br></br><br></br>
      <Col md={2}>
      <Button variant="outline-danger" onClick={() => dispatch(deleteTask(task.id))}>
        Delete
      </Button>
      </Col>

      <Col md={2} >
      <Button variant="outline-success" onClick={() => dispatch(doneTask(task.id))}>
        {task.isDone ? 'UnDone' : 'Done'}
      </Button>
      </Col>
      </Row>
    </div>
  )
}

export default Task
