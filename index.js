function saveLead(){
    console.log("button clicked")
    // return "button clicked";
}

let practiceEl = document.getElementById("practice-el");
practiceEl.addEventListener("click",function()
{
    console.log("button clicked without html code");
})

let boxEl = document.getElementById("box");
boxEl.addEventListener("click",function()
{
    console.log("open box button clicked using the add eventv listner");    
})