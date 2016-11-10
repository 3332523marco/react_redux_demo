import { combineReducers } from 'redux'
import counter from './demoReducers'

//使用redux的combineReducers方法将所有reducer打包起来
//combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，
// 然后就可以对这个 reducer 调用 createStore。
//合并后的 reducer 可以调用各个子 reducer，并把它们的结果合并成一个 state 对象。state 对象的结构由传入的多个 reducer 的 key 决定。
const rootReducer = combineReducers({
  counter
})

export default rootReducer

