$(document).ready(function(){
   menu();
   search();
   close();
});

function menu() {
   $(".burger").on('click', function () {
         var $parent = $(".burger, .header-nav");
         if ($parent.hasClass('mob-menu')) {
            $parent.removeClass('mob-menu');
         } else {
            $parent.addClass('mob-menu');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".burger, .header-nav").length) {
         if ($(".burger, .header-nav").hasClass("mob-menu")) {
            $(".burger, .header-nav").removeClass("mob-menu");
         }
      }
   });
}

function search() {
   $(".mob-search-btn, .mob-close-btn").on('click', function () {
         var $parent = $(".mob-search-btn, .header-search");
         if ($parent.hasClass('mob-search')) {
            $parent.removeClass('mob-search');
         } else {
            $parent.addClass('mob-search');
         }
   });
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".mob-search-btn, .header-search").length) {
         if ($(".mob-search-btn, .header-search").hasClass("mob-search")) {
            $(".mob-search-btn, .header-search").removeClass("mob-search");
         }
      }
   });
}

function close() {
   $(".close").on('click', function () {
         var $parent = $(".close");
         if ($parent.hasClass('mob-close')) {
            $parent.removeClass('mob-close');
         } else {
            $parent.addClass('mob-close');
         }
   });
}