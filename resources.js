//Database
const resourceitems = [
    {
        Title: "Introduction to Algorithm",
        Author: "Thomas H. Cormen & others",
        Link: "https://drive.google.com/file/d/1m5TmmL2pd4p0j2XLdj7v1e--uJtCPDNr/view?usp=sharing"
    },
    {
        Title: "Let Us C",
        Author: "Yashavant Kanetkar",
        Link: "https://drive.google.com/file/d/19P8z-XaxwdIEbV3IF07_l0Fxa03A2YYM/view?usp=sharing"
    },
    {
        Title: "A Textbook of Fluid Mechanics and Hydraulic Machines",
        Author: "R. K. Bansal",
        Link: "https://drive.google.com/file/d/1V1qpxv-jgvup8o-7PGtNu2EQ9bXuEKWY/view?usp=sharing"
    }
]

const listbox = document.getElementById("listbox");
const searchbox = document.getElementById("searchInput");
const searchbtn = document.getElementById("searchbtn");

searchbtn.addEventListener('click', searchresitemsfn);


function displayresitem(resitem){
    const resitemlistDiv = document.createElement('div');
	resitemlistDiv.classList.add("liststyle");
    resitemlistDiv.innerHTML = `<h6>${resitem.Title}<a href="${resitem.Link}" target="blank"><span class="material-icons" id="downloadbtn">get_app</span></a></h6>
    <p>${resitem.Author}</p>`;

    listbox.appendChild(resitemlistDiv);    
}
function looptoshow(resitems){
    for(var i=0;i<resitems.length;i++){
        displayresitem(resitems[i])
    }
}

// looptoshow(resourceitems);

function removeresitemlist(){
    t=listbox.childElementCount;
    for(var i=0;i<t;i++){
        listbox.removeChild(listbox.children[0]);
    }
}
function getsearchitem(){
    return searchbox.value;
}
function looptodisplay(resitems,query){
    for(var i=0;i<resitems.length;i++){
        contactname=resitems[i].Title.toLowerCase();
        n=contactname.search(query);
        if(n>=0){
            displayresitem(resitems[i]);
        }
    }
}
function searchresitemsfn(e){
    e.preventDefault();
    query=getsearchitem().toLowerCase();
    removeresitemlist();
    looptodisplay(resourceitems,query)
}