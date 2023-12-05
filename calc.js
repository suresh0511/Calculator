const output = document.querySelector(".output"),
result = document.querySelector(".result"),
keys = document.querySelectorAll("button");

keys.forEach(key=>{
    key.addEventListener("click", calculate);
});

function calculate(){
    let buttonText = this.innerText;
    if(buttonText === "AC"){
        output.innerText = "";
        result.innerText = '0';
        return;
    }
    if(buttonText === "DEL"){
        output.textContent = output.textContent.substring(0,output.textContent.length-1);
        return;
    }
    if(buttonText === '='){
        result.innerText = eval(output.innerText);
    }
    else{
        output.textContent += buttonText;
    }
}