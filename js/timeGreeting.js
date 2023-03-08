let today = new Date();
let time;

let greetingElement;

const getTime = () => {
    return today.getHours();
};

//Displays a greeting to the user depending on the time of day
const displayGreeting = (time) => {
    if(time > 4 && time < 12){
        return `Good Morning!&nbsp<i class="fas fa-coffee"></i>`;
    }
    else if(time < 16){
        return `Good Afternoon!&nbsp<i class="fas fa-sun fa-lg"></i>`;
    }
    else if(time < 20){
        return `Good Evening!&nbsp<i class="fas fa-gamepad fa-lg"></i>`;
    }
    else{
        return `Good Evening!&nbsp<i class="fas fa-moon fa-lg"></i>`;
    }
};

window.onload = () => {
    time = getTime();

    greetingElement = document.getElementById("greeting");
    greetingElement.innerHTML = displayGreeting(time);
};
