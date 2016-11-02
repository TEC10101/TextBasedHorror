//JavaScript + JQuery + HTML + CSS + Bootstrap
//Author: Tyler Corum, 11/02/2016
//Purpose: *Increase game immersion for pre-produced game, "Text-Based Horror (textbasedhorror.com)"
//cont...  *Create Flowcharts and diagrams to grasp hold of the game's logic and enhance future-team member accessiblity to the code,
//cont...  *Make the game "better" by processing as many backlog items as I'm capable of.
//
//Tested On: Windows Chrome v54, iPhone Safari (iOS 10)



//____________________Table Of Contents____________________
// (searchable, copy entire line with comment and find in code.)
//1. JS Code Snippet To Allow Form Input And [Enter] Key Acceptance
//2. JS Smoothing Out The Welcome-Screen/Homepage Of The Game To "Embrace" User And Thematic Mood
//3. HTML Sample On Main Menu/Index.html Page Demonstrating Fade Menus On-Click
//4. JS Creating An Adjustable Bootstrap Handler So Short Parts Of The Story Are More-Centered
//5. URL To Permanent Copy Of A Diagram I Started For The Project



//1. JS Code Snippet To Allow Form Input And [Enter] Key Acceptance
//------------------------------------------------------------

// for being able to press [enter] key to submit
var go = document.getElementById("button");
var txt = document.getElementById("myText");
txt.addEventListener("keypress", function() {
    if (event.keyCode == 13) go.click();
});



//2. JS Smoothing Out The Welcome-Screen/Homepage Of The Game To "Embrace" User And Thematic Mood
//--------------------------------------------------------------------------------------------

// fade out main menu to show play game options
    function showNewGameMenu() {
	$("#content").fadeOut(500);
	$("#newGameMenu").delay(1000).fadeIn(3000);
	document.getElementById('laugh').play();
	// if user has any cookies saved, show continue option
	if (localStorage.getItem('name') === null) {
    	$("#continueButton").hide();
  		} else {
    	$("#continueButton").fadeIn(3000);
    };
};

// from play game options
// clear cookies, fade audio out and then load story mode
function newGame() {
	$("#newGameMenu").fadeOut(500);
	var rainAudio = $("#rain");
	var thunderAudio = $("#thunder");
	rainAudio.animate({volume: 0}, 2000);
	//make sure the thunderAudio fades down quick so audio doesn't clip
	thunderAudio.animate({volume: 0}, 1600); 
	window.localStorage.clear(); 
	window.sessionStorage.clear(); 
	setTimeout(function() {
		window.location.assign("LiveProject.html");
	}, 3000);
};

// if user has any cookies, continueGame is an option
// from play game options, fade audio out and then load story mode
// the cookies are utilized naturally in the story mode
function continueGame() {
	$("#newGameMenu").fadeOut(500);
	var rainAudio = $("#rain");
	var thunderAudio = $("#thunder");
	rainAudio.animate({volume: 0}, 2000);
	thunderAudio.animate({volume: 0}, 1600);
	setTimeout(function() {
		window.location.assign("LiveProject.html");
	}, 3000);
};

// func called from play/new game menu
// goes back to main menu
function showMainMenu() {
	$("#newGameMenu").fadeOut(500);
	$("#content").delay(1000).fadeIn(3000);
};

// func called from main menu to show about us
function showAboutPage() {
	$("#content").fadeOut(500);
	$("#contentAbout").delay(1000).fadeIn(2000);
};

// func called from about us section
function goBackToMainPage() {
	$("#contentAbout").fadeOut(500);
	$("#content").delay(1000).fadeIn(3000);
};



//3. HTML Sample On Main Menu/Index.html Page Demonstrating Fade Menus On-Click
//-----------------------------------------------------------------------------

<div id="content">
	<ul>
		<li><button class="btn btn-lg btn-default frontButton" id="btn_Play" onclick="showNewGameMenu();">Play</button></li>
		<li><button class="btn btn-lg btn-default aboutButton" id="btn_About" onclick="showAboutPage();">About</button></li>
	</ul>
</div>



//4. JS Creating An Adjustable Bootstrap Handler So Short Parts Of The Story Are More-Centered
//-----------------------------------------------------------------------------------------

function adjustGrid() {
    $("#rowBumperLeft")
        .removeClass('col-lg-4')
        .removeClass('col-md-4')

        .addClass('col-lg-2')
        .addClass('col-md-2');

    $("#rowBumperCenter")
        .removeClass('col-lg-4')
        .removeClass('col-md-4')

        .addClass('col-lg-8')
        .addClass('col-md-8');

    $("#rowBumperRight")
        .removeClass('col-lg-4')
        .removeClass('col-md-4')

        .addClass('col-lg-2')
        .addClass('col-md-2');
    return;
};



//5. URL To Permanent Copy Of A Diagram I Started For The Project
//---------------------------------------------------------------

https://drive.google.com/file/d/0Bw6ibnXqghl4b3FsdkJNR3lRdW8/view?usp=sharing