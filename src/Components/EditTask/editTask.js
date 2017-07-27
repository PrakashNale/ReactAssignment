import React from 'react';
import { editTask } from '../../actions/action';

export class EditTaskComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Task:this.props.location.state.task,
            
            currCategory:this.props.location.state.task.catogery,
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


    editTask(){
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
        //this.props.editTask(NewTask);
        this.props.history.push('/');
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
                                <input onBlur={this.updateTitle.bind(this)} className="form-control" type="text" placeholder={this.state.Task.title} />
                            </div>
                            <div className="form-group">
                                <label >Description</label>
                                <textarea onBlur={ this.updateDescription.bind(this)} placeholder={this.state.Task.description} className="form-control" rows="6"></textarea>
                            </div> 
                           
                            <button onClick={()=> this.editTask()} type="submit" className="btn btn-primary">Save</button>                     
                    </form>
                </div>
            </div>
        )
    }
}
