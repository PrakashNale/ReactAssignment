import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTask } from './actions/action';
import {deleteTask } from './actions/action';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import HomeComponent from './Components/Home/Home';
import {AboutComponent } from './Components/About/About';
import {HeaderComponent } from './Components/Header/Header';
import CreateTasks  from './Components/NewTask/NewTask';
import { EditTaskComponent } from './Components/EditTask/editTask';
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
          currentUser:{
            userName:'User Name'
          }
        };
    };

  onTaskAdd(task,dispatch){

    this.props.dispatch(addTask(task));
  } 

  onTaskDelete(taskID){
    this.props.dispatch(deleteTask(taskID))
  }

  render() {  
    const { dispatch, visibleTasks } = this.props
    return (
       <Router>
         
        <div>
         <HeaderComponent currentUser={this.state.currentUser} />
          <div >           

             <Route path="/About" component={AboutComponent} ></Route>
             <Route path="/Home" component={() => (<HomeComponent onTaskDelete = {this.onTaskDelete.bind(this)} allTasks = {visibleTasks} currentUser={this.state.currentUser} />)}></Route>
             <Route path="/createTask" component={() => (<CreateTasks onTaskAdd = {this.onTaskAdd.bind(this)} currentUser={this.state.currentUser} />)}></Route>
             <Route path="/editTask/:id" component={  EditTaskComponent } ></Route>
          </div>  
           <footer><h3>Copyright &copy; Globant India</h3></footer>       
        </div>
      </Router>
    );
  }
}

function select(state) {
   return {
      visibleTasks: state.Tasks
   }
}

export default connect(select)(App)
