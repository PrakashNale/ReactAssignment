//import axios from 'axios';
import firebase from '../firebase';
export const ADD_TASK = 'ADD_TODO';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
let nextTodoId = 0;

export function addTask(task) {

   return dispatch => {
       
            dispatch({
                type: ADD_TASK,
                id: nextTodoId++,
                task
            });
     }

}

export function editTask(task) {

   return dispatch => {
       
            dispatch({
                type: EDIT_TASK,
                id: nextTodoId++,
                task
            });
     }

}

     export function deleteTask(taskID){
          return dispatch => {
       
            dispatch({
                type: DELETE_TASK,
                id: nextTodoId++,
                taskID
            });
          }
     }