function displayNavBar() {
    fetch("../Navbar/navbar.html")
        .then((response) => response.text())
        .then(
          (text) =>
            (document.getElementById("navbarContainer").innerHTML = text)
        )
        .then( () => {
            const currentUrl = window.location.href;
            if (currentUrl.includes('About')) {
                underlineAboutBtn();
            }

            else if (currentUrl.includes('Projects')) {
                underlineProjectstBtn();
            }
        })
}

function aboutButtonClicked() {
   window.location.replace("../About/");
}

function projectsButtonClicked() {
    window.location.replace("../Projects/");
}

function underlineAboutBtn() {
    let aboutBtn = document.getElementById('aboutBtn');
    aboutBtn.classList.add('underline');
    let ProjectsBtn = document.getElementById('projectsBtn');
    ProjectsBtn.classList.remove('underline');

}

function underlineProjectstBtn() {
    let aboutBtn = document.getElementById('aboutBtn');
    aboutBtn.classList.remove('underline');
    let ProjectsBtn = document.getElementById('projectsBtn');
    ProjectsBtn.classList.add('underline');
}