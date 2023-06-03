import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import EmployeeList from './pages/EmployeeList'
import EmployeeCreate from './pages/EmployeeCreate'
import Error from './pages/Error'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/employees/create" element={<EmployeeCreate />} />              
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
