$( document ).ready(function() {
	var activities = [
	  {title: "Best activity" },
	  {title: "Better activity" },
	];

	for (var i = 0; i < activities.length; i++) {
		$('#content').append('<div class="activity">\
			<div class="activity_header"> \
				Some activity, created by Xoing'+(236*i+123)+' \
		 	</div> \
			<div class="activity_pic"> \
				<img src="images/stock-photo-87426947-error-404.jpg" class=activity_pic> \
			</div> \
			<div class="activity_details"> \
				1 registered, need 1 more \
			</div> \
			<div class="activity_buttons"> \
				<button onclick="myFunction()">Do it now</button> \
				<button onclick="myFunction()">Schedule for later</button> \
				<a href="index.html">moar</a> \
			</div>	\
		</div>');	
	}

	
  
});