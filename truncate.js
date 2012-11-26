$(document).ready(function(){
    //truncate member names to first name last initial 
    $(this).find('.wrapper .member-name').each(function(){
        var str = $(this).text();
        var firstNameWord = str.split(' ')[0];
        var lastNameLetter = str.split(/\s+/).pop().charAt(0);
        $(this).replaceWith('<p class="member-name">' + firstNameWord + ' ' + lastNameLetter + '.' + '</p>');
    });            
});
