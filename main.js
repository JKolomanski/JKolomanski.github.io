function spaceWarButtonClicked(){
    window.open('https://github.com/JKolomanski/SpaceWar')
}

function mapGeneratorButtonClicked(){
    window.open('https://github.com/JKolomanski/MapGeneretor')
}

function JKolomanskiGithubIoButtonClicked(){
    window.open('https://github.com/JKolomanski/JKolomanski.github.io')
}

function redirectToAbout() {
    window.location.replace('About/');
}

function displayNavBar() {
    fetch("../Navbar/navbar.html")
        .then((response) => response.text())
        .then(
          (text) =>
            (document.getElementById("navbarContainer").innerHTML = text)
        );
}