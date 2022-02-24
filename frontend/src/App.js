import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <PrivateRoute exact path='/' element={<HomePage />} />
          <Route path= '/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;