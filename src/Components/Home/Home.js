import React from 'react';
import './Home.css';
import { Task } from './Tasks/TasksComponent';
import { BrowserRouter as Router , Route , Link,withRouter } from 'react-router-dom';
class HomeComponent extends React.Component {
  constructor(props){
    super(props);
    this.addTask = this.addTask.bind(this);
    this.state = {
       currentUser:{
            userName:'User Name'
          },
      Tasks: this.props.allTasks,
      filteredTasks:this.props.allTasks,
      reverseSort: true
     
    }     
   
  }
  addTask() {
    
    this.props.history.push('/createTask');
  } 
  deleteTask(taskID){
    
    this.props.onTaskDelete(taskID);
  }
  editTask(thisTask){
    let taskID = thisTask.taskID;
    this.props.history.push('/editTask/'+taskID,{task:thisTask});
  }

  addition(a,b){
    return a+b;
  }

  filter(filterStr){
   
    let newTasksArr = [];
    for(let i = 0; i < this.state.Tasks.length;i++){
      if(this.state.Tasks[i].status == filterStr){
          newTasksArr.push(this.state.Tasks[i]);
      }
    }
    this.setState({
      filteredTasks:newTasksArr
    })
  }
  filterAll(){
    let Tasks = this.state.Tasks;
    this.setState({filteredTasks: Tasks})
  }
  changeStatus(taskID){
     let newTasksArr = [];
    for(let i = 0; i < this.state.Tasks.length;i++){
      if(this.state.Tasks[i].taskID == taskID){
         this.state.Tasks[i].status = !this.state.Tasks[i].status;
         break;
      }
    }
     let Tasks = this.state.Tasks;
    this.setState({filteredTasks: Tasks})
  }
  sortTasks(){
     let newTasksArr = this.state.Tasks;
     this.state.reverseSort = !this.state.reverseSort;
    newTasksArr.sort(function(a, b){
        if(a.catogery < b.catogery) return -1;
        if(a.catogery > b.catogery) return 1;
        return 0;
    })
      if(this.state.reverseSort){
        newTasksArr = newTasksArr.reverse();
      }
      this.setState({
        filteredTasks:newTasksArr
      });
  }
  render() {
    return (
      
        <div >
          <table className="table table-bordered table-hover table-striped taskList">
            <thead>
              <tr>
                <th>Task ID</th>
                <th>Title</th>
                <th>Description</th>
                <th onClick={this.sortTasks.bind(this)} >Category<i className="fa fa-sort sorticon" aria-hidden="true"></i></th>
                <th>Due Date</th>
                <th className="dropdown">
                   <div className="dropdown-toggle" type="button" data-toggle="dropdown">Status
                    <span className="caret"></span></div>
                    <ul className="dropdown-menu">
                      <li onClick={this.filterAll.bind(this)}><a >All</a></li>
                      <li onClick={this.filter.bind(this,true)}><a >Done</a></li>
                      <li onClick={this.filter.bind(this,false)}><a >Pending</a></li>                   
                    </ul>
                </th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="tableBody">
               {this.state.filteredTasks.map((idea,i) =><Task changeStatus = {this.changeStatus.bind(this)} deleteTask = {this.deleteTask.bind(this)} editTask={this.editTask.bind(this)} currentUser = {this.state.currentUser} thisIdea = {idea}/>)}
            </tbody>
          </table>
             <td><input type="button" value="Add Task" onClick={this.addTask}   className="button"/></td>
           
        </div>
     
    );
  }
}

export default withRouter(HomeComponent);