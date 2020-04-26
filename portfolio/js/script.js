$(document).ready(function(){
    $('.dropdown-content a').on('click', function(){
        window.location = $(this).attr('href');
        
        // Current class assignment
        $('dropdown-content a.current').removeClass('current');
        $(this).parent().addClass('current');

        // Set heading text
        $('#heading').text($(this).text()); // (this) OR 'nav li.current'
        // console.log($(this).text());

        // Get and filter link text
        var category = $(this).text().toLowerCase().replace(' ', '-');
        
        // Remove hidden class if 'all-projects' is selected
        if(category == 'all-projects'){
            $('ul#gallery li:hidden').removeClass('hidden').fadeIn('slow');
        } else {
            $('ul#gallery li').each(function(){
                if(!$(this).hasClass(category)){ // if this doesn't have a class that matches a "category"
                    $(this).hide().addClass('hidden');
                } else {
                    $(this).removeClass('hidden').fadeIn('slow');
                }
            });
        }
        // Stop link behaviour
        return false; 
    });
    // Mouse enter overlay
    $('ul#gallery li').on('mouseenter', function(){
        // Get data attribute values
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');
        // Validation
        if(desc == null){
            desc = 'Click To Enlarge';
        }
        if(title == null){
            title = '';
        }
        // Create overlay div
        $(this).append('<div class="overlay"></div>');
        // Get the overlay div
        var overlay = $(this).children('.overlay');
        // Add html to overlay
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
        // Fade in overlay
        overlay.fadeIn(400);
    });
    // Mouse leave overlay
    $('ul#gallery li').on('mouseleave', function(){
         // Create overlay div
         $(this).append('<div class="overlay"></div>');
         // Get the overlay div
         var overlay = $(this).children('.overlay');
        // Fade out overlay
        overlay.fadeOut(200);
    });
    // Contact Section
    $('.cont2 h3').click(function(){
        $(this).css("margin-top","75px");
        $('svg').css("display","block");
        $('svg line').toggle(400);
        $('.textlbl').toggle(400);
        $('.textcnt').hide(400);
    });
    $('.cont2 h3').one("click", function(){
        $('svg line').slideToggle(400);
        $('.textlbl').slideToggle(400);
    });
    $('.textlbl').click(function(){
        $(this).next('.textcnt:first').toggle();
    });
    // Menu yin-yang icon
    $('#yin-yang').on('click', function(){
        if ($(window).width() <= 390){
            $('#myLinks').slideToggle(400);
        } else if($(window).width() > 390) {
            $('#mylinks').css("display","block");
        }
    });
});
