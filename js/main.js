$(document).ready(function () {
      
    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
    
    
    //ANIMATION 
    
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animation');
            //var delay = $(this).attr('data-delay');
            if (position < scroll + windowHight - 60) {
                $(this).addClass(animation);
                //$(this).css('animation-delay', delay);
            }
        });
    }//end of animation function

    animation();

    $(window).scroll(function () {
        animation();
    });
    
    
  // SEARCH FORMA
  $('.search-icon').click(function(){
      $(this).next().slideToggle();
      $('.small-cart').removeClass('active');
      $('.body-overlay').hide(0);
  });
      
   // PRIKAZ KORPE 
    $('.small-cart-icon').click(function(){
        $(this).next().addClass('active');
        $('.body-overlay').show(0);
        $('.search-form').slideUp(); // da kad se klikne na formu skloni se korpa i obrnuto
    });
    
    $('.close-small-cart').click(function(){
        $(this).parent().removeClass('active');
        $('.body-overlay').hide(0);
    });
  
  
  // prikazivanje submenu-ja
  $('.navbar-nav').on('click', '.toggle-submenu', function(e){
      e.preventDefault();
      $(this).toggleClass('fa-angle-down fa-angle-up');
      $(this).parent().next('.submenu').slideToggle();
  });
    
    
    // za kolicinu koja se dodaje u korpu (brojevi)
    
    $('.q-minus').click(function(e){
        e.preventDefault();
        var quantity = $(this).parent().next().val();
        if(!isNaN(quantity)){
           
            quantity = parseFloat(quantity);
            
            if(quantity > 1){
                quantity--;
                $(this).parent().next().val(quantity);
            }
            
        }else{
            $(this).parent().next().val(1);
        }
        
    });
    
    
    $('.q-plus').click(function(e){
        e.preventDefault();
        var quantity = $(this).parent().prev().val();
        
        if(!isNaN(quantity)){
            quantity = parseFloat(quantity);
            quantity ++;
            $(this).parent().prev().val(quantity);
        }else{
            $(this).parent().prev().val(1);
        }
    });
    if ($('.owl-carousel').length > 0) {


        $('.lead-slider').owlCarousel({

            items: 1,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true

        });
    }//end lead-slider
    
    

});//end document.ready


