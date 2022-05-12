import React, { useReducer } from 'react';

// COMPONENTS
import DigitButton from '../DigitButton';
import OperationButton from './OperationButton';

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
            if (payload.digit === "0" && state.currentOperand === "0") return state;
            if (state.currentOperand.includes(".") && payload.digit === ".") return state;
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
            <OperationButton dispatch={dispatch} operation="÷" />
            <DigitButton dispatch={dispatch} digit="1" />
            <DigitButton dispatch={dispatch} digit="2" />
            <DigitButton dispatch={dispatch} digit="3" />
            <OperationButton dispatch={dispatch} operation="*" />
            <DigitButton dispatch={dispatch} digit="4" />
            <DigitButton dispatch={dispatch} digit="5" />
            <DigitButton dispatch={dispatch} digit="6" />
            <OperationButton dispatch={dispatch} operation="+" />
            <DigitButton dispatch={dispatch} digit="7" />
            <DigitButton dispatch={dispatch} digit="8" />
            <DigitButton dispatch={dispatch} digit="9" />
            <OperationButton dispatch={dispatch} operation="-" />
            <DigitButton dispatch={dispatch} digit="." />
            <DigitButton dispatch={dispatch} digit="0" />
            <button className={styles.two_columns}>=</button>
        </div>
    );
};

export default Calculator;