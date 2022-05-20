import React from 'react';
import './App.css';
import Navbar from './pages/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import DataEntry from './pages/DataEntry';
import Dashboard from './pages/Dashboard';
import NoPage from './pages/NoPage';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<DataEntry />} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/data_entry' element={<DataEntry/>} />
        <Route path='*' element={<NoPage/>} />
    </Routes>
    </Router>
);
}
  
export default App;