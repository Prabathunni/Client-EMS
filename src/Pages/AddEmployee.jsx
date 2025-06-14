import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function AddEmployee() {

  const [fullname, setFullname] = useState()
  const [empid, setEmpid] = useState()
  const [department, setDepartment] = useState()
  const [position, setPosition] = useState()
  const [joindate, setJoindate] = useState()
  const navigate = useNavigate()

  const addEmployee = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/emp/create', { fullname, empid, department, position, joindate })
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))


  }

  return (
    <div className='bg-warning vh-100 d-flex justify-content-center align-items-center'>

      <div className='bg-white w-50 p-4 rounded shadow'>

        <h4 className='m-2 mb-4 text-center' style={{ textDecoration: "underline" }}>Add Employee</h4>


        <form onSubmit={addEmployee}>
          <input type="text" placeholder='Full Name' onChange={(e) => setFullname(e.target.value)} className='form-control mb-3' />
          <input type="number" placeholder='Employee ID' onChange={(e) => setEmpid(e.target.value)} className='form-control mb-3' />
          <input type="text" placeholder='Department' onChange={(e) => setDepartment(e.target.value)} className='form-control mb-3' />
          <input type="text" placeholder='Position' onChange={(e) => setPosition(e.target.value)} className='form-control mb-3' />
          <input type="date" placeholder='Joining Date' onChange={(e) => setJoindate(e.target.value)} className='form-control mb-3' />
          <input type="submit" value='Add Employee' className='btn btn-success mb-3' />
        </form>

      </div>

    </div>
  )
}

export default AddEmployee