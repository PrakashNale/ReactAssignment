import React from 'react';
import './Header.css';
import logo from './todo.png';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
export class HeaderComponent extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        currentUser: this.props.currentUser
      }
  }
  render() {

    return (
      
        <div className=".header">
            <header>
              <div className="row header">
                       <div className="col-sm-3 col-md-3 col-lg-3">
                          <img src={logo} height="150px" width="200px" alt="waiting"/>
                        </div>
                        <div className="col-sm-7 col-md-7 col-lg-7">
                          <h2>  
                          Welcome to TODO App
                          </h2>                          
                          <p>Share your TODO list here</p>
                           <nav>
                            <ul className="nav nav-pills">
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/About">About</Link></li>
                              <li><Link to="/createTask">Create Task</Link></li>
                            </ul>
                          </nav>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">
                          <i className="glyphicon glyphicon-user currentUser"></i>
                          <p>{this.state.currentUser.userName}</p>
                        </div>
                      
                  </div>
            </header>
        </div>
     
    );
  }
}
