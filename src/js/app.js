/**
 * Created by zahra on 3/31/2019.
 */
$(document).ready(function() {

    $('li').hover(function () {
            $(this).css('backgroundColor', '#0056b3')

        },
        function () {
            if($(this).hasClass('active1')===true){}
            else{
            $(this).css('backgroundColor', '#007bff ')
            }
        }
    );
});