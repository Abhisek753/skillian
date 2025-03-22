console.log("hello world")

// let title=document.getElementById("main-title");
// console.log(title,"title")

// let items=document.getElementsByClassName("list-item");
// console.log(items);

// let para=document.getElementsByTagName("p");
// console.log(para)

// let firstItem=document.querySelector(".list-item");
// let allItem=document.querySelectorAll(".list-item");
// console.log(firstItem,"1111")
// console.log(allItem,"2222")

// let element=document.getElementById("content")
// // element.innerText="New text";
// element.textContent="New text"

// let link=document.getElementById("myLink");
// link.setAttribute("href","https://skillian.com");
// console.log(link.getAttribute("href"),"log123");

// let el=document.getElementById("box");
// el.style.backgroundColor="red";
// el.classList.add("hide");
// el.classList.add("high");
// el.classList.remove("hide");
// el.classList.toggle("active");

// let button=document.getElementById("clickme");
// button.addEventListener("click",function(){
//     // console.log("button clicked");
// button.style.backgroundColor="teal"

//     alert("test click")
// });
// let input=document.getElementById("username");
// console.log(input.value)

// let parent =document.getElementById("container");
// // console.log(parent);
// let newEl=document.createElement("p");
// newEl.id="tesid"
// newEl.id=""
// newEl.innerText="Hi Swaati";

// console.log(newEl,"123456")
// let newEl2=document.createElement("p");
// newEl2.innerText="Hi Fahim";

// parent.append(newEl,newEl2,"test abhisek");
// console.log(parent.children)
// const myFunc=(parent,btn)=>{
//     alert("hi button")
//   parent.removeChild(btn)

// }
// let parent=document.getElementById("buttonContainer");
// let btn=document.createElement("button");
// btn.innerText="Submit";
// btn.addEventListener("click",()=>{
//     myFunc(parent,btn)
// })
// parent.appendChild(btn);

document.getElementById("userForm").addEventListener("submit",function(event){
    event.preventDefault();

    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const age=document.getElementById("age").value;
    const city=document.getElementById("city").value;
    
    // console.log(name,email,age,city);
    

    const userList=document.getElementById("userList");
    const li=document.createElement("li");
    li.textContent=`Name:${name}, Email: ${email}, Age:${age},City:${city}`;

    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.style.marginLeft="10px";

    deleteBtn.onclick= function(){
        userList.removeChild(li);
    }
    li.appendChild(deleteBtn);
      userList.appendChild(li);
      document.getElementById("userForm").reset();

})
