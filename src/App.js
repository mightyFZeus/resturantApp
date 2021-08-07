
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Reason from './components/Reason/Reason'
import History from './components/History/History'
import News from './components/News/News'
import Explore from './components/Explore/Explore'
import Menu from './components/Menu/Menu'
import {BrowserRouter as Router, Route, } from 'react-router-dom'

import {Context} from './Context'





function App() {
  
  return (
    
    <Context>
        <Router>
      <div className="App">
      <NavBar  />
      <Header />
      <Welcome />
      <Reason />
      <History />
      <News />
      <Explore />
     
          <Route path='/menu'  component={Menu} />      
    </div>
    </Router>
    </Context>
  );
}

export default App;
