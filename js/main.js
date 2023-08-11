let nameBookInput = document.getElementById("nameBook");
let addBtn = document.getElementById("addBtn");
// let checkInput = document.getElementById("checkInput");
console.log(checkInput);
// let search ="";
// searchBook.addEventListener('oninput',function(e){
//    search = e.target.value;
//    console.log(search);
// })

let books = [];
 if (localStorage.getItem("namesBook") != null) {
  books = JSON.parse(localStorage.getItem("namesBook"));
  display()
}
addBtn.addEventListener("click", function () {
  var book = {
    name: nameBookInput.value,
  };
  books.push(book);
  console.log(books);
  localStorage.setItem("namesBook", JSON.stringify(books));
  clear();
  display();
});

function display() {
    let checkInput='';
  for (let i = 0; i < books.length; i++) {
    checkInput += `
    <ul class="d-flex justify-content-between align-items-center mb-3">
    <li class="list-unstyled">${books[i].name}</li>
    <i class="fa-solid fa-xmark" onclick=Delete(${i})></i>
  </ul>
    `;
  }
  document.getElementById('checkInput').innerHTML=checkInput;
}
checkInput.addEventListener('click',function(e){
    e.target.classList.toggle("checked")

})
function clear() {
  nameBookInput.value = "";
}

function Delete(index){
    books.splice(index,1);
    localStorage.setItem("namesBook", JSON.stringify(books));
  
    display();
}