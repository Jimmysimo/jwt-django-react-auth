import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './utils/PrivateRoute'


import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
            <Routes>
              <Route path='/*' element={<PrivateRoute />}>
                <Route path='home' element={<HomePage />} />
              </Route>
              <Route path= '/login' element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;