const navList = document.querySelector('#Nav ul')

const navBtn = document.querySelector('.btn-nav')

navBtn.addEventListener("click", function(){
    // console.log(navList)
    // navList.style.display = "none";
    if(navList.classList.contains("nav-phone_inactive")){
        // console.log("object")
        navList.classList.remove("nav-phone_inactive")
        navList.classList.add("nav-phone_active")
    } else {
        navList.classList.add("nav-phone_inactive")
        navList.classList.remove("nav-phone_active")
    }

    const toggleNavBtn = document.querySelector("#Nav-btn i");
    console.log(toggleNavBtn);

    if(toggleNavBtn.classList.contains('fa-bars')) {
        toggleNavBtn.classList.remove("fa-bars")
        toggleNavBtn.classList.add("fa-times")
    } else {
        toggleNavBtn.classList.remove("fa-times")
        toggleNavBtn.classList.add("fa-bars")
    }
})
