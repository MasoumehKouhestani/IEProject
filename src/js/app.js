/**
 * Created by zahra on 3/31/2019.
 */
$(document).ready(function() {

    $('#filter').click(function(e){
        e.preventDefault();
    });

    $(".down").click(function(){
       $('.downloadnone').show()
        $('.downloadnone').hide(3000)
    });
    $(".down-you").click(function(){
        $('.downloadnone-you').show()
        $('.downloadnone-you').hide(3000)
    });

    $('#selall').hide();
    $('li').hover(function () {
            $(this).css('backgroundColor', '#0056b3')

        },
        function () {
            if($(this).hasClass('activenavitem')===true){}
            else{
            $(this).css('backgroundColor', '#007bff ')
            }
        }
    );
    $('#filter').click(function(){
        if($('select option:selected').val()==='all'){
            $('#selmyself').hide()
            $('#selall').show()
        }
        else{
            $('#selmyself').show()
            $('#selall').hide()
        }
    })


});
