let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener("click", function(){
        const lastSymbol = input.value.at(-1);

        if(button.textContent === "="){
            return input.value = eval(input.value);
        }
        
        if((lastSymbol === "+" || lastSymbol === "-" || lastSymbol === "*" || lastSymbol === "/")
            &&
            (button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/")
        ){
            
        }
        else{
            input.value = input.value + button.textContent;
        }
        
        if(button.textContent === "C"){
            input.value = "";
        } 
    })
}
