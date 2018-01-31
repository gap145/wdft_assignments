
$(document).ready(function () {
        //minmize chat on- click
    $('.fa-minus').click(function(){
        $(this).parents('.top').siblings().hide()
    })
        // hide content submission
    $('.fa-minus').click(function(){
        $(this).parents('.top').siblings().show()
    })
    
        //remove entry on click of li
    $('li').click(function(){
        $(this).remove();
    });
        
        //triggers post sumbit on enter key
    $('textarea').keypress(function(event){
        if (event.key === 'Enter' || event.keyCode === 13){
            $(this)
            .parent()
            .siblings('.content')
            .children('ul')
            .append('<li>'+$(this).val()+'</li>');
             $(this).val('');
        })

        //regular submit with button
    $('textarea').keypress(function(event){
        $(this)
            .parent()
            .siblings('.content')
            .children('ul')
            .append('<li>'+$(this).val()+'</li>');
             $(this).siblings().val('');
        })    

        //function for appending html
function blogSubmit (input,post){


