import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UploadImage from './components/imageUpload/UploadImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Personal Food Log App
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                <Link to="/upload">Experience {'>>'}</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/upload" element={<UploadImage />} />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}



export default App;
