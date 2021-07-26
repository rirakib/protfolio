$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 1000,
      step: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
  });

  $(".num").counterUp({delay:10,time:1000});


  $(window).on("load",function(){
    $(".loader-container").fadeOut(1000);
});


$(".filter-button").click(function(){
  var value = $(this).attr('data-filter');
  
  if(value == "all")
  {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
  }
  else
  {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.'+value).hide('3000');
      $('.filter').filter('.'+value).show('3000');
      
  }
});

if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");


$('.col').magnificPopup({
  items: [
    {
      src: './img/galary_one.jpg'
    },
    {
      src: './img/galary_two.jpg'
    },
    {
      src: './img/galary_three.jpg'
    },
    {
      src: './img/galary_four.jpg'
    },
    {
      src: './img/galary_five.jpg'
    },
    {
      src: './img/galary_six.jpg'
    }
  ],
  gallery: {
    enabled: true
  },
  type: 'image' // this is default type
});


var typed = new Typed('.type', {
  strings: ['Md. Rakibul Islam'],
  typeSpeed: 60,
  backSpeed: 60,
  loop:true
});

AOS.init({
    offset:"300",
    delay:"30",
    duration:"2000"
});