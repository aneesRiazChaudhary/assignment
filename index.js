
function myFunction() {
    document.body.innerHTML="<div></div>"
 document.body.style="width:100%;height:auto;background-color:orange";






var far=document.createElement('form');
far.innerHTML="<h1>login form</h1>";
document.body.appendChild(far);
far.style="  display:flex;height:660px;width:80%;background-color:grey;flex-wrap:wrap;justify-content:center;align-items:center;flex-direction:column;gap:100px";



var inps=document.createElement("label");
inps.innerHTML="user Email<input  placeholder='enter ur email' type:'email'></input>";
far.appendChild(inps);





var inps2=document.createElement("label");
inps2.innerHTML="user password<input  placeholder='enter ur secret code' type='password'> </input>";
far.appendChild(inps2);



var btn=document.createElement('button');
btn.innerText="sign In";
btn.style="background-color:green";
far.appendChild(btn);
btn.type="submit";


let quick=document.createElement('div');


quick.innerHTML='';
document.body.appendChild(quick);
quick.style="height:660px;width:290px;background-color:red;display:flex;margin-left:1240px;margin-top:-660px;flex-direction:column;flex-wrap:wrap;"

let image=document.createElement('img');
image.src='./resources/logo.jpg';
image.alt='logo image';
image.style='height:200px;width:100%;'
quick.appendChild(image);



let ul=document.createElement('ul');
ul.innerHTML='';
quick.appendChild(ul);
ul.style='display-flex;background-color:aqua;height:400px;flex-direction:column;flex-wrap:wrap;align-items:center;margin-top:-15px';
ul.style.listStyle='none'

let li=document.createElement('li');
li.innerHTML='<a href="https://www.comsats.edu.pk/">comsats islamabad</a>';
ul.appendChild(li);
// li.style.listStyle='none';
li.style='width:288px;height:50px;background:color:orange;border:1px solid black;margin-left:-40px;content-align-center'



let li1=document.createElement('li');
li1.innerHTML='<a href="https://cuiwah.edu.pk/">comsats wah</a>';
ul.appendChild(li1);
// li1.style.listStyle='none';
li1.style='width:288px;height:50px;background:color:orange;border:1px solid black;margin-left:-40px;content-align-center'


let li2=document.createElement('li');
li2.innerHTML=' <a href="https://lahore.comsats.edu.pk/default.aspx">comsats lahore</a>';
ul.appendChild(li2);
li2.style='width:288px;height:50px;background:color:orange;border:1px solid black;margin-left:-40px;content-align-center'

// li2.style.listStyle='none';

let li3=document.createElement('li');
li3.innerHTML='<a href="https://lahore.comsats.edu.pk/default.aspx">comsats lahore</a>';
ul.appendChild(li3);
li3.style='width:288px;height:50px;background:color:orange;border:1px solid black;margin-left:-40px;content-align-center'
// li3.style.listStyle='none';

let li4=document.createElement('li');
li4.innerHTML='<a href="https://lahore.comsats.edu.pk/default.aspx">comsats lahore</a>';
ul.appendChild(li4);
li4.style='width:288px;height:50px;background:color:orange;border:1px solid black;margin-left:-40px;content-align-center'
// li4.style.listStyle='none';

let li5=document.createElement('li');
li5.innerHTML='<a href="https://lahore.comsats.edu.pk/default.aspx">comsats lahore</a>';
ul.appendChild(li5);
li5.style='width:288px;height:50px;background:color:orange;border:1px solid black;margin-left:-40px;content-align-center'
// li5.style.listStyle='none';










}





function myFunctionb() {


    // var BODY = document.getElementsByTagName("BODY");

// let ocontainer=document.getElementById('ocontainer');
// let n=document.createElement('body');
// n.innerHTML='<body></body>';
// document.body.appendChild(n);
// BODY.style="background-color:aqua";
// console.log(BODY);

// let c =document.createElement('hi');
// c.innerHTML='hey man';
// n.appendChild(c);
// BODY.appendChild(n);


// let myBody = document.body.innerHTML;
document.body.innerHTML='<div> <h1 >   sign Up form  </h1></div>';
// body.style="background-color:aqua";
document.body.style = "background-color:yellow;display:flex;flex-direction:column;jutify-content:center;text-align:center;text-indent:-300px";









let abc=document.createElement('form');
abc.innerHTML='<form></form>';
// abc.id="far1";
abc.style="display:flex;flex-wrap:wrap;flex-direction:column;width:80%;height:auto;content-align:center;align-items:center;text-align:start"
document.body.appendChild(abc);

let labe=document.createElement('label');
labe.innerText='name';
abc.appendChild(labe);
labe.style='text-indent:-90px'

let inn=document.createElement('input');
inn.innerHTML='input';
abc.appendChild(inn);
inn.placeholder='enter ur full name'
inn.type='text'




let labe1=document.createElement('label');
labe1.innerText='father name';
abc.appendChild(labe1);
labe1.style='text-indent:-90px'

let inn1=document.createElement('input');
inn1.innerHTML='input';
abc.appendChild(inn1);
inn1.placeholder='enter ur father name'
inn1.type='text'





let labe2=document.createElement('label');
labe2.innerText='Email';
abc.appendChild(labe2);
labe2.style='text-indent:-90px'

let inn2=document.createElement('input');
inn2.innerHTML='input';
abc.appendChild(inn2);
inn2.placeholder='enter ur email'
inn2.type='email'





let labe3=document.createElement('label');
labe3.innerText='password';
abc.appendChild(labe3);
labe3.style='text-indent:-90px'

let inn3=document.createElement('input');
inn3.innerHTML='input';
abc.appendChild(inn3);
inn3.placeholder='enter ur password'
inn3.type='password'





let labe4=document.createElement('label');
labe4.innerText='date of birth';
abc.appendChild(labe4);
labe4.style='text-indent:-90px'

let inn4=document.createElement('input');
inn4.innerHTML='input';
abc.appendChild(inn4);
inn4.placeholder='enter ur date of birth'
inn4.type='date'


let up=document.createElement('button');
up.innerHTML='Sign Up';
abc.appendChild(up);
up.style='width:90px;background-color:green;margin-top:15px'
up.type='submit';





// ocontainer.appendChild(abc);
// abc.style="width:100%;height:800px;background-color:red;display:flex;flex-direction:column;flex-wrap:wrap;margin-top:-700px;zIndex =3";

// console.log(bgContainer);
// let fullName=document.createElement('label');
// fullName.innerText='full Name';
// abc.appendChild(fullName);
//  let inpu1=document.createElement('input');
//  inpu1.innerHTML='input';
//  abc.appendChild(inpu1);

//  let userName=document.createElement('label');
// userName.innerText='user Name';
// abc.appendChild(userName);

// let inpu2=document.createElement('input');
// inpu1.innerHTML='input';
// abc.appendChild(inpu2);


// let email=document.createElement('label');
// email.innerText='email';
// abc.appendChild(email);
// let inpu3=document.createElement('input');
// inpu3.innerHTML='input';
// abc.appendChild(inpu3);

// let password=document.createElement('label');
// password.innerText='password';
// abc.appendChild(password);

// let inpu4=document.createElement('input');
// inpu4.innerHTML='input';
// abc.appendChild(inpu4);


// let confirm=document.createElement('label');
// confirm.innerText='full Name';
// abc.appendChild(confirm);

// let inpu5=document.createElement('input');
// inpu5.innerHTML='input';
// abc.appendChild(inpu5);





}








