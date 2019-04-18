/**
 * Created by zahra on 4/11/2019.
 */
$(document).ready(function(){
    $.get("json/case.json", function(data){
        alert(data.name);
    $('.title').html(data.topic);

    });
});

