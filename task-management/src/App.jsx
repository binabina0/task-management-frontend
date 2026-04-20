import './App.css'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { AuthProvider } from './auth/AuthContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Payments from './pages/Payments'
import Tasks from './pages/Tasks'
import PrivateRoute from './auth/PrivateRoute';
import CreateTask from './pages/CreateTask';
import CreatePayment from './pages/CreatePayment';

function App() {
  return(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element = {
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/tasks" element={<PrivateRoute><Tasks/></PrivateRoute>} />
          <Route path="/payments" element={<PrivateRoute><Payments /></PrivateRoute>} />
          <Route path="/create-task" element={<PrivateRoute><CreateTask/></PrivateRoute>} />
          <Route path="/create-payment" element={<PrivateRoute><CreatePayment/></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
