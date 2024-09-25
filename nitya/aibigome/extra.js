jQuery(document).ready(function($) {
	if ($("#fullpage").length > 0) {
		if($(window).width() < 768){
			add_content_to_fullpage();
			add_content_to_our_partners();
		}

		init_fullpage();
		$(document).on('click', '.home_arrow_inner', function(){
			fullpage_api.moveSectionDown();
		});
		$('.easy_up').on('click', function(ed){
			fullpage_api.moveTo(1)
		});
		$(document).on('click', '.home_scrollbar_bot', function(e){
			if($(this).attr('data-moveTo') == undefined){
				return false;
			}
			moveTo = $(this).attr('data-moveTo');
			fullpage_api.moveTo(moveTo)
		});
	}
	


	

	if(document.cookie.indexOf("mycookie") <0){
		$("#fixed_footer_id").show();
	}
	if ($(".chatbot_div_outer").width()>0) {
		$("#bot_hove_div").hide();
		$(".bot_bot_shadow").hide();
		$(".left_position_fixed > p").addClass("home_bot_text_color");
		$(".fixd_home_bottom").addClass("home_bot_text_color");
		$(".fixd_home_left").addClass("home_bot_text_color");
		$(".main_dot").addClass("home_bot_text_color");
		$("#chat_bot_sec").hide();
			
			$("#ABdev_main_header").css({'background':"black"});
			$(window).on('load', function() {
				setTimeout(function() {
					$('.bot_left_sec > img').css({'max-width':'100%','opacity':'1'});
					setTimeout(function() {
						$(".chatbot_div_inner").append($("#chatbot_gif").addClass("chatbot_text").show(1000));
						$("#chatbot_text_1").delay(1000).show(1);
						$("#chatbot_text_2").delay(2000).show(1);
						$("#chatbot_text_3").delay(3000).show(1);
						$("#chatbot_text_4").delay(4000).show(1);
						$("#chatbot_time_stamp").delay(4000).show(1);
						setTimeout(function() {
							$("#chatbot_gif").hide();
							$('#chatbot_success').css({"opacity":"1"});
							setTimeout(function() {
								$('#chatbot_work').css({"opacity":"1"});
								setTimeout(function() {
									$('#chatbot_features').css({"opacity":"1"});
									setTimeout(function() {
										$('#chatbot_contact_back').css({"opacity":"1"});
									}, 1000);
								}, 1000);
							}, 1000);
						}, 4100);
					}, 500);
				}, 1500);
			});
			

		}
		$("#menu_resources").click();
		if(document.cookie.indexOf("bot_reload") >0){
			$("#chat_bot_div").show();
			$("#bot_button").addClass("bot_left_align");
			if (window.matchMedia('(max-width: 767px)').matches) {
				$(".bot_bot_shadow").css("bottom", "-30px");
			}
			$("#bot_hello").show();
			$("#bot_hover_text").hide();
			$("#bot_help").show();
			$("#first_down_bar").show();
			$("#bot_first_bar").hide();
			$("#bot_dot_menu").show();
			$("#bot_bar_title").show();
			document.getElementById('bot_button').src="/wp-content/themes/spiral-child/images/close.png";
		}
		

		$('.popup-icon').on('click',function(){
			var button=$('.fab_field .entypo-paper-plane');
			if($('.popup-icon i').hasClass('fa-comments')){
				$('.popup-icon').addClass('rotate');
				$('.bubble').hide();
				$('.popup-icon i').removeClass('pump-effect');

				setTimeout(function() {
					$('.popup-icon i').removeClass('fa-comments').addClass('gm-close');
					$('.popup-icon').removeClass('rotate');
				}, 300);	
			}
			else{
				$('.popup-icon').addClass('rotate');
				setTimeout(function() {
					$('.popup-icon i').addClass('fa-comments').removeClass('gm-close');
					$('.popup-icon').removeClass('rotate');
				}, 300);
				button.css("color","#8B8787");
				$('.popup-icon i').addClass('pump-effect');
				$('.bubble').fadeIn();
				$('input[name=Email]').val("");
			}
			$('.start_conversation_popup').toggleClass('is_visible');

		});
		$('input[name=Email]').on('input', function(e) {
			var button=$('.fab_field .entypo-paper-plane');
			var input=$(this);
			var stop_submit=false;
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var is_email=re.test(input.val());
			if(is_email){
				button.css("color","green");
				stop_submit=false;
			}
			else{
				button.css("color","red");
				stop_submit=true;
			}
			$('.fab_field button').on('click',function(e){
				// console.log(stop_submit);
				if(! stop_submit){
					$("#chatbot_form").submit();
				}
				else{
					e.preventDefault();
				}
			});
		});

	//Ajax-pagination-for case studies

	var loadpostvar=0;
	var page=2;
	var canBeLoaded = true, // this param allows to initiate the AJAX call only if necessary
	bottomOffset = 1500; 
	$(window).scroll(function() {
		var data = {
			'action': 'infinite_scroll',
			'page': page,
			'loadpostvar' : loadpostvar,
			'security': ajaxpagination.ajax_nonce
		};
		if( $(window).scrollTop() > ( $(document).height() - bottomOffset ) && canBeLoaded == true ){
				// console.log(data);
				$.ajax({
					url: ajaxpagination.ajaxurl,
					type:'POST',
					data: data, 
					beforeSend: function(xhr){
						canBeLoaded = false;
						$('.loading-foot').show('fast');
					},
					loading: function(){
						$('.loading-foot').show('fast');
					},
					success: function(html){
						if(html != 0){
							canBeLoaded = true;
							loadpostvar = 1;
							$(".case-study-block").append(html);  
							page= page+1;
						}
						else{
							$('.loading-foot').hide('1000');
							page = 0;
							canBeLoaded = false;
						} 
					},
					error: function(e){

					}
				});
				
				
				return false;

			}
			else{
			 	// console.log('err');
			 }
			 
			
			});

	//animation in Insurtech Page
	var $window = $(window);
	$window.on('scroll', check_if_in_view2);
	$window.on('scroll', check_if_in_view1);
	if ($(".blog_container").length > 0) {
		$window.on('scroll', check_if_in_view3);
	}
	
	$window.trigger('scroll');

	var $animation_element1 = $('#hwh1 > .tcvpb_section_content >.tcvpb_container ');
	var $animation_element2 = $('#hwh2 > .tcvpb_section_content >.tcvpb_container ');


	function check_if_in_view1() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($animation_element1, function() {
			var $element = $(this);
			var $element_card = $(this).find('.card > .tcvpb-animo');
			var $element_image = $(this).find('.image-card > .block');
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);
			if($window.width()>786){
	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position-50) &&
	    	(element_top_position <= window_bottom_position+50)) {

	    	($element.children('.card')).addClass('slide-left');
	    ($element.children('.image-card')).addClass('slide-right');

	    $element_card.addClass('block-r-l');
	    $element_image.addClass('block-l-r');

	} else {

		
			}
		}
	});

	}
	function check_if_in_view2() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($animation_element2, function() {
			var $element = $(this);
			var $element_card = $(this).find('.card > .tcvpb-animo');
			var $element_image = $(this).find('.image-card > .block');
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);
			if($window.width()>786){
	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	    	(element_top_position <= window_bottom_position+50)) {

	    	($element.children('.card')).addClass('slide-right');
	    ($element.children('.image-card')).addClass('slide-left');

	    $element_image.addClass('block-r-l');
	    $element_card.addClass('block-l-r');

	} else {

		
			}
		}
	});

	}

	function check_if_in_view3() {
		var container = ($(".blog_section").length > 0) ? '.blog_section':'.single_post_section';
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		var $element = $(container).find('.row > .sidebar-blog-list');
		var element_height = $(container).outerHeight();
		var element_top_position = $(container).offset().top;
		var element_bottom_position = (element_top_position + element_height);	

	    if ((element_top_position <= window_top_position) &&
	    	(element_bottom_position >= window_bottom_position-70)) {

	    	$element.addClass('relative');

	} else if(element_top_position >= window_top_position) {

		$element.removeClass('relative');
	}

}

var scrollArea = $('.container .portfolio_3column ul');
var toScroll = $('.container .portfolio_3column ul li');

function scrollStuff() {
	toScroll.each(function() {
		var self = $(this);
		var child = $(this).children();
		self.css('cursor', 'pointer');
		child.on('click', function () {
			var leftOffset = self.offset().left
			- scrollArea.offset().left 
			+ scrollArea.scrollLeft();
			scrollArea.animate({ scrollLeft: leftOffset });
		});    
	});
};
if($( window ).width()< 500){
	scrollStuff();
}





	//Go Down on clicking

	$.fn.extend({
		scrollTo : function(speed, easing) {
			return this.each(function() {
				var targetOffset = $(this).offset().top;
				$('html,body').animate({scrollTop: targetOffset}, speed, easing);
			});
		}
	});
	$('.arrow_down').click(function(e){
		e.preventDefault();
		var $next = $('.arrow_down').parentsUntil('.page-template').next();
		$next.scrollTo(400, 'linear');
	});

	$(".post_padding p").text(function(index, currentText) {
		return currentText.substr(0, 250) + "...";
	});



});
jQuery(document).ready(function($) {
	$(function () {

		$('.menu-icon').click(function (event) {

			$(this).toggleClass('is-open');
			$("#chat_bot_div").css({"z-index":"9995"});
			$("#myNav .overlay").toggleClass('nav-visible');
			if ($("#fullpage").length > 0) {
				fullpage_api.setAllowScrolling(false, 'up,down,right,left');
				console.log("allow Scroll")
			}
			if( $("#myNav .overlay").hasClass("nav-visible")){
				$("#ABdev_main_header .overlay").css({"display":"block"});
				$('#myNav').addClass('overlay-shadow');
				$('body').addClass('unscrollable');
				$("#ABdev_main_header .overlay").css({"opacity":"1"});
			}
			else{
				$("#ABdev_main_header .overlay").css({"display":"none"});
				$("#chat_bot_div").css({"z-index":"9998"});
				if ($("#fullpage").length > 0) {
					fullpage_api.setAllowScrolling(true);
					console.log("disable Scroll")
				}
				$('#myNav').removeClass('overlay-shadow');
				$('body').removeClass('unscrollable');
				setTimeout(function () {
					$("#ABdev_main_header .overlay").css({"opacity":"0"});
				},480);
			}

			if(jQuery( window ).width() <= 780){	        	
				if( $("#myNav .overlay").hasClass("nav-visible")){
					$("#logo").addClass('visible-class');
					$('#ABdev_main_header').addClass('transparent');
				}
				else{
					$("#logo").removeClass('visible-class');
					$('#ABdev_main_header').removeClass('transparent');
				}

			}
			if($('#ABdev_main_header').hasClass("header_zindex")){
				$('#ABdev_main_header').removeClass("header_zindex");
			}
			else{
				$('#ABdev_main_header').addClass("header_zindex");
			}

		}); 


		$('#myNav').click(function(event) {
			if(jQuery( window ).width() <= 780){	        	

				$('#myNav').removeClass('overlay-shadow');
		        $('body').removeClass('unscrollable');
		        $("#logo").removeClass('visible-class');
		        $('#ABdev_main_header').removeClass('transparent');
		    }

		});


		$('.menu-icon-trigger').click(function () {
			$(this).parent('.menu-icon-svg').toggleClass('is-open');

		});
	});
	
	$(window).resize(function() {

		$slider=$('#rev_slider_1_1 .tp-revslider-mainul li .tp-bgimg');
		if($(window).width() < 786){
			$slider.addClass('mobile');
		// console.log('add');
	}
	else{
		$slider.removeClass('mobile');
		// console.log('remove');

	}
});
	$slider=$('#rev_slider_1_1 .tp-revslider-mainul li .tp-bgimg');
	if($(window).width() < 786){
		if(! $slider.hasClass( "mobile" )){
			$slider.addClass('mobile');
		}
		$(".blog_container .post_content_inner h3").text(function(index, currentText) {
			var length= currentText.length;
		 	// console.log(currentText.substr(46));
		 	var expert="";
		 	if (length>80){
		 		expert = "...";
		 	}
		 	return currentText.substr(0, 60) + expert;
		 });

	}
	else{
		$slider.removeClass('mobile');
		$(".blog_container .post_content_inner h3").text(function(index, currentText) {
			var length= currentText.length;
			// console.log(currentText.substr(46));
			var expert="";
			if (length>45){
				expert = "...";
			}
			return currentText.substr(0, 45) + expert;
		});
	}




		$("#careers_div").scroll(function() {    
			var scroll = $("#careers_div").scrollLeft();
			    // console.log(scroll);
			    if (scroll > 130) {
			    	$(".bot_carrosal_img_1").css({"-webkit-transform":" rotate(180deg)","-moz-transform": "rotate(180deg)"," -o-transform": "rotate(180deg)","-ms-transform": "rotate(180deg)",
			    		"transform": "rotate(180deg)"});
			    }
			    if (scroll < 130) {
			    	$(".bot_carrosal_img_1").css({"-webkit-transform":" rotate(0deg)","-moz-transform": "rotate(0deg)"," -o-transform": "rotate(0deg)","-ms-transform": "rotate(0deg)",
			    		"transform": "rotate(0deg)"});
			    }
			    
			});
		$("#careers_div").scroll(function() {    
			var scroll = $("#careers_div").scrollLeft();
			if (scroll > 350) {
				$(".bot_carrosal_img_2").css({"-webkit-transform":" rotate(180deg)","-moz-transform": "rotate(180deg)"," -o-transform": "rotate(180deg)","-ms-transform": "rotate(180deg)",
					"transform": "rotate(180deg)"});
			}
			if (scroll < 350) {
				$(".bot_carrosal_img_2").css({"-webkit-transform":" rotate(0deg)","-moz-transform": "rotate(0deg)"," -o-transform": "rotate(0deg)","-ms-transform": "rotate(0deg)",
					"transform": "rotate(0deg)"});
			}

		});
		$(".bot_carrosal_img_1").click(function(){
			var leftPos = $('#careers_div').scrollLeft();
			if (leftPos > 130) {
				$("#careers_div").animate({scrollLeft: leftPos - 236}, 800);
			}
			if (leftPos < 130) {
				$("#careers_div").animate({scrollLeft: leftPos + 236}, 800);
			}
		});
		$(".bot_carrosal_img_2").click(function(){
			var leftPos = $('#careers_div').scrollLeft();
			if (leftPos > 350) {
				$("#careers_div").animate({scrollLeft: leftPos - 241}, 800);
			}
			if (leftPos < 350) {
				$("#careers_div").animate({scrollLeft: leftPos + 241}, 800);
			}
		});
		$("#bot_careers").click(function(){
			$("#bot_bar_one").show();
			$(".bot_bar").append($("#bot_bar_one"));
			$("#user_careers").show(500);
			$(".bot_fixed_img_bot").delay(1000).show();
			$("#careers_great").delay(3000).show(300);
			$("#careers_problems").delay(5000).show(300);
			$("#careers_cul").delay(7000).show(300);
			$("#careers_div").delay(9000).slideDown().show(300);
			$("#careers_check").delay(11000).show(300);
			$("#careers_option").delay(13000).show(300);

			$("#first_down_bar").hide();
	        	$(".bot_bar").append($("#bot_img_gif").delay(3000).show());
	        	$("#second_down_bar").delay(13000).slideDown().show(300);

	    	setTimeout(function () {
	    		$('.bot_bar').animate({
	    			scrollTop: $('.bot_bar').get(0).scrollHeight
	    		}, 2500);
	    	}, 7000);
	    	setTimeout(function () {
	    		$('.bot_bar').animate({
	    			scrollTop: $('.bot_bar').get(0).scrollHeight
	    		}, 2500);
	    	}, 13000);
	    	setTimeout(function () {
	    		$("#bot_img_gif").hide();
	    		$("#bot_home_menu").show();
	    	},13000);

	    });
		$("#bot_Business").click(function(){
			$("#bot_bar_two").show();
			$(".bot_bar").append($("#bot_bar_two"));
			$("#user_busness").show(500);
			$(".bot_fixed_img_bot").delay(1500).show();
			$("#business_options").delay(3000).show(300);

			$("#first_down_bar").hide();
	        	$(".bot_bar").append($("#bot_img_gif").delay(3000).show());
	        	$("#third_down_bar").delay(3000).slideDown().show(1000);

	    		$("#third_down_bar").slideDown().show(1000);

	    	setTimeout(function () {
	    		$('.bot_bar').animate({
	    			scrollTop: $('.bot_bar').get(0).scrollHeight
	    		}, 2500);
	    	}, 3000);
	    	setTimeout(function () {
	    		$("#bot_img_gif").hide();
	    		$("#bot_home_menu").show();
	    	}, 3000);
	    });
		$("#bot_Project").click(function(){

			$("#bot_bar_three").show();
			$(".bot_bar").append($("#bot_bar_three"));
			$("#user_project").show(500);
			$(".bot_fixed_img_bot").delay(1500).show();
			$("#project_ideas").delay(3000).show(200);
			$("#project_prob").delay(5000).show(200);
			$("#project_part").delay(7000).show(200);
			$("#project_img").delay(9000).show(200);
			$("#project_chq").delay(11000).show(200);
	       
	       $("#first_down_bar").hide();
	        	$(".bot_bar").append($("#bot_img_gif").delay(3000).show());
	        	$("#fourth_down_bar").delay(11000).show(1000);
	    		$("#fourth_down_bar").show(1000);
	    	setTimeout(function () {
	    		$('.bot_bar').animate({
	    			scrollTop: $('.bot_bar').get(0).scrollHeight
	    		}, 2500);
	    	}, 7000);
	    	setTimeout(function () {
	    		$("#bot_img_gif").hide();
	    		$("#bot_home_menu").show();
	    	}, 11000);

	    	setTimeout(function () {
	    		$('.bot_bar').animate({
	    			scrollTop: $('.bot_bar').get(0).scrollHeight
	    		}, 2500);
	    	}, 11000);
	    });
		$("#bot_home_menu").click(function(){
			$("#bot_home_menu").hide();
			$("#careers_great").hide();
			$("#user_careers").hide();
			$("#careers_problems").hide();
			$("#careers_cul").hide();
			$("#careers_div").hide();
			$("#careers_check").hide();
			$("#careers_option").hide();
			$("#user_busness").hide();
			$("#business_options").hide();
			$("#user_project").hide();
			$("#project_ideas").hide();
			$("#project_prob").hide();
			$("#project_part").hide();
			$("#project_img").hide();
			$("#project_chq").hide();
			$("#third_down_bar").hide();
			$("#second_down_bar").hide();
			$("#fourth_down_bar").hide();
			$(".bot_bar").append($("#bot_second_bar"));
			$("#first_down_bar").show();
			$("#bot_bar_one").hide();
			$("#bot_bar_two").hide();
			$("#bot_bar_three").hide();
			$("#bot_submit_div").hide();
			$("#business_mail").hide();
		});
		$(".bot_redirect").click(function(){
			$("#business_mail").show(300);
			setTimeout(function () {
				$('.bot_bar').animate({
					scrollTop: $('.bot_bar').get(0).scrollHeight
				}, 500);
			}, 300);

		});
		$("#bot_dot").click(function(){
			$("#bot_dot_menu").show();
		});
		$("#bot_latest_openings").click(function(){
			$("#second_down_bar").hide();
			$(".bot_bar").append($("#bot_cmsg_success").show().fadeOut(8000));
			setTimeout(function () {
				$("#bot_home_menu").click();
			}, 8000);

		});
		$("#bot_call_back").click(function(){
			$(".bot_bar").append($("#bot_submit_div").show());
			$("#fourth_down_bar").hide();
			$('.bot_bar').animate({
				scrollTop: $('.bot_bar').get(0).scrollHeight
			}, 2500);
		});
		$("#bot_close_menu").click(function(){
			$("#bot_button").click();
		});
		$("#bot_submit_button").click(function() {
			var email = $("#bot_email").val();
			var telephone = $("#bot_phone").val();
			var data={
				email:email,
				telephone:telephone,
				action: 'bot_mail_send',
			};
			// console.log(telephone);
			if((/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/).test( $("#bot_email").val()) && ($("#bot_email").val()!='') && ($("#bot_phone").val()!='') && (/^[6-9]\d{9}$/).test( $("#bot_phone").val())){
				$.ajax({
					type: "POST",
					url: ajaxpagination.ajaxurl ,
					data: data,
					success: function() {
						$(".bot_bar").append($("#bot_msg_success").show().fadeOut(7000));
						$("#bot_email").val('');
						$("#bot_phone").val('');
						$('.bot_bar').animate({
							scrollTop: $('.bot_bar').get(0).scrollHeight
						}, 2500);
						setTimeout(function () {
							$("#bot_home_menu").click();
						}, 7000);
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
						console.log(textStatus+errorThrown);
					}
				});
			}
			else{
				$(".bot_bar").append($("#bot_msg_error").show().fadeOut(7000));
				$('.bot_bar').animate({
					scrollTop: $('.bot_bar').get(0).scrollHeight
				}, 2500);
			} 
		});


	  $("#lms_send").click(function() {
	  	var email = $("#lms_email").val();
	  	var name = $("#lms_name").val();
	  	var data={
	  		email:email,
	  		name:name,
	  		action: 'lms_mail_send',
	  	};
			// console.log(data);
			if((/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/).test( $("#lms_email").val()) && ($("#lms_email").val()!='') && ($("#lms_name").val()!='') && (/^[a-zA-Z\s]+$/).test( $("#lms_name").val())){
				$.ajax({
					type: "POST",
					url: ajaxpagination.ajaxurl ,
					data: data,
					success: function() {
						$("#lms_text").text("Thank you, your message has been sent.");
						$("#lms_text").css({"color":"green"});
						$("#lms_email").val('');
						$("#lms_name").val('');
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
						console.log(textStatus+errorThrown);
					}
				});
			}
			else{
				$("#lms_text").text("Please Enter Currect Details");
				$("#lms_text").css({"color":"red"});
			} 
		});
	  $("#bot_let_start").click(function(){
	  	$("#bot_home_menu").hide();
	  	$("#bot_hello").delay(2000).show(300);
	  	$("#bot_help").delay(4000).show(300);
	       	$(".bot_bar").append($("#bot_img_gif").delay(3000).show());
	       	$("#first_down_bar").delay(4000).slideDown().show(300);
	    	setTimeout(function () {
	    		$("#bot_img_gif").hide();
	    	},4000);
	    });
	setTimeout(function(){
		if (window.matchMedia('(max-width: 767px)').matches) {
			$('#bot_hover_text').addClass('bot_hover_text_mobile');
			setTimeout(function(){
				$('#bot_hover_text').removeClass('bot_hover_text_mobile');
			},10000);
		}
		else{
			$('#bot_hover_text').removeClass('bot_hover_text_mobile');
		}
	},5000);
	setInterval(function(){
		if (window.matchMedia('(max-width: 767px)').matches) {
			$('#bot_hover_text').addClass('bot_hover_text_mobile');
			setTimeout(function(){
				$('#bot_hover_text').removeClass('bot_hover_text_mobile');
			},10000);
		}
		else{
			$('#bot_hover_text').removeClass('bot_hover_text_mobile');
		}
	},30000);	
	$("#bot_button").click(function(){

		if ($("#chat_bot_div").is(":hidden")) {
			$("#chat_bot_div").css({"z-index":"9998"});
			$("body").addClass("modal-open");
			$("#chat_bot_div").show();
			setTimeout(function(){
				$(".bot_first_bar_img img").css({"max-width": "100%"});
				setTimeout(function(){
					$(".bot_first_bar_text").css({"opacity": "1"});
					setTimeout(function(){
						$(".bot_second_bar_text").css({"opacity": "1"});
						setTimeout(function(){
							$(".bot_first_bar button").css({"opacity": "1"}); 
						},500); 
					},500); 
				},500);
			},300);
			$("#bot_hover_text").hide();
			$('#bot_hover_text').removeClass('bot_hover_text_mobile');
			$("#bot_button").css({"transition": "all 0.5s", "transform": "rotate(135deg)"}).addClass("bot_left_align");
			if (window.matchMedia('(max-width: 767px)').matches) {
				$(".bot_bot_shadow").css("bottom", "-30px");
			}
			setTimeout(function(){
				$("#bot_button").css({"transition": "all 0s", "transform": "rotate(0deg)"});
				document.getElementById('bot_button').src="/wp-content/themes/spiral-child/images/close.png"; 
			},300);	
			var data = {
				'action': 'set_bot_reload',
			};
			$.ajax({
				url: ajaxpagination.ajaxurl ,
				type: 'POST',
				data :  data,
				success:function(data){
					if(data==1){
			        	 	// console.log("set");
			        	 }
			        	},	
			        	error: function(XMLHttpRequest, textStatus, errorThrown) {
			        		console.log(textStatus+errorThrown);
			        	}
			        });
		}
		else{
			$("#chat_bot_div").hide();
			$("#chat_bot_div").css({"z-index":"9995"});
			$("#bot_hover_text").show();
			$("body").removeClass("modal-open");
			$("#bot_button").css({"transition": "all 0.5s", "transform": "rotate(-135deg)"}).removeClass("bot_left_align");
			if (window.matchMedia('(max-width: 767px)').matches) {
				$(".bot_bot_shadow").css("bottom", "6px");
			}
			setTimeout(function(){
				$("#bot_button").css({"transition": "all 0s", "transform": "rotate(0deg)"});
				document.getElementById('bot_button').src="/wp-content/themes/spiral-child/images/start-chat.png";
			},300);
			var data = {
				'action': 'set_bot_reload_close',
			};
			$.ajax({
				url: ajaxpagination.ajaxurl ,
				type: 'POST',
				data :  data,
				success:function(data){
			        	 	// console.log("unset");
			        	 },	
			        	 error: function(XMLHttpRequest, textStatus, errorThrown) {
			        	 	console.log(textStatus+errorThrown);
			        	 }
			        	});
		}
	});

});
jQuery(document).keyup(function(e) {
	if (e.keyCode == 27) { 

		if (jQuery("div button").hasClass("is-open")) {
			jQuery(this).toggleClass('is-open');
			jQuery('.menu-icon').removeClass('is-open');

			jQuery("#myNav .overlay").toggleClass('nav-visible');
			jQuery("#myNav").removeClass('overlay-shadow');
			jQuery("body").removeClass('unscrollable');

			if(jQuery( window ).width() >= 780){

			}
			else{
				jQuery("#logo").removeClass('visible-class');
				jQuery('#ABdev_main_header').removeClass('transparent');

			}

		}
	}

});

$("#footer_btn").click(function(){
	var data = {
		'action': 'set_footer_cookie',

	};
	$.ajax({
		url: ajaxpagination.ajaxurl ,
		type: 'POST',
		data :  data,
		success:function(data){
			if(data==1){
				$("#fixed_footer_id , .fixed_footer").hide();
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(textStatus+errorThrown);
		}
	});
});



if ($('.service_autoplay').length >0) {

	$('.service_autoplay').slick({
		infinite:true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		centerMode: true,
		nextArrow: '<i class="next_arrow"></i>',
		prevArrow: '<i class="prev_arrow"></i>',
		responsive: [
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: false,
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
			}
		}
		    ]
		});

}


if ($('.domain_autoplay').length >0) {
	$('.domain_autoplay').slick({
		dots: true,
		customPaging: function(slider, i) {
			      // this example would render "tabs" with titles
			      return '<span class="dot"></span>';
			  },
			  slidesToShow: 1.1,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 400000,
			  nextArrow: '',
			  prevArrow: '',
			  speed: 1000,
			  centerMode: true,
			  responsive: [
			  {
			  	breakpoint: 768,
			  	settings: {
			  		slidesToShow: 1,
			  		slidesToScroll: 1,
			  		centerMode: false,
			  	}
			  },
			  ]

			});
}

if ($('.home_testimonials_section').width() >0) {
	$('.home_testimonials_autoplay').slick({
		dots: true,
		customPaging: function(slider, i) {
			      // this example would render "tabs" with titles
			      return '<div class="home_testimonials_dot"></div>';
			  },
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 5000,
			  nextArrow: '',
			  prevArrow: '',
			  speed: 50,
			  fade: true,
			  pauseOnSwipe: true,
			  pauseOnChange: true,
			  nextArrow: '<span class="testimonials_right_arrow_div"><span class="testimonials_right_arrow"></span></span>',
			  prevArrow: '<span class="testimonials_left_arrow_div"><span class="testimonials_left_arrow"></span></span>',
			  responsive: [
			  {
			  	breakpoint: 768,
			  	settings: {
			  		slidesToShow: 1,
			  		slidesToScroll: 1,
			  		centerMode: false,
			  	}
			  },
			  ]

			});
}

setInterval(function () {
	if($('#home_testimonials_div_1').css('opacity') == 1){
		$(".home_testimonials_rotate_img").css({"transform":"rotate(-720deg)"})
	}
	if($('#home_testimonials_div_2').css('opacity') == 1){
		$(".home_testimonials_rotate_img").css({"transform":"rotate(0deg)"})
	}
}, 0);

function bot_let_start(){
	document.getElementById("bot_first_bar").style.display = "none";
	document.getElementById("bot_dot_menu").style.display="block";
	document.getElementById("bot_bar_title").style.display="block";
}

$(".insuretech_click_popup a").click(function(){
	if(document.cookie.indexOf("insurtech_cookie_set") <0){
		$(".insurtech_fill_div").show();
		$(".insurtech_case_study_form").show();
	}
	else{
		var data = {
			'action': 'set_insurtech_cookie_chq',
		};
		$.ajax({
			url: ajaxpagination.ajaxurl ,
			type: 'POST',
			data :  data,
			success:function(data){
				if(data==1){
					$(".insurtech_success_msg").show();
				}
			},	
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(textStatus+errorThrown);
			}
		});
	}
});
$(document).mouseup(function(e) {
	var container = $(".insurtech_case_study_form");

		// if the target of the click isn't the container nor a descendant of the container
		if (!container.is(e.target) && container.has(e.target).length === 0) 
		{
			container.hide();
			$(".insurtech_fill_div").hide();
		}
	});
$(".insurtech_case_study_form .wpcf7 input[type=submit]").click(function(){
		// $( "insurtech_case_study_form" ).hasClass( "wpcf7-mail-sent-ok" )
		var email = $( ".insurtech_case_study_form input[type='email']" ).val();
		if (($( ".insurtech_case_study_form input[type='email']" ).val()!='') && ((/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/).test( $( ".insurtech_case_study_form input[type='email']" ).val()))) {
			var data = {
				'action': 'set_insurtech_cookie',
				'email' : email,
			};
			$.ajax({
				url: ajaxpagination.ajaxurl ,
				type: 'POST',
				data :  data,
				success:function(data){
					if(data==1){
						$(".insurtech_fill_div").hide();
						$(".insurtech_case_study_form").hide();
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					console.log(textStatus+errorThrown);
				}
			});
		}
	});

$("#case_study input[type='submit']").click(function(){
			// console.log($("#case_study input[type='email']").val());
			if($("#case_study input[type='email']").val()==''){
				$("#case_study .screen-reader-response").addClass("testing_error");
			}
			else{
				$("#case_study .screen-reader-response").removeClass("testing_error");
			}
		});


$(".home_connect .wpcf7 input[type='submit']").click(function() {
	// console.log("submit button clicked")
	var name = $(".home_connect .wpcf7 input[type='text']").val();
	var email = $(".home_connect .wpcf7 input[type='email']").val();
	var data={
		name:name,
		email:email,
		action: 'home_reply_mail_send',
	};
	// console.log($(".home_connect .wpcf7 input[type='text']").val()!='',$(".home_connect .wpcf7 input[type='email']").val()!='')
	if($(".home_connect .wpcf7 input[type='text']").val()!='' && $(".home_connect .wpcf7 input[type='email']").val()!='' && grecaptcha.getResponse().length!= 0){
				
				$.ajax({
					type: "POST",
					url: ajaxpagination.ajaxurl ,
					data: data,
					success: function(data) {
						console.log("mail sent")
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
						console.log(textStatus+errorThrown);
					}
				});
			}
		});


$("#our-clients-explore .wpcf7 input[type='submit']").click(function() {
	var name = $("#our-clients-explore .wpcf7 input[type='text']").val();
	var email = $("#our-clients-explore .wpcf7 input[type='email']").val();
	var data={
		name:name,
		email:email,
		action: 'insirtech_reply_mail_send',
	};
			// console.log(grecaptcha.getResponse().length);
			if($("#our-clients-explore .wpcf7 input[type='text']").val()!='' && $("#GetInTouch .wpcf7 input[type='email']").val()!='' && grecaptcha.getResponse().length!= 0){
				$.ajax({
					type: "POST",
					url: ajaxpagination.ajaxurl ,
					data: data,
					success: function() {

					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
						console.log(textStatus+errorThrown);
					}
				});
			}
		});
$("#case_study input[type='submit']").click(function() {
	var email = $("#case_study input[type='email']").val();
	var data={
		email:email,
		action: 'testing_reply_mail_send',
	};
			// console.log(data);
			if($("#case_study input[type='email']").val()!=''){
				$.ajax({
					type: "POST",
					url: ajaxpagination.ajaxurl ,
					data: data,
					success: function() {

					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
						console.log(textStatus+errorThrown);
					}
				});
			}
		});


jQuery('.bot_bar').bind('mousewheel', function(event) {
	event.preventDefault();
	var scrollTop = this.scrollTop;
	this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
			    //console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
			});
			   setInterval(function () {
			   	moveLeft();
			   	moveLefts();
			   }, 1000);

			   var slideCount = $('.testing_top_slider ul li').length;
			   var slideWidth = $('.testing_top_slider ul li').width();
			   var slideHeight = $('.testing_top_slider ul li').height();
			   var sliderUlWidth = slideCount * slideWidth;

				    $('.testing_top_slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

				    $('.testing_top_slider ul li:last-child').prependTo('.testing_top_slider ul');

				    var slideCounts = $('.testing_down_slider ul li').length;
				    var slideWidths = $('.testing_down_slider ul li').width();
				    var slideHeights = $('.testing_down_slider ul li').height();
				    var sliderUlWidths = slideCounts * slideWidths;

				    $('.testing_down_slider ul').css({ width: sliderUlWidths, marginLeft: - slideWidths });

				    $('.testing_down_slider ul li:last-child').prependTo('.testing_top_slider ul');
				    function moveLeft() {
				    	$('.testing_top_slider ul').animate({
				    		left: + slideWidth
				    	}, 800, function () {
				    		$('.testing_top_slider ul li:last-child').prependTo('.testing_top_slider ul');
				    		$('.testing_top_slider ul').css('left', '');
				    	});
				    };
				    function moveLefts() {
				    	$('.testing_down_slider ul').animate({
				    		left: + slideWidths
				    	}, 800, function () {
				    		$('.testing_down_slider ul li:last-child').prependTo('.testing_down_slider ul');
				    		$('.testing_down_slider ul').css('left', '');
				    	});
				    };





				    if ($('.partners_autoplay').length >0) {
				    	$('.partners_autoplay').slick({
				    		dots: true,
				    		customPaging: function(slider, i) {
								      return '<span class="dot"></span>';
								  },
								  slidesToShow: 1,
								  slidesToScroll: 1,
								  autoplay: true,
								  autoplaySpeed: 4000,
								  nextArrow: '',
								  prevArrow: '',
								  speed: 1000,
								  centerMode: false,
								  responsive: [
								  {
								  	breakpoint: 768,
								  	settings: {
								  		slidesToShow: 1,
								  		slidesToScroll: 1,
								  		centerMode: false,
								  	}
								  },
								  ]

								});
				    }

				    if ($('.latest_event_autoplay').length >0) {
				    	$('.latest_event_autoplay').slick({
				    		dots: true,
				    		customPaging: function(slider, i) {
								      return '<span class="dot"></span>';
								  },
								  slidesToShow: 2,
								  slidesToScroll: 2,
								  autoplay: false,
								  autoplaySpeed: 4000,
								  nextArrow: '',
								  prevArrow: '<i class="ci_icon-angle-left"></i>',
								  speed: 1000,
								  centerMode: false,
								  responsive: [
								  {
								  	breakpoint: 768,
								  	settings: {
								  		slidesToShow: 1,
								  		slidesToScroll: 1,
								  		centerMode: false,
								  	}
								  },
								  ]

								});
				    }


				    if ($('.event_autoplay').length >0) {
				    	$('.event_autoplay').slick({
				    		dots: false,
				    		customPaging: function(slider, i) {
								      return '<span class="dot"></span>';
								  },
								  infinite:false,
								  slidesToShow: 3,
								  slidesToScroll: 1,
								  autoplay: false,
								  autoplaySpeed: 4000,
								  nextArrow: '.event_arrow',
								  prevArrow: '',
								  speed: 1000,
								  centerMode: false,
								  responsive: [
								  {
								  	breakpoint: 768,
								  	settings: {
								  		slidesToShow: 3,
								  		slidesToScroll: 1,
								  		centerMode: false,
								  		nextArrow: '.event_arrow',
								  	}
								  },
								  ]

								});
				    }

				    if ($('.home_clients_autoplay').length >0) {

				    	$('.home_clients_autoplay').slick({
				    		infinite:true,
				    		slidesToShow: 4,
				    		slidesToScroll: 1,
				    		autoplay: true,
				    		autoplaySpeed: 1000,
				    		speed: 1000,
				    		centerMode: false,
				    		focusOnSelect: true,
						  // variableWidth: true,
						  nextArrow: '',
						  prevArrow: '',
						  responsive: [
						  {
						  	breakpoint: 1100,
						  	settings: {
						  		slidesToShow: 3,
						  		slidesToScroll: 1,
						  		centerMode: false,
						  	}
						  },
						  {
						  	breakpoint: 768,
						  	settings: {
						  		slidesToShow: 1,
						  		slidesToScroll: 1,
						  		slidesToScroll: 1,
						  		centerMode: false,
						  	}
						  },
						    ]
						});

				    }
				    if ($('.home_blogs_autoplay').length >0) {

				    	$('.home_blogs_autoplay').slick({
				    		infinite:true,
				    		slidesToShow: 2,
				    		slidesToScroll: 1,
				    		autoplay: true,
				    		autoplaySpeed: 1000,
				    		speed: 1000,
				    		centerMode: true,
				    		pauseOnHover:false,
				    		pauseOnChange:true,
				    		focusOnSelect: true,
				    		pauseOnHover:true,
				    		centerPadding: '0px',
						  nextArrow: '.home_blog_arrow_next_div',
						  prevArrow: '.home_blog_arrow_prev_div',
						  responsive: [
						  {
						  	breakpoint: 1100,
						  	settings: {
						  		slidesToShow: 1,
						  		slidesToScroll: 1,
						  		centerMode: true,
						  		centerPadding: '0px',
						  	}
						  },
						  {
						  	breakpoint: 767,
						  	settings: {
						  		slidesToShow: 1,
						  		slidesToScroll: 1,
						  		centerMode: true,
						  		centerPadding: '10px',
						  	}
						  },

						    ]
						});

					    }

				    $(".event_right_text p").each(function() {
				    	if ($(this).text().length > 140) {
				    		$(this).text($(this).text().substr(0, 140));
				    		$(this).append('...');
				    	}
				    });
				    $('.event_2018').show();
				    $('.event_2017').hide();
				    $('.event_2016').hide();
				    $('.event_2018_div').addClass("event_active");
				    $(".event_2018_div").click(function(){
				    	$('.event_2018').show();
				    	$('.event_2017').hide();
				    	$('.event_2016').hide();
				    	$('.event_2018_div').addClass("event_active");
				    	$('.event_2017_div').removeClass("event_active");
				    	$('.event_2016_div').removeClass("event_active");
				    });
				    $(".event_2017_div").click(function(){
				    	$('.event_2017').show();
				    	$('.event_2018').hide();
				    	$('.event_2016').hide();
				    	$('.event_2017_div').addClass('event_active');
				    	$('.event_2018_div').removeClass("event_active");
				    	$('.event_2016_div').removeClass("event_active");
				    });
				    $(".event_2016_div").click(function(){
				    	$('.event_2016').show();
				    	$('.event_2017').hide();
				    	$('.event_2018').hide();
				    	$('.event_2016_div').addClass('event_active');
				    	$('.event_2017_div').removeClass("event_active");
				    	$('.event_2018_div').removeClass("event_active");
				    });

				    var rotation = 0;
				    var rev_rotation = 0;
				    var rot_var=0;
				    jQuery.fn.rotate = function(degrees) {

				    	$(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
				    		'-moz-transform' : 'rotate('+ degrees +'deg)',
				    		'-ms-transform' : 'rotate('+ degrees +'deg)',
				    		'transform' : 'rotate('+ degrees +'deg)'});
				    	return $(this);
				    };
				    jQuery.fn.rev_rotate = function(degrees) {

				    	$(this).css({'-webkit-transform' : 'translate(-50% , -50%) rotate('+ degrees +'deg)',
				    		'-moz-transform' : 'translate(-50% , -50%) rotate('+ degrees +'deg)',
				    		'-ms-transform' : 'translate(-50% , -50%) rotate('+ degrees +'deg)',
				    		'transform' : 'translate(-50% , -50%) rotate('+ degrees +'deg)'});
				    	return $(this);
				    };
				    if (window.matchMedia('(max-width: 950px)').matches) {
				    	$('.dot_bottom').hide();
				    	$('.for_bottom_dot').show();
				    	$('.for_bottom_dot_text').show();
				    	$(".dot_right").addClass("dot_add_0");
				    }
				    else{
				    	$('.dot_right').hide();
				    	$('.for_right_dot').show();
				    	$('.for_right_dot_text').show();
				    }
				    setInterval(function () {
				    	if (window.matchMedia('(max-width: 950px)').matches) {
				    		if (rot_var==0) {
				    			rotation += 90;
				    			rev_rotation-=90;
				    			if(rotation==360){rot_var=1;}
				    			$('.partners_clients_says_img_div').rotate(rotation);
				    			$('.dot_text').rev_rotate(rev_rotation);
				    			$(".dot_right").removeClass("dot_add_0");
				    			$(".dot_left").removeClass("dot_add_180");
				    			$(".dot_bottom").removeClass("dot_add_270");
				    			$(".dot_top").removeClass("dot_add_90");
				    			if(rotation ==180){
				    				$('.dot_top').hide();
				    				$('.for_top_dot').show();
				    				$('.for_top_dot_text').show();
				    				$(".dot_left").addClass("dot_add_180");
				    			}
				    			else{
				    				$('.dot_top').show();
				    				$('.for_top_dot').hide();
				    				$('.for_top_dot_text').hide();

				    			}
				    			if(rotation ==270){
				    				$('.dot_left').hide();
				    				$('.for_left_dot').show();
				    				$('.for_left_dot_text').show("slide", { direction: "right"  }, 500);
				    				$(".dot_bottom").addClass("dot_add_270");										
				    			}
				    			else{
				    				$('.dot_left').show();
				    				$('.for_left_dot').hide();
				    				$('.for_left_dot_text').hide();


				    			}
				    			if(rotation ==90){

				    				$('.dot_right').hide();
				    				$('.for_right_dot').show();
				    				$('.for_right_dot_text').show("slide", { direction: "right"  }, 500);
				    				$(".dot_top").addClass("dot_add_90");
				    			}
				    			else{
				    				$('.dot_right').show();
				    				$('.for_right_dot').hide();
				    				$('.for_right_dot_text').hide();

				    			}
				    			if(rotation ==360 || rotation ==0){

				    				$('.dot_bottom').hide();
				    				$('.for_bottom_dot').show();
				    				$('.for_bottom_dot_text').show("slide", { direction: "right"  }, 500);
				    				$(".dot_right").addClass("dot_add_0");
				    			}
				    			else{

				    				$('.dot_bottom').show();
				    				$('.for_bottom_dot').hide();
				    				$('.for_bottom_dot_text').hide();
				    			}
				    		}else
				    		if (rot_var==1) {
				    			rotation -= 90;
				    			rev_rotation+=90;
				    			if(rotation==0){rot_var=0;}
				    			$('.partners_clients_says_img_div').rotate(rotation);
				    			$('.dot_text').rev_rotate(rev_rotation);
				    			$(".dot_right").removeClass("dot_add_0");
				    			$(".dot_left").removeClass("dot_add_180");
				    			$(".dot_bottom").removeClass("dot_add_270");
				    			$(".dot_top").removeClass("dot_add_90");
				    			if(rotation ==180){
				    				$('.dot_top').hide();
				    				$('.for_top_dot').show();
				    				$('.for_top_dot_text').show("slide", { direction: "left"  }, 500);
				    				$(".dot_left").addClass("dot_add_180");
				    			}
				    			else{
				    				$('.dot_top').show();
				    				$('.for_top_dot').hide();
				    				$('.for_top_dot_text').hide();

				    			}
				    			if(rotation ==270){
				    				$('.dot_left').hide();
				    				$('.for_left_dot').show();
				    				$('.for_left_dot_text').show("slide", { direction: "left"  }, 500);
				    				$(".dot_bottom").addClass("dot_add_270");										
				    			}
				    			else{
				    				$('.dot_left').show();
				    				$('.for_left_dot').hide();
				    				$('.for_left_dot_text').hide();


				    			}
				    			if(rotation ==90){

				    				$('.dot_right').hide();
				    				$('.for_right_dot').show();
				    				$('.for_right_dot_text').show("slide", { direction: "left"  }, 500);
				    				$(".dot_top").addClass("dot_add_90");
				    			}
				    			else{
				    				$('.dot_right').show();
				    				$('.for_right_dot').hide();
				    				$('.for_right_dot_text').hide();

				    			}
				    			if(rotation ==360 || rotation ==0){

				    				$('.dot_bottom').hide();
				    				$('.for_bottom_dot').show();
				    				$('.for_bottom_dot_text').show("slide", { direction: "left"  }, 500);
				    				$(".dot_right").addClass("dot_add_0");
				    			}
				    			else{

				    				$('.dot_bottom').show();
				    				$('.for_bottom_dot').hide();
				    				$('.for_bottom_dot_text').hide();
				    			}
				    		}
								// else if(rotation>=-90){
								// 	rotation += 90;
								// 	$('.partners_clients_says_img_div').rotate(rotation);
								// // }
							 //    rev_rotatetion -= 90;
							 $('.partners_clients_says_img_div').rotate(rotation);
							}
							else
							{
								if (rot_var==0) {
									rotation += 90;
									rev_rotation-=90;
									if(rotation==360){rot_var=1;}
									$('.partners_clients_says_img_div').rotate(rotation);
									$('.dot_text').rev_rotate(rev_rotation);
									if(rotation ==180){
										$('.dot_left').hide();
										$('.for_left_dot').show();
										$('.for_left_dot_text').show("slide", { direction: "up"  }, 500);
									}
									else{
										$('.dot_left').show();
										$('.for_left_dot').hide();
										$('.for_left_dot_text').hide();
									}
									if(rotation ==270){
										$('.dot_bottom').hide();
										$('.for_bottom_dot').show();
										$('.for_bottom_dot_text').show("slide", { direction: "up"  }, 500);
									}
									else{
										$('.dot_bottom').show();
										$('.for_bottom_dot').hide();
										$('.for_bottom_dot_text').hide();
									}
									if(rotation ==90){
										$('.dot_top').hide();
										$('.for_top_dot').show();
										$('.for_top_dot_text').show("slide", { direction: "up"  }, 500);
									}
									else{
										$('.dot_top').show();
										$('.for_top_dot').hide();
										$('.for_top_dot_text').hide();
									}
									if(rotation ==360 || rotation ==0){
										$('.dot_right').hide();
										$('.for_right_dot').show();
										$('.for_right_dot_text').show("slide", { direction: "up"  }, 500);
									}
									else{
										$('.dot_right').show();
										$('.for_right_dot').hide();
										$('.for_right_dot_text').hide();
									}
								}else
								if (rot_var==1) {
									rotation -= 90;
									rev_rotation+=90;
									if(rotation==0){rot_var=0;}
									$('.partners_clients_says_img_div').rotate(rotation);
									$('.dot_text').rev_rotate(rev_rotation);
									if(rotation ==180){
										$('.dot_left').hide();
										$('.for_left_dot').show();
										$('.for_left_dot_text').show("slide", { direction: "down"  }, 500);
									}
									else{
										$('.dot_left').show();
										$('.for_left_dot').hide();
										$('.for_left_dot_text').hide();
									}
									if(rotation ==270){
										$('.dot_bottom').hide();
										$('.for_bottom_dot').show();
										$('.for_bottom_dot_text').show("slide", { direction: "down"  }, 500);
									}
									else{
										$('.dot_bottom').show();
										$('.for_bottom_dot').hide();
										$('.for_bottom_dot_text').hide();
									}
									if(rotation ==90){
										$('.dot_top').hide();
										$('.for_top_dot').show();
										$('.for_top_dot_text').show("slide", { direction: "down"  }, 500);
									}
									else{
										$('.dot_top').show();
										$('.for_top_dot').hide();
										$('.for_top_dot_text').hide();
									}
									if(rotation ==360 || rotation ==0){
										$('.dot_right').hide();
										$('.for_right_dot').show();
										$('.for_right_dot_text').show("slide", { direction: "down"  }, 500);
									}
									else{
										$('.dot_right').show();
										$('.for_right_dot').hide();
										$('.for_right_dot_text').hide();
									}
								}
								// else if(rotation>=-90){
								// 	rotation += 90;
								// 	$('.partners_clients_says_img_div').rotate(rotation);
								// // }
							 //    rev_rotatetion -= 90;
							 $('.partners_clients_says_img_div').rotate(rotation);
							}
						}, 10000);


var home_rotation = 0;
var home_rev_rotation = 0;
var home_rot_var=0;
jQuery.fn.home_rotate = function(degrees) {

	$(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
		'-moz-transform' : 'rotate('+ degrees +'deg)',
		'-ms-transform' : 'rotate('+ degrees +'deg)',
		'transform' : 'rotate('+ degrees +'deg)',
		'transition' : 'all 1s'});

	return $(this);
};
jQuery.fn.home_rev_rotate = function(degrees) {

	$(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg) scale(.55)',
		'-moz-transform' : 'rotate('+ degrees +'deg) scale(.55)',
		'-ms-transform' : 'rotate('+ degrees +'deg) scale(.55)',
		'transform' : 'rotate('+ degrees +'deg) scale(.55)'});

	$('.home_spin_active').css({'-webkit-transform' : 'rotate('+ home_rev_rotation +'deg) scale(.95)',
		'-moz-transform' : 'rotate('+ home_rev_rotation +'deg) scale(.95)',
		'-ms-transform' : 'rotate('+ home_rev_rotation +'deg) scale(.95)',
		'transform' : 'rotate('+ home_rev_rotation +'deg) scale(.95)'});
	return $(this);
};
setInterval(function () {
	home_rotation+=30;
	home_rev_rotation-=30;
	if (window.matchMedia('(max-width: 767px)').matches) {
		home_rot_var=home_rotation%360;
						   		// console.log(home_rot_var);
						   		if (home_rot_var == 0) {
						   			$(".home_img_edureca").removeClass("home_display");
						   			$(".home_img_saab").removeClass("home_display");
						   			$(".home_img_wysa").addClass('home_spin_active');
						   			$(".home_img_shell").addClass("home_display");
						   			$(".home_img_pathomiq_iq").addClass("home_display");
						   		}else{
						   			$(".home_img_wysa").removeClass('home_spin_active');
						   			
						   		}
						   		if (home_rot_var == 30) {
						   			$(".home_img_shell").removeClass("home_display");
						   			$(".home_img_pathomiq_iq").removeClass("home_display");
						   			$(".home_img_bluestone").addClass('home_spin_active');
						   			$(".home_img_ekstep").addClass("home_display");
						   			$(".home_img_myntra").addClass("home_display");
						   		}else{
						   			$(".home_img_bluestone").removeClass('home_spin_active');
						   			
						   		}
						   		if (home_rot_var == 60) {
						   			$(".home_img_ekstep").removeClass("home_display");
						   			$(".home_img_myntra").removeClass("home_display");
						   			$(".home_img_saab").addClass('home_spin_active');
						   			$(".home_img_religare").addClass("home_display");
						   			$(".home_img_ola").addClass("home_display");
						   			
						   		}else{
						   			$(".home_img_saab").removeClass('home_spin_active');
						   			
						   		}
						   		if (home_rot_var == 90) {
						   			$(".home_img_religare").removeClass("home_display");
						   			$(".home_img_ola").removeClass("home_display");
						   			$(".home_img_pathomiq_iq").addClass('home_spin_active');
						   			$(".home_img_wysa").addClass("home_display");
						   			$(".home_img_ezetap").addClass("home_display");
						   			
						   		}else{
						   			$(".home_img_pathomiq_iq").removeClass('home_spin_active');
						   			
						   		}
						   		if (home_rot_var == 120) {
						   			$(".home_img_wysa").removeClass("home_display");
						   			$(".home_img_ezetap").removeClass("home_display");
						   			$(".home_img_myntra").addClass('home_spin_active');
						   			$(".home_img_bluestone").addClass("home_display");
						   			$(".home_img_property_share").addClass("home_display");
						   			
						   		}else{
						   			$(".home_img_myntra").removeClass('home_spin_active');
						   			
						   		}
						   		if (home_rot_var == 150) {
						   			$(".home_img_bluestone").removeClass("home_display");
						   			$(".home_img_property_share").removeClass("home_display");
						   			$(".home_img_ola").addClass('home_spin_active');
						   			$(".home_img_saab").addClass("home_display");
						   			$(".home_img_edureca").addClass("home_display");
						   		}else{
						   			$(".home_img_ola").removeClass('home_spin_active');
						   			
						   		}
						   		if (home_rot_var == 180) {
						   			$(".home_img_saab").removeClass("home_display");
						   			$(".home_img_edureca").removeClass("home_display");
						   			$(".home_img_ezetap").addClass('home_spin_active');
						   			$(".home_img_pathomiq_iq").addClass("home_display");
						   			$(".home_img_shell").addClass("home_display");
						   		}else{
						   			$(".home_img_ezetap").removeClass('home_spin_active');
						   			
						   		}
						   		if (home_rot_var == 210) {
						   			$(".home_img_pathomiq_iq").removeClass("home_display");
						   			$(".home_img_shell").removeClass("home_display");
						   			$(".home_img_property_share").addClass('home_spin_active');
						   			$(".home_img_ekstep").addClass("home_display");
						   			$(".home_img_myntra").addClass("home_display");
						   		}else{
						   			$(".home_img_property_share").removeClass('home_spin_active');
						   			
						   		}
						   		if (home_rot_var == 240) {
						   			$(".home_img_ekstep").removeClass("home_display");
						   			$(".home_img_myntra").removeClass("home_display");
						   			$(".home_img_edureca").addClass('home_spin_active');
						   			$(".home_img_ola").addClass("home_display");
						   			$(".home_img_religare").addClass("home_display");
						   		}else{
						   			$(".home_img_edureca").removeClass('home_spin_active');
						   			
						   		}
						   		if (home_rot_var == 270) {
						   			$(".home_img_ola").removeClass("home_display");
						   			$(".home_img_religare").removeClass("home_display");
						   			$(".home_img_shell").addClass('home_spin_active');
						   			$(".home_img_ezetap").addClass("home_display");
						   			$(".home_img_wysa").addClass("home_display");
						   		}else{
						   			$(".home_img_shell").removeClass('home_spin_active');
						   			
						   		}
						   		if (home_rot_var == 300) {
						   			$(".home_img_ezetap").removeClass("home_display");
						   			$(".home_img_wysa").removeClass("home_display");
						   			$(".home_img_ekstep").addClass('home_spin_active');
						   			$(".home_img_property_share").addClass("home_display");
						   			$(".home_img_bluestone").addClass("home_display");
						   		}else{
						   			$(".home_img_ekstep").removeClass('home_spin_active');
						   			
						   		}
						   		if (home_rot_var == 330) {
						   			$(".home_img_property_share").removeClass("home_display");
						   			$(".home_img_bluestone").removeClass("home_display");
						   			$(".home_img_religare").addClass('home_spin_active');
						   			$(".home_img_edureca").addClass("home_display");
						   			$(".home_img_saab").addClass("home_display");
						   		}else{
						   			$(".home_img_religare").removeClass('home_spin_active');
						   			
						   		}
						   		$(".home_clients_logo").home_rev_rotate(home_rev_rotation);
						   		$('.home_spiner_div').home_rotate(home_rotation);

						   	}
						   	else
						   		{	home_rot_var=home_rotation%360;
						   		// console.log(home_rot_var);
						   		if (home_rot_var == 0) {
						   			$(".home_img_shell").addClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_shell_logo").css({"bottom":"0px"});
						   			}, 200);
						   		}else{
						   			$(".home_img_shell").removeClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_shell_logo").css({"bottom":"-200px"});
						   			}, 200);
						   		}
						   		if (home_rot_var == 30) {
						   			$(".home_img_ekstep").addClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_ekstep_logo").css({"bottom":"0px"});
						   			}, 200);
						   		}else{
						   			$(".home_img_ekstep").removeClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_ekstep_logo").css({"bottom":"-200px"});
						   			}, 200);
						   		}
						   		if (home_rot_var == 60) {
						   			$(".home_img_religare").addClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_religare_logo").css({"bottom":"0px"});
						   			}, 200);
						   			
						   		}else{
						   			$(".home_img_religare").removeClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_religare_logo").css({"bottom":"-200px"});
						   			}, 200);
						   		}
						   		if (home_rot_var == 90) {
						   			$(".home_img_wysa").addClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_wysa_logo").css({"bottom":"0px"});
						   			}, 200);
						   			
						   		}else{
						   			$(".home_img_wysa").removeClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_wysa_logo").css({"bottom":"-200px"});
						   			}, 200);
						   		}
						   		if (home_rot_var == 120) {
						   			$(".home_img_bluestone").addClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_bluestone_logo").css({"bottom":"0px"});
						   			}, 200);
						   			
						   		}else{
						   			$(".home_img_bluestone").removeClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_bluestone_logo").css({"bottom":"-200px"});
						   			}, 200);
						   		}
						   		if (home_rot_var == 150) {
						   			$(".home_img_saab").addClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_saab_logo").css({"bottom":"0px"});
						   			}, 200);
						   		}else{
						   			$(".home_img_saab").removeClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_saab_logo").css({"bottom":"-200px"});
						   			}, 200);
						   		}
						   		if (home_rot_var == 180) {
						   			$(".home_img_pathomiq_iq").addClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_pathomiq_iq_logo").css({"bottom":"0px"});
						   			}, 200);
						   		}else{
						   			$(".home_img_pathomiq_iq").removeClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_pathomiq_iq_logo").css({"bottom":"-200px"});
						   			}, 200);
						   		}
						   		if (home_rot_var == 210) {
						   			$(".home_img_myntra").addClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_myntra_logo").css({"bottom":"0px"});
						   			}, 200);
						   		}else{
						   			$(".home_img_myntra").removeClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_myntra_logo").css({"bottom":"-200px"});
						   			}, 200);
						   		}
						   		if (home_rot_var == 240) {
						   			$(".home_img_ola").addClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_ola_logo").css({"bottom":"0px"});
						   			}, 200);
						   		}else{
						   			$(".home_img_ola").removeClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_ola_logo").css({"bottom":"-200px"});
						   			}, 200);
						   		}
						   		if (home_rot_var == 270) {
						   			$(".home_img_ezetap").addClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_ezetap_logo").css({"bottom":"0px"});
						   			}, 200);
						   		}else{
						   			$(".home_img_ezetap").removeClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_ezetap_logo").css({"bottom":"-200px"});
						   			}, 200);
						   		}
						   		if (home_rot_var == 300) {
						   			$(".home_img_property_share").addClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_property_share_logo").css({"bottom":"0px"});
						   			}, 200);
						   		}else{
						   			$(".home_img_property_share").removeClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_property_share_logo").css({"bottom":"-200px"});
						   			}, 200);
						   		}
						   		if (home_rot_var == 330) {
						   			$(".home_img_edureca").addClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_edureca_logo").css({"bottom":"0px"});
						   			}, 200);
						   		}else{
						   			$(".home_img_edureca").removeClass('home_spin_active');
						   			setTimeout(function() {
						   				$(".home_img_edureca_logo").css({"bottom":"-200px"});
						   			}, 200);
						   		}
						   		setTimeout(function() {
						   			$(".home_clients_logo").home_rev_rotate(home_rev_rotation);
						   			$('.home_spiner_div').home_rotate(home_rotation);
						   		}, 0);

						   	}
						   }, 2000);

var ii = 0;
var txt = 'We Build';
						var speed = 50;
						function typefst() {
							if (txt == 'We Build') {
								if (ii < txt.length) {
									if ($(".home_top_section").width()>0) {
										document.getElementById("home_fst_txt_one").innerHTML += txt.charAt(ii);
									}
									ii++;
									setTimeout(typefst, speed);
								}else{
									ii = 0;
									txt = 'AI-First';
								}
							}else if (txt == 'AI-First') {
								if (ii < txt.length) {
									if ($(".home_top_section").width()>0) {
										document.getElementById("home_fst_txt_ai").innerHTML += txt.charAt(ii);
									}
									ii++;
									setTimeout(typefst, speed);
								}else{
									ii = 0;
									txt = 'Products & Solutions';
								}
							}else if (txt == 'Products & Solutions') {
								if (ii < txt.length) {
									if ($(".home_top_section").width()>0) {
										document.getElementById("home_fst_txt_product").innerHTML += txt.charAt(ii);
									}
									ii++;
									setTimeout(typefst, speed);
								}else{
									ii = 0;
									txt = 'for Digital Enterprises';
								}
							}else if (txt == 'for Digital Enterprises') {
								if (ii < txt.length) {
									if ($(".home_top_section").width()>0) {
										document.getElementById("home_fst_txt_for").innerHTML += txt.charAt(ii);
									}
									ii++;
									setTimeout(typefst, speed);
								}
							}
						}
						$(window).on('load', function() {
							if ($('.banner_anim').width()>0) {
								setTimeout(function() {
									$(".banner_anim").css({"height":"100vh"});
									setTimeout(function() {
										if ($(window).width()>768) {
											$(".banner_anim_text span").css({"height":"60px"});
										}else{
											$(".banner_anim_text span").css({"height":"auto"});
										}

										setTimeout(function() {
											$(".home_arrow , .home_arrow_insurtech").css({"opacity":"1"});
										}, 500);
									}, 500);
								}, 700);
							}
							if ($('.home_first_outer_section').width() > 0) {
								setTimeout(function() {
									typefst();
									setTimeout(function() {
										typefst();
										setTimeout(function() {
											$("#home_fst_txt_ai").addClass('home_fst_txt_ai_line');
											setTimeout(function() {
												typefst();
												setTimeout(function() {
													typefst();

												}, 500);
											}, 500);
										}, 500);
									}, 500);
									setTimeout(function() {
										$(".home_text_img").css({'opacity':'1'});	
										setTimeout(function() {
											$(".home_main_dot_move").css({'opacity':'1'});
											$(".home_main_dot_move_1").css({'-webkit-animation': 'dotmoveone 4s','animation': 'dotmoveone 4s'});
											$(".home_main_dot_move_2").css({'-webkit-animation': 'dotmovetwo 4s','animation': 'dotmovetwo 4s'});
											$(".home_main_dot_move_3").css({'-webkit-animation': 'dotmovethree 4s','animation': 'dotmovethree 4s'});
											$(".home_main_dot_move_4").css({'-webkit-animation': 'dotmovefour 4s','animation': 'dotmovefour 4s'});
											setTimeout(function() {
												$(".home_main_dot_move_1").css({'top':'364px','left':'2px'});
												$(".home_main_dot_move_2").css({'top':'520px','left':'262px'});
												$(".home_main_dot_move_3").css({'top':'141px','left':'147px'});
												$(".home_main_dot_move_4").css({'top':'32px','left':'290px'});
												$(".home_main_dot_move_1").css({'-webkit-animation': ' homeshine 1.4s infinite','animation': ' homeshine 1.4s infinite'});
												$(".home_main_dot_move_2").css({'-webkit-animation': ' homeshine 1.4s infinite','animation': ' homeshine 1.4s infinite'});
												$(".home_main_dot_move_3").css({'-webkit-animation': ' homeshine 1.4s infinite','animation': ' homeshine 1.4s infinite'});
												$(".home_main_dot_move_4").css({'-webkit-animation': ' homeshine 1.4s infinite','animation': ' homeshine 1.4s infinite'});
												$(".home_arrow").css({'opacity':'1'});
											}, 3900);

										}, 1000);


									}, 1000);
								}, 500);
							}
						});

					$( ".home_menu_text h5" ).hover(
						function() {
							$( this ).addClass( "left_home_arrow" );
							$( this ).find('span').addClass( "right_home_arrow" );
							$( this ).find('p').css({"opacity":"1"});
						}, function() {
							$( this ).removeClass( "left_home_arrow" );
							$( this ).find('span').removeClass( "right_home_arrow" );
							$( this ).find('p').css({"opacity":"0"});
						}
						);
					$( ".home_menus" ).hover(
						function() {
							$( this ).addClass( "home_menu_hover" );
							$( this ).find('.home_menu > .menu_img > img').css({"-webkit-animation":"drop_content 1s","animation":"drop_content 1s"});
							$( this ).find('.home_menu > .home_menu_text > a > h1').css({"color":"black"});
							setTimeout(function() {
								$('.home_menu_hover > .home_menu > .menu_img > img').css({"top":"0px"});
							}, 950);
							if ($(".top_about_menu").hasClass('home_menu_hover') && $(window).width()>768) {
								$(".menu-icon").addClass("menu-icon_black");
							}
						}, function() {
							$( this ).removeClass( "home_menu_hover" );
							$( this ).find('.home_menu > .menu_img > img').css({"-webkit-animation":"unset","animation":"unset","top":"-180px"});
							$(".menu-icon").removeClass("menu-icon_black");
							$( this ).find('.home_menu > .home_menu_text > a > h1').css({"color":"white"});

						}
						);

					$( ".anim_line" ).hover(
						function() {
							$( this ).find('strong').css({"-webkit-animation":"btnhover 2.5s","animation":"btnhover 2.5s"});
						}, function() {
							$( this ).find('strong').css({"-webkit-animation":"unset","animation":"unset"});
						}
						);
					
					$( "#fb_icon" ).hover(
						function() {
							document.getElementById('fb_icon').src="/wp-content/themes/spiral-child/images/fb_icon_hover.png";
						}, function() {
							document.getElementById('fb_icon').src="/wp-content/themes/spiral-child/images/fb_icon.png";
						}
						);
					$( "#in_icon" ).hover(
						function() {
							document.getElementById('in_icon').src="/wp-content/themes/spiral-child/images/in_icon_hover.png";
						}, function() {
							document.getElementById('in_icon').src="/wp-content/themes/spiral-child/images/in_icon.png";
						}
						);
					$( "#twitter_icon" ).hover(
						function() {
							document.getElementById('twitter_icon').src="/wp-content/themes/spiral-child/images/twitter_icon_hover.png";
						}, function() {
							document.getElementById('twitter_icon').src="/wp-content/themes/spiral-child/images/twitter_icon.png";
						}
						);
					
					$( "#fb_icon" ).click(function() {
						document.getElementById('fb_icon').src="/wp-content/themes/spiral-child/images/fb_icon_hover.png";
						setTimeout(function() {
							document.getElementById('fb_icon').src="/wp-content/themes/spiral-child/images/fb_icon.png";
						}, 10000);

					});
					$( "#in_icon" ).click(function() {
						document.getElementById('in_icon').src="/wp-content/themes/spiral-child/images/in_icon_hover.png";
						setTimeout(function() {
							document.getElementById('fb_icon').src="/wp-content/themes/spiral-child/images/fb_icon.png";
						}, 10000);
					});
					$( "#twitter_icon" ).click(function() {
						document.getElementById('twitter_icon').src="/wp-content/themes/spiral-child/images/twitter_icon_hover.png";
						setTimeout(function() {
							document.getElementById('fb_icon').src="/wp-content/themes/spiral-child/images/fb_icon.png";
						}, 10000);
					});
					
					$( ".footer_menu p , .main_footer_tc p" ).hover(
						function() {
							$( this ).addClass( "footer_p_hover" );
						}, function() {
							$( this ).removeClass( "footer_p_hover" );
						}
						);
					$( ".footer_menu a h1 , .main_footer_tc a h1" ).hover(
						function() {
							$( this ).css({"color":"#F8E71C"});
						}, function() {
							$( this ).css({"color":"white"});
						}
						);

					$( ".home_menu a h1" ).hover(
						function() {
							$( this ).css({"color":"#c41920"});
						}, function() {
							$( this ).css({"color":"black"});
						}
						);
					$(".next_banner").click(function(){
						$("html , body").animate({ scrollTop: $(window).height() }, 500);
					});


					$( ".home_services" ).hover(
						function() {
							$( ".home_services" ).click();
					}, function() {

					}
					);
					$( ".home_domains" ).hover(
						function() {
							$( ".home_domains" ).click();
					}, function() {

					}
					);
					$( ".fixd_home_bottom").hover(
						function() {
							$( ".fixd_home_bottom").addClass('main_hover_line_ang');
							$( ".fixd_home_bottom").css({"opacity":"1"});
						}, function() {
							$( ".fixd_home_bottom").removeClass('main_hover_line_ang');
							$( ".fixd_home_bottom").css({"opacity":".8"});
						}
						);
					$( ".home_solutions" ).hover(
						function() {
							$( ".home_solutions" ).click();
					}, function() {

					}
					);
					$( ".home_resources" ).hover(
						function() {
							$( ".home_resources" ).click();
					}, function() {

					}
					);
					$( ".fixd_home_left" ).hover(
						function() {
							$( ".fixd_home_left" ).click();

					}, function() {

					}
					);

					

					var home_services = 0;
					var home_domains = 0;
					var home_solutions = 0;
					var home_resources = 0;
					var home_about = 0;
					$(".home_services").click(function(){
						$(".home_resources").css({"font-size":"14px"});
						$(".home_solutions").css({"font-size":"14px"});
						$(".home_domains").css({"font-size":"14px"});
						$(".home_services").css({"font-size":"14px"});
						$(".home_services_menu").addClass('home_menu_hover_side');
						$("#logo").hide();
						setTimeout(function() {
							$('.home_menu_hover_side .home_menu > .menu_img > img').css({"-webkit-animation":"drop_content 1s","animation":"drop_content 1s"});
							setTimeout(function() {
								$('.home_menu_hover_side > .home_menu > .menu_img > img').css({"top":"0px"});
							}, 950);
						}, 500);
						$(".home_services_menu").css({"width":"0px"});
						$(".home_domains_menu").css({"width":"0px"});
						$(".home_solutions_menu").css({"width":"0px"});
						$(".home_resources_menu").css({"width":"0px"});
						$(".home_about_menu").css({"width":"0px"});
						home_domains = 0;
						home_solutions = 0;
						home_resources = 0;
						home_about =0;
						if (home_services == 0) {
							$(".home_services").css({"font-size":"16px","opacity":"1"});
							
							$(".home_services_menu").css({"width":"425px"});
							$(".home_services").addClass("main_hover_line");
							$(".home_domains").removeClass("main_hover_line");
							$(".home_solutions").removeClass("main_hover_line");
							$(".home_resources").removeClass("main_hover_line");
							// home_services = 1;
						} else if( home_services == 1){
							$(".home_services_menu").css({"width":"0px"});
							$(".home_services").removeClass("main_hover_line");
							home_services = 0;
						}
					});		
					$(".home_domains").click(function(){
						$(".home_resources").css({"font-size":"14px"});
						$(".home_solutions").css({"font-size":"14px"});
						$(".home_domains").css({"font-size":"14px"});
						$(".home_services").css({"font-size":"14px"});
						$(".home_domains_menu").addClass('home_menu_hover_side');
						$("#logo").hide();
						setTimeout(function() {
							$('.home_menu_hover_side .home_menu > .menu_img > img').css({"-webkit-animation":"drop_content 1s","animation":"drop_content 1s"});
							setTimeout(function() {
								$('.home_menu_hover_side > .home_menu > .menu_img > img').css({"top":"0px"});
							}, 950);
						}, 500);
						$(".home_services_menu").css({"width":"0px"});
						$(".home_domains_menu").css({"width":"0px"});
						$(".home_solutions_menu").css({"width":"0px"});
						$(".home_resources_menu").css({"width":"0px"});
						$(".home_about_menu").css({"width":"0px"});
						home_solutions = 0;
						home_services = 0;
						home_resources = 0;
						home_about =0;
						if (home_domains == 0) {
							$(".home_domains").css({"font-size":"16px","opacity":"1"});
							
							$(".home_domains_menu").css({"width":"425px"});
							$(".home_domains").addClass("main_hover_line");
							$(".home_services").removeClass("main_hover_line");
							$(".home_solutions").removeClass("main_hover_line");
							$(".home_resources").removeClass("main_hover_line");
							// home_domains = 1;
						} else if( home_domains == 1){
							$(".home_domains_menu").css({"width":"0px"});
							$(".home_domains").removeClass("main_hover_line");
							home_domains = 0;
						}
					});
					$(".home_solutions").click(function(){
						$(".home_resources").css({"font-size":"14px"});
						$(".home_solutions").css({"font-size":"14px"});
						$(".home_domains").css({"font-size":"14px"});
						$(".home_services").css({"font-size":"14px"});
						$(".home_solutions_menu").addClass('home_menu_hover_side');
						$("#logo").hide();
						setTimeout(function() {
							$('.home_menu_hover_side .home_menu > .menu_img > img').css({"-webkit-animation":"drop_content 1s","animation":"drop_content 1s"});
							setTimeout(function() {
								$('.home_menu_hover_side > .home_menu > .menu_img > img').css({"top":"0px"});
							}, 950);
						}, 500);
						$(".home_services_menu").css({"width":"0px"});
						$(".home_domains_menu").css({"width":"0px"});
						$(".home_solutions_menu").css({"width":"0px"});
						$(".home_resources_menu").css({"width":"0px"});
						$(".home_about_menu").css({"width":"0px"});
						home_services = 0;
						home_domains = 0;
						home_resources = 0;
						home_about =0;
						if (home_solutions == 0) {
							$(".home_solutions").css({"font-size":"16px","opacity":"1"});
							
							$(".home_solutions_menu").css({"width":"425px"});
							$(".home_solutions").addClass("main_hover_line");
							$(".home_domains").removeClass("main_hover_line");
							$(".home_services").removeClass("main_hover_line");
							$(".home_resources").removeClass("main_hover_line");
							// home_solutions = 1;
						} else if( home_solutions == 1){
							$(".home_solutions_menu").css({"width":"0px"});
							$(".home_solutions").removeClass("main_hover_line");
							home_solutions = 0;
						}
					});
					$(".home_resources").click(function(){
						$(".home_resources").css({"font-size":"14px"});
						$(".home_solutions").css({"font-size":"14px"});
						$(".home_domains").css({"font-size":"14px"});
						$(".home_services").css({"font-size":"14px"});
						$(".home_resources_menu").addClass('home_menu_hover_side');
						$("#logo").hide();
						setTimeout(function() {
							$('.home_menu_hover_side .home_menu > .menu_img > img').css({"-webkit-animation":"drop_content 1s","animation":"drop_content 1s"});
							setTimeout(function() {
								$('.home_menu_hover_side > .home_menu > .menu_img > img').css({"top":"0px"});
							}, 950);
						}, 500);
						$(".home_services_menu").css({"width":"0px"});
						$(".home_domains_menu").css({"width":"0px"});
						$(".home_solutions_menu").css({"width":"0px"});
						$(".home_resources_menu").css({"width":"0px"});
						$(".home_about_menu").css({"width":"0px"});
						home_services = 0;
						home_domains = 0;
						home_solutions = 0;
						home_about =0;
						if (home_resources == 0) {
							$(".home_resources").css({"font-size":"16px","opacity":"1"});
							
							$(".home_resources_menu").css({"width":"425px"});
							$(".home_resources").addClass("main_hover_line");
							$(".home_domains").removeClass("main_hover_line");
							$(".home_services").removeClass("main_hover_line");
							$(".home_solutions").removeClass("main_hover_line");
							// home_resources = 1;
						} else if( home_resources == 1){
							$(".home_resources_menu").css({"width":"0px"});
							$(".home_resources").removeClass("main_hover_line");
							home_resources = 0;
						}
					});


					var menu_services = 0;
					var menu_domains = 0;
					var menu_solutions = 0;
					var menu_resources = 0;
					var menu_about = 0;
					$("#menu_resources").click(function(){
						if ($(window).width() <= 768) {
							$('.top_resources_menu > .home_menu > .menu_img > img').css({"-webkit-animation":"drop_content 1s","animation":"drop_content 1s"});
							setTimeout(function() {
								$('.top_resources_menu > .home_menu > .menu_img > img').css({"top":"0px"});
							}, 950);
							$(".top_about_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_solutions_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_domains_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_services_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_about_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_resources_menu").css({"height":"0px","margin-bottom":"unset"});
						}else{
						}
						
						$("#menu_solutions").css({"font-size":"30px"});
						$("#menu_domains").css({"font-size":"30px"});
						$("#menu_services").css({"font-size":"30px"});
						$("#menu_about").css({"font-size":"30px"});

						menu_domains = 0;
						menu_solutions = 0;
						menu_resources = 0;
						menu_about =0;
						if (menu_services == 0) {
							if ($(window).width() <= 768) {
								$(".top_resources_menu").css({"height":"unset","margin-bottom":"-55px"});
							}else{
							}
							
						} else if( menu_services == 1){
							$(".home_services_menu").css({"width":"0px"});
							$(".home_services").removeClass("main_hover_line");
							menu_services = 0;
						}
					});		
					$("#menu_solutions").click(function(){
						if ($(window).width() <= 768) {
							$('.top_solutions_menu > .home_menu > .menu_img > img').css({"-webkit-animation":"drop_content 1s","animation":"drop_content 1s"});
							setTimeout(function() {
								$('.top_solutions_menu > .home_menu > .menu_img > img').css({"top":"0px"});
							}, 950);
							$(".top_about_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_solutions_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_domains_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_services_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_about_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_resources_menu").css({"height":"0px","margin-bottom":"unset"});
						}else{

						}
						$("#menu_resources").css({"font-size":"30px"});
						
						$("#menu_domains").css({"font-size":"30px"});
						$("#menu_services").css({"font-size":"30px"});
						$("#menu_about").css({"font-size":"30px"});
						menu_solutions = 0;
						menu_services = 0;
						menu_resources = 0;
						menu_about =0;
						if (menu_domains == 0) {
							if ($(window).width() <= 768) {
								$(".top_solutions_menu").css({"height":"unset","margin-bottom":"-55px"});
							}else{
							}
							
							$("#menu_solutions").css({"font-size":"36px"});
						} else if( menu_domains == 1){
							$(".home_domains_menu").css({"width":"0px"});
							$(".home_domains").removeClass("main_hover_line");
							menu_domains = 0;
						}
					});
					$("#menu_domains").click(function(){
						if ($(window).width() <= 768) {
							$('.top_domains_menu > .home_menu > .menu_img > img').css({"-webkit-animation":"drop_content 1s","animation":"drop_content 1s"});
							setTimeout(function() {
								$('.top_domains_menu > .home_menu > .menu_img > img').css({"top":"0px"});
							}, 950);
							$(".top_about_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_solutions_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_domains_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_services_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_about_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_resources_menu").css({"height":"0px","margin-bottom":"unset"});
						}else{
						}
						
						$("#menu_resources").css({"font-size":"30px"});
						$("#menu_solutions").css({"font-size":"30px"});
						
						$("#menu_services").css({"font-size":"30px"});
						$("#menu_about").css({"font-size":"30px"});
						menu_services = 0;
						menu_domains = 0;
						menu_resources = 0;
						menu_about =0;
						if (menu_solutions == 0) {
							if ($(window).width() <= 768) {
								$(".top_domains_menu").css({"height":"unset","margin-bottom":"-55px"});
							}else{
							}
							
							$("#menu_domains").css({"font-size":"36px"});
						} else if( menu_solutions == 1){
							$(".home_solutions_menu").css({"width":"0px"});
							$(".home_solutions").removeClass("main_hover_line");
							menu_solutions = 0;
						}
					});
					$("#menu_services").click(function(){
						if ($(window).width() <= 768) {
							$('.top_services_menu > .home_menu > .menu_img > img').css({"-webkit-animation":"drop_content 1s","animation":"drop_content 1s"});
							setTimeout(function() {
								$('.top_services_menu > .home_menu > .menu_img > img').css({"top":"0px"});
							}, 950);
							$(".top_about_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_solutions_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_domains_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_services_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_about_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_resources_menu").css({"height":"0px","margin-bottom":"unset"});
						}else{
						}
						
						$("#menu_resources").css({"font-size":"30px"});
						$("#menu_solutions").css({"font-size":"30px"});
						$("#menu_domains").css({"font-size":"30px"});
						
						$("#menu_about").css({"font-size":"30px"});
						menu_services = 0;
						menu_domains = 0;
						menu_solutions = 0;
						menu_about =0;
						if (menu_resources == 0) {
							if ($(window).width() <= 768) {
								$(".top_services_menu").css({"height":"unset","margin-bottom":"-55px"});	
							}else{
							}
							
							$("#menu_services").css({"font-size":"36px"});
						} else if( menu_resources == 1){
							$(".home_resources_menu").css({"width":"0px"});
							$(".home_resources").removeClass("main_hover_line");
							menu_resources = 0;
						}
					});
					$("#menu_about").click(function(){
						if ($(window).width() <= 768) {
							$('.top_about_menu > .home_menu > .menu_img > img').css({"-webkit-animation":"drop_content 1s","animation":"drop_content 1s"});
							setTimeout(function() {
								$('.top_about_menu > .home_menu > .menu_img > img').css({"top":"0px"});
							}, 950);
							$(".top_about_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_solutions_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_domains_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_services_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_about_menu").css({"height":"0px","margin-bottom":"unset"});
							$(".top_resources_menu").css({"height":"0px","margin-bottom":"unset"});
						}else{
						}
						$("#menu_resources").css({"font-size":"30px"});
						$("#menu_solutions").css({"font-size":"30px"});
						$("#menu_domains").css({"font-size":"30px"});
						$("#menu_services").css({"font-size":"30px"});
						
						menu_services = 0;
						menu_domains = 0;
						menu_solutions = 0;
						menu_about =0;
						if (menu_resources == 0) {
							if ($(window).width() <= 768) {
								$(".top_about_menu").css({"height":"unset","margin-bottom":"-55px"});
							}else{
							}
							
							$("#menu_about").css({"font-size":"36px"});
						} else if( menu_resources == 1){
							$(".home_resources_menu").css({"width":"0px"});
							$(".home_resources").removeClass("main_hover_line");
							menu_resources = 0;
						}
					});


					$(".fixd_home_left").click(function(){
						$(".home_services_menu").css({"width":"0px"});
						$(".home_domains_menu").css({"width":"0px"});
						$(".home_solutions_menu").css({"width":"0px"});
						$(".home_resources_menu").css({"width":"0px"});
						$(".home_about_menu").addClass("home_menu_hover_side");
						setTimeout(function() {
							$('.home_menu_hover_side .home_menu > .menu_img > img').css({"-webkit-animation":"drop_content 1s","animation":"drop_content 1s"});
							setTimeout(function() {
								$('.home_menu_hover_side > .home_menu > .menu_img > img').css({"top":"0px"});
							}, 950);
						}, 500);
						$(".home_about_menu").css({"width":"0px"});
						home_services = 0;
						home_resources =0;
						home_domains = 0;
						home_solutions = 0;
						if (home_about == 0) {
							$(".home_about_menu").css({"width":"425px"});
							$(".fixd_home_left").css({"z-index":"9999"})
							$(".fixd_home_left").css({"color":"#c41920"});
							$(".fixd_home_left").addClass("main_hover_line_top");
						} else if( home_about == 1){
							home_about = 0;
						}
					});


					$('.home_left_menu').mouseleave(function(){
						$(".home_services_menu").css({"width":"0px"});
						$(".home_domains_menu").css({"width":"0px"});
						$(".home_solutions_menu").css({"width":"0px"});
						$(".home_resources_menu").css({"width":"0px"});
						$(".home_about_menu").css({"width":"0px"});
						$(".home_resources").removeClass("main_hover_line");
						$(".home_domains").removeClass("main_hover_line");
						$(".home_services").removeClass("main_hover_line");
						$(".home_solutions").removeClass("main_hover_line");
						$('.home_menu_hover_side > .home_menu > .menu_img > img').css({"top":"-180px"});
						$('.home_menu_hover_side .home_menu > .menu_img > img').css({"-webkit-animation":"unset","animation":"unset"});
						$(".home_about_menu").removeClass("home_menu_hover_side");
						$(".home_resources_menu").removeClass("home_menu_hover_side");
						$(".home_domains_menu").removeClass("home_menu_hover_side");
						$(".home_services_menu").removeClass("home_menu_hover_side");
						$(".home_solutions_menu").removeClass("home_menu_hover_side");
						$(".home_resources").css({"font-size":"14px","opacity":".8"});
						$(".home_solutions").css({"font-size":"14px","opacity":".8"});
						$(".home_domains").css({"font-size":"14px","opacity":".8"});
						$(".home_services").css({"font-size":"14px","opacity":".8"});
						
						$("#logo").fadeIn(1000);
						
					});
					$('.home_right_menu').mouseleave(function(){
						$(".home_about_menu").css({"width":"0px"});
						$('.home_menu_hover_side > .home_menu > .menu_img > img').css({"top":"-180px"});
						$('.home_menu_hover_side .home_menu > .menu_img > img').css({"-webkit-animation":"unset","animation":"unset"});

						$(".fixd_home_menu").css({"z-index":"9998"})
						$(".fixd_home_left").css({"color":"white"});
						$(".fixd_home_left").removeClass("main_hover_line_top");
					});
					$(function(){
						$(window).scroll(function(){
							var printer_pos = $('.home_printer').height();
							if($(this).scrollTop()>=printer_pos){
								$(".home_printer_doc1_img").css({"-webkit-animation":"printer_anim 2s","animation":"printer_anim 2s"});
								setTimeout(function() {
									$(".home_printer_doc1_img").css({"height":"0px"});
									$(".home_printer_doc2_img").css({"height":"78px"});
									setTimeout(function() {
										$(".home_printer_doc2_img").css({"-webkit-animation":"printer_anim_flip 1s normal forwards ease-in-out","animation":"printer_anim_flip 1s normal forwards ease-in-out"});
									}, 1000);
								}, 1900);
							}
						});
					});	

					var keys = {37: 1, 38: 1, 39: 1, 40: 1};

					function preventDefault(e) {
						e = e || window.event;
						if (e.preventDefault)
							e.preventDefault();
						e.returnValue = false;  
					}

					function preventDefaultForScrollKeys(e) {
						if (keys[e.keyCode]) {
							preventDefault(e);
							return false;
						}
					}

					function disableScroll() {
						  if (window.addEventListener) // older FF
						  	window.addEventListener('DOMMouseScroll', preventDefault, false);
						  window.onwheel = preventDefault; // modern standard
						  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
						  window.ontouchmove  = preventDefault; // mobile
						  document.onkeydown  = preventDefaultForScrollKeys;
						}

						function enableScroll() {
							if (window.removeEventListener)
								window.removeEventListener('DOMMouseScroll', preventDefault, false);
							window.onmousewheel = document.onmousewheel = null; 
							window.onwheel = null; 
							window.ontouchmove = null;  
							document.onkeydown = null;  
						}
						var scrollcount =0;
						var numbercountr =0;
					
					var supportTouch = $.support.touch,
					scrollEvent = "touchmove scroll",
					touchStartEvent = supportTouch ? "touchstart" : "mousedown",
					touchStopEvent = supportTouch ? "touchend" : "mouseup",
					touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
					$.event.special.swipeupdown = {
						setup: function() {
							var thisObject = this;
							var $this = $(thisObject);
							$this.bind(touchStartEvent, function(event) {
								var data = event.originalEvent.touches ?
								event.originalEvent.touches[ 0 ] :
								event,
								start = {
									time: (new Date).getTime(),
									coords: [ data.pageX, data.pageY ],
									origin: $(event.target)
								},
								stop;

								function moveHandler(event) {
									if (!start) {
										return;
									}
									var data = event.originalEvent.touches ?
									event.originalEvent.touches[ 0 ] :
									event;
									stop = {
										time: (new Date).getTime(),
										coords: [ data.pageX, data.pageY ]
									};

		                    // prevent scrolling
		                    if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
		                    	event.preventDefault();
		                    }
		                }
		                $this
		                .bind(touchMoveEvent, moveHandler)
		                .one(touchStopEvent, function(event) {
		                	$this.unbind(touchMoveEvent, moveHandler);
		                	if (start && stop) {
		                		if (stop.time - start.time < 1000 &&
		                			Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
		                			Math.abs(start.coords[0] - stop.coords[0]) < 75) {
		                			start.origin
		                		.trigger("swipeupdown")
		                		.trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
		                	}
		                }
		                start = stop = undefined;
		            });
		            });
						}
					};
					$.each({
						swipedown: "swipeupdown",
						swipeup: "swipeupdown"
					}, function(event, sourceEvent){
						$.event.special[event] = {
							setup: function(){
								$(this).bind(sourceEvent, $.noop);
							}
						};
					});


					var lastScrollTopvar = 0;
					var lastScrollTopvar1 =0;
					var lastScrollTopvar2 =0;
					var lastScrollTopvar3 =0;
					var lastScrollTopvar4 =0;
					var lastScrollTopvar5 =0;
					var lastScrollTopvar6 =0;
					var lastScrollTopvar7 =0;
					var lastScrollTopvar8 =0;
					var scrollcount = 0;
					var scrollcount1 = 0;
					var scrollcount2 = 0;
					var scrollcount3 = 0;
					var scrollcount4 = 0;
					var scrollcount5 = 0;
					var scrollcount6 = 0;
					var scrollcount7 = 0;
					var scrollcount8 = 0;


					
					var mobile_slider_var=0;
					$('.home_slider_mobile').bind('scroll', function (event) {
						// event.stopPropagation();
						var home_slider_scrollTop = $(this).scrollTop();
						var home_scroll_height = $(".home_slider_mobile_inner_outer").height() - $(window).height();
						var stop = $(this).scrollTop();

						if (stop > lastScrollTop && stop < lastScrollTop && scrollcount!=1){
							$("html, body").animate({scrollTop: ($(".home_slider_mobile").offset().top) - $(window).height()/6}, 500);
							scrollcount=1;
						}
						if (stop > lastScrollTop && scrollcount!=1){
							home_slider_mobile_rev();
							scrollcount=1;
						}

						if(stop < lastScrollTop && scrollcount!=2){
							home_slider_mobile();
							scrollcount=2;
						}
						lastScrollTop = stop;
					});

					setInterval(function () {
						$(".insurtech_carousal > .carousel_navigation > .carousel_next").click();
					}, 5000);

					var insuretech_click_var = 1;
					$(".insurtech_carousal > .carousel_navigation > .carousel_next").click(function(){
						insuretech_click_var ++;
						if (insuretech_click_var==4) {
							insuretech_click_var =1;
						}
						if (insuretech_click_var==1) {
							$('.insurtech_progress_bar > .tcvpb_meter > .tcvpb_meter_percentage').css({"transition": "width .5s","width":"100%"});
							$(".insuetech_carousal_text_bold").text('Insurance Specific AI Chatbot');
							$(".insuetech_carousal_text").text('A complete Customer Agent Solution which incorporates insightful UX for better workflows, Advanced AI and a robust Human Agent communication module at the background to handle escalations and AI Drop-offs.');
							$(".insurtech_count_img > p > strong").text('01/');
							setTimeout(function() {
								$('.insurtech_progress_bar > .tcvpb_meter > .tcvpb_meter_percentage').css({"width":"0%",'transition': 'unset'});
							}, 500);
						}
						if (insuretech_click_var==3) {
							$('.insurtech_progress_bar > .tcvpb_meter > .tcvpb_meter_percentage').css({"transition": "width .5s","width":"100%"});
							$(".insuetech_carousal_text_bold").text('Industry’s first Insurance specific LMS');
							$(".insuetech_carousal_text").text('LMS - Lead Management System by Mantra Labs is a complete solution focused on the unique workflows of an Insurance Company which harnesses AI/ML to build the most intuitive LMS in the world. ');
							$(".insurtech_count_img > p > strong").text('03/');
							setTimeout(function() {
								$('.insurtech_progress_bar > .tcvpb_meter > .tcvpb_meter_percentage').css({"width":"0%",'transition': 'unset'});
							}, 500);
						}
						if (insuretech_click_var==2) {
							$('.insurtech_progress_bar > .tcvpb_meter > .tcvpb_meter_percentage').css({"transition": "width .5s","width":"100%"});
							$(".insuetech_carousal_text_bold").text('Inbound Document Processing Parser');
							$(".insuetech_carousal_text").text('Docparser - AI Based Word Recognition and information extraction from scanned documents and images for the Digital Insurer');
							$(".insurtech_count_img > p > strong").text('02/');
							setTimeout(function() {
								$('.insurtech_progress_bar > .tcvpb_meter > .tcvpb_meter_percentage').css({"width":"0%",'transition': 'unset'});
							}, 500);
						}
					});

					$(".insurtech_carousal > .carousel_navigation > .carousel_prev").click(function(){
						insuretech_click_var --;
						if ( insuretech_click_var==-1 || insuretech_click_var==0) {
							insuretech_click_var =3;
						}
						if (insuretech_click_var==1) {
							$('.insurtech_progress_bar > .tcvpb_meter > .tcvpb_meter_percentage').css({"transition": "width .5s","width":"100%"});
							$(".insuetech_carousal_text_bold").text('Insurance Specific AI Chatbot');
							$(".insuetech_carousal_text").text('A complete Customer Agent Solution which incorporates insightful UX for better workflows, Advanced AI and a robust Human Agent communication module at the background to handle escalations and AI Drop-offs.');
							$(".insurtech_count_img > p > strong").text('01/');
							setTimeout(function() {
								$('.insurtech_progress_bar > .tcvpb_meter > .tcvpb_meter_percentage').css({"width":"0%",'transition': 'unset'});
							}, 500);
						}
						if (insuretech_click_var==3) {
							$('.insurtech_progress_bar > .tcvpb_meter > .tcvpb_meter_percentage').css({"transition": "width .5s","width":"100%"});
							$(".insuetech_carousal_text_bold").text('Industry’s first Insurance specific LMS');
							$(".insuetech_carousal_text").text('LMS - Lead Management System by Mantra Labs is a complete solution focused on the unique workflows of an Insurance Company which harnesses AI/ML to build the most intuitive LMS in the world. ');
							$(".insurtech_count_img > p > strong").text('03/');
							setTimeout(function() {
								$('.insurtech_progress_bar > .tcvpb_meter > .tcvpb_meter_percentage').css({"width":"0%",'transition': 'unset'});
							}, 500);
						}
						if (insuretech_click_var==2) {
							$('.insurtech_progress_bar > .tcvpb_meter > .tcvpb_meter_percentage').css({"transition": "width .5s","width":"100%"});
							$(".insuetech_carousal_text_bold").text('Inbound Document Processing Parser');
							$(".insuetech_carousal_text").text('Docparser - AI Based Word Recognition and information extraction from scanned documents and images for the Digital Insurer');
							$(".insurtech_count_img > p > strong").text('02/');
							setTimeout(function() {
								$('.insurtech_progress_bar > .tcvpb_meter > .tcvpb_meter_percentage').css({"width":"0%",'transition': 'unset'});
							}, 500);
						}
					});
					
					$( ".home_connect input[type='text'] , .home_connect input[type='email'] , .home_connect textarea" ).focus(function() {
						var ele = $(this)

						$(".home_call_me").css({"animation":"shake_phone 2s infinite","-webkit-animation": "shake_phone 2s infinite","-moz-animation": "shake_phone 2s infinite","-o-animation": "shake_phone 2s infinite"});
					  
					  if ($(window).width()<=768) {
					  	setTimeout(function() {
					  	}, 300);
					  }
					});
					
					$('.home_connect').click(function(evt){    
						if(!$(evt.target).is('.home_connect input , .home_connect textarea')) {
							$('.home_connect input').blur();
						}
					});
					$( ".home_connect textarea" ).focus(function() {
						$(".home_call_me").css({"animation":"shake_phone 2s infinite","-webkit-animation": "shake_phone 2s infinite","-moz-animation": "shake_phone 2s infinite","-o-animation": "shake_phone 2s infinite"});
						$(".hide_recapcha").show();
					});
					$( ".home_connect input" ).focusout(function() {
						$(".home_call_me").css({"animation":"unset","-webkit-animation": "unset","-moz-animation": "unset","-o-animation": "unset"});
						$(".hide_recapcha").show();
						// console.log("click");
					});

					$( ".home_doc_outer" ).mousemove(function( event ) {
						var clientCoords = event.clientX ;
						var position = $( ".home_doc_outer" ).offset();
					 var divpos = clientCoords - position.left;
					 if (divpos < ($( ".home_doc_outer" ).width())) {
					 	var home_doc_inner =document.getElementById('home_doc_inner');
					 	home_doc_inner.style.width = divpos + 'px';
					 }

					});
					$('.easy_up').click(function(){
						if ($("#fullpage").length == 0) {
							$("html, body").animate({ scrollTop: 0 }, 500);
						}
					});
					
					anim_count =0;
					var drop_phone = 0;
					$(window).scroll(function (event) {
						var home_first_section = $(window).height();
						var home_scroll = $(window).scrollTop();
						var home_call_me = $(".home_connect").offset();

					    
					    if (home_scroll > home_first_section * 2) {
					    	$('.easy_up').fadeIn(200);
					    }else{
					    	$('.easy_up').fadeOut(200);
					    }
					    if (home_scroll > home_first_section/3) {
					    	$('#bot_button , #bot_hover_text , #chat_bot_div').hide();
					    }else{
					    	$('#bot_button , #bot_hover_text').show();
					    }
					    if(home_scroll > (home_first_section-(home_first_section/5)-(home_first_section/5))){
					    	$(".drop_light").css({"-webkit-animation":"drop_light 1s","animation":"drop_light 1s"});
					    	setTimeout(function() {
					    		$(".drop_light").css({"top":"0px"});
					    		$(".home_robo_top_text h1").css({"opacity":"1"});
					    		setTimeout(function() {
					    			$(".home_robo_top_text p").css({"opacity":"1"});
					    		}, 500);
					    	}, 550);
					    	setTimeout(function() {
					  			if (anim_count==0) {
					  				if ($(window).width() >= 768 && anim_count == 0) {
					  					$('.home_robo_card_1').css({"z-index":"1"});
					  					$('.home_robo_card_2').css({"z-index":"0"});
					  					$('.home_robo_card_3').css({"z-index":"0"});
					  					robo_animation();
										$("#home_scrollbars_1").addClass('scrollbar_bot_after');
										anim_count++;
									}
								}
							}, 1500);

					    }else{
					    }
					    if ($(".home_robo_section").width() >0 && $(window).width() == 768) {
					    	if(home_scroll > ($(".home_robo_card_1").offset().top - $('.home_robo_card_1').height()/2)){
					    		digital_animation();
					    	}
					    	if(home_scroll > ($(".home_robo_card_2").offset().top - $('.home_robo_card_2').height()/2)){
					    		home_emoji();
					    	}
					    }
					    if ($(".home_robo_section").width() >0 && $(window).width() <= 768) {
					    	if(home_scroll > ($(".home_robo_card_1").offset().top + $('.home_robo_card_1').height()/3)){
					    		digital_animation();
					    	}
					    	if(home_scroll > ($(".home_robo_card_2").offset().top + $('.home_robo_card_2').height()/3)){
					    		home_emoji();
					    	}
					    }

					    if ($('#sellfash').width() >0) {
				    		if (home_scroll > $('#sellfash').offset().top ){
				    			$('#sellfash').css({'background-attachment':'inherit'});
				    		}else{
				    			$('#sellfash').css({'background-attachment':'fixed'});
				    		}
				    	}

				    	if (home_scroll >= home_first_section) {
				    		if($(window).width() > 768 && $(".home_first_outer_section").width()>0) {
				    			$("#ABdev_main_header").css({"background-color":"black","position":"fixed"});
				    			$(".menu-icon").css({"display":"block"});
				    		}
				    	}
				    	else{
				    		if($(window).width() > 768 && $(".home_first_outer_section").width()>0) {
				    			$("#ABdev_main_header").css({"background-color":"transparent","position":"absolute"});
				    			$(".menu-icon").css({"display":"none"});
				    		}
				    	}
				    	if ($(".doc_banner_section").width()>0) {
					    	if (home_scroll >= $(".doc_second_right_outer").offset().top - $(window).height() + $(window).height()/4) {
					    		$(".doc_second_right_inner").css({"width":"100%"});
					    	}
					    	if ($(window).width() <=768) {
					    		if (home_scroll >= $(".doc_card").offset().top - $(window).height() + $(window).height()/4) {
					    			$(".doc_card_1").css({"opacity":"1"});
					    		}
					    		if (home_scroll >= $(".doc_card_2").offset().top - $(window).height() + $(window).height()/4) {
					    			$(".doc_card_2").css({"opacity":"1"});
					    		}
					    		if (home_scroll >= $(".doc_card_3").offset().top - $(window).height() + $(window).height()/4) {
					    			$(".doc_card_3").css({"opacity":"1"});
					    		}
					    		if (home_scroll >= $(".doc_card_4").offset().top - $(window).height() + $(window).height()/4) {
					    			$(".doc_card_4").css({"opacity":"1"});
					    		}
					    		if (home_scroll >= $(".doc_card_5").offset().top - $(window).height() + $(window).height()/4) {
					    			$(".doc_card_5").css({"opacity":"1"});
					    		}

					    	}
					    	else{
					    		if (home_scroll >= $(".doc_features").offset().top - $(window).height() + $(window).height()/4) {
					    			$(".doc_card_1").css({"opacity":"1"});
					    			setTimeout(function() {
					    				$(".doc_card_2").css({"opacity":"1"});
					    				setTimeout(function() {
					    					$(".doc_card_3").css({"opacity":"1"});
					    					setTimeout(function() {
					    						$(".doc_card_4").css({"opacity":"1"});
					    						setTimeout(function() {
					    							$(".doc_card_5").css({"opacity":"1"});
					    						} ,500); 
					    					} ,500);     	
					    				} ,500);
					    			} ,500);
					    		}
					    	}
					    	if (home_scroll >= $(".doc_work_process").offset().top - $(window).height() + $(window).height()/4) {
					    		$(".doc_work_top_1").css({"opacity":"1"});
					    		setTimeout(function() {
					    			$(".doc_work_bottom_1").css({"opacity":"1"});
					    			setTimeout(function() {
					    				$(".doc_work_top_2").css({"opacity":"1"});
					    				setTimeout(function() {
					    					$(".doc_work_bottom_2").css({"opacity":"1"});
					    					setTimeout(function() {
					    						$(".doc_work_top_3").css({"opacity":"1"});
					    					} ,500); 
					    				} ,500);     	
					    			} ,500);
					    		} ,500);
					    	}
					    	if (home_scroll >= $(".doc_application_right_div").offset().top - $(window).height() + $(window).height()/4) {
					    		if ($(window).width() >768) {
					    			$(".doc_application_right_div").css({"height":"460px"});
					    		}
					    	}
					    	if (home_scroll >= $(".doc_application_right_div").offset().top - $(window).height() + $(window).height()/5) {
					    		if ($(window).width() <768) {
					    			$(".doc_application_right_div").css({"height":"360px"});
					    		}
					    	}

					    }
					    if ($(".doc_card_section").width()>0) {
					    	if ($(window).width() <=768) {
					    		if (home_scroll >= $(".doc_cards_left").offset().top - $(window).height() + $(window).height()/5) {
					    			$(".doc_cards_left").css({"opacity":"1"});
					    			$(".doc_work_process h3").css({"opacity":"1"});
					    			$(".doc_line").addClass("opacity_anim_before");
					    		}
					    		if (home_scroll >= $(".doc_cards_right").offset().top - $(window).height() + $(window).height()/5) {
					    			$(".doc_cards_right").css({"opacity":"1"});
					    			$(".doc_work_process h4").css({"opacity":"1"});
					    			$(".doc_line").addClass("opacity_anim_after");
					    		}
					    	}
					    	else{
					    		if (home_scroll >= $(".doc_card_section").offset().top - $(window).height()/2) {
					    			$(".doc_cards_left").css({"opacity":"1"});
					    			$(".doc_work_process h3").css({"opacity":"1"});
					    			$(".doc_line").addClass("opacity_anim_before");
					    			setTimeout(function() {
					    				$(".doc_cards_right").css({"opacity":"1"});
					    				$(".doc_work_process h4").css({"opacity":"1"});
					    				$(".doc_line").addClass("opacity_anim_after");
					    			} ,1000);

					    		}
					    	}

					    }

					    if ($(".lms_benefits").width()>0) {
					    	if ($(window).width() <=768) {
					    		if (home_scroll >= $(".lms_card_1").offset().top - $(window).height() + $(".lms_count").height()) {
					    			$(".lms_card_1").css({"opacity":"1"});
					    			$(".lms_card_line_1").addClass("opacity_anim_before");
					    		}
					    		if (home_scroll >= $(".lms_card_2").offset().top - $(window).height() + $(".lms_count").height()) {
					    			$(".lms_card_2").css({"opacity":"1"});
					    			$(".lms_card_line_1").addClass("opacity_anim_before");
					    		}
					    		if (home_scroll >= $(".lms_card_3").offset().top - $(window).height() + $(".lms_count").height()) {
					    			$(".lms_card_3").css({"opacity":"1"});
					    			$(".lms_card_line_2").addClass("opacity_anim_before");
					    		}
					    		if (home_scroll >= $(".lms_card_4").offset().top - $(window).height() + $(".lms_count").height()) {
					    			$(".lms_card_4").css({"opacity":"1"});
					    			$(".lms_card_line_2").addClass("opacity_anim_before");
					    		}
					    	}
					    	else{
					    		if (home_scroll >= $(".lms_card_1").offset().top - $(window).height() + $(window).height()/5) {
					    			$(".lms_card_1").css({"opacity":"1"});
					    			$(".lms_card_line_1").addClass("opacity_anim_before");
					    			setTimeout(function() {
					    				$(".lms_card_2").css({"opacity":"1"});
					    				$(".lms_card_line_1").addClass("opacity_anim_after");
					    			} ,1000);

					    		}
					    		if (home_scroll >= $(".lms_card_3").offset().top - $(window).height()/2) {
					    			$(".lms_card_3").css({"opacity":"1"});
					    			$(".lms_card_line_2").addClass("opacity_anim_before");
					    			setTimeout(function() {
					    				$(".lms_card_4").css({"opacity":"1"});
					    				$(".lms_card_line_2").addClass("opacity_anim_after");
					    			} ,1000);
					    		}
					    	}
					    }

					    if ($(".lms_features").width()>0) {
					    	if ($(window).width() <=768) {
					    		if (home_scroll >= $(".lms_count_1").offset().top - $(window).height() + $(".lms_count").height()) {
					    			$(".lms_count_1").css({"opacity":"1"});
					    		}
					    		if (home_scroll >= $(".lms_count_2").offset().top - $(window).height() + $(".lms_count").height()) {
					    			$(".lms_count_2").css({"opacity":"1"});
					    		}
					    		if (home_scroll >= $(".lms_count_3").offset().top - $(window).height() + $(".lms_count").height()) {
					    			$(".lms_count_3").css({"opacity":"1"});
					    		}
					    		if (home_scroll >= $(".lms_count_4").offset().top - $(window).height() + $(".lms_count").height()) {
					    			$(".lms_count_4").css({"opacity":"1"});
					    		}
					    		if (home_scroll >= $(".lms_count_5").offset().top - $(window).height() + $(".lms_count").height()) {
					    			$(".lms_count_5").css({"opacity":"1"});
					    		}
					    		if (home_scroll >= $(".lms_religare_img_div").offset().top - $(window).height() + $(window).height()/5) {
					    			$(".lms_religare_img").css({"width":"100%","opacity":"1"});
					    		}
					    	}
					    	else{
					    		if (home_scroll >= $(".lms_features").offset().top - $(window).height()/4) {
					    			$(".lms_count_1").css({"opacity":"1"});
					    			setTimeout(function() {
					    				$(".lms_count_2").css({"opacity":"1"});
					    				setTimeout(function() {
					    					$(".lms_count_3").css({"opacity":"1"});
					    					setTimeout(function() {
					    						$(".lms_count_4").css({"opacity":"1"});
					    						setTimeout(function() {
					    							$(".lms_count_5").css({"opacity":"1"});
					    						} ,500); 
					    					} ,500);     	
					    				} ,500);
					    			} ,500);
					    		}
					    		if (home_scroll >= $(".lms_religare_img_div").offset().top - $(window).height()/4) {
					    			$(".lms_religare_img").css({"width":"100%","opacity":"1"});
					    		}
					    	}
					    }
					    if ($(".lms_advantages").width()>0) {
					    	if ($(window).width() <=768) {
					    		if (home_scroll >= $(".lms_advantages").offset().top - $(window).height() + $(window).height()/5) {
					    			$(".lms_advantages_div").css({"opacity":"1"});
					    		}

					    	}
					    	else{
					    		if (home_scroll >= $(".lms_advantages").offset().top - $(window).height() + $(window).height()/5) {
					    			$(".lms_advantages_div").css({"opacity":"1"});
					    		}
					    	}
					    }
					    if ($(".doc_clients").width()>0) {
					    	if ($(window).width() <=768) {
					    		if (home_scroll >= $(".doc_clients").offset().top - $(window).height() + $(window).height()/5 ) {
					    			$(".doc_clients_img").css({"opacity":"1"});
					    		}

					    	}
					    	else{
					    		if (home_scroll >= $(".doc_clients").offset().top - $(window).height() + $(window).height()/5) {
					    			$(".doc_clients_img").css({"opacity":"1"});
					    		}
					    	}
					    }

					   if (home_scroll > (home_first_section + home_first_section/2)) {
					   	if($(window).width() <= 768 && anim_count == 0) {
					   		robo_animation();
					   		$("#home_scrollbars_1").addClass('scrollbar_bot_after');
					   		anim_count++;
					   	}
					   }

					   if (home_scroll > (home_first_section + home_first_section - 100 )) {
					   	if($(window).width() > 768) {
					   		if ($(".home_strategic_top").width()>0) {
					   			document.getElementById('home_right_arrow').src="/wp-content/themes/spiral-child/images/home_right_arrow.png";
					   		}
					   		$(".home_right_arrow_div").css({"width":"108px"});
					   		$(".home_strategic_top_text > h1").addClass('home_strategic_top_text_effect');
					   	}

					   }else{
					   	if($(window).width() > 768) {
					   		$(".home_right_arrow_div").css({"width":"0px"});
					   	}
						      // $(".home_strategic_top_text > h1").removeClass('home_strategic_top_text_effect');
						  }
						  if ($('.home_clients_section').width() >0) {
						  	if (home_scroll > $('.home_clients_section').offset().top - 100) {
						  		$(".home_clients_top_text h1").addClass('home_strategic_top_text_effect');
						  	}
						  }
						  else{
						  	$(".home_clients_top_text h1").removeClass('home_strategic_top_text_effect');
						  }
						  if (home_scroll > (home_first_section + home_first_section + home_first_section/2)) {
						  	if($(window).width() > 768) {
						  		if ($(".home_strategic_top").width()>0) {
						  			document.getElementById('home_left_arrow').src="/wp-content/themes/spiral-child/images/home_left_arrow.png";
						  		}
						  		$(".home_left_arrow_div").css({"width":"116px"});
						  	}
						  }else{
						  	if($(window).width() > 768) {
						  		$(".home_left_arrow_div").css({"width":"0px"});
						  	}
						  }
						  if ($('.home_strategic_section').width()>0) {
						  	if (home_scroll > ($('.home_strategic_section').offset().top + home_first_section/2)) {

						  		if($(window).width() <= 768) {
						  			if ($(".home_strategic_top").width()>0) {
						  				document.getElementById('home_left_arrow').src="/wp-content/themes/spiral-child/images/strategic_right_arrow.png";
						  			}
						  			$(".home_left_arrow_div").css({"height":"118px"});
						   	}

						   }else{
						   	if($(window).width() <= 768) {
						   		$(".home_left_arrow_div").css({"height":"0px"});
						   		
						   	}
						   }
						}
						if ($(".home_call_me").height() > 0 ) {

							if (home_scroll > home_call_me.top - 60 && drop_phone ==0) {
								$(".home_connect h1").addClass('home_strategic_top_text_effect_connect');
								$(".home_call_me").css({"animation":"drop_phone 2s","-webkit-animation": "drop_phone 2s","-moz-animation": "drop_phone 2s","-o-animation": "drop_phone 2s"});
								setTimeout(function() {
									$(".home_call_me").css({"top":"-100px"});
								}, 1900);
								drop_phone++;
							}
						}

						if ($(".home_our_blog_section").height() > 0 ) {

							if (home_scroll > $('.home_our_blog_section').offset().top -100) {
								$(".home_our_blog_text").addClass('home_strategic_top_text_effect_connect');
							}
						}

						if (home_scroll > $(".main_footer").offset().top - $(window).height()) {
							if($(window).width() <= 768) {
								$(".home_boat").css({"animation":"boat_move 3s infinite , boat_go 60s","-webkit-animation": "boat_move 3s infinite , boat_go 60s","-moz-animation": "boat_move 3s infinite , boat_go 60s ","-o-animation": "boat_move 3s infinite , boat_go 60s"});
								setTimeout(function() {
									$(".home_boat").css({"left":"85%"});
								}, 59000);
								// console.log('call');
							}
							else{
								$(".home_boat").css({"animation":"boat_move 3s infinite , boat_go 60s","-webkit-animation": "boat_move 3s infinite , boat_go 60s","-moz-animation": "boat_move 3s infinite , boat_go 60s ","-o-animation": "boat_move 3s infinite , boat_go 60s"});
								setTimeout(function() {
									$(".home_boat").css({"left":"85%"});
								}, 59000);
							}

							setTimeout(function() {
								$(".home_wooden_section").css({"top":"-50px","height":"50px"});
							}, 0);

						}


					});

function detectswipe(el,func) {
						// console.log("imin");
						swipe_det = new Object();
						swipe_det.sX = 0;
						swipe_det.sY = 0;
						swipe_det.eX = 0;
						swipe_det.eY = 0;
				      var min_x = 40;  //min x swipe for horizontal swipe
				      var max_x = 40;  //max x difference for vertical swipe
				      var min_y = 40;  //min y swipe for vertical swipe
				      var max_y = 40;  //max y difference for horizontal swipe
				      var direc = "";
				      ele = document.getElementById(el);
				      ele.addEventListener('touchstart',function(e){
				      	var t = e.touches[0];
				      	swipe_det.sX = t.screenX; 
				      	swipe_det.sY = t.screenY;
				      },false);
				      ele.addEventListener('touchmove',function(e){
				      	e.preventDefault();
				      	var t = e.touches[0];
				      	swipe_det.eX = t.screenX; 
				      	swipe_det.eY = t.screenY;    
				      },false);
				      ele.addEventListener('touchend',function(e){
				        //horizontal detection
				        if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX) && (swipe_det.sY > swipe_det.eY - max_y)))) {

				        	if(swipe_det.eX > swipe_det.sX) direc = "r";
				        	else direc = "l";
				        	// console.log(direc);
				        }
				        //vertical detection
				        if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY) ) && ( (swipe_det.sX > swipe_det.eX - max_x)))) {

				        	if(swipe_det.eY > swipe_det.sY) direc = "d";
				        	else direc = "u";
				        	// console.log(direc);
				        }

				        if (direc != "") {
				        	if(typeof func == 'function') func(el,direc);
				        }
				        direc = "";
				    },false);  
				  }

				   $(".testimonials_left_arrow_div").click(function(){
				   	home_testimonials_play_var = 1;
				   	$('.home_testimonials_autoplay').slick('slickPause');
				   });
				   $(".testimonials_right_arrow_div").click(function(){
				   	home_testimonials_play_var = 1;
				   	$('.home_testimonials_autoplay').slick('slickPause');
							
						});
				   $('.home_testimonials_card').focusin(function () {
				   	$('.home_testimonials_autoplay').slick('slickPause');
				   }).focusout(function () {
				   	$('.home_testimonials_autoplay').slick('slickPause');
				   });


						var home_emo =0;
						var home_robo =0;
						var home_digital =0;
						function robo_animation(){

							home_robo++;
						if (window.matchMedia('(max-width: 768px)').matches) {
							$(".home_robo_card_1").css({"width":"85%","top":"50%","z-index":"2",'opacity':'1'});
						}else if (window.matchMedia('(max-width: 850px)').matches) {
							$(".home_robo_card_1").css({"width":"650px","top":"50%","z-index":"2",'opacity':'1'});
						} else if (window.matchMedia('(max-width: 1122px)').matches) {
							$(".home_robo_card_1").css({"width":"700px","top":"50%","z-index":"2",'opacity':'1'});
						}
						else{
							$(".home_robo_card_1").css({"width":"924px","top":"50%","z-index":"2",'opacity':'1'});
						}
						$("#home_scrollbar_1").removeClass("scrollbar_bot_after");
						$("#home_scrollbar_1").css({"opacity":"1"});
						
						setTimeout(function() {
							$("#bot_hiti_text").css({"opacity":"1"});
						}, 400);
						
						setTimeout(function() {
							$(".robo_slide").css({"left":"0px","opacity":"1"})
							setTimeout(function() {
								$(".robo_move_hand").css({"animation":"robo_hand_move .5s","-webkit-animation":"robo_hand_move .5s","-moz-animation":"robo_hand_move .5s","opacity":"1"});
								setTimeout(function() {
									if (window.matchMedia('(max-width: 768px)').matches) {
										$(".robo_move_hand").css({"z-index":"1","left":"41px","opacity":"1"});
										$(".robo_move").css({"left":"10px"});
									}
									else{
										$(".robo_move_hand").css({"z-index":"1","left":"75px","opacity":"1"});
										$(".robo_move").css({"left":"25px"});
									}
								}, 400);
							}, 300);
								$(".bot_hiti_text").css({"opacity":"1"});
								setTimeout(function() {
									$(".bot_second_text").css({"opacity":"1"});
									setTimeout(function() {
										$(".home_bot_arrow").css({"height":"120px"});
										setTimeout(function() {
											$(".home_bot_button").css({"opacity":"1"});
										}, 800);
									}, 800);
								}, 800);
						}, 500);

					}
					function digital_animation(){
						$(".home_robo_card_2_div").css({'height':'100%','width':'100%'});
						home_digital++;
						if (window.matchMedia('(max-width: 768px)').matches) {
							$(".home_robo_card_2").css({"width":"85%","top":"50%","z-index":"2",'opacity':'1'});
						}else if (window.matchMedia('(max-width: 850px)').matches) {
							$(".home_robo_card_2").css({"width":"650px","top":"50%","z-index":"2",'opacity':'1'});
						} else if (window.matchMedia('(max-width: 1122px)').matches) {
							$(".home_robo_card_2").css({"width":"700px","top":"50%","z-index":"2",'opacity':'1'});
						}
						else{
							$(".home_robo_card_2").css({"width":"924px","top":"50%","z-index":"2",'opacity':'1'});
						}
						
						setTimeout(function() {
							$(".home_digital_txt").css({"opacity":"1"});
						}, 400);

							$("#home_scrollbar_2").removeClass("scrollbar_bot_after");
							$("#home_scrollbar_2").css({"opacity":"1"});
							setTimeout(function() {
								setTimeout(function() {
									$(".home_doc_inner").css({"animation":"scan_move 2s","-webkit-animation":"scan_move 2s","-moz-animation":"scan_move 2s"});
								}, 300);
								setTimeout(function() {
									$(".home_doc_inner").css({"width":"50%"});
								}, 600);
								setTimeout(function() {
									$(".home_digital_txt").css({"opacity":"1"});
									setTimeout(function() {

										$(".home_digital_arrow").css({"height":"120px"});
										setTimeout(function() {
											$(".home_digital_button").css({"opacity":"1"});
										}, 800);
									}, 800);
								}, 800);
							}, 500);
						}

						setInterval(function () {
							mobile_carosals();
						}, 1000);
						var mobile_carosal=0;
						function mobile_carosals(){

							mobile_carosal+=20;
							if (mobile_carosal == 100) { mobile_carosal = 20;}
							if (mobile_carosal ==20) {
								$(".home_slider_mobile_arrow").css({"top":"20%"});
								$(".home_slider_mobile_arrow_dot").css({"top":"20.1%"});
								$("#home_slider_mobile_pic_1").css({"width":"90%","filter":"unset","opacity":"1"});
							}else{
								$("#home_slider_mobile_pic_1").css({"width":"70%","filter":"grayscale(100%)","opacity":".73"});
							}
							if (mobile_carosal ==40) {
								$(".home_slider_mobile_arrow").css({"top":"40%"});
								$(".home_slider_mobile_arrow_dot").css({"top":"40%"});
								$("#home_slider_mobile_pic_2").css({"width":"90%","filter":"unset","opacity":"1"});
							}else{
								$("#home_slider_mobile_pic_2").css({"width":"70%","filter":"grayscale(100%)","opacity":".73"});
							}
							if (mobile_carosal ==60) {
								$(".home_slider_mobile_arrow").css({"top":"60%"});
								$(".home_slider_mobile_arrow_dot").css({"top":"60%"});
								$("#home_slider_mobile_pic_3").css({"width":"90%","filter":"unset","opacity":"1"});
							}else{
								$("#home_slider_mobile_pic_3").css({"width":"70%","filter":"grayscale(100%)","opacity":".73"});
							}
							if (mobile_carosal ==80) {
								$(".home_slider_mobile_arrow").css({"top":"80%"});
								$(".home_slider_mobile_arrow_dot").css({"top":"80%"});
								$("#home_slider_mobile_pic_4").css({"width":"90%","filter":"unset","opacity":"1"});
							}else{
								$("#home_slider_mobile_pic_4").css({"width":"70%","filter":"grayscale(100%)","opacity":".73"});
							}
						}
						function home_slider_mobile(){
							$(".home_slider_mobile_anim").css({"height":"100%"});
							setTimeout(function() {
								$("#home_slider_mobile_title").text("OUR PARTNERS");
								document.getElementById('home_slider_mobile_pic_1').src="/wp-content/themes/spiral-child/images/mongo_mobile.png";
								document.getElementById('home_slider_mobile_pic_2').src="/wp-content/themes/spiral-child/images/ibm_mobile.png";
								document.getElementById('home_slider_mobile_pic_3').src="/wp-content/themes/spiral-child/images/amazon_mobile.png";
								document.getElementById('home_slider_mobile_pic_4').src="/wp-content/themes/spiral-child/images/nvidia_mobile.png";
								$(".home_slider_mobile_anim").css({"height":"0%"});
							}, 400);
						}

						function home_emoji(){
							$(".home_robo_card_3_div").css({'height':'100%','width':'100%'});
							home_emo++;
							if (window.matchMedia('(max-width: 768px)').matches) {
								$(".home_robo_card_3").css({"width":"85%","top":"50%","z-index":"2",'opacity':'1'});
							}else if (window.matchMedia('(max-width: 850px)').matches) {
								$(".home_robo_card_3").css({"width":"650px","top":"50%","z-index":"2",'opacity':'1'});
							} else if (window.matchMedia('(max-width: 1122px)').matches) {
								$(".home_robo_card_3").css({"width":"700px","top":"50%","z-index":"2",'opacity':'1'});
							}
							else{
								$(".home_robo_card_3").css({"width":"924px","top":"50%","z-index":"2",'opacity':'1'});
							}
							$("#home_scrollbar_3").removeClass("scrollbar_bot_after");
							$("#home_scrollbar_3").css({"opacity":"1"});

							setTimeout(function() {
								$(".home_emoji_txt").css({"opacity":"1"});
							}, 400);

							setTimeout(function() {
								setTimeout(function() {
									$(".home_emoji_txt").css({"opacity":"1"});

									setTimeout(function() {

										$(".home_emoji_arrow").css({"height":"120px"});
										setTimeout(function() {
											$(".home_emoji_button").css({"opacity":"1"});
										}, 800);
									}, 800);
									$("#wall_1").css({"bottom":"-110px"});
									
								}, 200);

							}, 200);
						}

					function home_emoji_rev(){
						$("#home_scrollbar_3").addClass("scrollbar_bot_after");
						$("#home_scrollbar_3").css({"opacity":"0"});
						$(".home_robo_card_3").css({"width":"0px","top":"70%","z-index":"1",'opacity':'0'});
						$(".home_emoji_txt").css({"opacity":".9"});

					}
					function home_slider_mobile_rev(){
						$(".home_slider_mobile_anim").css({"height":"100%"});
						setTimeout(function() {
							$("#home_slider_mobile_title").text("OUR INSURANCE CLIENTS");
							document.getElementById('home_slider_mobile_pic_1').src="/wp-content/themes/spiral-child/images/AIA_mobile.png";
							document.getElementById('home_slider_mobile_pic_2').src="/wp-content/themes/spiral-child/images/DHFL_mobile.png";
							document.getElementById('home_slider_mobile_pic_3').src="/wp-content/themes/spiral-child/images/religare_mobile.png";
							document.getElementById('home_slider_mobile_pic_4').src="/wp-content/themes/spiral-child/images/ABG_mobile.png";
							$(".home_slider_mobile_anim").css({"height":"0%"});
						}, 500);
					}

					function digital_animation_rev(){
						$("#home_scrollbar_2").addClass("scrollbar_bot_after");
						$("#home_scrollbar_2").css({"opacity":"0"});
						$(".home_robo_card_2").css({"width":"0px","top":"70%","z-index":"1",'opacity':'0'});
						$(".home_digital_txt").css({"opacity":".9"});

					}

					function robo_animation_rev(){
						$(".home_robo_card_1_div").css({'height':'0px','width':'100%'});
						$("#home_scrollbar_1").addClass("scrollbar_bot_after");
						$("#home_scrollbar_1").css({"opacity":"0"});
						$(".home_robo_card_1").css({"width":"0px","top":"70%","z-index":"1",'opacity':'0'});
						$("#bot_hiti_text").css({"opacity":".9"});
					}
					function move() {
						document.getElementById("insurance_start").style.display = "none";
						document.getElementById("myProgress").style.display = "block";
						$(".insurance_text").addClass("add_margin");
						var elem = document.getElementById("myBar");   
						var width = 1;
						var id = setInterval(frame, 50);
						function frame() {
							if (width >= 100) {
								clearInterval(id);
								$(".hide").show();
								$(".insurance_button").hide();
								$(".hide_inline").addClass("show_inline");
								setTimeout(function() {
									$(".doc_rotate_img").css({"transform":" rotate(360deg) scale(1)"});
								}, 10);
							} else {
								width++; 
								elem.style.width = width + '%'; 
							}
						}
					}

					if ($(".doc_banner_section").width()>0) {
						var doc_random = Math.floor(Math.random() * 500) + 5000;
					setInterval(function(){ 
						doc_random++;
						// doc_randoms++;
						doc_random1 = doc_random.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
						document.getElementById("doc_counting_low").innerHTML = doc_random1;
					}, 1000);
				}


				if ($(window).width()>768) {
					var lFollowX = 0,
					lFollowY = 0,
					x = 0,
					y = 0,
					friction = 1 / 30;

					function moveBackground() {
						x += (lFollowX - x) * friction;
						y += (lFollowY - y) * friction;
						z = x ;
						translate = 'translate(' + 2*x + 'px, ' + 2*y + 'px)';
						translatex = 'translateX(' + z + 'px)';

						$('.banner_anim_text').css({
							'-webit-transform': translate,
							'-moz-transform': translate,
							'transform': translate
						});
						$('.banner_anim').css({
							'-webit-transform': translatex,
							'-moz-transform': translatex,
							'transform': translatex
						});

						window.requestAnimationFrame(moveBackground);
					}

					$(".doc_banner_section , .rev_slider , .lms_banner").on('mousemove click', function(e) {

						var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
						var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
			  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
			  lFollowY = (10 * lMouseY) / 100;

			});

					moveBackground();

				}


				var chatbot_success =0;
				var chatbot_variable =0;
				$("#chatbot_success").click(function(){
					chatbot_variable++;
					if (chatbot_success == 0) {
						chatbot_success++;
						$("#chatbot_first_option").hide();
						$(".chatbot_success_div").hide();
						$(".chatbot_div_inner").append($("#chatbot_success").hide().addClass("user_inputs").show(300));
						$(".chatbot_div_inner").append($("#chatbot_success_div").delay(600).show(1));
						$("#chatbot_religare").delay(2000).show(1);
						$("#chatbot_diageo").delay(4000).show(1);
						if (chatbot_variable<4) {
							$("#chatbot_review_2").delay(5000).show(1);
						}
						
						setTimeout(function() {
							$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 2000);
						}, 500);
						setTimeout(function() {
							$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 2000);
						}, 2000);
						setTimeout(function() {
							$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 2000);
							$("#chatbot_gif").hide();
							$("#chatbot_first_option").show(300);
						}, 5000);
						$(".chatbot_div_inner").append($("#chatbot_gif").addClass("chatbot_text").show(1000));
						if (chatbot_variable==1) {
							$(".chatbot_option_div").addClass('chatbot_width_30');
							$("#chatbot_first_option").css({"position":"sticky"});
						}else{
							$(".chatbot_option_div").removeClass('chatbot_width_30');
						}
						if (chatbot_variable==2) {
							$(".chatbot_option_div").addClass('chatbot_width_50');
							$("#chatbot_first_option").css({"position":"sticky"});
						}else{
							$(".chatbot_option_div").removeClass('chatbot_width_50');
						}
						if (chatbot_variable==3) {
							$(".chatbot_option_div").addClass('chatbot_width_100');
							$("#chatbot_first_option").css({"position":"sticky"});
						}else{
							$(".chatbot_option_div").removeClass('chatbot_width_100');
						}
					}
				});
				var chatbot_work =0;
				$("#chatbot_work").click(function(){
					chatbot_variable++;
					if (chatbot_work == 0) {
						chatbot_work++;
						$("#chatbot_first_option").hide();
						$(".chatbot_work_div").hide();
						$(".chatbot_div_inner").append($("#chatbot_work").hide().addClass("user_inputs").show(500));
						$(".chatbot_div_inner").append($("#chatbot_work_div").delay(600).show(1));
						$("#chatbot_work_text").delay(2000).show(1);
						
						if (chatbot_variable<4) {
							$("#chatbot_review_1").delay(3000).show(1);
						}
						setTimeout(function() {
							$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 2000);
							$("#chatbot_gif").hide();
							$("#chatbot_first_option").show(1);
						}, 3000);
						setTimeout(function() {
							$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 1000);
						}, 500);
						$(".chatbot_div_inner").append($("#chatbot_gif").addClass("chatbot_text").show(1000));
						if (chatbot_variable==1) {
							$(".chatbot_option_div").addClass('chatbot_width_30');
							$("#chatbot_first_option").css({"position":"sticky"});
						}else{
							$(".chatbot_option_div").removeClass('chatbot_width_30');
						}
						if (chatbot_variable==2) {
							$(".chatbot_option_div").addClass('chatbot_width_50');
							$("#chatbot_first_option").css({"position":"sticky"});
						}else{
							$(".chatbot_option_div").removeClass('chatbot_width_50');
							$("#chatbot_first_option").css({"position":"sticky"});
						}
						if (chatbot_variable==3) {
							$(".chatbot_option_div").addClass('chatbot_width_100');
							$("#chatbot_first_option").css({"position":"sticky"});
						}else{
							$(".chatbot_option_div").removeClass('chatbot_width_100');
						}		
					}
				});
				var chatbot_features = 0;
				$("#chatbot_features").click(function(){
					chatbot_variable++;
					if (chatbot_features == 0) {
						chatbot_features++;
						$("#chatbot_first_option").hide();
						$(".chatbot_key_div").hide();
						$(".chatbot_div_inner").append($("#chatbot_features").hide().addClass("user_inputs").show(500));
						$(".chatbot_div_inner").append($("#chatbot_features_div").delay(600).show(1));
						$("#chatbot_workflow").delay(2000).show(1);
						if (chatbot_variable<4) {
							$("#chatbot_review_3").delay(3000).show(1);
						}
						
						setTimeout(function() {
							$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 1000);
							$("#chatbot_gif").hide();
							$("#chatbot_first_option").show(1);
						}, 3000);
						setTimeout(function() {
							$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 1000);
						}, 500);
						$(".chatbot_div_inner").append($("#chatbot_gif").addClass("chatbot_text").show(1000));
						if (chatbot_variable==1) {
							$(".chatbot_option_div").addClass('chatbot_width_30');
							$("#chatbot_first_option").css({"position":"sticky"});
						}else{
							$(".chatbot_option_div").removeClass('chatbot_width_30');
						}
						if (chatbot_variable==2) {
							$(".chatbot_option_div").addClass('chatbot_width_50');
							$("#chatbot_first_option").css({"position":"sticky"});
						}else{
							$(".chatbot_option_div").removeClass('chatbot_width_50');
						}
						if (chatbot_variable==3) {
							$(".chatbot_option_div").addClass('chatbot_width_100');
							$("#chatbot_first_option").css({"position":"sticky"});
						}else{
							$(".chatbot_option_div").removeClass('chatbot_width_100');
						}	
					}			
				});
				if($(".bot_section").width()>0) {
					document.getElementById('chatbot_input').onkeypress = function(e){
						if (!e) e = window.event;
						var keyCode = e.keyCode || e.which;
						if (keyCode == '13'){
							$("#chatbot_submit").click();
							return false;
						}
					}
				}
				var chatbot_contact_back = 0;
				$("#chatbot_contact_back").click(function(){
					if (chatbot_contact_back == 0) {
						chatbot_contact_back++;
						$("#chatbot_first_option").hide();
						$(".chatbot_call_div").hide();
						$(".chatbot_div_inner").append($("#chatbot_contact_back").hide().addClass("user_inputs").show(500));
						$(".chatbot_div_inner").append($("#chatbot_name_div").delay(600).show(1));
						$("#chatbot_ask_name").delay(1000).show(1);
						setTimeout(function() {
							$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 1000);
							$("#chatbot_gif").hide();
							$("#chatbot_input_div").show(1);
						}, 1000);
						$(".chatbot_div_inner").append($("#chatbot_gif").addClass("chatbot_text").show(1));
					}
				});
				var chatbot_value_count=0;
				var chatbot_name =0;
				var chatbot_email =0;
				$("#chatbot_submit").click(function(){

					
					if (chatbot_value_count ==1) {
						
						if ($("#chatbot_input").val()!='' && (/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/).test( $("#chatbot_input").val())) {
							// console.log($("#chatbot_input").val());
							$(".chatbot_div_inner").append('<p class="user_input">' + $("#chatbot_input").val() + '</p>');
							chatbot_email = $("#chatbot_input").val();
							setTimeout(function() {
								$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 1000);
							}, 500);
							chatbot_name = $("#chatbot_input").val();
							$("#chatbot_input").val('');
							setTimeout(function() {
								$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 1000);
							}, 500);

							chatbot_variable++;
							$(".chatbot_div_inner").append($("#chatbot_thanks_div").hide().show(500));
							$("#chatbot_thanks").delay(600).show(1);
							$('.chatbot_input_div').hide();
							setTimeout(function() {
								$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 1000);
								$("#chatbot_gif").hide();
							}, 500);
							$(".chatbot_div_inner").append($("#chatbot_gif").addClass("chatbot_text").show(300));
							if (chatbot_variable==1) {
								$(".chatbot_option_div").addClass('chatbot_width_30');
								$("#chatbot_input_div").hide();
								$("#chatbot_first_option").show(300);
								$("#chatbot_first_option").css({"position":"sticky"});
							}else{
								$(".chatbot_option_div").removeClass('chatbot_width_30');
							}
							if (chatbot_variable==2) {
								$(".chatbot_option_div").addClass('chatbot_width_50');
								$("#chatbot_input_div").hide();
								$("#chatbot_first_option").show(300);
								$("#chatbot_first_option").css({"position":"sticky"});
							}else{
								$(".chatbot_option_div").removeClass('chatbot_width_50');
							}
							if (chatbot_variable==3) {
								$(".chatbot_option_div").addClass('chatbot_width_100');
								$("#chatbot_input_div").hide();
								$("#chatbot_first_option").show(300);
								$("#chatbot_first_option").css({"position":"sticky"});
							}else{
								$(".chatbot_option_div").removeClass('chatbot_width_100');
							}
							
							var data={
								email:chatbot_name,
								name:chatbot_name,
								action: 'chatbot_mail_send',
							};
							// console.log(data);
							$.ajax({
								type: "POST",
								url: ajaxpagination.ajaxurl ,
								data: data,
								success: function() {
									console.log('success');

								},
								error: function(XMLHttpRequest, textStatus, errorThrown) {
									console.log(textStatus+errorThrown);
							        }
							    });

						}else{
							$(".chatbot_div_inner").append('<p class="user_input">Please Enter a valid Email</p>');
							setTimeout(function() {
								$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 1000);
							}, 500);
						}
					}
					if (chatbot_value_count ==0) {
						if ($("#chatbot_input").val()!='' && (/^[a-zA-Z\s]+$/).test( $("#chatbot_input").val())) {
							// console.log($("#chatbot_input").val());
							$(".chatbot_div_inner").append('<p class="user_input">' + $("#chatbot_input").val() + '</p>');
							chatbot_name = $("#chatbot_input").val();
							$("#chatbot_input").val('');
							setTimeout(function() {
								$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 1000);
							}, 500);
							$(".chatbot_div_inner").append($("#chatbot_email_div").hide().show(500));
							$("#chatbot_ask_email").delay(600).show(1);
							$("#chatbot_ask_email").delay(1000).show(1);
							setTimeout(function() {
								$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 1000);
								$("#chatbot_gif").hide();
							}, 1000);
							$(".chatbot_div_inner").append($("#chatbot_gif").addClass("chatbot_text").show(300));
							chatbot_value_count++;
						}else{
							$(".chatbot_div_inner").append('<p class="user_input">Please Enter a valid Name</p>');
							setTimeout(function() {
								$(".chatbot_div_outer").animate({ scrollTop: $(".chatbot_div_inner").height() }, 1000);
							}, 500);
						}
					}

				});


