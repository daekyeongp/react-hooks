import React, { useReducer } from "react";

function reducer(state, action) {
    // action.type에 따라 작업 수행
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            // 아무것도 해당 안되면 기존 상태 반환
            return state;
    }
}

const ReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>이다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}>-1</button>
        </div>
    );
};

export default ReducerCounter;