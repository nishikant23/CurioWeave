import Dashboard from './pages/Dashboard'
import { DashboardSelf } from './pages/DashboardSelf'
import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProfileCreation from './pages/ProfileCreation'
import ContentUpload from './pages/ContentUpload'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfileCreation />} />
          <Route path="/dashboardself" element={<DashboardSelf />} />
          <Route path="/create-content" element={<ContentUpload />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
