$(document).ready(function(){       
    let scroll_start = 0;
    let startchange = $('#startchange');
    let offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() { 
            scroll_start = $(document).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar").css('background-color', 'darkcyan');
            } else {
                $('.navbar').css('background-color', 'transparent');
            }
        });
    }
 });