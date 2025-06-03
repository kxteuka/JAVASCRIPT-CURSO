$(function() {
			var $next = $("#myList li.current").next();
			$("#myList li.current").remove();
			$next.addClass("current");
		});