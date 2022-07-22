/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(document).ready(function()
{
    $("#login").click(function()
    {
        var username = $("#username").val(); 
        var password = $("#password").val();


        if(username == "CIT313" && password == "student")
        {
            $('.center').fadeOut("slow");  
            $("#second").prop("hidden", false);
            $("#error").prop("hidden", true); 
          
        }
        else {
            $("#error").prop("hidden", false); 
          
        }
    }); 
}); 