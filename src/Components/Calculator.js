import React, { useReducer } from 'react';

// COMPONENTS
import DigitButton from '../DigitButton';


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
            <DigitButton dispatch={dispatch} digit="1" />
            <DigitButton dispatch={dispatch} digit="2" />
            <DigitButton dispatch={dispatch} digit="3" />
            <button>*</button>
            <DigitButton dispatch={dispatch} digit="4" />
            <DigitButton dispatch={dispatch} digit="5" />
            <DigitButton dispatch={dispatch} digit="6" />
            <button>+</button>
            <DigitButton dispatch={dispatch} digit="7" />
            <DigitButton dispatch={dispatch} digit="8" />
            <DigitButton dispatch={dispatch} digit="9" />
            <button>-</button>
            <DigitButton dispatch={dispatch} digit="." />
            <DigitButton dispatch={dispatch} digit="0" />
            <button className={styles.two_columns}>=</button>
        </div>
    );
};

export default Calculator;