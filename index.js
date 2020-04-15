$('#myModal').modal('show')



function check(a){
    if(a==0){
        document.getElementById("button1").style.visibility="visible";
        document.getElementById("button2").style.visibility="hidden";
    }
}
function check1(b){
    if(b==1){
        document.getElementById("button2").style.visibility="visible";
        document.getElementById("button1").style.visibility="hidden";
    }
}
function shift(){
    $('#myModal1').modal('show');
     $('#myModal').modal('hide');
    
}
function anchor1(){
        $('#myModal').modal('show');
        $('#myModal1').modal('hide');
    
}
function check2(a){
    if(a==0){
        document.getElementById("button3").style.visibility="visible";
        document.getElementById("button4").style.visibility="hidden";
    }
}
function check3(b){
    if(b==1){
         document.getElementById("button4").style.visibility="visible";
        document.getElementById("button3").style.visibility="hidden";
    }
}
function shift1(){
     $('#myModal2').modal('show');
     $('#myModal1').modal('hide');
    
}
function shift2(){
    $('#myModal3').modal('show');
     $('#myModal1').modal('hide');
}
function anchor2(){
        $('#myModal1').modal('show');
        $('#myModal2').modal('hide');
    
}
function anchor3(){
        $('#myModal1').modal('show');
        $('#myModal3').modal('hide');
    
}
function shift3(){
    var a = document.getElementById("catinput1").value;
    var b = document.getElementById("exampleInputAmount1").value;
   

     

    
    $('#myModal4').modal('show');
     $('#myModal3').modal('hide');
    document.getElementById("test").innerHTML = `1.${a}: rs ${b}`;
    document.getElementById("footer").innerHTML=`Total Cost : ${b}rs`
   
}
function anchor4(){
        $('#myModal3').modal('show');
        $('#myModal4').modal('hide');
    
}
function shift4(){
     var a = document.getElementById("catinput1").value;
    var b = document.getElementById("exampleInputAmount1").value;
    var c = document.getElementById("catinput2").value;
    var d = document.getElementById("exampleInputAmount2").value;


    
    $('#myModal5').modal('show');
     $('#myModal4').modal('hide');
    document.getElementById("test1").innerHTML = `1.${a}: rs ${b}`;
     document.getElementById("test2").innerHTML = `2.${c}: rs ${d}`;
     document.getElementById("footer1").innerHTML=`Total Cost : ${parseFloat(b)+parseFloat(d)}rs`
   
     
}
function anchor5(){
        $('#myModal4').modal('show');
        $('#myModal5').modal('hide');
    
}
function final(){
    var element = document.getElementById('body1');
    element.parentNode.removeChild(element);
}
function final1(){
    var element = document.getElementById('body2');
    element.parentNode.removeChild(element);
}