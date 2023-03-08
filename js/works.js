let data;
let descListActive = false;

let modalMenu;
let closeBtn; 

let descDropBtn;
let listDropBtn;

let projTitle;
let projCreated;
let projTech;
let projList;
let projDesc;
let projImg;
let link;
let modalGitLink;

let switchBtn;

//Uses the fetch API to get JSON data at the given URL
const fetchData = async (url) => {
    const rawData = await fetch(url);
    return await rawData.json();
}

const clearProjectDivs = () => {

}

const createProjectDiv = (targetElement, projObj) => {

}

//Sets the data in the modal menu
const setModalData = (projObj, listActive) => {
    //Project Title
    projTitle.innerHTML = projObj.title;

    //Project Created
    projCreated.innerHTML = projObj.created;

    //Project Image
    projImg.src = projObj.img;

    //Project Technology
    projTech.innerHTML = projObj.tech;

    //Project About
    //List
    projList.style.display = "block";
    projList.innerHTML = "";
    for (let i = 0; i < projObj.points.length; i++){
        let newLi = document.createElement("li");
        newLi.innerHTML = projObj.points[i];
        projList.appendChild(newLi);
    }

    //Written Description
    projDesc.style.display = "block";
    projDesc.innerHTML = projObj.details;

    if(listActive){
        projDesc.style.display = "none";
    }
    else{
        projList.style.display = "none";
    }

    //Links
    link.href = projObj.link;

    if(projObj.git != undefined) {
        modalGitLink.style.display = "block";
        modalGitLink.href = projObj.git;
    }
    else{
        modalGitLink.style.display = "none";
    }
};

//Toggles the type of description in the modal menu
const switchDesc = () => {
    if(descListActive){
        switchBtn.innerHTML = "Switch to bullets";
        descListActive = false;
        projList.style.display = "none";
        projDesc.style.display = "block";
    }
    else{
        switchBtn.innerHTML = "Switch to description";
        descListActive = true;
        projDesc.style.display = "none";
        projList.style.display = "block";
    }
};

const closeModal = () => {
    modalMenu.classList.add("is-hidden");
}

const openModal = () => {
    modalMenu.classList.remove("is-hidden");
}

window.onload = async () => {
    data = await fetchData("../data/works.json");

    modalMenu = document.getElementById("modalMenu");

    projTitle = document.getElementById("modalTitle");
    projCreated = document.getElementById("modalCreated");
    projTech = document.getElementById("modalTech");
    projList = document.getElementById("modalList");
    projDesc = document.getElementById("modalDesc");
    projImg = document.getElementById("modalImg");

    link = document.getElementById("modalLink");
    modalGitLink = document.getElementById("modalGitLink");

    switchBtn = document.getElementById("switchBtn");
    closeBtn = document.getElementById("closeBtn");

    switchBtn.onclick = switchDesc;
    closeBtn.onclick = closeModal;

    //setModalData(data.games.content[2], descListActive);
    //console.log(data);
};