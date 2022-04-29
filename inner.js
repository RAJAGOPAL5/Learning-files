let container = document.getElementById("container")
container.innerHTML = "<button onClick ='buy()' >BUY</button>"
container.addEventListener("click",function()
{
console.log("hi");
})
function buy()
{
    container.innerHTML = "<p> Thank u for buying</p>"
}