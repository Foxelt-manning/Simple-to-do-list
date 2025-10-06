import { useState } from 'react'
import { useVariable } from './variableContext'
import '../Styles/TaskInput.css'
import { Pencil, CheckCheck, Plus, Trash2 } from 'lucide-react'
import EditTask from './Task_Functionality/EditTask'

function TaskInput () {
  const { task, setTask, editIndex,  setEditIndex, setEditText,setCompletedTasks } =
    useVariable()

  // Initialise  parameters in a list
  const [m, setM] = useState({
    title: '',
    priority: '',
    deadline: toString(new Date())
  })

  // Function adds and stores input info
  function handleAddedTasks () {
    setTask(c => [
      ...c,
      {
        title: m.title,
        priority: m.priority,
        deadline: m.deadline
      }
    ])

    // Resets inputs
    setM({
      title: '',
      priority: '',
      deadline: toString(new Date())
    })
  }

  // function to delete tasks
  function deleteTasks (index) {
    setTask(task.filter((_, i) => i !== index))
  }

  //function to allow editing of Tasks
  function editStart (index) {
    setEditIndex(index);
    setEditText(task[index].title);
  }

  //function to store tasks marked as complete
  function markComplete(index){
    setCompletedTasks(c => [...c,task])
    setTask(task.filter((_,i)=> i !== index))
  }

  return (
    <div className='page'>
      <div className='inputborder small-shadow'>
        <div className='center-items'>
          <p>Task </p>
          <input
            type='text'
            value={m.title}
            placeholder='Enter Task'
            onChange={e => {
              setM(m => ({ ...m, title: e.target.value }))
            }}
          />

          <p>Task priority</p>
          <select
            name='priority'
            id='priority'
            value={m.priority}
            onChange={e => {
              setM(m => ({ ...m, priority: e.target.value }))
            }}
          >
            <option value=''>Please select priority of task</option>
            <option value='🟢'>Low</option>
            <option value='🟡'>Moderate</option>
            <option value='🔴'>Urgent</option>
            <option value='🔴🔥😱'>Deadline type Urgent</option>
          </select>
          <p>Task Deadline</p>
          <input
            type='date'
            value={m.deadline}
            onChange={e => {
              setM(m => ({ ...m, deadline: e.target.value }))
            }}
          />
          <br />
          <button onClick={() => handleAddedTasks()}>
            <Plus size={18} />{' '}
          </button>
        </div>
      </div>
      <div>
        {task.map((tasks, index) => (
          <div key={index}>
            <ul>
            <li className=' task-container small-shadow'>
              <div className='task-space'>
                <section className='top'>
                  <p>{tasks.title}</p>
                  <p>{tasks.priority}</p>
                </section>
                <p>{tasks.deadline}</p>
              </div>
              <div className='button_area'>
                <button className='delete' onClick={() => deleteTasks(index)}>
                  <Trash2 />
                  Delete
                </button>
                {editIndex === index?(
                  <EditTask/>):(
                    <>
                <button className='edit' onClick={() => editStart(index)}>
                  {' '}
                  <Pencil />
                  Edit
                </button>
                    </>
                )}
                <button className='complete'
                onClick={()=>markComplete(index)}>
                  {' '}
                  <CheckCheck />
                  Complete
                </button>
              </div>
            </li>
              </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskInput
