import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

import SinglePage from 'pages/SinglePage';
import Home from 'pages/Home';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

axios.defaults.baseURL = 'https://my-api-task-manager.herokuapp.com/api/v1';

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/task/:slug' element={<SinglePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
