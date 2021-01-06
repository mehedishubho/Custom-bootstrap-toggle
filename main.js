$(document).ready(function(){
    let learn_more = $(".custom_more_info");
    let custom_toggle = $(".custom_toggle");
    learn_more.click(function(){
        let attr = $(this).attr('data-target');
        let isOpen = $(attr).attr("toggle-open");

        custom_toggle.removeClass("d-block");
        custom_toggle.attr("toggle-open","false");
        // $(attr).toggleClass("d-block");

        if(isOpen == "false"){
            $(attr).addClass("d-block");
            $(attr).attr("toggle-open","true");
        }else{
            $(attr).removeClass("d-block");
            $(attr).attr("toggle-open","false");
        }
    })
})