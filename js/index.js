// SET TIME INTERVAL-------->

// console.log(this)

// this window ko represent krta hai ye window k saare object dedeta hai!

// alert("This is Rishabh");
// confirm("age is 18+")
// console.log(prompt())


// set timeout and set interval---->

//both are the object of window
// ye ek particular time pr code ko execute krne k kaam m aate h!

// Setinterval-mtlb koi kaam baar bar krlena
// set timeout-mtlb koi  kaam itne time baad baad m krlena

// settimeout----->1.ye function leta h
// 2. time leta h milli second
// 3.settimeout function k ander function call hota h
// EventTarget.jese hum youtube p video dekh rhe h to ek ad/popup/function aajata 


// function myfun(){
//     console.log("time");
//     setTimeout(function(){
//         console.log("speed")
//     },5000)
// }
// myfun();
// console.log("limit")


// function name(){
//     console.log("Rishabh Arrived");
//     setTimeout(function(){
//         console.log("Players Arrived")
//     },2000)
// }
// name();
// console.log("Khushi Arrived")


// function greet(name,byeText){
//     console.log("hello Good morning"+" "+ name +" "+byeText);
// }
// setTimeout(greet,2000,"Rishabh","See You");



// function Invite(name,event){
//     console.log(name+" "+"You are invited for"+" "+event);
// 
// var timeOut=setInterval(Invite,1000,"Rishabh","Golden Jury");
// console.log(timeOut)
//  clearInterval(1)

// function shop(investment,savings){
//     console.log("salesperson");
//     setTimeout(function(){
//         console.log("salesman's spends"+" "+investment+" "+"and he earns"+" "+savings);
//     },5000);
// }
// shop(40000,50000);
// console.log("hardwork")


// function education(fees,result){
//     console.log("12th class");
//     setTimeout(function(){
//         console.log("Your fees is"+" "+fees+" "+"and your result is"+" "+result+"%");
//     },4000);
// }
// var calculation=education(80000,45);
// console.log(calculation)


// function student(){
//     console.log("I am a student");
// }
// timeout=setTimeout(student,1000);
// intervalid=setInterval(student,1000);
// clearInterval(intervalid)
// clearTimeout(timeout)


// function displayTime(){
//     var time=new Date();
//     document.getElementById("time").innerHTML=time;
// }
// settimeout(displayTime,1000);


// ***************IMPORTANT EXAMPLE**************

// function loop(){
//     console.log("RISHABH IS HERE");
//     for(let i=0;i<=5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000);}}
// loop();


// function printNUm(){
//     console.log("Rishabh is coder");
//     for(let i=0;i<=20;i++){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000);}
// }
// printNUm();


// function close(){
//     console.log("I m going to close my shop");
//     setTimeout(function(){
//         console.log("NO income is there");
//     },3000);
// }
// close();


// function Loop(){
//     console.log(Loop.length)
//     for(let i=0;i<10;i++){
//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }}
    // Loop()



// SET INTERVAL-------->

// function mytime(){
//    var date= new Date();
//    document.getElementById("time").innerHTML=date.toLocaleTimeString(); 
// }
// var time=setInterval(mytime,1000)



// function student(){
//     console.log("I am a student");
// }
// timeout=setTimeout(student,1000);
// intervalid=setInterval(student,1000);
// clearInterval(intervalid)
// clearTimeout(timeout)


// function displayTime(){
//    var time=new Date();
//     document.getElementById("time").innerHTML=time;
// }
// setInterval(displayTime,1000);


// function marriage(alcohol){
//     console.log("today is a marriage of my friend");
//     setInterval(function(){
//         console.log("I wanna take alcohol on this occasion named as"+" "+alcohol)
//     },5000);

// }marriage("blendor's Pride")

// .innerHTML mtlb hota h ki id k ander kuch likh dia!





// *INTERVIEW QUESTIONS*

// if we use settimeout then why it print at last?
// ans-->firstofall function forms a closure.This function remembers the refrence to i
// so wherever function goes it takes refrence of i along with it
                // or 
// 1)sbse phle function closure bnata h.or ye function hmesha yad rkhta h variable(i) ka refrence or jha bhi jaata h vha variable ka refrence yaad rkhta h
// 2)settimeout callback function ko leta h or kisi place p jaake store krdeta h or timer attach krdeta h isk saath  or javasscript chlti rhti h iska wait nhi krti
// 3)or jese hi timer expire hota h to JS isko pakad k callstack m daldeta h or function execute hojata h.


