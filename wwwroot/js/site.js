// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
localStorage.setItem('Sport', '');
var selection = 0; 
var sport = 0;
var winStreak = 0;
var loseStreak = 0;

if (localStorage.getItem('Sport') != 0) {
    $('#Sports').val($('#Sports').text(localStorage.getItem('Sport')));
}

if (selection != 0) {
    selection = localStorage.getItem('Sport')
    alert("selection: " + selection);
}

$(document).ready(function ($) {
    $('.team-list').hide();
    
    $(function () {
        $('table').tablesorter({
            widgets: ['default', 'columns'],
            usNumberFormat: false,
            sortReset: true,
            sortRestart: true,
        });
    });
});

//Vars
var wagerFave = 0.50;
var wagerUD;
var wagerDraw = 0.50;
var profitFave;
var profitUD;
var totalProfitFave;
var totalProfitUD;
var totalProfitFave;
var oddsFave;
var oddsDraw;
var decOddsFave;
var decOddsDraw
var decOddsUD;
var profitDraw;
var profitFave;
var winDraw;
var minWinDraw;
var minWinFave;
var minProfitAll;
var prevLossAll;
var profitAll;
var wagerAll;
var currProfit = 0.00;

//Get Odds
$(function () {
    $('#Draw_Odds').change(function () {
        oddsDraw = $(this).val().toString();
		minProfitAll = $('#ALL_MinProfit').val();
		prevLossAll = $('#ALL_PreviousLoss').val();
		//console.log("minProfitAll: " + minProfitAll);
		//console.log("prevLossAll: " + prevLossAll);
		//console.log("Draw_Odds: " + oddsDraw);
		//profitAll = minProfitAll + prevLossAll;
		if (oddsDraw.includes("-")) {
			decOddsDraw = Number((Math.abs(100/oddsDraw).toFixed(2)))+1;
		} else {
			decOddsDraw = ((oddsDraw / 100) + 1).toFixed(2);
		}
		//console.log("Draw_DecOdds: " + decOddsDraw);
		$('#Draw_DecOdds').text(Number(decOddsDraw).toFixed(2));
        if ((oddsDraw != "") && (oddsFave != "") && (minProfitAll > 0)) {
            calcProfit(decOddsDraw, decOddsFave, minProfitAll, prevLossAll);
        }
    });
});

$(function () {
    $('#FA_Odds').change(function () {
        oddsFave = $(this).val().toString();
		minProfitAll = $('#ALL_MinProfit').val();
		prevLossAll = $('#ALL_PreviousLoss').val();
		//console.log("minProfitAll: " + minProfitAll);
		//console.log("prevLossAll: " + prevLossAll);
		//console.log("FA_Odds: " + oddsFave);

		if (oddsFave.includes("-")) {
			decOddsFave = Number((Math.abs(100/oddsFave).toFixed(2)))+1;
		} else {
			decOddsFave = ((oddsFave / 100) + 1).toFixed(2);
		}
		//console.log("FA_DecOdds: " + decOddsFave);
		$('#FA_DecOdds').text(Number(decOddsFave).toFixed(2));
        if ((oddsDraw != "") && (oddsFave != "") && (minProfitAll > 0)) {
            calcProfit(decOddsDraw, decOddsFave, minProfitAll, prevLossAll);
        }
    });
});

//Get Wagers
$(function () {
    $('#ALL_MinProfit').change(function () {
        minProfitAll = $(this).val().toString();
		minProfitAll = Number(minProfitAll).toFixed(2);
		prevLossAll = $('#ALL_PreviousLoss').val();
        oddsDraw = $('#Draw_Odds').val();
		oddsFave = $('#FA_Odds').val();
		
		//console.log("minProfitAll: " + minProfitAll);
		//console.log("prevLossAll: " + prevLossAll);
		//console.log("oddsDraw: " + oddsDraw);
		//console.log("oddsFave: " + oddsFave);
		//console.log("Draw_DecOdds: " + decOddsDraw);
		//console.log("FA_DecOdds: " + decOddsFave);
		
		$('#ALL_MinProfit').val(minProfitAll);
		
        if ((oddsDraw != "") && (oddsFave != "") && (minProfitAll > 0) && (prevLossAll >= 0)) {
/* 			console.log("minProfitAll: " + minProfitAll);
			console.log("oddsDraw: " + oddsDraw);
			$('#ALL_MinProfit').val(minProfitAll); */
            calcProfit(decOddsDraw, decOddsFave, minProfitAll, prevLossAll);
        }
		
/* 		if ((oddsFave != "") && (minProfitAll) > 0) {
			console.log("minProfitAll: " + minProfitAll);
			console.log("oddsFave: " + oddsFave);
			$('#ALL_MinProfit').val(minProftAll);
            calcProfitFave(decOddsFave, minProfitAll);
        } */
    });
});

/* $(function () {
    $('#FA_MinWin').change(function () {
        minWinFave = $(this).val().toString();
		minWinFave = Number(minWinFave).toFixed(2);
		console.log("minWinFave: " + minWinFave);
		console.log("oddsFave: " + oddsFave);

        if ((oddsFave != "") && (minWinFave) > 0) {
			console.log("minWinFave: " + minWinFave);
			console.log("oddsFave: " + oddsFave);
			$('#FA_MinWin').val(minWinDraw);
            calcProfitFave(decOddsFave, minWinFave);
        }
    });
}); */

//Get Previous Loss
$(function () {
    $('#ALL_PreviousLoss').change(function () {
        prevLossAll = $(this).val().toString();
		prevLossAll = Number(prevLossAll).toFixed(2);
		//console.log("prevLossAll: " + prevLossAll);
		$('#ALL_PreviousLoss').val(prevLossAll);
		
        if ((oddsDraw != "") && (oddsFave != "") && (minProfitAll > 0) && (prevLossAll >= 0)) {
/* 			console.log("minWinFave: " + minWinFave);
			console.log("oddsFave: " + oddsFave); */
	        calcProfit(decOddsDraw, decOddsFave, minProfitAll, prevLossAll);
        }
    });
});

//Calculate Profit
function calcProfit(decOddsDraw, decOddsFave, minProfitAll, prevLossAll) {
    console.log("calcProfit");

	//console.log("wagerFave: " + wagerFave);
	console.log("decOddsDraw: " + Number(decOddsDraw).toFixed(2));
	console.log("decOddsFave: " + Number(decOddsFave).toFixed(2));
	console.log("minProfitAll: " + Number(minProfitAll).toFixed(2));
	console.log("prevLossAll: " + Number(prevLossAll).toFixed(2));
	
	profitAll = Number(parseInt(minProfitAll) + parseInt(prevLossAll)).toFixed(2);
	console.log("profitAll: " + Number(profitAll).toFixed(2));
	
	wagerFave = 0.50;
	payoutFave = 0.00; //wagerFave * decOddsFave;
	winFave = 0.00; //payoutFave - wagerFave;
	profitFave = 0.00; //winFave - wagerDraw;
	console.log("profitFave: " + Number(profitFave).toFixed(2));
	
	wagerDraw = 0.50;
	payoutDraw = 0.00; //wagerDraw * decOddsDraw;
	winDraw = 0.00; //payoutDraw - wagerDraw;
	profitDraw = 0.00; //winDraw - wagerFave;
	console.log("profitDraw: " + Number(profitDraw).toFixed(2));
	
	if ((profitFave < profitAll) && (profitDraw < profitAll)) {
		//console.log("YES");
		while(profitFave < profitAll){
			wagerFave = wagerFave + 0.01;
			//wagerFave = Math.round(wagerFave);
			//wagerFave = Number(wagerFave).toFixed(2);
			payoutFave = wagerFave * decOddsFave;
			payoutFave = Number(payoutFave).toFixed(2);
			winFave = payoutFave - wagerFave;
			winFave = Number(winFave).toFixed(2);
			//profitFave = Math.abs(Number((winFave - wagerDraw).toFixed(2)));
			profitFave = parseInt(winFave) - parseInt(wagerDraw);
			profitFave = Number((winFave - wagerDraw).toFixed(2));
			//console.log("profitFave: " + Number(profitFave).toFixed(2));
			console.log("wagerFave: " + Number(wagerFave).toFixed(2));
		}
		while(profitDraw < profitAll){
			wagerDraw = wagerDraw + 0.01;
			//wagerDraw = Math.round(wagerDraw);
			//wagerDraw = Number(wagerDraw).toFixed(2);
			payoutDraw = wagerDraw * decOddsDraw;
			payoutDraw = Number(payoutDraw).toFixed(2);
			winDraw = payoutDraw - wagerDraw;
			winDraw = Number(winDraw).toFixed(2);
			//profitFave = Math.abs(Number((winDraw - wagerDraw).toFixed(2)));
			profitDraw = parseInt(winDraw) - parseInt(wagerFave);
			profitDraw = Number((winDraw - wagerFave).toFixed(2));
			//console.log("profitDraw: " + Number(profitDraw).toFixed(2));
			console.log("wagerDraw: " + Number(wagerDraw).toFixed(2));
		}
		
		wagerAll = parseInt(wagerFave) + parseInt(wagerDraw);
		wagerAll = wagerFave + wagerDraw;
		console.log("wagerAll: " + Number(wagerAll).toFixed(2));
	}
	
	while ((winFave - wagerDraw) < profitAll || (winDraw - wagerFave) < profitAll) {
		console.log("YES");
		while((winFave - wagerDraw) < profitAll){
			console.log("Fave");
			wagerFave = wagerFave + 0.01;
			payoutFave = wagerFave * decOddsFave;
			payoutFave = Number(payoutFave).toFixed(2);
			winFave = payoutFave - wagerFave;
			winFave = Number(winFave).toFixed(2);
			//profitFave = Math.abs(Number((winFave - wagerDraw).toFixed(2)));
			profitFave = parseInt(winFave) - parseInt(wagerDraw);
			profitFave = Number((winFave - wagerDraw).toFixed(2));
			console.log("profitFave: " + Number(profitFave).toFixed(2));
			console.log("wagerFave: " + Number(wagerFave).toFixed(2));
		}
		console.log("Done With Fave");
		while((winDraw - wagerFave) < profitAll){
			console.log("Draw");
			wagerDraw = wagerDraw + 0.01;
			payoutDraw = wagerDraw * decOddsDraw;
			payoutDraw = Number(payoutDraw).toFixed(2);
			winDraw = payoutDraw - wagerDraw;
			winDraw = Number(winDraw).toFixed(2);
			//profitFave = Math.abs(Number((winDraw - wagerDraw).toFixed(2)));
			profitDraw = parseInt(winDraw) - parseInt(wagerFave);
			profitDraw = Number((winDraw - wagerFave).toFixed(2));
			console.log("profitDraw: " + Number(profitDraw).toFixed(2));
			console.log("wagerDraw: " + Number(wagerDraw).toFixed(2));
		}
		console.log("Done With Draw");
		wagerAll = parseInt(wagerFave) + parseInt(wagerDraw);
		wagerAll = wagerFave + wagerDraw;
		console.log("wagerAll: " + Number(wagerAll).toFixed(2));
	}
	
	if ((winFave - wagerDraw) < profitAll || (winDraw - wagerFave) < profitAll) {
		console.log("YES");
		while((winFave - wagerDraw) < profitAll){
			console.log("Fave");
			wagerFave = wagerFave + 0.01;
			payoutFave = wagerFave * decOddsFave;
			payoutFave = Number(payoutFave).toFixed(2);
			winFave = payoutFave - wagerFave;
			winFave = Number(winFave).toFixed(2);
			//profitFave = Math.abs(Number((winFave - wagerDraw).toFixed(2)));
			profitFave = parseInt(winFave) - parseInt(wagerDraw);
			profitFave = Number((winFave - wagerDraw).toFixed(2));
			console.log("profitFave: " + Number(profitFave).toFixed(2));
			console.log("wagerFave: " + Number(wagerFave).toFixed(2));
		}
		console.log("Done With Fave");
		while((winDraw - wagerFave) < profitAll){
			console.log("Draw");
			wagerDraw = wagerDraw + 0.01;
			payoutDraw = wagerDraw * decOddsDraw;
			payoutDraw = Number(payoutDraw).toFixed(2);
			winDraw = payoutDraw - wagerDraw;
			winDraw = Number(winDraw).toFixed(2);
			//profitFave = Math.abs(Number((winDraw - wagerDraw).toFixed(2)));
			profitDraw = parseInt(winDraw) - parseInt(wagerFave);
			profitDraw = Number((winDraw - wagerFave).toFixed(2));
			console.log("profitDraw: " + Number(profitDraw).toFixed(2));
			console.log("wagerDraw: " + Number(wagerDraw).toFixed(2));
		}
		console.log("Done With Draw");
		wagerAll = parseInt(wagerFave) + parseInt(wagerDraw);
		wagerAll = wagerFave + wagerDraw;
		console.log("wagerAll: " + Number(wagerAll).toFixed(2));
	}
	
/* 	//Table Entries
	//Wager Fave
	$('#FA_Wager').text(Number(wagerFave).toFixed(2));
	//Payout Fave
	$('#FA_Payout').text(Number(payoutFave).toFixed(2));
	//Win Fave
    $('#FA_Win').text(Number(winFave).toFixed(2));
	//Profit Fave
	$('#FA_Profit').text(Number(profitFave).toFixed(2));

	//Table Entries
	//Wager Draw
	$('#Draw_Wager').text(Number(wagerDraw).toFixed(2));
	//Payout Draw
	$('#Draw_Payout').text(Number(payoutDraw).toFixed(2));
	//Win Draw
    $('#Draw_Win').text(Number(winDraw).toFixed(2));
	//Profit Draw
	$('#Draw_Profit').text(Number(profitDraw).toFixed(2)); */
	
	//Process To Get Min Profit For Fave and Draw
	//Step 1: Get Lesser Profit
	/* if ((profitFave < profitAll) && (profitDraw < profitAll)) {
		currProfit = 0.00;
		while(profitFave < profitAll){// || (profitDraw < profitAll)){
			
			//if(profitFave < profitAll){
				wagerFave = wagerFave + 0.01;
				payoutFave = wagerFave * decOddsFave;
				payoutFave = Number(payoutFave).toFixed(2);
				winFave = payoutFave - wagerFave;
				winFave = Number(winFave).toFixed(2);
				//profitFave = Math.abs(Number((winFave - wagerDraw).toFixed(2)));
				profitFave = Number((winFave - wagerDraw).toFixed(2));
				//console.log("profitFave: " + Number(profitFave).toFixed(2));
				//console.log("wagerFave: " + Number(wagerFave).toFixed(2));
			//}
				//console.log("N: " + parseInt(wagerFave) + parseInt(profitAll)); //Number(parseInt(wagerFave) + parseInt(profitAll)).toFixed(2));
				//console.log("winDraw: " + Number(winDraw).toFixed(2));
				currProfit = parseInt(wagerFave) + parseInt(profitAll);
				currProfit = parseInt(currProfit) + parseInt(profitAll);
				//console.log("currProfit: " + Number(currProfit).toFixed(2));
			if(winDraw < currProfit){ // && profitDraw < profitAll){
				//console.log("YES");
				while(winDraw < currProfit){
				wagerDraw = wagerDraw + 0.01;
				payoutDraw = Number(wagerDraw * decOddsDraw).toFixed(2);
				payoutDraw = Number(payoutDraw).toFixed(2);
				winDraw = payoutDraw - wagerDraw;
				winDraw = Number(winDraw).toFixed(2);
				//profitDraw = Math.abs(Number((winDraw - wagerFave).toFixed(2)));
				profitDraw = Number(winDraw - wagerFave).toFixed(2);
				//console.log("profitDraw: " + profitDraw);
				}
			}
		}
		//console.log("winDraw: " + winDraw);
		//console.log("profitDraw: " + Number(winDraw - wagerFave).toFixed(2));
		//console.log("winFave: " + winFave);
		//console.log("profitFave: " + Number(winFave - wagerDraw).toFixed(2));
		//Total Wagers
		wagerAll = Number(wagerFave + wagerDraw); //.toFixed(2);
		
/* 		//Table Entries
		//Wager Fave
		$('#FA_Wager').text(Number(wagerFave).toFixed(2));
		//Payout Fave
		$('#FA_Payout').text(Number(payoutFave).toFixed(2));
		//Win Fave
		$('#FA_Win').text(Number(winFave).toFixed(2));
		//Profit Fave
		$('#FA_Profit').text(Number(profitFave).toFixed(2));
		
		//Table Entries
		//Wager Draw
		$('#Draw_Wager').text(Number(wagerDraw).toFixed(2));
		//Payout Draw
		$('#Draw_Payout').text(Number(payoutDraw).toFixed(2));
		//Win Draw
		$('#Draw_Win').text(Number(winDraw).toFixed(2));
		//Profit Draw
		$('#Draw_Profit').text(Number(profitDraw).toFixed(2));
		//All Wagers
		$('#ALL_TotalWager').text(Number(wagerAll).toFixed(2));
		//console.log("ALL_TotalWager: " + Number(wagerAll).toFixed(2)); */
		
//	} */
		console.log("wagerFave: " + Number(wagerFave).toFixed(2));
		console.log("wagerDraw: " + Number(wagerDraw).toFixed(2));
		
		//wagerAll = Number(wagerFave + wagerDraw).toFixed(2);
		//wagerAll = parseInt(wagerFave) + parseInt(wagerDraw);
		//wagerAll = Number(wagerAll).toFixed(2);
		console.log("wagerAll: " + Number(wagerAll).toFixed(2));
		
		//Table Entries
		//Wager Fave
		$('#FA_Wager').text(Number(wagerFave).toFixed(2));
		//Payout Fave
		$('#FA_Payout').text(Number(payoutFave).toFixed(2));
		//Win Fave
		$('#FA_Win').text(Number(winFave).toFixed(2));
		//Profit Fave
		$('#FA_Profit').text(Number(profitFave).toFixed(2));
		
		//Table Entries
		//Wager Draw
		$('#Draw_Wager').text(Number(wagerDraw).toFixed(2));
		//Payout Draw
		$('#Draw_Payout').text(Number(payoutDraw).toFixed(2));
		//Win Draw
		$('#Draw_Win').text(Number(winDraw).toFixed(2));
		//Profit Draw
		$('#Draw_Profit').text(Number(profitDraw).toFixed(2));
		//All Wagers
		$('#ALL_TotalWager').text(Number(wagerAll).toFixed(2));
		//console.log("ALL_TotalWager: " + Number(wagerAll).toFixed(2));
	
}

function calcProfitDraw(decOddsDraw, decOddsFave, minProfitAll) {
    console.log("calcProfitDraw");

	//Payout Draw
	payoutDraw = Math.abs(wagerDraw * decOddsDraw);
	$('#Draw_Payout').val(Number(payoutDraw).toFixed(2));
	
    //Win Draw
    winDraw = Math.abs((wagerDraw * decOddsDraw) - wagerDraw);
    $('#Draw_Win').val(Number(winDraw).toFixed(2));

    //Profit Draw
    if ($('#FA_Wager').val() != "") {
        //profitDraw = $('#wagerFave').val();
        //profitDraw = $('#Draw_Profit').val(Number(winDraw - wagerFave).toFixed(2));
		profitDraw = Number(winDraw - wagerFave).toFixed(2);
    } else {
        //profitDraw = $('#Draw_Profit').val(Number(winDraw).toFixed(2));
		profitDraw = Number(winDraw).toFixed(2);
    }
	$('#Draw_Profit').val(Number(profitDraw).toFixed(2));
	
	//Wager Draw
	$('#Draw_Wager').val(Number((winFave/oddsFave)*100).toFixed(2));
	
/*     //Total Profit Fave
    if ($('#profitFave').val() != "") {
        profitFave = $('#profitFave').val();
        totalProfitFave = $('#totalProfitFave').val(Number(profitFave - wagerUD).toFixed(2));
    } else {
        totalProfitFave = $('#totalProfitFave').val(Number(profitFave).toFixed(2));
    }

    calcTotalProfit($('#totalProfitUD').val(), $('#totalProfitFave').val()); */
}

function calcProfitFave(decOddsFave, oddsFave, wagerFave) {
	console.log("calcProfitFave");
    //Payout Fave
	payoutFave = Math.abs(wagerFave * decOddsFave);
	$('#FA_Payout').val(Number(payoutFave).toFixed(2));
	
	//Win Fave
    winFave = Math.abs((wagerFave * decOddsFave) - wagerFave);
    $('#FA_Win').val(Number(winFave).toFixed(2));
	
	//Profit Fave
    if ($('#Draw_Wager').val() != "") {
		profitFave = Number(winFave - wagerDraw).toFixed(2);
    } else {
		profitFave = Number(winFave).toFixed(2);
    }
	$('#FA_Profit').val(Number(profitFave).toFixed(2));
	
	//calcProfitDraw(decOddsDraw, oddsDraw, wagerDraw);
	
/*     //Total Profit Fave
    if ($('#wagerUD').val() != "") {
        wagerUD = $('#wagerUD').val();
        totalProfitFave = $('#totalProfitFave').val(Number(profitFave - wagerUD).toFixed(2));
    } else {
        totalProfitFave = $('#totalProfitFave').val(Number(profitFave).toFixed(2));
    }

    //Total Profit UD
    if ($('#profitUD').val() != "") {
        profitUD = $('#profitUD').val();
        totalProfitUD = $('#totalProfitUD').val(Number(profitUD - wagerFave).toFixed(2));
    } else {
        totalProfitUD = $('#totalProfitUD').val(Number(profitUD).toFixed(2));
    }

    calcTotalProfit($('#totalProfitUD').val(), $('#totalProfitFave').val()); */

}

//Calculate Total Profit
function calcTotalProfit(totalProfitUD, totalProfitFave) {
    if ($('#profitFave').val() == 0) {
        $('#totalProfit').val($('#profitUD').val());
    } else {
        $('#totalProfit').val(totalProfitFave);
    }

    if ($('#profitUD').val() == 0) {
        $('#totalProfit').val($('#profitFave').val());
        
    } else {
        $('#totalProfit').val(totalProfitUD);
    }

    if ($('#profitFave').val() != 0 && $('#profitUD').val() != 0) {
        $('#totalProfit').val(Math.abs(totalProfitUD) - Math.abs(totalProfitFave));
    }
    var totalProfit = $('#totalProfit').val();
    $('#totalProfit').val(Number(totalProfit).toFixed(2));

}

$('#profitUD').on('change', function () {
    const value = Number($(this).val());
    $(this).val(value.toFixed(2));
});

$('#profitFave').on('change', function () {
    const value = Number($(this).val());
    $(this).val(value.toFixed(2));
});

$('#totalProfitUD').on('change', function () {
    const value = Number($(this).val());
    $(this).val(value.toFixed(2));
});

$('#totalProfitFave').on('change', function () {
    const value = Number($(this).val());
    $(this).val(value.toFixed(2));
});

//Get Win/Lose Streak
$(function () {
    $('#WinStreaks').change(function () {
        winStreak = $('#WinStreaks').val();
        winStreak = parseInt(winStreak);

        if (sport != "") {
            $('#'+ sport + '').hide();
            HighLightRowsLessThanColumnValue(sport, 5, winStreak, loseStreak);
            $('#' + sport + '').show();
        }

    });

});

$(function () {
    $('#LoseStreaks').change(function () {
        loseStreak = $('#LoseStreaks').val();
        loseStreak = parseInt(loseStreak);

        if (loseStreak == "" || loseStreak == "NaN") {
            loseStreak == 0;
        }

        if (sport != "") {
            HighLightRowsLessThanColumnValue(sport, 5, winStreak, loseStreak);
        }
    });

});

//Show Team List
$(function () {
    $('#Sports').change(function () {
        $('.team-list').hide();
        sport = $("#Sports option:selected").text();
        selection = $(this).val();

        $('#teams').show();

        //if (selection === '1') {
        //    $('#_mlbWin').val(winStreak);
        //    $('#_mlbLose').val(loseStreak);
        //    $('#MLB').show();
        //}
        //if (selection === '2') {
            winStreak = parseInt(winStreak);
            loseStreak = parseInt(loseStreak);
            $('#' + sport + '').show();
            HighLightRowsLessThanColumnValue(sport, 5, winStreak, loseStreak);

            //$('#NBA').show();
            //HighLightRowsLessThanColumnValue('NBA', 5, winStreak, loseStreak);

        //}
        //if (selection === '3') {
        //    $('#NFL').show();
        //}
        //if (selection === '4') {
        //    $('#NHL').show();
        //}

        // set localstorage
        localStorage.setItem('Sport', sport);

    });

});

function HighLightRowsLessThanColumnValue(gridviewID, columnIndex, winStreak, loseStreak) {
    $("#" + gridviewID + " td:nth-child(" + columnIndex + ")").each(function () {
        var streak = parseInt($(this).text());
        if (loseStreak != 0 && streak <= -1) {
            if (streak <= loseStreak) {
                $(this).parent("tr").css("background-color", "white");
                $(this).parent("tr").css("background-color", "yellow");
            } else {
                $(this).parent("tr").css("background-color", "yellow");
                $(this).parent("tr").css("background-color", "white");
            }
        }
        if (winStreak != 0 && streak >= 1) {
            if (streak >= winStreak) {
                $(this).parent("tr").css("background-color", "white");
                $(this).parent("tr").css("background-color", "green");
            } else {
                $(this).parent("tr").css("background-color", "white");
                $(this).parent("tr").css("background-color", "white");
            }
        }
    });
}

//Sort and Filter Team Lists
(function ($) {
    $.fn.filterTable = function (filter, columnname) {
        var index = null;
        this.find("thead > tr:first > th").each(function (i) {
            if ($.trim($(this).text()) == columnname) {
                index = i;
                return false;
            }
        });
        if (index == null)
            throw ("filter columnname: " + columnname + " not found");

        this.find("tbody:first > tr").each(function () {
            var row = $(this);
            if (filter == "") {
                row.show();
            }
            else {
                var cellText = row.find("td:eq(" + index + ")").find('option:selected').text();
                if (cellText == "") {
                    cellText = $(row.find(("td:eq(" + index + ")"))).text();
                }
                if (cellText.indexOf(filter) == -1) {
                    row.hide();
                }
                else {
                    row.show();
                }
            }
        });
        return this;
    };
})(jQuery)

/* chrome.tabs.getSelected(null, function(tab){
    console.log(tab);
}); */

/* browser.runtime.onMessage.addListener((message, sender) => {
  console.log('Active Tab ID: ', sender.tab.id);
}); */
