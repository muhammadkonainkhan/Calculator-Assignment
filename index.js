



// var a =prompt("Enter a Numner");
// var b =prompt("Enter a Length");

// for ( i=1; i<=10; i++){
    // for(j=0;j=b.length; j++){
    //     document.write(a + "x" + a + "=" + a*j + "<br>")
    // }

    // document.write(a + "x" + i + "=" + a*i + "<br>")
//     console.log("2" + "x" + i + "=" + 2*i + "<br>")
// }

function getNumber(num){
    // console.log(num);
    var result = document.getElementById("result")
    result.value += num;

}
function clearResult(){
    var result = document.getElementById("result")
    result.value = ""
}


function getResult(){
    var result = document.getElementById("result")
    result.value = eval(result.value)
    
}