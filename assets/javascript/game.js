var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/blue-crystal.jpg", "./assets/images/red-crystal.jpg", "./assets/images/green-crystal.jpg", "./assets/images/yellow-crystal.jpg"];

	function randomTargetNumber () {
		targetNumber = Math.floor(Math.random() * 100) + 15;
	}

	function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
			crystal.attr("src", images[i]);
			crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
			crystal.attr("height", "120");
			$(".crystal-images").append(crystal);
		}
	}

	function resetHTML () {
		$(".target-number").html(targetNumber);
		$(".win-loss-count").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".score-number").html(counter);
		$(".crystal-images").empty();
	}

	function totalReset () {
		randomTargetNumber ();
		counter = 0;
		resetHTML ();
		resetCrystals ();
	}
	randomTargetNumber();
	resetHTML ();
	resetCrystals ();

	function crystalClick () {

		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == targetNumber) {
			wins++;
			totalReset();
		}
		else if (counter > targetNumber) {
			losses++;
			totalReset();
		};
	};
	$(document).on("click", ".crystal", crystalClick);