import React from 'react';
import './App.css';
import Navbar from './pages/NavBar';

import { HashRouter as Router, Routes, Route} from 'react-router-dom';

import DataEntry from './pages/DataEntry';
import Dashboard from './pages/Dashboard';

  
function App() {
return (
    <Router>
 <Navbar />
    <Routes >
        <Route exact path={window.location.pathname} element={<DataEntry />} />
        <Route path={window.location.pathname+'Dashboard'} element={<Dashboard/>} />
        <Route path={window.location.pathname+'data'} element={<DataEntry/>} />
        <Route path='*' element={<DataEntry/>} />
    </Routes>

    </Router>
);
}
  
export default App;
//   <Navbar />