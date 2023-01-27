const container = document.querySelector('.container');
const firstDisplay = container.querySelector('.first-display');
const menuDisplay = container.querySelector('.menu-display');

const displayMenu = (e) => {
    // console.log(e.currentTarget)
    if (e.currentTarget.classList.contains("hidden")) {
        e.currentTarget.classList.remove("hidden");
        menuDisplay.style.display = "none"
    } else {
        e.currentTarget.classList.add('hidden')
        menuDisplay.style.display = "flex"
    }
}
firstDisplay.addEventListener('click', displayMenu)