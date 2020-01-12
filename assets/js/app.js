$(".pg2").click(function() {
  $(".hero-image").css("display", "none");
  $(".animojileft").css("display", "flex");
  $(".page2").css("display", "block");
  $(".pg2").toggleClass("active");
  $(".pg1").toggleClass("active");
  $(".footer").css("display", "block");
});
$(".pg1").click(function() {
  $(".hero-image").css("display", "block");
  $(".animojileft").css("display", "none");
  $(".page2").css("display", "none");
  $(".pg1").toggleClass("active");
  $(".pg2").toggleClass("active");
  $(".footer").css("display", "none");
});
