jQuery(document).ready(function(t){"use strict";var e,a,i,n;t("body.preloader").jpreLoader({loaderVPos:"50%"}).css("visibility","visible"),t(".scroll").click(function(e){e.preventDefault();var a,i=t(this).attr("href"),n="#"+i.split("#")[1];t(n).length>0?(a=t("body").hasClass("admin-bar")?t(window).width()<968?20:80:t(window).width()<968?20:56,t("html, body").animate({scrollTop:t(n).offset().top-a},1e3)):location.href=i}),t("#back_to_top").click(function(e){return e.preventDefault(),t("html, body").animate({scrollTop:0},900),!1}),t(".ripplelink").click(function(s){s.preventDefault();var o=t(this);0===o.find(".ink").length&&o.prepend('<span class="ink"></span>'),(e=o.find(".ink")).removeClass("animate"),e.height()||e.width()||(a=Math.max(o.outerWidth(),o.outerHeight()),e.css({height:a,width:a})),i=s.pageX-o.offset().left-e.width()/2,n=s.pageY-o.offset().top-e.height()/2,e.css({top:n+"px",left:i+"px"}).addClass("animate"),t(this).hasClass("tcvpb-modal-button")||setTimeout(function(){window.location.assign(o.attr("href"))},1e3)});var s=t("#ABdev_main_header"),o=s.find("nav"),r=s.find(".menu_slide_toggle"),l=t("#title_breadcrumbs_bar");s.outerHeight();r.on("click",function(e){e.preventDefault();var a=t(this);a.toggleClass("menu_opened"),t(window).width()<960?(a.addClass("mobile"),a.hasClass("menu_opened")?o.css("width","0px").show().animate({width:"70%"},250):o.animate({width:"0"},250,"linear",function(){t(this).hide().css("width","auto")})):(a.removeClass("mobile"),l.length?a.hasClass("menu_opened")?l.toggle("slide",{direction:"up"},250,function(){o.toggle("slide",{direction:"down"},250)}):o.toggle("slide",{direction:"down"},250,function(){l.toggle("slide",{direction:"up"},250)}):(a.hasClass("menu_opened"),o.toggle("slide",{direction:"down"},250)))});function d(){var e=t(window).scrollTop();s.hasClass("no_switch")?e>10?(s.removeClass("transparent").addClass("smaller"),o.show()):s.removeClass("smaller").addClass("transparent"):e>10?(s.removeClass("transparent").addClass("smaller"),r.hasClass("menu_opened")||(o.hide(),l.show())):(s.removeClass("smaller").addClass("transparent"),o.show(),l.hide(),r.hasClass("menu_opened")&&r.removeClass("menu_opened"))}function c(){s.css("visibility","visible");var e=t(window).width()>960;e&&o.hasClass("detached")?o.detach().removeClass("detached").appendTo(".menu_wrapper"):e||o.hasClass("detached")||o.detach().addClass("detached").prependTo("body")}t(window).on("scroll",function(){d();var e=t(this).scrollTop();e}),s.hasClass("coming_soon")||(d(),c());var p=t("#ABdev_main_slider"),m=t("#headline_breadcrumbs_bar.with_image");function h(){if(p.length>0||m.length>0){t(window).width()>769?(p.next().css("margin-top",p.outerHeight()),m.next().css("margin-top",m.outerHeight())):(p.next().css("margin-top",0),m.next().css("margin-top",0));var e=(m.height()/2-t(window).scrollTop())/(m.height()/2);e>0&&m.find(".headline_image .row").css("opacity",e)}if(t(".boxed_body_wrapper").length>0){var a=(t(window).width()-t(".boxed_body_wrapper").width())/2;m.css({width:t(".boxed_body_wrapper").width(),left:a}),p.css({width:t(".boxed_body_wrapper").width(),left:a}),s.css({width:t(".boxed_body_wrapper").width(),left:a})}}function f(){var e=(m.height()/2-t(window).scrollTop())/(m.height()/2);e>0&&m.find(".headline_image .row").css("opacity",e);var a=-.5*t(window).scrollTop();t(window).width()>769?(p.find(".rev_slider_wrapper ").css({transform:"translateY("+a+"px)","-webkit-transform":"translateY("+a+"px)","-moz-transform":"translateY("+a+"px)","-ms-transform":"translateY("+a+"px)","-o-transform":"translateY("+a+"px)"}),m.find(".headline_image").css({transform:"translateY("+a+"px)","-webkit-transform":"translateY("+a+"px)","-moz-transform":"translateY("+a+"px)","-ms-transform":"translateY("+a+"px)","-o-transform":"translateY("+a+"px)"})):(p.find(".rev_slider_wrapper ").css({transform:"translateY(0px)","-webkit-transform":"translateY(0px)","-moz-transform":"translateY(0px)","-ms-transform":"translateY(0px)","-o-transform":"translateY(0px)"}),m.find(".headline_image").css({transform:"translateY(0px)","-webkit-transform":"translateY(0px)","-moz-transform":"translateY(0px)","-ms-transform":"translateY(0px)","-o-transform":"translateY(0px)"}))}p.height(t(".rev_slider_wrapper").height()),t(window).width()>769?(t(window).on("scroll",function(){f()}),h()):(p.css("position","static"),m.css("position","static")),t("body.home.page").find(".tcvpb_section_tc").each(function(){var e,a=t(this),i=t(this).attr("id");a.waypoint({handler:function(n){if(void 0!==i)if(t(".current-menu-item").removeClass("current-menu-item").removeClass("current-menu-ancestor"),"down"===n)(e=t('#main_menu a[href="#'+i+'"]').parent()).length>0?e.addClass("current-menu-item"):t("#main_menu .current_page_item").addClass("current-menu-item");else if("up"===n){var s=a.prevAll("[id]:first").attr("id");(e=t('#main_menu a[href="#'+s+'"]').parent()).length>0?e.addClass("current-menu-item"):t("#main_menu .current_page_item").addClass("current-menu-item")}},offset:150})});var u=t("#main_menu");t(window).width()>960&&u.superfish({delay:0,popUpSelector:"ul,.sf-mega,.cart_dropdown_widget",speed:0,speedOut:0,cssArrows:!1,disableHI:!0,onBeforeShow:function(){var e=t(window).width();if(void 0!==this.parent().offset()){var a=this.parent().offset().left+this.width(),i=this.parent().offset().left+this.parent().width()+this.width(),n=this.parent();n.parent().is("#main_menu")&&a>e?this.css("marginLeft","-"+(a-e+20)+"px"):!n.parent().is("#main_menu")&&i>e&&this.addClass("left_side_menu").css("left","-"+(this.width()+10)+"px")}}}),t(".tcvpb_pricing-table-2").each(function(){var e=t(this).find(".tcvpb_pricebox_price");e.html(e.html().replace(/(\.\d\d)/g,"<sup>$1</sup>"))});var v=t(".tcvpb-callout_box"),_=t(".tcvpb-callout_box .tcvpb-button");v.length&&v.width()<700&&(_.css({float:"none","margin-top":"20px"}),v.find("p").length&&v.find("p").css({display:"block","text-align":"center",width:"100%"}),v.css({"text-align":"center"})),t(".widget_nav_menu li").each(function(){t(this).find("> .sub-menu").length&&t(this).find("> a").append('<i class="ci_icon-angle-down"></i>')}),t(".widget_nav_menu .menu-item-has-children > a").on("click",function(e){e.preventDefault();var a=t(this);a.parent().find("> .sub-menu").hasClass("visible")?a.parent().find("> .sub-menu").removeClass("visible").slideUp("slow"):a.parent().find("> .sub-menu").addClass("visible").slideDown("slow")}),t(".tcvpb-tabs-timeline").each(function(){var e=t(this).find(".tcvpb-tabs-ul > li"),a=e.length;e.addClass("tab_par_"+a)}),t(".fancybox").fancybox({transitionIn:"elastic",transitionOut:"elastic",titlePosition:"outside",cyclic:!0,overlayShow:!0}),t(".submit").on("click",function(){t(this).closest("form").submit()}),t("input, textarea").placeholder();var b=t("#timeline_posts"),w=t("#timeline_loading"),g=0,y=w.data("category");b.imagesLoaded(function(){b.masonry({columnWidth:".timeline_post_first",gutter:100,isOriginLeft:!1,itemSelector:".timeline_post"}),t(window).on("scroll",function(){t(window).scrollTop()+t(window).height()>=t(document).height()-100&&function(){if(!w.hasClass("timeline_loading_loader")&&!w.hasClass("timeline_no_more_posts")){var e="&cat="+y+"&pageNumber="+ ++g+"&action=abdev_get_timeline_posts";t.ajax({type:"POST",dataType:"html",url:abdev_timeline_posts.ajaxurl,data:e,success:function(e){var a=t(e);if(a.length){var i=a.css({opacity:0});b.append(i),b.imagesLoaded(function(){w.removeClass("timeline_loading_loader"),b.masonry("appended",i,!1),i.animate({opacity:1})})}else w.addClass("timeline_no_more_posts").html(abdev_timeline_posts.noposts)},beforeSend:function(){w.addClass("timeline_loading_loader").html("")},error:function(t,e,a){w.html(t+" :: "+e+" :: "+a)},complete:function(){w.removeClass("timeline_loading_loader")}})}}()})});var C=t(".tcvpb-modal-content-wrapper"),x=t(".tcvpb-modal-content"),k=t(".tcvpb-modal");t(".tcvpb-modal-button"),t(".tcvpb-modal-close");function T(){C.removeClass("opened"),x.has("iframe")&&(x.find("iframe").attr("src",x.find("iframe").attr("src")),x.find("object").attr("src",x.find("iframe").attr("src")))}x.each(function(){t(this).css("top",(t(window).height()-t(this).outerHeight(!0))/2)}),k.on("click",".tcvpb-modal-button",function(e){e.preventDefault();var a=t(this).data("button_id"),i=t("#tcvpb-modal_wrapper_"+a);t("#tcvpb-modal_wrapper_"+a,".tcvpb-modal").length?i.detach().appendTo("body").delay(200).queue(function(){t(this).addClass("opened")}):i.addClass("opened")}),C.on("click",function(t){t.preventDefault(),T()}),t(document).keyup(function(t){27===t.keyCode&&T()});var I="original-order",Y=".portfolio_item";t(".spiral_latest_portfolio").each(function(){var e=t(this);e.find(".portfolio_item").hasClass("portfolio_masonry_fullwidth")&&(I="random",Y=".portfolio_item.small"),e.imagesLoaded(function(){e.isotope({layoutMode:"masonry",masonry:{columnWidth:Y},itemSelector:".portfolio_item",sortBy:I})})}),t(".portfolio_filter_button").on("click",function(){var e=t(this);if(e.hasClass("selected"))return!1;var a=e.parents(".portfolio_filter");a.find(".selected").removeClass("selected"),e.addClass("selected");var i={},n=a.attr("data-option-key"),s=e.attr("data-option-value");return s="false"!==s&&s,i[n]=s,"layoutMode"===n&&"function"==typeof changeLayoutMode?changeLayoutMode(e,i):a.next(".spiral_latest_portfolio").isotope(i),!1});var W=t(".tcvpb_post_excerpt_carousel"),z=t(window).outerWidth(!0);function L(t){var e=t.find(".tcvpb_video_background");e.width("auto");var a=e.height(),i=e.width()/a,n=t.height()-a;n>0&&e.width((a+n)*i)}function D(){t(".tcvpb-tabs").each(function(){var e=t(this);e.width()<parseInt(e.data("break_point"))?e.addClass("tcvpb-tabs-fullwidthtabs"):e.removeClass("tcvpb-tabs-fullwidthtabs")})}W.each(function(){var e,a=t(this);z>1145&&(e=1170),z>960&&z<1145&&(e=960),z<960&&(e=parseInt(.9*z,10));var i=a.data("duration"),n=a.find("li").length,s=a.find("ul"),o=s.find("li");o.removeClass("active"),z<760?(o.css("width",e),o.eq(1).addClass("active"),o.eq(2).hasClass("active")&&o.eq(2).removeClass("active")):z>760&&(o.eq(1).addClass("active"),o.eq(2).addClass("active"));var r,l=a.find("li").outerWidth(!0);r=t(".boxed_body_wrapper").length?l-60:parseInt(l-(z-e-42)/2,10),s.css({display:"inline-block",width:n*a.find("li").outerWidth(!0)+"px",left:-r+"px"});a.find("li").not(".first").not(".last").not(".active").length,a.find("li").outerWidth(!0);a.on("click",".carousel_next",function(e){if(e.preventDefault(),!a.find("li.last").prev().hasClass("active")){var n=t(".active",a);n.next().hasClass("last")||s.is(":animated")||n.removeClass("active").next().addClass("active"),s.is(":animated")||s.animate({left:parseInt(s.css("left"),10)-s.find("li").outerWidth(!0)},i)}}),a.on("click",".carousel_prev",function(e){if(e.preventDefault(),!a.find("li.first").next().hasClass("active")){var n=t(".active",a);n.prev().hasClass("first")||s.is(":animated")||n.removeClass("active").prev().addClass("active"),s.is(":animated")||s.animate({left:parseInt(s.css("left"),10)+s.find("li").outerWidth(!0)},i)}})}),t(".tcvpb-team-carousel").each(function(){var e=t(this).find(".carousel_prev"),a=t(this).find(".carousel_next"),i="0"!=t(this).data("autoplay"),n=t(this).data("items"),s=t(this).data("effect"),o=t(this).data("easing"),r=t(this).data("duration");t(this).find("ul").carouFredSel({prev:e,next:a,circular:!1,infinite:!1,width:"100%",play:!0,auto:i,scroll:{items:n,fx:s,easing:o,duration:r},swipe:{onTouch:!0}}),t(this).find(".tcvpb_overlayed").each(function(){var e=t(this).outerHeight()-60;t(this).hover(function(){t(this).find(".tcvpb_team_info").css({"-webkit-transform":"translate(0,-"+e+"px)","-moz-transform":"translate(0,-"+e+"px)","-ms-transform":"translate(0,-"+e+"px)","-o-transform":"translate(0,-"+e+"px)",transform:"translate(0,-"+e+"px)"})},function(){t(this).find(".tcvpb_team_info").css({"-webkit-transform":"translate(0,0px)","-moz-transform":"translate(0,0px)","-ms-transform":"translate(0,0px)","-o-transform":"translate(0,0px)",transform:"translate(0,0px)"})})})}),t(".tcvpb-parallax").each(function(){var e=t(this).data("parallax"),a=t(this).data("background_image");jQuery.browser.mobile||void 0===a?t(this).css("background-attachment","scroll"):(t(this).css("background-image","url("+a+")"),t(this).parallax("50%",e,!1))}),t(".tcvpb-video-bg .section_video_background").mediaelementplayer({pauseOtherPlayers:!1}),t(".tcvpb-video-bg").each(function(){L(t(this)),t(this).find(".tcvpb_video_background").css({visibility:"visible"})}),!jQuery.browser.mobile&&t(window).width()>769?t(".tcvpb-animo").each(function(){var e=t(this),a=e.data("animation"),i=(e.data("trigger_point"),e.data("timing")),n=e.data("duration")/1e3,s=parseInt(e.data("delay"),10);e.waypoint({handler:function(t){e.hasClass("animation_completed")||(s>0?setTimeout(function(){e.addClass("animation_completed").animo({animation:a,duration:n,timing:i})},s):e.addClass("animation_completed").animo({animation:a,duration:n,timing:i}))},offset:"95%"})}):t(".tcvpb-animo").css({visibility:"visible"}),t(".tcvpb-animo-children").one("inview",function(e,a){var i=t(this),n=i.data("animation"),s=i.data("duration")/1e3,o=parseInt(i.data("delay"),10),r=0;a&&i.children().each(function(){setTimeout(function(){i.css({visibility:"visible"}).animo({animation:n,duration:s})},r),r+=o})}),t(".tcvpb-accordion").accordion({collapsible:!0,active:!1,heightStyle:"content",create:function(e,a){var i=t(this).data("expanded");0===i?i=!1:i-=1,t(this).accordion("option","active",i)}}),t(".tcvpb-tabs-tab").click(function(e){e.preventDefault();var a=t(this),i=a.parents(".tcvpb-tabs");if(!a.parent().hasClass("active")&&!i.hasClass("animating")){a.parent().addClass("active"),a.parent().siblings().removeClass("active");var n,s=i.find(".tab-pane.active_pane"),o=t(a.data("href")),r=s.parent(),l=i.data("effect");if("fade"===l||"slide"===l)if(i.addClass("animating"),r.height(r.height()),s.css({opacity:"1",display:"block"}),o.css({opacity:"0",display:"block"}),r.find(".active_pane").removeClass("active_pane"),"slide"===l){var d=!1;o.index()>s.index()&&(d=!0),i.hasClass("tcvpb-tabs-vertical")?(o.css({top:d?"100%":"-100%",opacity:"1",display:"block"}),o.animate({top:"0%"},{duration:300,step:function(){var e=t(this).outerHeight()+parseFloat(t(this).css("top"))*(d?-1:1);s.css("top",(d?"-":"")+e+"px")},complete:function(){t(this).addClass("active_pane"),s.hide(),i.removeClass("animating")}})):(o.css({left:d?"100%":"-100%",opacity:"1",display:"block"}),o.animate({left:"0%"},{duration:300,step:function(){var e=t(this).outerWidth()+parseFloat(t(this).css("left"))*(d?-1:1);s.css("left",(d?"-":"")+e+"px")},complete:function(){t(this).addClass("active_pane"),s.hide(),i.removeClass("animating")}})),n=o.outerHeight(),r.animate({height:n+"px"},{duration:300,complete:function(){t(this).height("auto")}})}else"fade"===l&&(s.animate({opacity:"0"},{duration:300,complete:function(){t(this).css("display","none")}}),o.animate({opacity:"1"},{duration:300,complete:function(){t(this).addClass("active_pane"),i.removeClass("animating")}}),n=o.outerHeight(),r.animate({height:n+"px"},{duration:300,complete:function(){t(this).height("auto")}}));else s.removeClass("active_pane"),o.addClass("active_pane")}}),t(".tcvpb-tabs-timeline").each(function(){var e=t(this).find(".nav-tabs > li"),a=e.length;e.addClass("tab_par_"+a)}),D(),t(".tcvpb_alert_box_close").click(function(){t(this).parent().animate({height:"0px",paddingTop:"0px",paddingBottom:"0px",margin:"0px",opacity:"0"},400)}),jQuery.browser.mobile?t(".tcvpb_stats_number").each(function(){var e=t(this).data("number");t(this).text(e)}):t(".tcvpb_stats_number").one("inview",function(e,a){if(a){var i=t(this).data("number"),n=1;i>50&&(n=10),i>500&&(n=100),i>5e3&&(n=200),i>1e4&&(n=1e3);var s=t(this).data("duration")/(i/n);t(this).text("0"),function t(e,a,i,n){var s=parseInt(e.text(),10)+n;s<i?(setTimeout(function(){t(e,a,i,n)},a),e.text(s)):e.text(i)}(t(this),s,i,n)}}),t(".tcvpb_knob_wrapper").each(function(){var e=t(this).find(".tcvpb_knob"),a=t(this).find(".tcvpb_knob_number_sign"),i=t(this).find(".tcvpb_knob_number"),n=e.data("troncolor");e.knob({displayInput:!1,draw:function(){if("tron"==this.$.data("skin")){var t,e=this.angle(this.cv),a=this.startAngle,i=this.startAngle,s=i+e;return this.g.lineWidth=this.lineWidth,this.o.cursor&&(i=s-.3)&&(s+=.3),this.o.displayPrevious&&(t=this.startAngle+this.angle(this.v),this.o.cursor&&(a=t-.3)&&(t+=.3),this.g.beginPath(),this.g.strokeStyle=n,this.g.lineCap=this.$.data("linecap")||"butt",this.g.arc(this.xy,this.xy,this.radius-this.lineWidth,a,t,!1),this.g.stroke()),this.g.beginPath(),this.g.strokeStyle=this.o.fgColor,this.g.lineCap=this.$.data("linecap")||"butt",this.g.arc(this.xy,this.xy,this.radius-this.lineWidth,i,s,!1),this.g.stroke(),this.g.lineWidth=3,this.g.beginPath(),this.g.strokeStyle=n,this.g.lineCap=this.$.data("linecap")||"butt",this.g.arc(this.xy,this.xy,this.radius-this.lineWidth+1+2.2*this.lineWidth/2,-217/180*Math.PI,-322/180*Math.PI,!1),this.g.stroke(),!1}}});var s=t(this).find("canvas").width();a.css({visibility:"visible",lineHeight:s+"px"}),jQuery.browser.mobile?i.html(e.data("number")):(e.val(0).trigger("change"),t(this).one("inview",function(a,n){n&&t({value:0}).animate({value:e.data("number")},{duration:1e3,easing:"swing",step:function(){var t=Math.ceil(this.value);e.val(t).trigger("change"),i.html(t)}})}))});var M="undefined"!=typeof tcvpb_options?tcvpb_options.tcvpb_tipsy_opacity:.8;t(".tcvpb_tooltip").tipsy({fade:!0,opacity:M,gravity:function(){var e=t(this).data("gravity");return e=void 0!==e?e:"s"}}),t(".tcvpb-popup-wrapper").one("inview",function(e,a){if(a){var i=t(this).find(".tcvpb-popup-shadow"),n=t(this).find(".tcvpb-popup-content");i.appendTo("body");var s=n.data("animation"),o=n.data("duration")/1e3,r=parseInt(n.data("delay"),10);setTimeout(function(){n.css({display:"block",position:"fixed"}).animo({animation:s,duration:o}),i.css({display:"block"}).animo({animation:s,duration:o})},r)}}),t(".tcvpb-popup-shadow").click(function(e){e.preventDefault(),t(".tcvpb-popup-shadow").fadeOut()}),t(".tcvpb_divider a").click(function(e){e.preventDefault(),t("html, body").animate({scrollTop:0},"slow")}),t(".tcvpb_team_member_modal_link").click(function(e){e.preventDefault();var a=t(this).closest(".tcvpb_team_member"),i=a.find(".tcvpb_team_member_modal");a.closest(".tcvpb_section_tc");i.detach().appendTo("body").fadeIn().addClass("tcvpb_team_member_modal_opened"),a.addClass("tcvpb_team_member_with_opened_modal")}),t(".tcvpb_team_member_modal_close").click(function(e){e.preventDefault(),t(this).parent().fadeOut("slow",function(){t(this).detach().appendTo(t(".tcvpb_team_member_with_opened_modal")).removeClass("tcvpb_team_member_modal_opened"),t(".tcvpb_team_member_with_opened_modal").removeClass("tcvpb_team_member_with_opened_modal")})}),t(document).on("keydown",function(e){27===e.keyCode&&t(".tcvpb_team_member_modal_opened").fadeOut("slow",function(){t(this).detach().appendTo(t(".tcvpb_team_member_with_opened_modal")).removeClass("tcvpb_team_member_modal_opened"),t(".tcvpb_team_member_with_opened_modal").removeClass("tcvpb_team_member_with_opened_modal")})}),0!==".tcvpb_team_member_modal_close".length&&t(".tcvpb_team_member_modal_close").empty(),t(".tcvpb_team_member").each(function(){var e=t(this),a=e.find(".tcvpb_social_links").outerHeight(),i=-a;e.find(".tcvpb_overlayed").css("margin-bottom",-a+"px"),e.hover(function(){t(this).find(".tcvpb_overlayed").css({"-webkit-transform":"translateY("+i+"px)","-moz-transform":"translateY("+i+"px)","-ms-transform":"translateY("+i+"px)","-o-transform":"translateY("+i+"px)",transform:"translateY("+i+"px)"})},function(){t(this).find(".tcvpb_overlayed").css({"-webkit-transform":"translateY(0)","-moz-transform":"translateY(0)","-ms-transform":"translateY(0)","-o-transform":"translateY(0)",transform:"translateY(0)"})})}),jQuery.browser.mobile?t(".tcvpb_meter .tcvpb_meter_percentage").each(function(){var e=t(this).data("percentage");t(this).css("width",e+"%");for(var a=0;a<=e;a++){var i=Math.floor(a/10);t(this).addClass("tcvpb_meter_above"+10*i)}}):t(".tcvpb_meter .tcvpb_meter_percentage").width(0).one("inview",function(e,a){if(a){var i=t(this).data("percentage")+"%";t(this).animate({width:i},{duration:1500,step:function(e){t(this).find("span").html(Math.floor(e)+"%");for(var a=Math.floor(e/10),i=1;i<=a;i++)t(this).addClass("tcvpb_meter_above"+10*a)}})}}),t(".latest_portfolio.carousel").each(function(){var e=t(this).find(".portfolio_prev"),a=t(this).find(".portfolio_next");t(this).find("ul").carouFredSel({prev:e,next:a,auto:!1,width:"100%",scroll:1,swipe:!0,padding:null})}),t(".tcvpb_countdown.simple_style, .tcvpb_countdown.simple_style_transparent").each(function(){var e=t(this),a=e.data("value");function i(t,e){t.html(e);var a=t.next("span");1==parseInt(e)?a.html(a.data("singular")):a.html(a.data("plural"))}e.find(".simple.countdown.year").countdown(a).on("update.countdown",function(e){i(t(this),e.strftime("%Y"))}),e.find(".simple.countdown.month").countdown(a).on("update.countdown",function(e){i(t(this),e.strftime("%m"))}),e.find(".simple.countdown.day").countdown(a).on("update.countdown",function(e){i(t(this),e.strftime("%d"))}),e.find(".simple.countdown.hour").countdown(a).on("update.countdown",function(e){i(t(this),e.strftime("%H"))}),e.find(".simple.countdown.minute").countdown(a).on("update.countdown",function(e){i(t(this),e.strftime("%M"))}),e.find(".simple.countdown.second").countdown(a).on("update.countdown",function(e){i(t(this),e.strftime("%S"))})}),t(".tcvpb_countdown.flip_style").each(function(){var e=t(this),a=e.data("value");function i(t,e){var a=e-t.toString().length+1;return Array(+(a>0&&a)).join("0")+t}function n(t,e,a){if(parseInt(t.find(".count.curr").html())!=e&&!t.hasClass("in_a_flip")){var n=t.find("span");1==parseInt(e)?n.html(n.data("singular")):n.html(n.data("plural")),setTimeout(function(){t.addClass("flip in_a_flip")},5),setTimeout(function(){t.find(".count.curr").html(i(e,2))},510),setTimeout(function(){t.removeClass("flip in_a_flip"),e=e-1==-1?a:e-1,t.find(".count.next").html(i(e,2))},600)}}e.find(".flip_element.year .count.curr.top").countdown(a).on("update.countdown",function(e){n(t(this).parent(),e.strftime("%Y"),0)}),e.find(".flip_element.month .count.curr.top").countdown(a).on("update.countdown",function(e){n(t(this).parent(),e.strftime("%m"),11)}),e.find(".flip_element.day .count.curr.top").countdown(a).on("update.countdown",function(e){n(t(this).parent(),e.strftime("%d"),30)}),e.find(".flip_element.hour .count.curr.top").countdown(a).on("update.countdown",function(e){n(t(this).parent(),e.strftime("%H"),23)}),e.find(".flip_element.minute .count.curr.top").countdown(a).on("update.countdown",function(e){n(t(this).parent(),e.strftime("%M"),59)}),e.find(".flip_element.second .count.curr.top").countdown(a).on("update.countdown",function(e){n(t(this).parent(),e.strftime("%S"),59)})}),t(".tcvpb-carousel").each(function(){var e=t(this),a=e.find("img").height(),i=e.find(".carousel_prev"),n=e.find(".carousel_next");i.css("top",-75-a/2+"px"),n.css("top",-75-a/2+"px");var s="0"!=e.data("autoplay"),o=e.data("items"),r=e.data("effect"),l=e.data("easing"),d=e.data("duration");t(window).width()<769&&e.find("li").css("width",e.width()),t(this).find("ul").carouFredSel({prev:i,next:n,width:"100%",play:!0,auto:s,scroll:{items:o,fx:r,easing:l,duration:d},swipe:{onTouch:!0}})}),t(".tcvpb_google_map").each(function(){google.maps.event.addDomListener(window,"load",function(e){var a=new google.maps.LatLng(e.data("lat"),e.data("lng")),i=1==e.data("auto_center_zoom"),n=1==e.data("scrollwheel"),s=1==e.data("maptypecontrol"),o=1==e.data("pancontrol"),r=1==e.data("zoomcontrol"),l=1==e.data("scalecontrol"),d="undefined"!=typeof tcvpb_options?tcvpb_options.tcvpb_custom_map_style:"",c=google.maps.MapTypeId.ROADMAP;"SATELLITE"==e.data("map_type")&&(c=google.maps.MapTypeId.SATELLITE),"HYBRID"==e.data("map_type")&&(c=google.maps.MapTypeId.HYBRID),"TERRAIN"==e.data("map_type")&&(c=google.maps.MapTypeId.TERRAIN);var p={zoom:parseInt(e.data("zoom"),10),center:a,mapTypeId:c,styles:jQuery.parseJSON(d),scrollwheel:n,mapTypeControl:s,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:google.maps.ControlPosition.BOTTOM_CENTER},panControl:o,panControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER},zoomControl:r,zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE,position:google.maps.ControlPosition.RIGHT_CENTER},scaleControl:l,scaleControlOptions:{position:google.maps.ControlPosition.BOTTOM_LEFT},streetViewControl:!1,streetViewControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER}},m=e.attr("id"),h=new google.maps.LatLngBounds,f=new google.maps.Map(document.getElementById(m),p),u=0,v=[],_=[];e.siblings(".tcvpb_google_map_marker").each(function(){var e=t(this);v[u]=[e.data("title"),e.data("lat"),e.data("lng"),e.data("icon")],_[u]=['<div class="info_content"><h3>'+e.data("title")+"</h3><p>"+e.html()+"</p></div>"],u++});var b,w,g=new google.maps.InfoWindow;for(w=0;w<v.length;w++){var y=new google.maps.LatLng(v[w][1],v[w][2]);h.extend(y),b=new google.maps.Marker({position:y,map:f,title:v[w][0],icon:v[w][3]}),google.maps.event.addListener(b,"click",function(t,e){return function(){g.setContent(_[e][0]),g.open(f,t)}}(b,w))}i&&f.fitBounds(h)}(t(this)))}),t(window).on("resize",function(){if(t(window).width()<769?(p.css("position","static"),m.css("position","static")):(p.css("position","fixed"),m.css("position","fixed")),p.height(t(".rev_slider_wrapper").height()),f(),h(),t(".spiral_latest_portfolio").isotope("layout"),t(window).width()>960&&!u.hasClass("sf-js-enabled")?(o.show(),u.superfish({delay:0,speed:0,speedOut:0,cssArrows:!1,disableHI:!0,onBeforeShow:function(){var e=t(window).width();if(void 0!==this.parent().offset()){var a=this.parent().offset().left+this.width(),i=this.parent().offset().left+this.parent().width()+this.width(),n=this.parent();n.parent().is("#main_menu")&&a>e?this.css("marginLeft","-"+(a-e+20)+"px"):!n.parent().is("#main_menu")&&i>e&&this.addClass("left_side_menu").css("left","-"+this.width()+"px")}}})):t(window).width()<960&&u.hasClass("sf-js-enabled")&&(u.superfish("destroy"),o.hide(),o.find(".sf-mega").css("marginLeft","0")),t(".tcvpb_knob_wrapper").each(function(){var e=t(this).find(".tcvpb_knob_number_sign"),a=t(this).find("canvas").width();e.css({lineHeight:a+"px"})}),t(".tcvpb-video-bg").each(function(){L(t(this))}),D(),d(),c(),r.hasClass("menu_opened")&&(r.removeClass("menu_opened"),t(window).width()>=960&&(o.hide().css("width","auto"),l.show())),t(window).width()>1024){var e=t(window).outerWidth();W.each(function(){var a,i=t(this);e>1145&&(a=1170),e>960&&e<1145&&(a=960),e<960&&(a=parseInt(.9*e,10));var n=i.data("duration"),s=i.find("li").length,o=i.find("ul"),r=o.find("li");r.removeClass("active"),e<760?(r.css("width",a),r.eq(1).addClass("active"),r.eq(2).hasClass("active")&&r.eq(2).removeClass("active")):e>760&&(r.eq(1).addClass("active"),r.eq(2).addClass("active"));var l,d=i.find("li").outerWidth(!0);l=t(".boxed_body_wrapper").length?d-60:parseInt(d-(e-a-42)/2,10),o.css({display:"inline-block",width:s*i.find("li").outerWidth(!0)+"px",left:-l+"px"});i.find("li").not(".first").not(".last").not(".active").length,i.find("li").outerWidth(!0);i.on("click",".carousel_next",function(e){if(e.preventDefault(),!i.find("li.last").prev().hasClass("active")){var a=t(".active",i);a.next().hasClass("last")||o.is(":animated")||a.removeClass("active").next().addClass("active"),o.is(":animated")||o.animate({left:parseInt(o.css("left"),10)-o.find("li").outerWidth(!0)},n)}}),i.on("click",".carousel_prev",function(e){if(e.preventDefault(),!i.find("li.first").next().hasClass("active")){var a=t(".active",i);a.prev().hasClass("first")||o.is(":animated")||a.removeClass("active").prev().addClass("active"),o.is(":animated")||o.animate({left:parseInt(o.css("left"),10)+o.find("li").outerWidth(!0)},n)}})})}}),t(window).on("orientationchange",function(){setTimeout(function(){var e=t(window).outerWidth();W.each(function(){var a,i=t(this);e>1145&&(a=1170),e>960&&e<1145&&(a=960),e<960&&(a=parseInt(.9*e,10));var n=i.data("duration"),s=i.find("li").length,o=i.find("ul"),r=o.find("li");r.removeClass("active"),e<760?(r.css("width",a),r.eq(1).addClass("active"),r.eq(2).hasClass("active")&&r.eq(2).removeClass("active")):e>760&&(r.eq(1).addClass("active"),r.eq(2).addClass("active"));var l,d=i.find("li").outerWidth(!0);l=t(".boxed_body_wrapper").length?d-60:parseInt(d-(e-a-42)/2,10),o.css({display:"inline-block",width:s*i.find("li").outerWidth(!0)+"px",left:-l+"px"});i.find("li").not(".first").not(".last").not(".active").length,i.find("li").outerWidth(!0);i.on("click",".carousel_next",function(e){if(e.preventDefault(),!i.find("li.last").prev().hasClass("active")){var a=t(".active",i);a.next().hasClass("last")||o.is(":animated")||a.removeClass("active").next().addClass("active"),o.is(":animated")||o.animate({left:parseInt(o.css("left"),10)-o.find("li").outerWidth(!0)},n)}}),i.on("click",".carousel_prev",function(e){if(e.preventDefault(),!i.find("li.first").next().hasClass("active")){var a=t(".active",i);a.prev().hasClass("first")||o.is(":animated")||a.removeClass("active").prev().addClass("active"),o.is(":animated")||o.animate({left:parseInt(o.css("left"),10)+o.find("li").outerWidth(!0)},n)}})})},200)})}),function(t){(jQuery.browser=jQuery.browser||{}).mobile=/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}(navigator.userAgent||navigator.vendor||window.opera);