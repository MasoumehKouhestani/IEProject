/**
 * Created by zahra on 3/31/2019.
 */
$(document).ready(function() {
    $('#selall').hide();
    $('#filter').click(function(e){
        e.preventDefault();
    });

    $(".down").click(function(){//six

         $(this).next().next().show()
        $(this).next().next().hide(3000)
    });

    $('input').click(function (e) {
      e.preventDefault();
    });


    $('li').hover(function () {//all
            $(this).css('backgroundColor', '#0056b3')

        },
        function () {
            if($(this).hasClass('activenavitem')===true){}
            else{
                $(this).css('backgroundColor', '#007bff ')
            }
        }
    );
    $('#filter').click(function(){//six
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
