const menu = document.querySelector(".menu")
const navOpen = document.querySelector(".hamburger")
const navClose = document.querySelector(".close")
const navBar = document.querySelector(".navbar")
const navLink = document.querySelector(".nav-list")
// const navItem = document.querySelector(".nav-link")
const home = document.getElementById('navHome')
const skills = document.getElementById("navSkills")
const about = document.getElementById("navAbout")
const project = document.getElementById("navProject")
const github = document.getElementById("navGithub")
const contact = document.getElementById("navContact")




const bd = document.getElementById("bd")
const bd2 = document.getElementById("bd2")

bd.addEventListener('click', () => {
  menu.classList.remove("show")
})

window.addEventListener('scroll', () => {
  //home
  if( window.pageYOffset >=58 && window.pageYOffset <571){
    home.classList.add("highlight")
  }else {
    home.classList.remove("highlight")
  }
  //about
  if(window.pageYOffset >=571 && window.pageYOffset <= 1280){
    about.classList.add("highlight")
  }else {
    about.classList.remove("highlight")
  }
  //skills
  if(window.pageYOffset >=1282 && window.pageYOffset <= 1869){
    skills.classList.add("highlight")
  }else {
    skills.classList.remove("highlight")
  }
  //project
  if(window.pageYOffset >=1871 && window.pageYOffset <= 2519){
    project.classList.add("highlight")
  }else {
    project.classList.remove("highlight")
  }

  //github
  if(window.pageYOffset >=2520 && window.pageYOffset <= 2800){
    github.classList.add("highlight")
  }else {
    github.classList.remove("highlight")
  }

  //contact
  if(window.pageYOffset >=2800){
    contact.classList.add("highlight")
  }else {
    contact.classList.remove("highlight")
  }
})

bd2.addEventListener('click', () => {
  menu.classList.remove("show")
})

navOpen.addEventListener('click', () => {
  menu.classList.add("show");
})

navClose.addEventListener('click', () => {
  menu.classList.remove("show")
})

navLink.addEventListener('click', () => {
  menu.classList.remove("show")
})



//navbar fixation 
const navHeight = navBar.getBoundingClientRect().height
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset
  if(scrollHeight > navHeight){
    navBar.classList.add('fix-nav')
  }else{
    navBar.classList.remove('fix-nav')
  }
})

//GlideJs

const glide = document.querySelector(".glide")
if(glide)
  new Glide(glide, {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: 'ease-in-out',
    breakpoints: {
      996:{
        perView: 2
      },
      768: {
        perView: 1
      },
    },
  }).mount()

new TypeIt("#type1", {
    speed: 120,
    loop: true,
    waitUntilVisible: true
}).type("Full Stack Developer", {delay: 400}).pause(500).delete(20).type('Web Developer', {delay: 400}).pause(500).delete(9).go()

gsap.from(".logo", {opacity : 0, duration: 1, delay:0.5, y:-10})
gsap.from(".hamburger", {opacity : 0, duration: 1, delay:1, x:20})
gsap.from(".banner", {opacity : 0, duration: 1, delay:1.5, x:-200})
gsap.from(".hero h3", {opacity : 0, duration: 1, delay:2, y:-50})
gsap.from(".hero h1", {opacity : 0, duration: 1, delay:2.5, y:-45})
gsap.from(".hero h4", {opacity : 0, duration: 1, delay:3, y:-30})
gsap.from(".hero a", {opacity : 0, duration: 1, delay:3.5, y:50})

gsap.from(".nav-item", {opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2})
gsap.from(".icons span", {opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2})



