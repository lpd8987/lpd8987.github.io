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

let contentDivA;
let contentDivB;

//Uses the fetch API to get JSON data at the given URL
const fetchData = async (url) => {
    const rawData = await fetch(url);
    return await rawData.json();
}

const clearProjectDivs = () => {
    //TODO- eventually will make page flip between game and web projects
}

const createProjectDiv = (targetParent, projObj) => {
    let newDiv = document.createElement("div");

    //let img = document.createElement("img");
    //img.src = projObj.img;
    //img.alt = `Picture of ${projObj.title}`;
    //newDiv.appendChild(img);

    let h2 = document.createElement("h1");
    h2.innerHTML = projObj.title;
    h2.classList.add("has-text-white")
    newDiv.appendChild(h2);
    
    let h3 = document.createElement("p");
    h3.innerHTML = projObj.created;
    h3.classList.add("has-text-white")
    h2.appendChild(h3);

    //newDiv.style.width = "100vw";
    newDiv.style.height = "90px";
    newDiv.classList.add("button", "is-outlined", "is-fullwidth", "is-light", "m-1", "p-1");

    targetParent.appendChild(newDiv);
    newDiv.onclick = () => {openModal(projObj)};
}

const addGameProjects = () => {
    let gameHeader = document.createElement("h1");
    gameHeader.innerHTML = data.games.description;
    gameHeader.classList.add("has-text-light", "m-3");
    contentDivA.appendChild(gameHeader);
    for(let i = data.games.content.length-1; i > -1; i--){
        createProjectDiv(contentDivA, data.games.content[i]);
    }
}

const addWebProjects = () => {
    let webHeader = document.createElement("h1");
    webHeader.innerHTML = data.webApps.description;
    webHeader.classList.add("has-text-light", "m-3");
    contentDivB.appendChild(webHeader);
    for(let i = data.webApps.content.length-1; i > -1; i--){
        createProjectDiv(contentDivB, data.webApps.content[i]);
    }
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

const openModal = (projObj) => {
    setModalData(projObj, false)
    modalMenu.classList.remove("is-hidden");
}

window.onload = async () => {
    data = await fetchData("../data/works.json");

    modalMenu = document.getElementById("modalMenu");
    modalMenu.style.position = "sticky";
    modalMenu.style.zIndex = "1000";


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

    contentDivA = document.getElementById("contentDivA");
    contentDivB = document.getElementById("contentDivB");

    addGameProjects();
    addWebProjects();
};