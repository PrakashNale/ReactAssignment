import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
export class AboutComponent extends React.Component {
  render() {
    return (
     <div className="row">
       <div className="col-md-8 col-md-offset-2">
          <h2>ReactJS TODO APP</h2>
          <h3>I have implemented following functionalities in this app</h3>
          
           <p>Routing -  I have created routes like <br/>1)<strong>About</strong><br/> 2) <strong>Home</strong><br/>  3) <strong>Create Task</strong></p>
            
           <p>Filtering -  In the <strong>Status</strong> column there is dropdown. If we select any option from this dropdown it will apply filter</p>

           <p>Sorting -  In the <strong>Category</strong> column there is sorting implemented. On click of this header it will sort table</p>

           <p>Delete -  In the <strong>Delete</strong> column there <i className="fa fa-pencil" aria-hidden="true"></i>  icon. On click of this it will open confirmation box. If we click yes it will delete that task from table</p>

           <p>Edit -  In the <strong>Edit</strong> column there <i className="fa fa-trash-o" aria-hidden="true"></i>  icon. On click of this it will navigate to edit task page. Once we edit task we can save this task. On save it will navigate back to home</p>
        </div>
       
      </div>
    );
  }
}
