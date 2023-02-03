// ====================== Change Background Header ============================
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// ====================== Service Modal ============================
const modalViews = document.querySelectorAll('.services__modal');
modalBtns = document.querySelectorAll('.services__button');
modalClose = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener("click", ()=>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener("click", ()=>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal');
        })
    })
})



// ====================== Mix it up filter portfolio ============================
let mixerPortfolio = mixitup(".work__container", {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});



/* Link active Work */
const linkWork = document.querySelectorAll(".work__item")

function activeWork(){
    linkWork.forEach()
}


// ====================== Swiper testimonial ============================



// ====================== scroll sections active link ============================




// ======================  ============================




// ====================== Change Background Header ============================





// ====================== Change Background Header ============================
