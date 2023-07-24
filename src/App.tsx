import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Error from './pages/Error'
import Spinner from './components/Spinner'
import './App.css'
const EmployeeList = lazy(() =>
import('./pages/EmployeeList'))
const EmployeeCreate = lazy(() =>
import('./pages/EmployeeCreate'))

function App() {

  return (
    <>
      <Router basename={window.location.pathname || '' }>
        <div className="App">
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Suspense fallback={<Spinner />}><EmployeeList /></Suspense>} />
              <Route path="/employees/create" element={<Suspense fallback={<Spinner />}><EmployeeCreate /></Suspense>} />              
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
