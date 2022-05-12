import React from 'react';

// STYLES
import styles from "./Calculator.module.css";

const Calculator = () => {
    return (
        <div className={styles.container}>
            <div className={styles.screen}>
                <div className={styles.previous_operand}>12354 *</div>
                <div className={styles.current_operand}>687</div>
            </div>
            <button className={styles.two_columns}>AC</button>
            <button>DEL</button>
            <button>/</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>*</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button className={styles.two_columns}>=</button>
        </div>
    );
};

export default Calculator;