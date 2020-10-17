import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserList from "./user/UserList";

function App() {
  return (
    <div className="App">      
      <Router>
        <ul>
        <li>
           <Link to="/">Home</Link>        
        </li>
          <li>
            <Link to="/userlist">Users</Link>
            <Route path="/userlist" component={UserList} />
          </li>          
        </ul>        
      </Router>            
    </div>
  );
}

export default App;
