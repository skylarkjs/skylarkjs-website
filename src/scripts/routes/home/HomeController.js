define([
    "skylarkjs/spa",
    "skylarkjs/langx",
    "skylarkjs/noder",
    "jquery",
    "skylarkjs/eventer",
    "jotted",
    "particles",
    "scripts/helpers/isMobile",
    "text!scripts/routes/home/home.html"
], function(spa, langx, noder, $, eventer, Jotted, particles, isMobile, homeTpl) {
    var activeItem,
        pjs;
    return spa.RouteController.inherit({
        klassName: "HomeController",

        rendering: function(e) {
            e.content = homeTpl;
        },

        entered: function() {
            if (pjs) pjs.fn.vendors.stopAnimation();
            var id = "particles"
            pjs = particles(id);
            $(".footer").html("<div>Copyright © 2016-" +
                (new Date()).getFullYear() +
                "  <a href='http://www.hudaokeji.com'><img src='./assets/images/hudao-logo.png' />Hudaokeji Co.,Ltd.</a> <br> powered by the skylark.js singe page application framework!</div>"
            );
            // if (isMobile()) noder.reverse($("#second-feature")[0]);
            $(document.body).addClass("home-page");
        },
        exited: function() {
            $(document.body).removeClass("home-page");
        }
    });
});
