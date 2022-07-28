let addScreen = (value) => {
    document.getElementById("screen").value += value;
}

let clearScreen = () => {
    document.getElementById("screen").value = "";
}

let calculate = () => {
    let operation = document.getElementById("screen").value;

    let result = "E";
			
	let operatorPosition = getOperatorPosition(operation);
	
	if (operatorPosition != -1){
		//lo que está a la izq del operador es el operando1
		//lo que esá a la dcha es el operando2
		
		let operando1 = operation.substring(0, operatorPosition);
		let operando2 = operation.substring(operatorPosition + 1, 
												operation.length);
		let operador = operation[operatorPosition];
		
		if (checkOperando(operando1) && checkOperando(operando2)){		
			if (checkAllNumbers(operando1) && checkAllNumbers(operando2)){
				result = operate(operando1, operando2, operador);		
			}
		}		
	}

    document.getElementById("screen").value = result;
}

let checkAllNumbers = (operando) => {
	let allNumbers = true;
	
	for (let i = 1; i < operando.length && allNumbers; i++){
		if (isNaN(operando[i])){
			allNumbers = false;
		}
	}
	
	return allNumbers;
}

let checkOperando = (operando) => {
	return (operando[0] == "x" || operando[0] == "/") ? false : true;
}

let operate = (operando1, operando2, operador) => {	
	let res = "E";
	
	switch(operador){
		case "+":
			res = parseFloat(operando1) + parseFloat(operando2);
			break;
		case "-":
			res = parseFloat(operando1) - parseFloat(operando2);
			break;
		case "x":
			res = parseFloat(operando1) * parseFloat(operando2);
			break;
		case "/":
			res = parseFloat(operando1) / parseFloat(operando2);
			break;		
	}
	
	return res;	
}


let getOperatorPosition = (operation) => {
	
	let pos = -1;
	
	for (let i = 0; i < operation.length && pos == -1; i++){
		if (operation[i+1] != undefined && 
		!isNaN(operation[i]) &&	isNaN(operation[i + 1])){
			pos = i + 1;
		}		
	}

	return pos;	
}

