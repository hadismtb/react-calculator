const evaluate = state => {
    const {previosOperand, currentOperand, operation} = state;
    const prev = parseFloat(previosOperand);
    const current = parseFloat(currentOperand);
    
    if(isNaN(prev) || isNaN(current)) {
        return ""
    }
    let sum;
    switch(operation){
        case "+":
            sum = prev + current;
            break;
        case "-":
            sum = prev - current;
            break;
        case "*":
            sum = prev * current;
            break;
        case "÷":
            sum = prev / current;
            break;             
    }
    return sum.toString();
}

export { evaluate }