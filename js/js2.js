jQuery(document).ready(function(){
"use strict";
  $('#j-slider').carouFredSel({
    responsive:true,
     width:'100%',
      circular:true,
      scroll:{
         items:1,
         duration:500,
         pouseOnHover:true

       },
       auto:true,
       items:{
           visibler:{
               min: 1,
               max :1
           },
           height:"variable"
           },
        pagination:{
            container:".sliderpager",
            pageAnchorBuilder:false
        }


  });
  $(window).scroll(function () {
       var top = $(window).scrollTop();
       if (top>=60) {
           $("home").addClass('secondary');
       }
       else
           if ($("home").hasClass('secondary')){
             $("home").removeClass('secondary');
           }
  })


});