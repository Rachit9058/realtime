	$('.primarynumber').click(function() {
    var dg = $(this).data('mobile');
    $(this).html(dg);
    $(this).removeClass('vwCall_bt2').addClass('vwCall_bt');
});

$('.indexSlides').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});document.querySelector(".read-more").addEventListener("click", function() {    let content = document.querySelector(".fs187");    content.classList.toggle("height-auto");    // Read More ko Less se replace karna    if (content.classList.contains("height-auto")) {      this.textContent = "Read Less";    } else {      this.textContent = "Read More";    }  });