let input = document.getElementById("subscribe");
input.addEventListener("change", (e) => {
    let val = e.target.value;
    if (val == "") document.getElementById("subscribe_span").innerText = "Field is required";
    else if (!val.includes("@") || !val.includes(".")) document.getElementById("subscribe_span").innerText = "Invalid Email";
    else document.getElementById("subscribe_span").innerText = "";
}, false);

$('.col .wrapper').on('click', function(){
    let id = $(this).attr('id');
    id = id.replace('wrapper', '');
    id = '#overlay' + id;
    $(id).fadeIn();
})

$('.overlay2 .img').on('click', function(){
    let id = $(this).attr('id');
    id = id.replace('img', '');
    id = '#overlay' + id;
    $(id).fadeOut();
});

	var drop_down = $('.coaches_drop');
	var drop_down2 = $('.client_drop');

	$('.second').mouseenter(function(){
	drop_down.fadeIn(100);
	});		

	$('.secondd').mouseenter(function(){
	drop_down2.fadeIn(100);
	});	
	
	$('.dropdown').mouseleave(function(){
	drop_down2.css({'display':'none'});
	drop_down.css({'display':'none'});;
	});	