import React, { useReducer } from 'react';

// COMPONENTS
import DigitButton from '../DigitButton';
import OperationButton from './OperationButton';

// STYLES
import styles from "./Calculator.module.css";

// FUNCTIONS
import { evaluate } from '../handlers/functions';

const initialState = {
    previosOperand: "",
    currentOperand: "",
    operation: "",
}

const stateReducer = (state, action) => {
    const {type, payload} = action;
    const {currentOperand, previosOperand, operation, overwrite} = state;

    switch(type) {
        case "ADD_DIGIT":
            if (overwrite) {
                return {
                  ...state,
                  currentOperand: payload.digit,
                  overwrite: false,
                }
            }
            if (payload.digit === "0" && currentOperand === "0") return state;
            if (currentOperand.includes(".") && payload.digit === ".") return state;
            return {
                ...state,
                currentOperand: `${currentOperand || ""}${payload.digit}`
            }
        case "CLEAR":
            return {
                ...state,
                previosOperand: "",
                currentOperand: "",
                operation: ""
            }
        case "DELETE":
            // const length = state.currentOperand.length;
            // const newCurrentOperand = state.currentOperand.slice(0, length-1);
            if (overwrite) {
                return {
                  ...state,
                  overwrite: false,
                  currentOperand: "",
                }
            }
            if (currentOperand == "") return state
            if (currentOperand.length === 1) {
              return { ...state, currentOperand: "" }
            }
            return{
                ...state,
                currentOperand: currentOperand.slice(0, -1)
            }
        case "CHOOSE_OPERATION":
            if(currentOperand == "" && previosOperand == ""){
                return state
            }
            if(previosOperand == "") {
                return {
                    ...state,
                    previosOperand: currentOperand,
                    currentOperand: "",
                    operation: payload.operation
                }
            }
            if(currentOperand == ""){
                return {
                    ...state,
                    operation: payload.operation
                }
            }
            return {
                ...state,
                previosOperand: evaluate(state),
                currentOperand: "",
                operation: payload.operation
            }
            case "EVALUATE":  
            if( previosOperand == "" || currentOperand == "" || operation == ""){
                return state
            }
            return {
                ...state,
                currentOperand: evaluate(state),
                operation: "",
                previosOperand: "",
                overwrite: true
            }    
        } 
                    
}

const Calculator = () => {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    const {previosOperand, currentOperand, operation} = state;

    return (
        <div className={styles.container}>
            <div className={styles.screen}>
                <div className={styles.previous_operand}>{previosOperand} {operation}</div>
                <div className={styles.current_operand}>{currentOperand}</div>
            </div>
            <button className={styles.two_columns} onClick={() => dispatch({type: "CLEAR"})}>AC</button>
            <button onClick={() => dispatch({type: "DELETE"})}>DEL</button>
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
            <button className={styles.two_columns}  onClick={() => dispatch({type: "EVALUATE"})}>=</button>
        </div>
    );
};

export default Calculator;