import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Homepage/Home/Home'
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './Pages/Loginpage/Login/Login';
import Register from './Pages/Loginpage/Register/Register';
import AllCars from './Pages/AllCars/AllCars';
import Dashboard from './Pages/Dashboardpage/Dashboard/Dashboard'
import PrivateRoute from './Pages/Sharedpage/PrivateRoute/PrivateRoute'
import Purchase from './Pages/Purchase/Purchase'
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/allcars">
              <AllCars></AllCars>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
