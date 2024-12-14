
const navBlog = document.getElementById('nav-blog')
const navAbout = document.getElementById('nav-about')
const navContact = document.getElementById('nav-contact')
const navServices = document.getElementById('nav-services')
const mainExploreButton = document.querySelector('.main-cleaning-expert-container div #explore-button')
const homeRefreshButton = document.querySelector('.home-refresh-container .right-container #explore-button')
const officeCleanersButton = document.querySelector('.office-cleaners-container .left-container #explore-button')


navAbout.addEventListener('click', () => {
    const aboutContainer = document.getElementById('about-container')
    aboutContainer.scrollIntoView({behavior: 'smooth', block: 'start'})
})

navServices.addEventListener('click', () => {
    const servicesContainer = document.getElementById('services-container')
    servicesContainer.scrollIntoView({behavior: 'smooth', block: 'start'})
})

navBlog.addEventListener('click', () => {
    const blogContainer = document.getElementById('blog-container')
    blogContainer.scrollIntoView({behavior: 'smooth', block: 'start'})
})

navContact.addEventListener('click', () => {
    const contactContainer = document.getElementById('contacts-container')
    contactContainer.scrollIntoView({behavior: 'smooth', block: 'start'})
})

mainExploreButton.addEventListener('click', () => {
    const faqsContainer = document.getElementById('faqs-container')
    faqsContainer.scrollIntoView({behavior: 'smooth', block: 'start'})
})

homeRefreshButton.addEventListener('click', () => {
    const target = 'https://youtu.be/i_1fhtrgIE8?si=aWsuPXeGoy9usuod'
    window.open(target)
})

officeCleanersButton.addEventListener('click', () => {
    const target = 'https://youtu.be/4t2U-TKDmUg?si=KnoU1JH9fsEqYNXo'
    window.open(target)
})