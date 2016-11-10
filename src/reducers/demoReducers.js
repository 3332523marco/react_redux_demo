import { ADD_COUNTER } from '../actions/demoAction'

var initialState =
    [{
        id:1,
        title:"test1",
        price:1
    },{
        id:2,
        title:"test2",
        price:2
    }]


export default function counter(state = initialState,action) {
    switch (action.type) {
        case ADD_COUNTER:
            const {index} = action
            state[index].price = state[index].price +2;

            return Object.assign([], state)
        default:
            return state
    }
}
