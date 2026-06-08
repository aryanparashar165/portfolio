// Fade-in animation

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.15
}

);

document.querySelectorAll(".section")
.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
