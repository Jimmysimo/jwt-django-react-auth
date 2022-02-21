
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route component={HomePage} path="/" exact/>
        <Route component={LoginPage} path="/login"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
