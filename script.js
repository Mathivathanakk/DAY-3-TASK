//TASK 1:
let obj1 = { name:"Person 1",age:5};
let obj2 = { age:5,name:"Person 1"};
//step 1: converting the objects to string
let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);
 //compare
let obj3=[];
obj3.push(str1,str2);

    if(obj3[0].name===obj3[1].name && obj3[0].age===obj3[1].age){
        console.log("equal");
    }else{
        console.log("not equal");
    }


//  TASK 2 :
//  step 1 :create a XHR object
var request = new XMLHttpRequest();
// step 2 : opening a connection to server
request.open("GET","https://restcountries.com/v3.1/all",true);
//step 3 : Initating a bridge to server / sending request
request.send ();
// step 4 : server response
request.onload = function() {
var data =request.response;
var result=JSON.parse(data);
//console.log(result);
for (var i=0;i<result.length;i++){
    console.log(result[i].flags.png);
}
}
//  TASK 3 :
//  step 1 :create a XHR object
var request1 = new XMLHttpRequest();
// step 2 : opening a connection to server
request1.open("GET","https://restcountries.com/v3.1/all",true);
//step 3 : Initating a bridge to server / sending request
request1.send ();
// step 4 : server response
request1.onload = function() {
var data1 =request1.response;
var result1=JSON.parse(data1);
//console.log(result1);
for (var i=0;i<result1.length;i++){
    console.log("country name:"+" "+ result1[i].name.common,","+"Region:"+" "+result1[i].region,","+"Subregion:"+" "+result1[i].subregion,","+"Population:"+" "+result1[i].population);     
}
}
