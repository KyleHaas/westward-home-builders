import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home"
import { Switch,Route,BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from './styles/Global';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
        <Footer/>
        <GlobalStyle />
      </>
    )
  }
}

export default App;