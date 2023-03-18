import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import Spinner from './components/spinner/Spinner';
import Header from './components/header/Header';

const Home = lazy(() => import('./pages/home/Home'));
const CountryDetails = lazy(() =>
  import('./pages/country-details/CountryDetails')
);
const NotFound = lazy(() => import('./pages/not-found/NotFound'));

function App() {

  const [theme, setTheme] = useState('light')

  const toogleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className="App" data-theme={theme}>
        <Header theme={theme} toogleTheme={toogleTheme} />
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
