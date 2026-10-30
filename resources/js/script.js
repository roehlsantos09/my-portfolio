// CTA scroll
document.getElementById("cta-btn").onclick = () => {
    document.getElementById("portfolio").scrollIntoView({behavior:"smooth"});
};

// DARK MODE
document.getElementById("dark-toggle").onclick = () => {
    document.body.classList.toggle("light");
};

// VIDEO MODAL
const modal = document.getElementById("video-modal");
const frame = document.getElementById("video-frame");

document.querySelectorAll(".project").forEach(card => {
    card.addEventListener("click", () => {
        const id = card.dataset.video;
        frame.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
        modal.style.display = "flex";
    });
});

document.getElementById("close-modal").onclick = () => {
    modal.style.display = "none";
    frame.src = "";
};

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
    entries.forEach(e=>{
        if(e.isIntersecting){
            e.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade").forEach(el=>{
    observer.observe(el);
});

// ACTIVE NAV
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(sec=>{
        if(scrollY >= sec.offsetTop - 100){
            current = sec.id;
        }
    });

    links.forEach(a=>{
        a.classList.remove("active");
        if(a.getAttribute("href").includes(current)){
            a.classList.add("active");
        }
    });
});