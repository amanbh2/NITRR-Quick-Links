//Database
const contributors = [
    {
        Name: "Aman Bhaskar",
        Email: "amanbh2@gmail.com",
        Score: 1
    },
    {
        Name: "Ritik Shrivastav",
        Email: "ritikshrivastava5@gmail.com",
        Score: 1
    },
    {
        Name: "Rishabh Siddharth",
        Email: "rishabhsiddharth9@gmail.com",
        Score: 1
    }
]

const listbox = document.getElementById("listbox");
const searchbox = document.getElementById("searchInput");
const searchbtn = document.getElementById("searchbtn");

searchbtn.addEventListener('click', searchcontributorsfn);


function displaycontributor(contributor){
    const contributorlistDiv = document.createElement('div');
	contributorlistDiv.classList.add("liststyle");
    contributorlistDiv.innerHTML = `<h6>${contributor.Name}</h6>
    <p>${contributor.Email}</p>
    <p>${contributor.Score} Contributions</p>`;

    listbox.appendChild(contributorlistDiv);    
}
function looptoshow(contributors){
    contributors.sort(function(a,b){
        return (b.Score)-(a.Score)
    })
    for(var i=0;i<contributors.length;i++){
        displaycontributor(contributors[i]);
    }
}

looptoshow(contributors);

function removecontactlist(){
    t=listbox.childElementCount;
    for(var i=0;i<t;i++){
        listbox.removeChild(listbox.children[0]);
    }
}
function getsearchitem(){
    return searchbox.value;
}
function looptodisplay(contributors,query){
    for(var i=0;i<contributors.length;i++){
        contactname=contributors[i].Name.toLowerCase();
        n=contactname.search(query);
        if(n>=0){
            displaycontributor(contributors[i]);
        }
    }
}
function searchcontributorsfn(e){
    e.preventDefault();
    query=getsearchitem().toLowerCase();
    removecontactlist();
    looptodisplay(contributors,query)
}