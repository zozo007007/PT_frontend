import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default App
