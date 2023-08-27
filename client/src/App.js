import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Main from './components/Main';
import Second from './components/Second'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/second' element={<Second/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
