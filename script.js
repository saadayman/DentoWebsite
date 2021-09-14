$('#toggle-btn').click(()=>{
     
    $('.mobile-nav').toggleClass('show')
})
$(window).click(function(e){
   
    if(!e.target.classList.contains('toggle-btn')){
        $('.mobile-nav').removeClass('show')
    }
})

window.addEventListener('scroll',(e)=>{
    if(window.scrollY > 500){
        $('.mobile-nav').addClass('fixed')
    }
    else{
        $('.mobile-nav').removeClass('fixed')
    }
})