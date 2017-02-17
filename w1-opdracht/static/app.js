/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

(function(){
    var app = {
        init: function() {
            routes.init();
        }
    };

    var routes = {
        init: function() {
            window.addEventListener("hashchange", function(){ 
                sections.toggle(location.hash);
            });
        }
    };

    var sections = {
        toggle: function(route/* this is location.hash */) {
            var sections = document.querySelectorAll('section');
            console.log(sections);
            
            for (i = 0; i < sections.length; i++) {
                var sectionList = sections[i];
                var sectionsId = "#" + sections[i].id;
                
                
                if (sectionsId === route) { 
                    sectionList.classList.remove("hide");
                } else {
                    sectionList.classList.add("hide");
                }
            }
                
        }
    };

    app.init();

}());

