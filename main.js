$(document).ready(function(){
    function scrollToAnchor(aid){
        var aTag = $(`${aid}`);
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }
    
    $(".nav__link").on('click', function(e) {
       let elem = $(e.currentTarget).find('a');
       $('.nav__link a').removeClass('active');
       elem.addClass('active');
       scrollToAnchor(elem.attr('href'));
    });
    $(".move_to_top").on('click', function(e) {
        $('.nav__link a').removeClass('active');
        scrollToAnchor('#about');
     });
     
});
   
