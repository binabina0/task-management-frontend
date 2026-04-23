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
import GroupMembers from './pages/GroupMembers';
import Register from './pages/Register';
import CreateGroup from './pages/CreateGroup';

function App() {
  return(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register/>}/>
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
          <Route path="/groups" element={<PrivateRoute><GroupMembers/></PrivateRoute>} />
          <Route path="/create-group" element={<PrivateRoute><CreateGroup/></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
