import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Spinner from './components/spinner/Spinner';

const Header = lazy(() => import('./components/header/Header'));
const Home = lazy(() => import('./pages/home/Home'));
const CountryDetails = lazy(() =>
  import('./pages/country-details/CountryDetails')
);
const NotFound = lazy(() => import('./pages/not-found/NotFound'));

function App() {
  return (
    <div className="App">
        <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:id" element={<CountryDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
