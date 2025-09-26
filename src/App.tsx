import { Outlet } from 'react-router';
import { useEffect } from 'react';
import './App.css';
import './Globalcss.css';
import Navibar from './Components/Navibar/Navibar';
import { setOriginalWindowSize } from 'Utils/windowSize';

function App() {
  useEffect(() => {
    setOriginalWindowSize();
  }, []);

  return (
    <div className="App">
      <Navibar />
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
