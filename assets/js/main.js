
$(document).ready(function(){
	
	
	/*/ --- CONTENT --- /*/
	function centerContent(section){
		var $section = section;
		var $content = $section.find('.wrapper');
		
		var sectionH = 	$section.height();
		var contentH =	$content.height();
		var padding =	(sectionH - contentH) / 2 - 100;
		
		$content.css({
			'padding-top' : padding
		});
		
	}
	
	$('section').each(function(){
		centerContent($(this));
	});
	
	/*/ --- SCROLL TO --- /*/
	$('.down').click(function(){
		var destination = $(this).attr('data-destination');
		$.scrollTo(destination, 800, {easing: 'easeInOutExpo'});
	});
	$('.logo').click(function(){
		$.scrollTo(0, 800, {easing: 'easeInOutExpo'});
	});
	$('#header nav ul li').click(function(){
		var destination = $(this).attr('data-destination');
		$.scrollTo(destination, 800, {easing: 'easeInOutExpo'});
	});
	
	/*/ --- LIFEAWESO.ME --- /*/
	$('.lifeawesome').each(function(){
		$(this).text('lifeaweso.me');
	});
	
	/*/ --- LINK FOR TWITTER --- /*/
	$.fn.tweetify = function() {
		this.each(function() {
			$(this).html(
				$(this).html()
					.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>')
					.replace(/(^|\s)#(\w+)/g,'$1<a href="http://search.twitter.com/search?q=%23$2">#$2</a>')
					.replace(/(^|\s)@(\w+)/g,'$1<a href="http://twitter.com/$2">@$2</a>')
			);
		});
		return $(this);
	};
	$("#twitter-feed").tweetify();
	
	$(window).resize(function(){
		$('section').each(function(){
			centerContent($(this));
		});
	});

});
