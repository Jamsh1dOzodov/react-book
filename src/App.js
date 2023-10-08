import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Popular from './pages/Popular';
import ErrorPage from './pages/Error-Page';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/popular' element={<Popular />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;