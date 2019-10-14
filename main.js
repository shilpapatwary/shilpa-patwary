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
     $('#contact_form').on('submit', function(e) {
        e.preventDefault();
        $('.loading').show();
        const form = $('#contact_form');
        const url = "https://script.google.com/macros/s/AKfycbybU6KFMDUArUMdo87OcHtM97okKqcHELE-D-V5Tw/exec";
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function(data) {
                $(".success").show().delay(4000).hide();
                $('.loading').hide();
                $('.success').show();
                setTimeout(function() {
                    $('.success').fadeOut('fast');
                }, 3000); 
                form.trigger("reset");
            }
        })
        
     })
});
   
