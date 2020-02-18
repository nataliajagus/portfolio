const msnry = new Macy({
    container: '.gallery',
    mobileFirst: true,
    columns: 1,
    breakAt: {
      700: 3,
      1100: 4,
    },
    margin: {
      x: 0,
      y: 0,
    },
    waitForImages: true
  })


  msnry.runOnImageLoad(function () {
    msnry.recalculate(true);
  }, true);


  // init Isotope
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.categories').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $('.category__button').removeClass('category__button--active');
    $(this).toggleClass('category__button--active');
  });