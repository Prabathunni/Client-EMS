import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function EmployeeListPage() {

    const [employees, setEmployees] = useState([])
    const [deleteTrigger,setDeleteTrigger] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3000/emp/read')
            .then(result => setEmployees(result.data))
            .catch(err => console.log(err))
    }, [deleteTrigger])


    const deleteEmployee = async (id) => {
        const confirmation = confirm('Are you sure to delete the Employee:');
        
        if (confirmation) {
                    axios.delete(`http://localhost:3000/emp/deleteEmployee/${id}`)
            .then(result => {
                console.log(result)
                setDeleteTrigger(prev => !prev)
                
            })
            .catch(err => console.log(err))
        }

    }

    return (
        <div className='bg-warning vh-100 d-flex justify-content-center align-items-center'>

            <div className='bg-white w-75 p-4 rounded shadow'>
                <h4 className='m-2 mb-5 text-center' style={{ textDecoration: "underline" }}>All Employees</h4>

                <div className='d-flex justify-content-between mb-3'>

                    <Link to={'/create'} className='btn btn-success px-4 mb-3'>Add Employee +</Link>
{/* 
                    <div className='d-flex gap-1' style={{ maxHeight: "40px" }}>
                        <input type="text" placeholder='Search Employee' className='form-control' />
                        <button className='btn btn-secondary'>Search</button>
                    </div> */}

                </div>

                <table className='table table-bordered table-striped  text-center '>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Employee ID</th>
                            <th>Department</th>
                            <th>Position</th>
                            <th>Joining Date</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => {
                            return <tr key={employee._id}>
                                <td>{employee.fullname}</td>
                                <td>{employee.empid}</td>
                                <td>{employee.department}</td>
                                <td>{employee.position}</td>
                                <td>{employee.joindate}</td>
                                <td><Link to={`/edit/${employee._id}`} className='btn btn-primary'>Edit</Link> <button onClick={() => deleteEmployee(employee._id)} className='btn btn-danger'>Delete</button></td>
                            </tr>

                        })

                        }
                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default EmployeeListPage