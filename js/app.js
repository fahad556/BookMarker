// verilbs
var nameInput = document.getElementById('siteName');
var urlInput = document.getElementById('siteUrl');
var nameOutput = document.getElementById('nameError');
var urlOutput = document.getElementById('urlError');
// var bookContainer =[];
if (localStorage.getItem('data') == null) {
    var bookContainer = [];
}
else{
    var bookContainer = JSON.parse(localStorage.getItem('data'));
    desblyBook();
}
function submit() {
  var bookList = {
      name: nameInput.value,
      url: urlInput.value,
  };
  localStorage.setItem("data", JSON.stringify(bookContainer));
  bookContainer.push(bookList);
console.log(bookContainer);
desblyBook();
urlErrorOutput();
nameErrorOutput();
}
function desblyBook(){
    var trs ='';
    for (var i = 0; i < bookContainer.length; i++){
        trs +=`<tr>
        <td>${bookContainer[i].name}</td>
        <td>${bookContainer[i].url}</td>
        <td><a class="btn btn-primary" href="${bookContainer[i].url}">visit</a></td>
       <td> <button class="btn btn-danger" onclick="deleteBook(${i})">Delet</button></td>
    </tr>`
    }
    document.getElementById('tbody').innerHTML = trs;
}
function deleteBook(index) {
    
    bookContainer.splice(index, 1);
    desblyBook()
    alert('Delete');
    
    localStorage.setItem("data", JSON.stringify(bookContainer));

}
function nameErrorOutput() {
    if(nameInput.value==''){
        nameOutput.classList.replace('d-none','d-inline-block')
        nameOutput.innerHTML = "Name is required";
        }
        else{
            
        }

}
function urlErrorOutput() {
    if(urlInput.value==''){
        urlOutput.classList.replace('d-none','d-inline-block')
        urlOutput.innerHTML = "url is required";
        }

}

