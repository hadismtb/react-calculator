import React, { useReducer } from 'react';

// STYLES
import styles from "./Calculator.module.css";

const initialState = {
    previosOperand: "",
    currentOperand: "",
    operation: ""
}

const stateReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case "ADD_DIGIT":
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`
            }
    }
}

const Calculator = () => {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    const {previosOperand, currentOperand} = state;

    return (
        <div className={styles.container}>
            <div className={styles.screen}>
                <div className={styles.previous_operand}>{previosOperand}</div>
                <div className={styles.current_operand}>{currentOperand}</div>
            </div>
            <button className={styles.two_columns}>AC</button>
            <button>DEL</button>
            <button>/</button>
            <button onClick={() => dispatch({type: "ADD_DIGIT", payload: {digit: "1"}})}>1</button>
            <button onClick={() => dispatch({type: "ADD_DIGIT", payload: {digit: "2"}})}>2</button>
            <button  onClick={() => dispatch({type: "ADD_DIGIT", payload: {digit: "3"}})}>3</button>
            <button>*</button>
            <button onClick={() => dispatch({type: "ADD_DIGIT", payload: {digit: "4"}})}>4</button>
            <button onClick={() => dispatch({type: "ADD_DIGIT", payload: {digit: "5"}})}>5</button>
            <button onClick={() => dispatch({type: "ADD_DIGIT", payload: {digit: "6"}})}>6</button>
            <button>+</button>
            <button onClick={() => dispatch({type: "ADD_DIGIT", payload: {digit: "7"}})}>7</button>
            <button onClick={() => dispatch({type: "ADD_DIGIT", payload: {digit: "8"}})}>8</button>
            <button onClick={() => dispatch({type: "ADD_DIGIT", payload: {digit: "9"}})}>9</button>
            <button>-</button>
            <button onClick={() => dispatch({type: "ADD_DIGIT", payload: {digit: "."}})}>.</button>
            <button onClick={() => dispatch({type: "ADD_DIGIT", payload: {digit: "0"}})}>0</button>
            <button className={styles.two_columns}>=</button>
        </div>
    );
};

export default Calculator;