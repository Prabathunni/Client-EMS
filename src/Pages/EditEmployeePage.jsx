import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditEmployeePage() {

  const { id } = useParams();


  const [fullname, setFullname] = useState()
  const [empid, setEmpid] = useState()
  const [department, setDepartment] = useState()
  const [position, setPosition] = useState()
  const [joindate, setJoindate] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/emp/edit/${id}`)
      .then(result => {
        setFullname(result.data.fullname)
        setDepartment(result.data.department)
        setEmpid(result.data.empid)
        setPosition(result.data.position)
        setJoindate(result.data.joindate)
      })
      .catch(err => console.log(err))

  }, [])


  const editEmployee = (e) => {
    e.preventDefault()

    axios.post(`http://localhost:3000/emp/editEmployee/${id}`, { fullname, empid, department, position, joindate })
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))



  }




  return (
    <div className='bg-warning vh-100 d-flex justify-content-center align-items-center'>

      <div className='bg-white w-50 p-4 rounded shadow'>

        <h4 className='m-2 mb-4 text-center' style={{ textDecoration: "underline" }}>Edit Employee</h4>




        <form onSubmit={editEmployee}>
          <input type="text" placeholder='Full Name' value={fullname} onChange={(e) => setFullname(e.target.value)} className='form-control mb-3' />
          <input type="number" placeholder='Employee ID' value={empid} onChange={(e) => setEmpid(e.target.value)} className='form-control mb-3' />
          <input type="text" placeholder='Department' value={department} onChange={(e) => setDepartment(e.target.value)} className='form-control mb-3' />
          <input type="text" placeholder='Position' value={position} onChange={(e) => setPosition(e.target.value)} className='form-control mb-3' />
          <input type="date" placeholder='Joining Date' value={joindate} onChange={(e) => setJoindate(e.target.value)} className='form-control mb-3' />
          <input type="submit" value='Edit Employee' className='btn btn-primary mb-3' />
        </form>

      </div>

    </div>
  )
}

export default EditEmployeePage