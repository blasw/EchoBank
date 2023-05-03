let sections = document.querySelectorAll('section');
let currentSectionIndex = 0;
let isScrolling = false;

function scrollToSection(sectionIndex) {
    isScrolling = true;
    sections[sectionIndex].scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        isScrolling = false;
    }, 500);
}

if(window.innerWidth > 800 && !navigator.userAgent.includes('Firefox')){
    window.addEventListener("wheel", (event) => {
        event.preventDefault();  
        let direction = event.deltaY > 0 ? "down" : "up";
        if (!isScrolling) {
            if (direction === "down" && currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
                scrollToSection(currentSectionIndex);
            } else if (direction === "up" && currentSectionIndex > 0) {
                currentSectionIndex--;
                scrollToSection(currentSectionIndex);
            }
        }
    }, {passive : false});
}