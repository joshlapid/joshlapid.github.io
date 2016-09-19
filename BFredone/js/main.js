$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

  var owl = $("#owl-demo2");

  owl.owlCarousel({

      itemsCustom : [
        [0, 2],
        [450, 4],
        [600, 4],
        [700, 4],
        [1000, 4],
        [1200, 4],
        [1400, 4],
        [1600, 4]
      ],
      navigation : true

  });

});
