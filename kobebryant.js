// post request for form submission
document.addEventListener("DOMContentLoaded", getComments);
function getComments() {
	if (document.getElementById("submit")){
		document.getElementById("submit").addEventListener("click", function(getSubmit) {
			var req = new XMLHttpRequest();
			var data = document.getElementById("name").value + " " + document.getElementById("email").value + " " + document.getElementById("comment").value;

			req.open("POST", "https://httpbin.org/post", true);
			req.setRequestHeader("Content-Type", "application/json");
			req.addEventListener("load", function() {
				if (req.status >= 200 && req.status < 400) {
					var response = JSON.parse(req.responseText);
					console.log(response.data);
					document.getElementById("submit").disabled = true;
				} else {
					console.log("Request error: " + req.statusText);
				}
			});
			req.send(data);
			getSubmit.preventDefault();
		});
	}
}

// opens link to another website in a new window
document.addEventListener("DOMContentLoaded", newWindow);
function newWindow() {
	document.getElementById("kvbff").addEventListener("click", function(openNewWindow) {
		window.open("http://kvbff.org/about/", "_blank");
	})
}