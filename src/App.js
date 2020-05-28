import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home"
import Gallery from "./components/gallery/Gallery"
import NotFound from "./components/error/NotFound"
import ViewGallery from "./components/gallery/view/ViewGallery"
import { Switch,Route,BrowserRouter as Router } from "react-router-dom";
import './App.css'
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
        <div className="main-content">
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/gallery" component={Gallery}/>
              <Route path="/gallery/:album" render={({match}) => (<ViewGallery album={match.params.album}/>)}/> 
              <Route path="*" component={NotFound}/>
            </Switch>
          </Router>
        </div>
        <Footer/>
        <GlobalStyle />
      </>
    )
  }
}

export default App;