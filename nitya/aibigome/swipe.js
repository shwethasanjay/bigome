function init_fullpage(){
	console.log(obj)
	if ($("#fullpage").length > 0) {
		$('.home_hide').hide();
		if($(window).width() > 768){
			$("#ABdev_main_header .container").css({"min-height":"0px"});
		}
		$('#fullpage').fullpage({
			scrollingSpeed: 1000,
			navigation: false,
			navigationPosition: 'right',
			keyboardScrolling: true,
			verticalCentered: false,
			animateAnchor: true,
			recordHistory: true,
			scrollOverflowReset: false,	
			normalScrollElements: '#myNav , .overlay , .bot_bar',
			fixedElements: '#fixed_footer_id , .chat_bot_div , .easy_up ',
			scrollOverflow: true,
			scrollOverflowOptions: {
				click: false,
				preventDefaultException: { tagName:/.*/ }
			},

		onLeave: function(origin, destination, direction){
					//it won't scroll if the destination is the 3rd section
					if(origin.index == 1 && destination.index == 0 && direction =='up'){
						$("#home_robo_top_text_1").hide();
						$(".easy_up").hide(500);
						setTimeout(() => {
							if($(window).width() > 768){
								$("#ABdev_main_header .container").css({"min-height":"0px"});
								$(".menu-icon").css({"display":"none"});
							}
							$("#ABdev_main_header").css({"background-color":"transparent","position":"absolute"});
							$("#bot_button , #bot_hover_text , #chat_bot_div").css({"position":"absolute"});
							document.getElementById('bot_button').src="/wp-content/themes/spiral-child/images/start-chat.png";
							$("#bot_button").show();

						},800)

					}
					if(destination.index == 0){
						$("#home_robo_top_text_1").hide();
						$(".easy_up").hide(500);
						setTimeout(() => {
							if($(window).width() > 768){
								$("#ABdev_main_header .container").css({"min-height":"0px"});
								$(".menu-icon").css({"display":"none"});
							}
							$("#ABdev_main_header").css({"background-color":"transparent","position":"absolute"});
							$("#bot_button , #bot_hover_text , #chat_bot_div").css({"position":"absolute"});
							$("#bot_button").show();
						},800)

					}
					if(origin.index == 0 && destination.index == 1 && direction =='down'){
						$(".easy_up").show(500);
						$("#ABdev_main_header .container").css({"min-height":"60px"});
						$("#ABdev_main_header").css({"background-color":"black","position":"fixed"});
						$(".menu-icon").css({"display":"block"});
						$("#bot_button , #bot_hover_text , #chat_bot_div").hide();
						document.getElementById('bot_button').src="/wp-content/themes/spiral-child/images/start-chat.png";
						setTimeout(() => {
							if($(window).width() > 768){
								$("#home_robo_top_text_1").show();
							}
							$(".drop_light").css({"-webkit-animation":"drop_light 1s","animation":"drop_light 1s"});
							$(".drop_light").css({"top":"0px"});
							$(".home_robo_top_text h1").css({"opacity":"1"});
							setTimeout(function() {
								$(".home_robo_top_text p").css({"opacity":"1"});
							}, 500);
							if($(window).width() > 768){
								robo_animation();
							}
						},900)
					}
					if(destination.index == 2){
						if($(window).width() < 768){
							robo_animation();
						}else{
							digital_animation();
						}
					}
					if(destination.index == 3){
						if($(window).width() < 768){
							digital_animation();
						}else{
							home_emoji();
						}

					}
					if(destination.index == 4){
						if($(window).width() < 768){
							home_emoji();
						}
						setTimeout(() => {
							$('.home_strategic_top_text h1').addClass('home_strategic_top_text_effect_connect');
						},600);
						$("#home_robo_top_text_1").hide();

					}
					if(origin.index == 4 && destination.index == 3 && direction =='up'){
						setTimeout(() => {
							if($(window).width() > 768){
								$("#home_robo_top_text_1").show();
							}
						},900)
					}
					if (origin.index == 5 && destination.index == 6 && direction =='down') {
						setTimeout(() => {
							if ($(window).width() > 768) {
								$('.home_clients_top_text h1').addClass('home_strategic_top_text_effect_connect');
							}
						},600);
					}
					if (origin.index == 6 && destination.index == 7 && direction =='down') {
						setTimeout(() => {
							$('.home_our_blog_text , .home_connect h1 ').addClass('home_strategic_top_text_effect_connect');
						},600);
					}
					if (origin.index == 7 && destination.index == 8 && direction =='down') {
						setTimeout(() => {
							$('.home_our_blog_text , .home_connect h1').addClass('home_strategic_top_text_effect_connect');
							if (drop_phone ==0) {
								$(".home_call_me").css({"animation":"drop_phone 2s","-webkit-animation": "drop_phone 2s","-moz-animation": "drop_phone 2s","-o-animation": "drop_phone 2s"});
								setTimeout(function() {
									$(".home_call_me").css({"top":"-20vh"});
							}, 1900);
								drop_phone++;
							}
						},600);
						$(".home_wooden_section").css({"top":"-50px","height":"50px"});
						$(".home_boat").css({"animation":"boat_move 3s infinite , boat_go 60s","-webkit-animation": "boat_move 3s infinite , boat_go 60s","-moz-animation": "boat_move 3s infinite , boat_go 60s ","-o-animation": "boat_move 3s infinite , boat_go 60s"});
						setTimeout(function() {
							$(".home_boat").css({"left":"85%"});
						}, 59000);
					}
				}	
			});
}
}
function add_content_to_fullpage(){
	var content_start = '<div class="section robo_sec_0 fp-noscroll">';
	var content_end = '</div>';

	var content_body = '<section id="home_robo_section" class="home_robo_section"><div class="home_robo_card"><div class="home_robo_scrollbar"><p id="home_scrollbars_1" class="home_scrollbar_bot scrollbar_bot_before scrollbar_bot_after"><span class="dots_points"></span></p><p id="home_scrollbars_2" class="home_scrollbar_bot scrollbar_bot_before "><span class="dots_points"></span></p><p id="home_scrollbars_3" class="home_scrollbar_bot scrollbar_bot_before "><span class="dots_points"></span></p></div><div class="home_robo_card_inner"></div><div class="home_robo_scrollbar"><p id="home_scrollbar_2" class="home_scrollbar_bot scrollbar_bot_before scrollbar_bot_after">Doc Parser<span class="home_scrollbar_2_span">02</span></p><p id="home_scrollbar_3" class="home_scrollbar_bot scrollbar_bot_before scrollbar_bot_after">LMS<span class="home_scrollbar_3_span">03</span></p> --></div><div id="mob_scroll_card" class="mob_scroll_card"><div id="home_robo_card_1_div" class="home_robo_card_1_div"><div class="home_robo_scrollbar_mobile"><p id="home_scrollbars_1" class="home_scrollbar_bot scrollbar_bot_before scrollbar_bot_after"><span class="dots_points"></span></p><p id="home_scrollbars_2" class="home_scrollbar_bot scrollbar_bot_before "><span class="dots_points"></span></p><p id="home_scrollbars_3" class="home_scrollbar_bot scrollbar_bot_before "><span class="dots_points"></span></p></div><div class="home_robo_card_1 home_card_sc"><p id="home_scrollbar_1_mobile" class="mobile_show home_scrollbar_bot scrollbar_bot_before">MANTRA CHATBOT<span class="home_scrollbar_1_span">01</span></p><p id="home_scrollbar_1_1_mobile" class="mobile_show home_scrollbar_bot scrollbar_bot_before scrollbar_bot_after"><span class="home_scrollbar_1_span"></span></p><p id="home_scrollbar_1_2_mobile" class="mobile_show home_scrollbar_bot scrollbar_bot_before scrollbar_bot_after"><span class="home_scrollbar_1_span"></span></p><div style="position: relative;height: 100%;"><img class="robo_move" src="'+ obj.templateUrl +'/images/robotbody.png"><img class="robo_move_hand" src="'+ obj.templateUrl +'/images/robothands.png"><img class="robo_slide" style="position: relative;" src="'+ obj.templateUrl +'/images/rectangle.png"><p class="home_card_name"><span>Industry Specific AI Enabled Chatbot</span></p><div class="home_bot_text"><p id="bot_hiti_text" class="bot_text bot_hiti_text">Hello! I’m Hitee.</p><p id="bot_second_text" class="bot_text bot_second_text">I am built to cater to the workflows of any enterprise and trained on jargon specific to <strong style="font-size: 18px;">your</strong> industry.</p></div><a href="'+ obj.homeUrl +'/products-and-innovation/ai-enabled-chatbot/" target="_blank"><button class="home_bot_button">See how</button></a></div></div></div></div><div class="home_arrow"><div class="home_arrow_inner"><div class="home_arrow_in"></div><div class="home_arrow_move"></div></div></div></section>';
	var full_content = content_start+content_body+content_end;
	$(full_content).insertAfter('.robo_sec');
	
	$('.robo_sec .mob_scroll_card').hide();
}
function add_content_to_our_partners(){
	var content_start_adrs = '<div class="section fp-noscroll">';
	var content_end_adrs = '</div>';
	var content_body_adrs = '<div class="home_clients_tops_mobile"><div class="home_clients_top_text"><h1>Our Partners</h1></div><div class="home_clients_top tcvpb_section_content"><div class="tcvpb_container"><div class="tcvpb_column_tc_span3"><img src="'+ obj.templateUrl +'/images/mongodb_mobile.png"></div><div class="tcvpb_column_tc_span3"><img src="'+ obj.templateUrl +'/images/aws_mobile.png"></div><div class="tcvpb_column_tc_span3"><img src="'+ obj.templateUrl +'/images/ibm_watson_mobile.png"></div><div class="tcvpb_column_tc_span3"><img src="'+ obj.templateUrl +'/images/nvidia_cuba_mobile.png"></div></div></div><div class="home_arrow"><div class="home_arrow_inner"><div class="home_arrow_in"></div><div class="home_arrow_move"></div></div></div></div>';

	var full_content_adrs = content_start_adrs+content_body_adrs+content_end_adrs;
	$(full_content_adrs).insertAfter('.testi_sec');
}
