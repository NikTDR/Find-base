// import { postReducer } from "./postsReducer"; //другие файлы из папки reducers

import { combineReducers } from 'redux';
import { findParamsReducers } from './findParamsReducers';


export const rootReducer = combineReducers({
  //posts: postReducer,
  findParams : findParamsReducers,
  findQuery : findParamsReducers

})
