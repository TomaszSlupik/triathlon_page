let root = document.documentElement;

const scrollBar = () => {
    const scroll = window.scrollY

    const lefttoScroll = document.body.getBoundingClientRect().height - window.innerHeight
    
    const scrollWidth = Math.floor((scroll/lefttoScroll) *100)

    root.style.setProperty('--scroll-width', `${scrollWidth}%`)

}
window.addEventListener('scroll', scrollBar)


export default scrollBar