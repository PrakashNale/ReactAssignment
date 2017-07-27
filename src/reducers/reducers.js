import { combineReducers } from 'redux';
import { ADD_TASK } from '../actions/action';
import { EDIT_TASK } from '../actions/action';
import { DELETE_TASK } from '../actions/action';
var DefaultTasks = [
              {taskID:1,title:'Task One',description:'This is first task',catogery:'New',dueDate:'1 Aug',status:true},
              {taskID:2,title:'Task Two',description:'This is second task',catogery:'Initiated',dueDate:'1 Aug',status:false},
              {taskID:3,title:'Task Three',description:'This is third task',catogery:'Completed',dueDate:'1 Aug',status:false},
              {taskID:4,title:'Task Four',description:'This is fourth task',catogery:'Completed',dueDate:'1 Aug',status:true},
              {taskID:5,title:'Task Five',description:'This is fifth task',catogery:'New',dueDate:'1 Aug',status:true},
              {taskID:6,title:'Task Six',description:'This is sixth task',catogery:'New',dueDate:'1 Aug',status:false},
              {taskID:7,title:'Task Seven',description:'This is seventh task',catogery:'Initiated',dueDate:'1 Aug',status:true}
             
            ]
var taskID = 7;
function todo(state, action) {
   switch (action.type) {
	
      case ADD_TASK:
         return {
            taskID:++taskID,
            title:action.task.Title,
            description:action.task.Description,
            createdDaate: action.task.dueDate,
            catogery:action.task.catogery,
            status:false
        }

         
       
        

      default:
      return state
   }
}

function Tasks(state = DefaultTasks, action) {
   switch (action.type) {
	
      case ADD_TASK:
         return [
            ...state,
            todo(undefined, action)
         ]

      case DELETE_TASK:{
           let newArray = Object.assign([], state);
           for (var i = 0; i < newArray.length; i++)
            if (newArray[i].taskID == action.taskID) { 
                newArray.splice(i, 1);
                break;
            }
              return newArray;
         }
      case EDIT_TASK:{
        let newArray = Object.assign([], state);
           for (var i = 0; i < newArray.length; i++){
            if (newArray[i].taskID == action.taskID) { 
                newArray[i].title = action.title;
                newArray[i].description = action.description;
                newArray[i].catogery = action.catogery;
                break;
            }
              return newArray;
           }
      }

      default:
      return state
   }
}

const todoApp = combineReducers({
   Tasks
})

export default todoApp