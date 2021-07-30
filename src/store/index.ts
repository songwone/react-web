/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-20 15:05:40
 * @LastEditors: songone
 * @LastEditTime: 2021-07-28 14:07:03
 */
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers';

  
  // 创建 Redux store 来存放应用的状态。
  // API 是 { subscribe, dispatch, getState }。
  let store = createStore(reducers, applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    // loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  ));
  
  // 可以手动订阅更新，也可以事件绑定到视图层。
  store.subscribe(() =>
    console.log(store.getState())
  );
  
  // store.dispatch({ type: 'DECREMENT' });
export default store