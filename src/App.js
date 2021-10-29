import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PackageDetails from './components/PackgeDetails/PackageDetails';
import MyOrder from './components/MyOrder/MyOrder';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import AddPackage from './components/AddPackage/AddPackage';
import ManageUser from './components/ManageUser/ManageUser';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/my-order'>
            <MyOrder></MyOrder>
          </Route>
          <Route path='/package-details'>
            <PackageDetails></PackageDetails>
          </Route>
          <Route path='/add-package'>
            <AddPackage></AddPackage>
          </Route>
          <Route path='/manage-user'>
            <ManageUser></ManageUser>
          </Route>
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
    </div>
  );
}

export default App;