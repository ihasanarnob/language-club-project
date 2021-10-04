import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Activities from './components/Activities/Activities';
import Error404 from './components/Error404/Error404';
import Home from './components/Home/Home';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
         <Route exact path='/'>
          <Home></Home>
          </Route>
         <Route path='/home'>
          <Home></Home>
          </Route>
         <Route path='/about'>
          <About></About>
          </Route>
         <Route path='/services'>
          <Service></Service>
          </Route>
         <Route path='/activities'>
          <Activities></Activities>
          </Route>
          <Route path='/*'>
            <Error404></Error404>
          </Route>
       </Switch>
      
      
      </Router>

    </div>
  );
}

export default App;
