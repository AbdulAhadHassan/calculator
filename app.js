
let num = 0
let char1 = ''
let calImp = document.getElementById("input-user");

function calculatorClick(num){

        calImp.value += num
        console.log(num)
      return calImp.value
}

function clearOneImp (){
     calImp.value =   calImp.value.slice(0, -1)
}

function clearImp (){
    calImp.value = ''
} 
var match = true

function calculateAns(){
    // if(lastIndexOf(calImp.value.length - 1) == '-' ||lastIndexOf(calImp.value.length - 1) == '%' || lastIndexOf(calImp.value.length - 1) == '*' || lastIndexOf(calImp.value.length - 1) == '+' || lastIndexOf(calImp.value.length - 1) == '/' || lastIndexOf(calImp.value.length - 1) == '^2' || lastIndexOf(calImp.value.length - 1)== '^3'){
    //     calImp.value = "Error"
    // }
        calImp.value = eval(calImp.value)
   
    
    
    console.log(calImp.Imp)

}