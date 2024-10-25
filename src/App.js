import React, { Component } from 'react';
import './App.css'; // Import the CSS for gradient effect
import Navbar from './Components/Navbar';
import Newsfield from './Components/Newsfield';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

export class App extends Component {
  pageSize = 10;

  render() {
    return (
      <div className="app-container">
        <Router>
          <Navbar />
          <div className="content"> 
            <Routes>
              <Route path="/" element={<Newsfield key="general" pageSize={this.pageSize} category="general" />} />
              <Route path="/business" element={<Newsfield key="business" pageSize={this.pageSize} category="business" />} />
              <Route path="/entertainment" element={<Newsfield key="entertainment" pageSize={this.pageSize} category="entertainment" />} />
              <Route path="/general" element={<Newsfield key="general" pageSize={this.pageSize} category="general" />} />
              <Route path="/health" element={<Newsfield key="health" pageSize={this.pageSize} category="health" />} />
              <Route path="/science" element={<Newsfield key="science" pageSize={this.pageSize} category="science" />} />
              <Route path="/sports" element={<Newsfield key="sports" pageSize={this.pageSize} category="sports" />} />
              <Route path="/technology" element={<Newsfield key="technology" pageSize={this.pageSize} category="technology" />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
