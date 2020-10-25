import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import UserList from "./user/UserList";

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>      
      <Router>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><NavLink to="/userlist">Users</NavLink></li>          
        </ul>
        <div className="content">
          <Route path="/userlist" component={UserList} />
        </div>        
      </Router>            
    </div>
  );
}

export default App;
