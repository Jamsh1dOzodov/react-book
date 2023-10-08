import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Popular from './pages/Popular';
import ErrorPage from './pages/Error-Page';
import GenresPage from './pages/Genres-Page';
import Catalog from './pages/Catalog';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/genrespage' element={<GenresPage/>} />
        <Route path='/catalog' element={<Catalog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;