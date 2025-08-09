//Adding events
$(document).on("keydown", function(e){
    $("h1").text(e.key);
});

//Adding new elements to DOM before the selected element
$("h1").before("<button>New Button</button>");

//Adding new elements to DOM after the selected element
$("h1").after("<button>After Button</button>");

//Adding new elements to DOM before the selected element, but inside the HTML tag
$("h1").prepend("<button>prepend Button</button>");

//Adding new elements to DOM after the selected element, but inside the HTML tag
$("h1").append("<button>append Button</button>");

$("#clickMe").on("click", ()=>{
    $("div").toggle(); // we can also use show() and hide()
    $("a").slideToggle(); // we can also use slideIn() and slideOut()
    $("p").fadeToggle(); // we can also use fadeIn() and fadeOut()
});

$("#animate").on("click", function(){
    $("h2").animate({opacity : 0.5}); // we can only use numeric values like opacit for animate method
});
