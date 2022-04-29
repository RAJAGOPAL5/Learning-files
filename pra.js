let welcomeEl = document.getElementById("welcome-el")
function greetUSer(name)
{
    welcomeEl.textContent = `"welcome back," ${name}`  
    // console.log("welcome back"); 
}
greetUSer("Tom")
