import React from 'react';
import './NewTask.css';
import { BrowserRouter as Router , Route , Link ,withRouter} from 'react-router-dom';
class CreateTasks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Task:{                
                Title:'',
                Description:'',
                createdBy:'',
                createdDaate:'',
                likes:[],
                comments:[]
            },
            currentUser: this.props.currentUser.userName,
            currCategory:'Category',
            newdata:this.props
        }
    }

     updateTitle(e){
       
        var stateCopy = Object.assign({}, this.state);
        stateCopy.Task.title = e.target.value;
        this.setState(stateCopy);
    }
    updateDescription(e){
       
        var stateCopy = Object.assign({}, this.state);
        stateCopy.Task.description = e.target.value;
        this.setState(stateCopy);
    }


    createTask(){
         var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth()+1; //January is 0!
                var yyyy = today.getFullYear();
                today = dd + '/' + mm + '/' + yyyy;
        let NewTask = {
            taskID:1,
            Title:this.state.Task.title,
            Description:this.state.Task.description,
            dueDate:today,
            catogery:this.state.currCategory    
        }
        this.props.onTaskAdd(NewTask);
        this.props.history.push('/Home');
    }

    changeCategory(selectedCategory){
        this.setState({currCategory:selectedCategory})
    }

    render(){
        return(
            <div className="row newIdea">
                <div className="col-md-6 col-md-offset-3">
                    <form action="">                        
                            <div className="form-group">
                                <label>Title</label>
                                <input onBlur={this.updateTitle.bind(this)} className="form-control" type="text" placeholder="Title of your task" />
                            </div>
                            <div className="form-group">
                                <label >Description</label>
                                <textarea onBlur={ this.updateDescription.bind(this)} placeholder="description" className="form-control" rows="6"></textarea>
                            </div> 
                            <div className="form-group dropdown">
                                <label className="dropdown-toggle" data-toggle="dropdown">{this.state.currCategory} <span className="caret"></span></label>
                                <ul className="dropdown-menu">
                                    <li onClick={this.changeCategory.bind(this, 'New')}>New</li>
                                    <li onClick={this.changeCategory.bind(this, 'Initiated')}>Initiated</li>
                                    <li onClick={this.changeCategory.bind(this, 'Completed')}>Completed</li>
                                </ul>
                            </div> 
                            <button onClick={()=> this.createTask()} type="submit" className="btn btn-primary">Create</button>                     
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(CreateTasks)