import React from 'react'
import "./Reducer.css";
import {useReducer} from 'react'

const counterReducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{count:state.count+1};
            case 'DECREMENT':
                return{count:state.count-1};
                default:
                    return state;
    }
};

export default function Reducer() {
    const[state,dispatch]=useReducer(counterReducer,{count:0});

  return (
    <div className="hi">
        <div className="div1">
        <p>Count:{state.count}</p>
        <div className="h1">
        <button onClick={() =>dispatch({type:'INCREMENT'})}>Add</button>
        <button onClick={() =>dispatch({type:'DECREMENT'})}>Sub</button>
        </div>
    </div>
    </div>
  )
}
