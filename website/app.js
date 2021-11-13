/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
const key="80e91636527dbbb1d0cf1013630ebb6e";

const getTemp=document.getElementById('generate');

const heat= async ()=>{
try{
    "use strict";
    const ourCode=document.getElementById('zip').value;
    
    const content= document.getElementById('feelings').value;

    const mainURL = `https://api.openweathermap.org/data/2.5/weather?zip=${ourCode}&appid=${key}&units=metric`;
   const save = await fetch(mainURL);
   
   const weather = await save.json() ;
   const Temp=weather.main.temp;
   console.log(`ur temeratur is ${Temp}`);


await fetch('postData',{
    method: 'POST', 
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json', },      
    body: JSON.stringify({
        date: newDate,
        temp: Temp,
        content: content,  
    })
}); 

    const getting = await fetch ('/all');
    const response= await getting.json();
    console.log(response);
    document.querySelector('#date').innerHTML=`Your date is : ${newDate}`;
    document.querySelector('#temp').innerHTML=`Your Temperature is : ${Temp}`;
    document.querySelector('#content').innerHTML=`Your Feel is :${content}`;

}
catch (error) {
    console.log("error", error);
    }
}
getTemp.addEventListener('click',heat);

