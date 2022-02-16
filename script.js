document.getElementById('calculatorBody').addEventListener('click',function(e) {
    
    calculate(e.target.innerText)
 
    
     
})
function calculate(id) {
    if(id.length==1){
        const inputField=document.getElementById("inputField");
         if(id=="="){
            inputField.value=eval(inputField.value)
            
        }
        else if(id=="X"){
            inputField.value+="*"
        }
        else{
            inputField.value+=id;
        }
        console.log(id);

    }
    else if (id=="AC") {
        inputField.value=""
    }
    
}