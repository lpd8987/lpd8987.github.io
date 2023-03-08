let data;

//Uses the fetch API to get JSON data at the given URL
const fetchData = async (url) => {
    const rawData = await fetch(url);
    return await rawData.json();
}

const clearProjectDivs = () => {

}

const createProjectDiv = (targetElement, projObj, listActive) => {

}

const setModalData = (projObj, listActive) => {
    //Project Title
    let projTitle = document.getElementById("modalTitle");
    projTitle.innerHTML = projObj.title;

    //Project Created
    let projCreated = document.getElementById("modalCreated");
    projCreated.innerHTML = projObj.created;

    //Project Technology
    let projTech = document.getElementById("modalTech");
    projTech.innerHTML = projObj.tech;

    //Project About
    //List
    let projList = document.getElementById("modalList");
    projList.style.display = "block";
    projList.innerHTML = "";
    for (let i = 0; i < projObj.points.length; i++){
        let newLi = document.createElement("li");
        newLi.innerHTML = projObj.points[i];
        projList.appendChild(newLi);
    }

    //Written Description
    let projDesc = document.getElementById("modalDesc");
    projDesc.style.display = "block";
    projDesc.innerHTML = projObj.details;

    if(listActive){
        projDesc.style.display = "none";
    }
    else{
        projList.style.display = "none";
    }

    //Links
    let link = document.getElementById("modalLink");
    link.href = projObj.link;

    let modalGitLink = document.getElementById("modalGitLink");
    if(projObj.git != undefined) {
        modalGitLink.style.display = "block";
        modalGitLink.href = projObj.git;
    }
    else{
        modalGitLink.style.display = "none";
    }
};

window.onload = async () => {
    data = await fetchData("../data/works.json");

    setModalData(data.games.content[0], true);
    //console.log(data);
};