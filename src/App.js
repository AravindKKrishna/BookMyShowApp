import './App.css';
//Routers
import { Routes,Route } from 'react-router-dom';
//react slike
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//pages
import Playpage from './pages/Play.page';
import MoviePage from './pages/Movie.page';
import HomePage from './pages/Home.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/movie/:id" element={<MoviePage/>} />
      <Route path="/plays" element={<Playpage/>} />
    </Routes>
  );
}

export default App;
