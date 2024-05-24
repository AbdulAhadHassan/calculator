
let num = 0
var per = false
var squarert = false
let char1 = ''
var match = false
let calImp = document.getElementById("input-user");
// var history = document.getElementById("history-cal").textContent
let count = 0


function calculatorClick(num){
        if(!match){
            calImp.value = ""
        }
        calImp.value += num
        console.log(num)
        match = true
      return calImp.value
}

function clearOneImp (){
     calImp.value =   calImp.value.slice(0, -1)
}

function clearImp (){
    calImp.value = ''
} 

function percen(){
    per = true
    document.getElementById("history-cal").innerHTML +=  `Eq : ${calImp.value} ` + "<br>"

    calImp.value = calImp.value.slice(0, -1)/100
    document.getElementById("history-cal").innerHTML +=  `Ans : ${calImp.value} ` + "<br>"
    per = false
    
    match = false
    // console.log(calImp.value.lastIndexOf(calImp.value.length - 1))
        calImp.value = eval(calImp.value)

   
}

function sqrt(){
    squarert = true
    document.getElementById("history-cal").innerHTML +=  `Eq : ${calImp.value} ` + "<br>"
    calImp.value = Math.sqrt(calImp.value)
    squarert = false
    document.getElementById("history-cal").innerHTML +=  `Ans : ${calImp.value} ` + "<br>"


match = false
// console.log(calImp.value.lastIndexOf(calImp.value.length - 1))
    calImp.value = eval(calImp.value)

}





function calculateAns(){
    // if(lastIndexOf(calImp.value.length - 1) == '-' ||lastIndexOf(calImp.value.length - 1) == '%' || lastIndexOf(calImp.value.length - 1) == '*' || lastIndexOf(calImp.value.length - 1) == '+' || lastIndexOf(calImp.value.length - 1) == '/' || lastIndexOf(calImp.value.length - 1) == '^2' || lastIndexOf(calImp.value.length - 1)== '^3'){
    //     calImp.value = "Error"
    // }
    // if(per){

    //     calImp.value = calImp.value.slice(0, -1)/100
    //     per = false
    // }

    // if(squarert){
    //     calImp.value = Math.sqrt(calImp.value)
    //     squarert = false
    // }
    document.getElementById("history-cal").innerHTML +=  `Eq : ${calImp.value} ` + "<br>"


    match = false
    // console.log(calImp.value.lastIndexOf(calImp.value.length - 1))
        calImp.value = eval(calImp.value)

        document.getElementById("history-cal").innerHTML +=  `Ans : ${calImp.value} ` + "<br>"
        let nana = Number(calImp.value)
        if(nana == NaN){
            calImp.value = "ERROR" 
        }
   
    
    return
}