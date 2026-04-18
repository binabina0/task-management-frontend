import './App.css'
import { AuthProvider } from './auth/AuthContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Payments from './pages/Payments'
import Tasks from './pages/Tasks'

function App() {
  return(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
