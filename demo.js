// const { JSON } = require("mysql/lib/protocol/constants/types");

let myLead = []
let oldLead = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const tabs = [{url: "https://www.youtube.com/watch?v=jS4aFq5-91M"}]


inputBtn.addEventListener("click",function()
{
    myLead.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLead",JSON.stringify(myLead))
    render(myLead)
})


tabBtn.addEventListener("click",function ()
{
    // console.log(tabs[0].url);
    myLead.push(tabs[0].url)
    localStorage.setItem("myLead",JSON.stringify(myLead))
    render(myLead)
})



deleteBtn.addEventListener("dblclick",function()
{
    console.log("double clicked");
    localStorage.clear();
    myLead = [];
    render(myLead);
})





const leadFromLocalStorage =  JSON.parse(localStorage.getItem("myLead"))
console.log(leadFromLocalStorage);
if(leadFromLocalStorage){
    myLead = leadFromLocalStorage;
    render(myLead);
    }



function render(Lead)
{
    let listItems = "  "
    for(let i = 0;i < Lead.length;i++)
    {
     //listItems += <li> <a target='_blank' href='" + myLead[i] +"'>" + myLead[i] + "</a></li>  

//template string
     listItems += `<li> 
     <a target='_blank' href='${Lead[i]}'>
         ${Lead[i]} 
     </a>
     </li>`
     console.log(listItems);
    }
    ulEl.innerHTML = listItems
    
}





//  "www.google.com","www.w3school.com","www.pondy.com"