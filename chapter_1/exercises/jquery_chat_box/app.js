
$(document).ready(function () {
    //minmize chat on- click
    $('#timmy .fa-minus').click(function(){
        // hide content submission
        $('#timmy .content').hide();
        $('#timmy .submission').hide();
    });
    $('#joey .fa-minus').click(function(){
        // hide content submission
        $('#joey .content').hide();
        $('#joey .submission').hide();
    });
    $('#hermione .fa-minus').click(function(){
        // hide content submission
        $('#hermione .content').hide();
        $('#hermione .submission').hide();
    });


    //open chat on+ click
    $('#timmy .fa-plus').click(function(){
        // show content submission
        $('#timmy .content').show();
        $('#timmy .submission').show();
    });
    $('#joey .fa-plus').click(function(){
        // show content submission
        $('#joey .content').show();
        $('#joey .submission').show();
    });
    $('#hermione .fa-plus').click(function(){
        // show content submission
        $('#hermione .content').show();
        $('#hermione .submission').show();
    });

    //remove entry on click of li
    $('li').click(function(){
        $(this).remove();
    });
        
    //triggers post sumbit on enter key
    $('#timmy textarea').on('keydown', function(e){
        // 13 is enter key
        if(e.which == 13) {
            var user = $('#timmy h4').text();
            var message = $('#timmy textarea').val();
            $('#timmy .content ul').append('<li>'+ user + ': ' + message + '</li>');
            // clean the textarea
            $('#timmy textarea').val('');
        };
    });
    $('#joey textarea').on('keydown', function(e){
        if(e.which == 13) {
            var user = $('#joey h4').text();
            var message = $('#joey textarea').val();
            $('#joey .content ul').append('<li>'+ user + ': ' + message + '</li>');
            $('#timmy textarea').val('');
        };
    });
    $('#hermione textarea').on('keydown', function(e){
        if(e.which == 13) {
            var user = $('#hermione h4').text();
            var message = $('#hermione textarea').val();
            $('#hermione .content ul').append('<li>'+ user + ': ' + message + '</li>');
            $('#timmy textarea').val('');
        };
    });

    
    //regular submit with button
    $('#timmy .submit').click(function(){
        var user = $('#timmy h4').text();
        var message = $('#timmy textarea').val();
        $('#timmy .content ul').append('<li>'+ user + ': ' + message + '</li>');
        $('#timmy textarea').val('');
    });
    $('#joey .submit').click(function(){
        var user = $('#joey h4').text();
        var message = $('#joey textarea').val();
        $('#joey .content ul').append('<li>'+ user + ': ' + message + '</li>');
        $('#timmy textarea').val('');
    });
    $('#hermione .submit').click(function(){
        var user = $('#hermione h4').text();
        var message = $('#hermione textarea').val();
        $('#hermione .content ul').append('<li>'+ user + ': ' + message + '</li>');
        $('#timmy textarea').val('');
    });
});

//function for appending html
function blogSubmit (input,post){

}
