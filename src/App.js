import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="app">

    <Router>
    <Header />
        <Switch>
        
          <Route path="/search">

             <SearchPage />
          </Route>
          <Route path="/">

<Home />
</Route>
        </Switch>
       <Footer />  
    </Router>
{/* <h2>Hello world</h2> */}

    {/* home */}
        {/* Header */}

        {/* {Banner} */}
            {/* search */}

        {/* {cards} */}

        {/* footer */}
    {/* searchPage*/}
        {/* header */}
        {/* ../ */}
    
    </div>
  );
}

export default App;
