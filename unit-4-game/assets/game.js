var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["https://mbch.guide/wp-content/uploads/crystal_multi_4thofjuly.png", "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/4/49/Crystal_drstrange.png/revision/latest?cb=20151121234017", "http://vignette1.wikia.nocookie.net/marvel-contestofchampions/images/3/3c/Crystal_ironman.png/revision/latest?cb=20151121235304", "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/9/9f/Crystal_magneto.png/revision/latest?cb=20151121235416"];

function randomTargetNumber () {
    targetNumber = Math.floor(Math.random() * 102) + 19;
} 

function resetCrystals () {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
		crystal.addClass("crystal");
		crystal.attr("src", images[i]);
		crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
		crystal.attr("height", "100");
		$(".crystals").append(crystal);
    }
}

function resetHTML () {
	$("#goal").html(targetNumber);
	$("#wins").html(wins);
    $("#losses").html(losses);
	$("#score").html(counter);
    $(".crystals").empty();
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
	$("#score").html(counter);
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