import './App.css';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import {Routes,Route} from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from "react-redux";

function App() {

  const isAuthneticated= useSelector(state=>state.authentication.isAuthenticated);

  return (
    <div className="App">
      <Routes>
      <Route path="/"  element={ <ProtectedRoute isLoggedIn={isAuthneticated}>
      <LandingPage /> </ProtectedRoute>}>

      </Route>

      

        <Route exact path="/login" element={<Login/>}/>

      </Routes>
    </div>
  );
}

export default App;
