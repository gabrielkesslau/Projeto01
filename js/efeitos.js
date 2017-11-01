$(document).ready(function(){

	$("#logotipo").on("mouseover",function(){

		$("#banner h1").addClass("efeito");

	}).on("mouseout", function(){

		$("#banner h1").removeClass("efeito");

	});

	$("#input-search").on("focus", function(){

		$("li.search").addClass("ativo");

	}).on("blur", function(){

		$("li.search").removeClass("ativo");

	});

	$(".thumbnails").owlCarousel({
		loop: true,
		margin: 10,
		//nav: true,
		//navText: ["Anterior", "Próximo"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 3
			},
			768: {
				items: 4
			}
		}

	});

    var owl = $('.thumbnails');
    owl.owlCarousel();
    $('#btn-news-prev').click(function(){
    	owl.trigger('prev.owl.carousel');
    })
    var owl = $('.thumbnails');
    $('#btn-news-next').click(function(){
    	owl.trigger('next.owl.carousel');
    });
	$("video").prop("volume", 0.3);

	$("#page-up").on("click", function(event){

		$('html, body').animate({ scrollTop: 0 }, 'slow');

		event.preventDefault();

	});

});