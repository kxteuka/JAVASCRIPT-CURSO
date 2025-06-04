$(function() {
			$("img").each(function() {
				console.log("Imagen encontrada con atributo: " + $(this).attr("alt"));
			});
		});