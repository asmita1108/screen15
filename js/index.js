console.log("hii in js");     
$('a#hidePassword').click(function() {
        var img = $(this).find("img")[0];
        if ($('#passwordImg').attr("class") == "jsinputImg") {
            img.src = img.src.replace("padlock","hide_password");
        } else {
 img.src = img.src.replace("hide_password","padlock");
        }
        $('.img-swap').toggleClass("on");


        $('#atBox').toggle(100);
        return false;
    });
