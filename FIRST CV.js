document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const home = document.querySelector(".Home");
const about = document.querySelector(".About");
const skills = document.querySelector(".Skills");
const experience = document.querySelector(".Experience");
const education = document.querySelector(".Education");
const portfolio = document.querySelector(".Portfolio");
const contact = document.querySelector(".Contact");
const backBtn = document.querySelector(".backBtn");

home.onclick = () => {
    document.getElementById("Home").scrollIntoView({behavior:"smooth"})
    home.style.display = "flex-start"
}

about.onclick = () => {
    document.getElementById("About").scrollIntoView({ behavior:"smooth"})
}
skills.onclick = () => {
    document.getElementById("Skills").scrollIntoView({behavior:"smooth"})
}
experience.onclick = () => {
    document.getElementById("Experience").scrollIntoView({behavior:"smooth"})
}
education.onclick = () => {
    document.getElementById("Education").scrollIntoView({behavior:"smooth"})
}
portfolio.onclick = () => {
    document.getElementById("Portfolio").scrollIntoView({behavior:"smooth"})
}
contact.onclick = () => {
    document.getElementById("Contact").scrollIntoView({behavior:"smooth"})
}
backBtn.onclick = () =>{

}
