import { Route, Routes } from 'react-router-dom'
import './App.css'
import EmployeeListPage from './Pages/EmployeeListPage'
import AddEmployee from './Pages/AddEmployee'
import EditEmployeePage from './Pages/EditEmployeePage'

function App() {

  return (
    <>

      <Routes>

        <Route path='/' element={<EmployeeListPage/>}/>
        <Route path='/create' element={<AddEmployee/>}/>
        <Route path='/edit/:id' element={<EditEmployeePage/>}/>

      </Routes>

    </>
  )
}

export default App
