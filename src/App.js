import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllCountries from './Components/AllCountries/AllCountries';
import SingleCountry from './Components/SingleCountries/SingleCountries';
import CountryDetails from './Components/CountryDetails/CountryDetails';

const App = () => {
  return (
  
    <div>
    <Router>
      <Switch>
        <Route exact path='/'>
          <AllCountries></AllCountries>
        </Route>
        <Route  path='/country/:name'>
          <SingleCountry></SingleCountry>
        </Route>
        <Route  path='/details/:country'>
          <CountryDetails></CountryDetails>
        </Route>
      </Switch>
    </Router>
  </div>
   
  );
};

export default App;