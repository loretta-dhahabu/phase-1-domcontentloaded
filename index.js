// Your code goes here
// const event = document.addEventListener( "DOMContentLoaded", function ()
// {
    
// })

// document.addEventListener( "DOMContentLoaded",function eventFunction (){
//     document.querySelector( "#text" ).textContent = "This is really cool!"
// } );

// document.addEventListener( "DOMContentLoaded", ()=>{
//     document.querySelector( "#text" ).textContent = "This is really cool!"
// } )
document.addEventListener("DOMContentLoaded", function eventFunction () {
 
  const textElement = document.getElementById("text");
  textElement.textContent = "This is really cool!";
});