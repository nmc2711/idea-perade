import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import { FaHome, FaArrowLeft, FaFileAlt } from 'react-icons/fa';
import { useState } from 'react';
import PERADE from './perade';
import POST from './post';

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '56px' }}>
        <Routes>
          <Route path='/' element={<PERADE />} />
          <Route path='post' element={<POST />} />
        </Routes>
      </div>
      <MobileNavigation />
    </Router>
  );
}

function MobileNavigation() {
  const navigate = useNavigate();
  const [value, setValue] = useState('/');

  const handleNavigationChange = (event, newValue) => {
    if (newValue === 'back') {
      navigate(-1);
    } else {
      setValue(newValue);
      navigate(newValue);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0',
      }}
    >
      <div
        onClick={() => handleNavigationChange(null, 'back')}
        style={{ textAlign: 'center', cursor: 'pointer' }}
      >
        <FaArrowLeft />
        <div>Back</div>
      </div>
      <div
        onClick={() => handleNavigationChange(null, '/')}
        style={{ textAlign: 'center', cursor: 'pointer' }}
      >
        <FaHome />
        <div>Home</div>
      </div>
      <div
        onClick={() => handleNavigationChange(null, '/post')}
        style={{ textAlign: 'center', cursor: 'pointer' }}
      >
        <FaFileAlt />
        <div>Post</div>
      </div>
    </div>
  );
}

export default App;
