"use strict";

!function() {
    let sticky = false;
    $(document).ready(function(){
        $("#navlow").removeClass("hidden");
        $("#navlow").slideUp(0);
        $("#menuOpener").on("click",function() {
           $("#responsive-nav ul").toggleClass("active");
           $(this).toggleClass("glyphicon-menu-hamburger")
        });
        $("#MmenuOpener").on("click",function() {
            $("#navigation ul").toggleClass("active");
           $(this).toggleClass("glyphicon-menu-hamburger")
        });
    });


    $(window).scroll(function() {
        const inBottom = isInBottom();
        if(inBottom && !sticky){
            sticky=true;
            stickNav(sticky);
        }
        if(!inBottom && sticky){
            sticky=false;
            stickNav(sticky);
        }
    });

    function stickNav(sticky) {
        if(sticky){
            $("#description").addClass("fixed").removeClass("absolute");
            $("#navigation").slideUp("fast");
            $("#navlow").slideDown("fast");
            /*$("#navigation").addClass("hidden");
            $("#navlow").removeClass("hidden");*/
        }else{
            $("#description").removeClass("fixed").addClass("absolute");
            $("#navigation").slideDown("fast");
            $("#navlow").slideUp("fast");
            /*$("#navigation").removeClass("hidden");
            $("#navlow").addClass("hidden");*/
        }
    };
    function isInBottom() {
        const $description = $("#description")
        const descriptionHeight = $description.height()
        return $(window).scrollTop() > $(window).height() -descriptionHeight*2;
    }
}();