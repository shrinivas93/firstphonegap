window.onload = function() {
	var btn= document.getElementById("click");
	btn.addEventListener('click', function() {
		alert("Clicked");
		$.ajax('http://jsonplaceholder.typicode.com/posts/1',{
			success: function(data) {
				alert(data.title);
			},
			error: function(err, msg) {
				alert(JSON.stringify(err));
				alert(JSON.stringify(msg));
			}
		});
	});
};