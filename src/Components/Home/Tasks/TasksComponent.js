import React from 'react';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; // Import 
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css 

import './Tasks.css';
export class Task extends React.Component{
    constructor(props){
        super(props);
    }
    

    Delete(e){
          confirmAlert({
            title: 'Confirm to Delete',                        // Title dialog 
            message: 'Are you sure to delete this.',               // Message dialog 
            childrenElement: () => <div>Custom UI</div>,       // Custom UI or Component 
            confirmLabel: 'Confirm',                           // Text button confirm 
            cancelLabel: 'Cancel',                             // Text button cancel 
            onConfirm: () => {
                    this.props.deleteTask(this.props.thisIdea.taskID);
            }
            })
            
     
    }

    
  addition(a,b){
    return a+b;
  }

    changeStatus(){
        this.props.changeStatus(this.props.thisIdea.taskID);
    }
    EditTask(e){
        this.props.editTask(this.props.thisIdea);
        //Router.transitionTo('/editTask/5');
    }
    render(){
       
        return(
            
            <tr>
                <td>{this.props.thisIdea.taskID}</td>
                <td>{this.props.thisIdea.title}</td>
                <td>{this.props.thisIdea.description}</td>
                <td>{this.props.thisIdea.catogery}</td>
                <td>{this.props.thisIdea.dueDate}</td>
                <td>{(this.props.thisIdea.status) ? 'Done' : 'Pending'} <span><input type="button" className="button" value="Change" onClick={this.changeStatus.bind(this)} /></span> </td>
                <td onClick={this.EditTask.bind(this)} className="button"><i className="fa fa-pencil" aria-hidden="true"></i></td>
                <td onClick={this.Delete.bind(this)}  className="button"><i className="fa fa-trash-o" aria-hidden="true"></i></td>
            </tr>
        )
    }
}