import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Prices from './pages/Prices/Prices';
import Layout from './components/Layout/Layout';
import { AppDispatch } from './store/configureStore';
import { useDispatch } from 'react-redux';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
    </Layout>
  );
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export default App;
