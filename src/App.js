import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PackageDetails from './components/PackgeDetails/PackageDetails';
import MyOrder from './components/MyOrder/MyOrder';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import AddPackage from './components/AddPackage/AddPackage';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageAllOrder from './components/ManageAllOrder/ManageAllOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/my-order'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path='/package-details/:id'>
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <PrivateRoute path='/add-package'>
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path='/manage-all-order'>
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <Route path='/log-in'>
              <LogIn></LogIn>
            </Route>
            <Route path='/sign-up'>
              <SignUp></SignUp>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
