import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import MoviePage from './pages/MoviePage';
import TvDetail from './pages/TvDetail';
import TvPage from './pages/TvPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/tv' element={<TvPage />} />
        <Route path='/movie' element={<MoviePage />} />
        <Route path='/tv:id' element={<TvDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
