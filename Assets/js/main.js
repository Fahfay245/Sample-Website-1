let inputText = document.querySelector("#inputName");
let subBtn = document.querySelector("#subBtn");
let doneBtn = document.querySelector("#doneBtn");
let div = document.querySelector(".notification");

subBtn.addEventListener('click',() => {
    let name1 = inputText.value;
    if (doneBtn.classList.contains("hide")) {
        doneBtn.classList.remove("hide");
    }
   let Text1 = document.createElement('div')
   Text1.className = "alert";
   Text1.textContent = `Thank you ${name1}. Your response has been submitted! Click "Done!" to Exit.`;

   div.append(Text1);
});

doneBtn.addEventListener('click',()=>{
    doneBtn.classList.add("hide");
    div.remove("Text1");
    location.reload();
});


 