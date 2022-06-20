import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages';
import Cards from './pages/cards';
import Sets from './pages/sets';
import Discover from './pages/discover';
import MyFriends from './pages/myfriends';
import MyDecks from './pages/mydecks';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/index' element={<Home />} />
            <Route path='/cards' element={<Cards />} />
            <Route path='/sets' element={<Sets />} />
            <Route path='/discover' element={<Discover />} />
            <Route path='/myfriends' element={<MyFriends />} />
            <Route path='/mydecks' element={<MyDecks />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;