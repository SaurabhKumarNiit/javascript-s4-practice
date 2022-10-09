let noteList = [];

let view = "grid"; //default view is grid-view



function saveNote() {
    let Title = document.querySelector("#title").value;
    let Content = document.querySelector("#content").value;
    // let confirmPassword = document.querySelector("#confirmPassword").value;

    if(Title == null || Title==""){
        let userElemnt = document.querySelector("#username");
        userElemnt.style.border="2px solid red";
        document.querySelector("#usernameSpan").innerHTML="User name cannot be blank";
        return false
    }

    else if(Content.length < 6)
    {
        document.querySelector("#contentSpan").innerHTML="Content should be of lenght minimum 5";
        document.querySelector("#content").style.border="2px solid red";
        return false;
    }

else{
    let id=0;
   // let userDetails=[];
    let user = {
        "id":id,
        "Title":Title,
        "Content":Content
    };
    id = id+1;
    noteList.push(user);
    console.log(noteList)
  alert("To do List submitted");
  document.querySelector("form").reset();
  return false;
} 
}

function deleteNote(id) {
    let divs = document.querySelectorAll("section");
for(let i=0; i<divs.length; i++)
{
    divs[i].remove();
}
    noteList.splice(id, 1);
    noteList.forEach(user=>{
        console.log(user.id);
        let section = document.createElement("section");
        let body = document.querySelector(".accordion-body");
        body.appendChild(section);

        let h2 = document.createElement("h2");
        let h2Text = document.createTextNode(user.Title);
        h2.appendChild(h2Text);
        section.appendChild(h2);

        let p = document.createElement("p");
        let pText = document.createTextNode(user.Content);
        p.appendChild(pText);
        section.appendChild(p);

        let btn = document.createElement("button");
        let btntext = document.createTextNode("Delete user");
        btn.appendChild(btntext)
        section.appendChild(btn);
    })
}

function clearFields() {

    
    
}
function fetchNotes() {

    let section = document.querySelector("section");
    if(section != null){
    section.remove();
    }

    noteList.forEach(user=>{
        let section = document.createElement("section");
        let body = document.querySelector(".accordion-body");
        body.appendChild(section);

        let h2 = document.createElement("h2");
        let h2Text = document.createTextNode(user.Title);
        h2.appendChild(h2Text);
        section.appendChild(h2);

        let p = document.createElement("p");
        let pText = document.createTextNode(user.Content);
        p.appendChild(pText);
        section.appendChild(p);

        let btn = document.createElement("button");
        let btntext = document.createTextNode("Delete user");
        btn.appendChild(btntext);
        btn.addEventListener("click", function(){
            deleteNote(user.id);
        })
        section.appendChild(btn);

    });
    
}

function loadNoteData() {
    
}

function updateNoteData(note) {
    
}

function createNoteCard(note) {
    
}

function toggleView() {
    
}
