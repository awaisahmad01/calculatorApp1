function clearBtn(){
    var result = document.getElementById("result");
    result.value = "";
}

function getNumber(num){
   var result = document.getElementById("result");
   result.value += num;
   console.log(result.value);
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
function delKey(){
    var result = document.getElementById("result");
    result.value = result.value.slice(0, result.value.length-1);
    console.log(result.value);
    

}