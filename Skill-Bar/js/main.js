$(document).ready(function () {

    //navbar background change from transparent to solid
    var $document = $(document),
        $element = $('.navbar'),
        navbarDefault = 'navbar-default';
        navbarTransparent = 'navbar-transparent';
        fadeInDown = 'fadeInDown';



    $document.scroll(function () {
        if ($document.scrollTop() >= 100) {
            $element.addClass(navbarDefault);
            $element.removeClass(navbarTransparent);
            $element.addClass(fadeInDown);
        } else {
            $element.addClass(navbarTransparent);
            $element.removeClass(navbarDefault);
            $element.removeClass(fadeInDown);
        }
    })

    //navbar background change from transparent to solid end

    //header caption
    $(window).scroll(function(){
        if($(this).scrollTop() >= 100){
            $('.navbar-default').css("box-shadow: 1px 1px 11px #474747;");
            $("#logo").css("opacity","0");
            $("#logo2").css("opacity","1");

        } 
        else{
            
            $('.navbar-default').css("box-shadow","0px 0px 0px");
            $("#logo").css("opacity","1");
            $("#logo2").css("opacity","0");
            
        }
    }); 


      $(window).scroll(function(){
        if($(this).scrollTop() > 10){
            $("#masthead-caption").css("margin-top","19rem").css("opacity","0");
            $('.button-aboutme33').css("margin-top","8rem").css("opacity","0");


        } 
        else{
            $("#masthead-caption").css("margin-top","17rem").css("opacity","1");
            $('.button-aboutme33').css("margin-top","5rem").css("opacity","1");
        }
    }); 





    // end of header
   var offsetTop = $('.skill-area').offset().top;

    $(window).scroll(function () {
        var height = $(window).height();
        if ($(window).scrollTop() + height >= offsetTop) {
           //html
           $('.skillbar-bar1').css("width","80%");
           //php
           $('.skillbar-bar2').css("width","70%");
           //mysql
           $('.skillbar-bar3').css("width","50%");
           //css
           $('.skillbar-bar4').css("width","75%");
           //javasript
           $('.skillbar-bar5').css("width","60%");
           //typscript
           $('.skillbar-bar6').css("width","50%");
           //jquery
           $('.skillbar-bar7').css("width","50%");
           //bootstrap
           $('.skillbar-bar8').css("width","55%");
           //Photoshop
           $('.skillbar-bar9').css("width","80%");

        } 
        else{
           $('.skillbar-bar1').css("width","0%");
           $('.skillbar-bar2').css("width","0%");
           $('.skillbar-bar3').css("width","0%");
           $('.skillbar-bar4').css("width","0%");
           $('.skillbar-bar5').css("width","0%");
           $('.skillbar-bar6').css("width","0%");
           $('.skillbar-bar7').css("width","0%");
           $('.skillbar-bar8').css("width","0%");
        }
    }); 

    
    //smooth-scrolling
    var scrollLink = $('.scroll');
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    })

    //smooth-scrolling end 



    //highlight nav-links
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 50;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })

    //highlight nav-links end


    // skillbar animation

    // skillbar end

    

    // for WOW.js library ie: fadeInUp
    
    new WOW().init();

    // WOW.js library end
    
    
    // for baguetteBox.js library ie: certificates section


    // WOW.js library end
    

});



