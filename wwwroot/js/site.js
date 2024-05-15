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

/* $(document).ready(function ($) {
    $('.team-list').hide();
    
    $(function () {
        $('table').tablesorter({
            widgets: ['default', 'columns'],
            usNumberFormat: false,
            sortReset: true,
            sortRestart: true,
        });
    });
}); */

//Vars
var odds0;
var odds1;
var odds2;
var odds3;
var odds4;
var odds5;
var odds6;

var decOdds0;
var decOdds1
var decOdds2;
var decOdds3;
var decOdds4;
var decOdds5;
var decOdds6;

var wager0 = 0.00;
var wager1 = 0.00;
var wager2 = 0.00;
var wager3 = 0.50;
var wager4 = 0.50;
var wager5 = 0.50;
var wager6 = 0.50;

var payout0;
var payout1;
var payout2;
var payout3;
var payout4;
var payout5;
var payout6;

var win0;
var win1;
var win2;
var win3;
var win4;
var win5;
var win6;

var profit0;
var profit1;
var profit2;
var profit3;
var profit4;
var profit5;
var profit6;

var totalProfitFave;
var totalProfitUD;
var totalProfitDraw;

var minWinDraw;
var minWinFave;
var minWinUD;
var minProfitAll;
var prevLossAll;
var profitAll;
var wagerAll;
var currProfit = 0.00;

var profitUD1;

//Get Odds
$(function () {
    $('#0_Odds').change(function () {
        odds0 = $(this).val().toString();
		minProfitAll = $('#ALL_MinProfit').val();
		prevLossAll = $('#ALL_PreviousLoss').val();

		if (odds0.includes("-")) {
			decOdds0 = Number((Math.abs(100/odds0).toFixed(2)))+1;
		} else {
			decOdds0 = ((odds0 / 100) + 1).toFixed(2);
		}

		$('#0_DecOdds').text(Number(decOdds0).toFixed(2));
		
        if ((odds0 != "") && (odds1 != "") && (odds2 != "") && (odds3 != "") && (odds4 != "") && (odds5 != "") && (odds6 != "") && (minProfitAll > 0)) {
            //calcProfit(decOdds0, decOdds1, decOdds2, decOdds3, decOdds4, decOdds5, decOdds6, minProfitAll, prevLossAll);
        }
    });
});

$(function () {
    $('#1_Odds').change(function () {
        odds1 = $(this).val().toString();
		minProfitAll = $('#ALL_MinProfit').val();
		prevLossAll = $('#ALL_PreviousLoss').val();

		if (odds1.includes("-")) {
			decOdds1 = Number((Math.abs(100/odds1).toFixed(2)))+1;
		} else {
			decOdds1 = ((odds1 / 100) + 1).toFixed(2);
		}

		$('#1_DecOdds').text(Number(decOdds1).toFixed(2));
		
        if ((odds0 != "") && (odds1 != "") && (odds2 != "") && (odds3 != "") && (odds4 != "") && (odds5 != "") && (odds6 != "") && (minProfitAll > 0)) {
            //calcProfit(decOdds0, decOdds1, decOdds2, decOdds3, decOdds4, decOdds5, decOdds6, minProfitAll, prevLossAll);
        }
    });
});

$(function () {
    $('#2_Odds').change(function () {
        odds2 = $(this).val().toString();
		minProfitAll = $('#ALL_MinProfit').val();
		prevLossAll = $('#ALL_PreviousLoss').val();

		if (odds2.includes("-")) {
			decOdds2 = Number((Math.abs(100/odds2).toFixed(2)))+1;
		} else {
			decOdds2 = ((odds2 / 100) + 1).toFixed(2);
		}
		if (odds2 == "" || odds2 == "undefined"){odds2 = 0; decOdds2 = 0; payout2 = 0; win2 = 0; profit2 = 0;}
		$('#2_DecOdds').text(Number(decOdds2).toFixed(2));
		
        if ((odds0 != "") && (odds1 != "") && (odds2 != "") && (odds3 != "") && (odds4 != "") && (odds5 != "") && (odds6 != "") && (minProfitAll > 0)) {
            //calcProfit(decOdds0, decOdds1, decOdds2, decOdds3, decOdds4, decOdds5, decOdds6, minProfitAll, prevLossAll);
        }
		console.log("odds2:" + odds2);
    });
});

$(function () {
    $('#3_Odds').change(function () {
        odds3 = $(this).val().toString();
		minProfitAll = $('#ALL_MinProfit').val();
		prevLossAll = $('#ALL_PreviousLoss').val();

		if (odds3.includes("-")) {
			decOdds3 = Number((Math.abs(100/odds3).toFixed(2)))+1;
		} else {
			decOdds3 = ((odds3 / 100) + 1).toFixed(2);
		}

		$('#3_DecOdds').text(Number(decOdds3).toFixed(2));
		
        if ((odds0 != "") && (odds1 != "") && (odds2 != "") && (odds3 != "") && (odds4 != "") && (odds5 != "") && (odds6 != "") && (minProfitAll > 0)) {
            //calcProfit(decOdds0, decOdds1, decOdds2, decOdds3, decOdds4, decOdds5, decOdds6, minProfitAll, prevLossAll);
        }
    });
});

$(function () {
    $('#4_Odds').change(function () {
        odds4 = $(this).val().toString();
		minProfitAll = $('#ALL_MinProfit').val();
		prevLossAll = $('#ALL_PreviousLoss').val();

		if (odds4.includes("-")) {
			decOdds4 = Number((Math.abs(100/odds4).toFixed(2)))+1;
		} else {
			decOdds4 = ((odds4 / 100) + 1).toFixed(2);
		}

		$('#4_DecOdds').text(Number(decOdds4).toFixed(2));
		
        if ((odds0 != "") && (odds1 != "") && (odds2 != "") && (odds3 != "") && (odds4 != "") && (odds5 != "") && (odds6 != "") && (minProfitAll > 0)) {
            //calcProfit(decOdds0, decOdds1, decOdds2, decOdds3, decOdds4, decOdds5, decOdds6, minProfitAll, prevLossAll);
        }
    });
});

$(function () {
    $('#5_Odds').change(function () {
        odds5 = $(this).val().toString();
		minProfitAll = $('#ALL_MinProfit').val();
		prevLossAll = $('#ALL_PreviousLoss').val();

		if (odds5.includes("-")) {
			decOdds5 = Number((Math.abs(100/odds5).toFixed(2)))+1;
		} else {
			decOdds5 = ((odds5 / 100) + 1).toFixed(2);
		}

		$('#5_DecOdds').text(Number(decOdds5).toFixed(2));
		
        if ((odds0 != "") && (odds1 != "") && (odds2 != "") && (odds3 != "") && (odds4 != "") && (odds5 != "") && (odds6 != "") && (minProfitAll > 0)) {
            //calcProfit(decOdds0, decOdds1, decOdds2, decOdds3, decOdds4, decOdds5, decOdds6, minProfitAll, prevLossAll);
        }
    });
});

$(function () {
    $('#6_Odds').change(function () {
        odds6 = $(this).val().toString();
		minProfitAll = $('#ALL_MinProfit').val();
		prevLossAll = $('#ALL_PreviousLoss').val();

		if (odds6.includes("-")) {
			decOdds6 = Number((Math.abs(100/odds6).toFixed(2)))+1;
		} else {
			decOdds6 = ((odds6 / 100) + 1).toFixed(2);
		}

		$('#6_DecOdds').text(Number(decOdds6).toFixed(2));
		
        if ((odds0 != "") && (odds1 != "") && (odds2 != "") && (odds3 != "") && (odds4 != "") && (odds5 != "") && (odds6 != "") && (minProfitAll > 0)) {
            //calcProfit(decOdds0, decOdds1, decOdds2, decOdds3, decOdds4, decOdds5, decOdds6, minProfitAll, prevLossAll);
        }
    });
});

//Get Wagers
$(function () {
    $('#ALL_MinProfit').change(function () {
        minProfitAll = $(this).val().toString();
		minProfitAll = Number(minProfitAll).toFixed(2);
		prevLossAll = $('#ALL_PreviousLoss').val();
        //oddsDraw = $('#Draw_Odds').val();
		//oddsFave = $('#FA_Odds').val();
		//oddsUD = $('#UD_Odds').val();
		
		//console.log("minProfitAll: " + minProfitAll);
		//console.log("prevLossAll: " + prevLossAll);
		//console.log("oddsDraw: " + oddsDraw);
		//console.log("oddsFave: " + oddsFave);
		//console.log("Draw_DecOdds: " + decOddsDraw);
		//console.log("FA_DecOdds: " + decOddsFave);
		
		$('#ALL_MinProfit').val(minProfitAll);
		
        if ((odds0 != "") && (odds1 != "") && (odds2 != "") && (odds3 != "") && (odds4 != "") && (odds5 != "") && (odds6 != "") && (prevLossAll >= 0)) {
/* 			console.log("minProfitAll: " + minProfitAll);
			console.log("oddsDraw: " + oddsDraw);
			$('#ALL_MinProfit').val(minProfitAll); */
            //calcProfit(decOdds0, decOdds1, decOdds2, decOdds3, decOdds4, decOdds5, decOdds6, minProfitAll, prevLossAll);
        }
		
/* 		if ((oddsFave != "") && (minProfitAll) > 0) {
			console.log("minProfitAll: " + minProfitAll);
			console.log("oddsFave: " + oddsFave);
			$('#ALL_MinProfit').val(minProftAll);
            calcProfitFave(decOddsFave, minProfitAll);
        } */
    });
});

//Get Previous Loss
$(function () {
    $('#ALL_PreviousLoss').change(function () {
        prevLossAll = $(this).val().toString();
		prevLossAll = Number(prevLossAll).toFixed(2);
		//console.log("prevLossAll: " + prevLossAll);
		$('#ALL_PreviousLoss').val(prevLossAll);
		
        if ((odds0 != "") && (odds1 != "") && (odds2 != "") && (odds3 != "") && (odds4 != "") && (odds5 != "") && (odds6 != "") && (prevLossAll >= 0)) {
/* 			console.log("minWinFave: " + minWinFave);
			console.log("oddsFave: " + oddsFave); */
	        //calcProfit(decOdds0, decOdds1, decOdds2, decOdds3, decOdds4, decOdds5, decOdds6, minProfitAll, prevLossAll);
        }
    });
});

//Calculate Profit
function calcProfit_(){ //(decOdds0, decOdds1, decOdds2, decOdds3, decOdds4, decOdds5, decOdds6, minProfitAll, prevLossAll) {
    console.log("calcProfit");

	//console.log("wagerFave: " + wagerFave);
	//console.log("decOdds0: " + Number(decOdds0).toFixed(2));
	//console.log("decOddsFave: " + Number(decOddsFave).toFixed(2));
	//console.log("decOddsUD: " + Number(decOddsUD).toFixed(2));
	//console.log("minProfitAll: " + Number(minProfitAll).toFixed(2));
	//console.log("prevLossAll: " + Number(prevLossAll).toFixed(2));
	
	profitAll = Number(parseFloat(minProfitAll) + parseFloat(prevLossAll)).toFixed(2);
	//console.log("profitAll: " + Number(profitAll).toFixed(2));
	
	if(decOdds0 > 0){
		wager0 = 0.00;
		payout0 = 0.00; 
		win0 = 0.00; 
		profit0 = 0.00; 
		//console.log("profit0: " + Number(profit0).toFixed(2));
		payout0 = wager0 * decOdds0;
		payout0 = Number(payout0).toFixed(2);
		win0 = payout0 - wager0;
		win0 = Number(win0).toFixed(2);

	}else{
		wager0 = 0.00;
	}
	if(decOdds1 > 0){
		wager1 = 0.00;
		payout1 = 0.00; 
		win1 = 0.00; 
		profit1 = 0.00; 
		//console.log("profit1: " + Number(profit1).toFixed(2));
		payout1 = wager1 * decOdds1;
		payout1 = Number(payout1).toFixed(2);
		win1 = payout1 - wager1;
		win1 = Number(win1).toFixed(2);

	}else{
		wager1 = 0.00;
	}
	if(decOdds2 > 0){
		wager2 = 0.00;
		payout2 = 0.00; 
		win2 = 0.00; 
		profit2 = 0.00; 
		//console.log("profit2: " + Number(profit2).toFixed(2));
		payout2 = wager2 * decOdds2;
		payout2 = Number(payout2).toFixed(2);
		win2 = payout2 - wager2;
		win2 = Number(win2).toFixed(2);

	}else{
		wager2 = 0.00;
	}

	//profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2)); // + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
	//profit0 = Number((payout0 - (wager0 + wager1 + wager2)).toFixed(2)); // + wager3 + wager4 + wager5 + wager6)).toFixed(2));
	//profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2)); // + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
	//profit1 = Number((payout1 - (wager0 + wager1 + wager2)).toFixed(2)); // + wager3 + wager4 + wager5 + wager6)).toFixed(2));
	//profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2)); // + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
	//profit2 = Number((payout2 - (wager0 + wager1 + wager2)).toFixed(2)); // + wager3 + wager4 + wager5 + wager6)).toFixed(2));
	//profit2 = parseFloat(payout2) - parseFloat(wager2);
	//profit2 = Number(payout2 - wager2);
		
	wager3 = 0.00;
	payout3 = 0.00; 
	win3 = 0.00; 
	profit3 = 0.00; 
	//console.log("profit3: " + Number(profit3).toFixed(2));
	
	wager4 = 0.00;
	payout4 = 0.00;
	win4 = 0.00; 
	profit4 = 0.00; 
	//console.log("profit4: " + Number(profit4).toFixed(2));
	
	wager5 = 0.00;
	payout5 = 0.00; 
	win5 = 0.00; 
	profit5 = 0.00; 
	//console.log("profit5: " + Number(profit5).toFixed(2));
	
	wager6 = 0.00;
	payout6 = 0.00; 
	win6 = 0.00; 
	profit6 = 0.00; 
	//console.log("profit6: " + Number(profit6).toFixed(2));

	wagerAll = parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6);
	wagerAll = wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6;
	console.log("wagerAll: " + Number(wagerAll).toFixed(2));
	wager0 = 0.50;	
	while (profit0 < profitAll){ 
		console.log("SET Profit0");
		
		nextPass0();
		updateProfit();
		
		tableResults();
	} 
	console.log("wagerAll: " + Number(wagerAll).toFixed(2));
	//wager1 = 0.50;
 	while (profit1 < profitAll){
		console.log("SET Profit1");
		
		nextPass1();
		updateProfit();

		tableResults();
	}  
	console.log("wagerAll: " + Number(wagerAll).toFixed(2));
	console.log("decOdds2: " + Number(decOdds2).toFixed(2));
	if(decOdds2 > 0.00){
		//wager2 = 0.50;
		if(wager2 < 0.50){
			wager2 = 0.50;
		}
		else{
			//wager2 = +wager2 + 0.01;
		}
		while (payout2 - (wager2 + wager1 + wager0) < profitAll){// || (profit1 < profitAll) || (profit2 < profitAll)){// ||(profit3 < profitAll) || (profit4 < profitAll) || (profit5 < profitAll)){// || (profit6 < profitAll)) {
			console.log("SET Profit2");
			wager2 = +wager2 + 0.01;
			//console.log("parseFloat(profit1): " + parseFloat(profit1));
			//console.log("profit1: " + Number(profit1).toFixed(2));
			
			//profitUD1 = parseFloat(profitAll) + parseFloat(wagerAll);
			console.log("profitAll: " + Number(profitAll).toFixed(2));
			//console.log("profitUD1: " + Number(profitUD1).toFixed(2));
			
			//nextPass2();
			//updateProfit();

			
			payout2 = wager2 * decOdds2;
			payout2 = Number(payout2).toFixed(2);
			console.log("payout2: " + Number(payout2).toFixed(2));
			
			win2 = payout2 - wager2;
			win2 = Number(win2).toFixed(2);
			console.log("win2: " + Number(win2).toFixed(2));
			
			//wager2 = +wager2 + 0.01;
			console.log("wager2: " + Number(wager2).toFixed(2));
			
			profit2 = parseFloat(payout2) - (parseFloat(wager2) + parseFloat(wager1) + parseFloat(wager0));
			profit2 = Number(payout2 - (wager2 + wager1 + wager0));
			console.log("profit2: " + Number(profit2).toFixed(2));
			
			console.log("wagerAll: " + Number(wagerAll).toFixed(2));

			//tableResults();
			//Table Entries
			//Wager 2
			$('#2_Wager').text(Number(wager2).toFixed(2));
			//Payout 2
			$('#2_Payout').text(Number(payout2).toFixed(2));
			//Win 2
			$('#2_Win').text(Number(win2).toFixed(2));
			//Profit 2
			$('#2_Profit').text(Number(profit2).toFixed(2));
			//All Wagers
			$('#ALL_TotalWager').text(Number(wagerAll + wager2).toFixed(2));
		}  
	}
	//Create function to add to existing Odds or Leave Odds empty and calculate the Minimum Odds to create a Maximum Profit Based on Wagers 1 and 2
	//Minimum Wager is $0.50
		
/* 	if(odds2 != "" || odds2 < 0){
		wager2 = ((parseFloat(payout0) + parseFloat(payout1))/2)/ parseFloat(decOdds2);
		console.log("wager2: " + Number(wager2).toFixed(2));
		console.log("decOdds2: " + Number(decOdds2).toFixed(2));
		payout2 = wager2 * decOdds2;
		payout2 = Number(payout2).toFixed(2);
		win2 = payout2 - wager2;
		win2 = Number(win2).toFixed(2);
		
		updateProfit();
		tableResultsTrade();
	
	}else{
		wager2 = parseFloat(0.00);
		payout2 = parseFloat(0.00);
		win2 = parseFloat(0.00);
		profit2 = parseFloat(0.00);
		
		//Make new function to not include #2 Items If Odds Are Not Entered
		updateProfit();
		tableResultsTrade();
	} */

}

function calcProfit(){

    console.log("calcProfit");
    //Clear Wager, Payout, Win, Profit, Total Wager
    wager0 = 0.00;
    wager1 = 0.00;
    //wager2 = 0.00;

    profitAll = Number(parseFloat(minProfitAll) + parseFloat(prevLossAll)).toFixed(2);
    //wager0 = 0.50;
    //wager1 = 0.50;
    //wager2 = 0.00;

    if(decOdds0 > 0 && decOdds1 > 0){
		//calcWager0();
		console.log("wager0: " + Number(wager0).toFixed(2));
		//payout0 = 0.00;
		//win0 = 0.00;
		//profit0 = 0.00;

		while(profit0 < profitAll){
		   wager0 = +wager0 + 0.01;
		   payout0 = parseFloat(wager0) * parseFloat(decOdds0); //wager0 * decOdds0;
		   win0 = parseFloat(payout0) - parseFloat(wager0); //payout0 - wager0;
		   profit0 = parseFloat(payout0) - (parseFloat(wager1) + parseFloat(wager0));
	  
		   if(profit1 < profitAll){wager1 = +wager1 + 0.01;
		   }
			   payout1 = parseFloat(wager1) * parseFloat(decOdds1); //wager1 * decOdds1;
	   		   win1 = parseFloat(payout1) - parseFloat(wager1); //payout1 - wager1;
			   profit1 = parseFloat(payout1) - (parseFloat(wager1) + parseFloat(wager0) );
	     }

	     //wager0 = Number(wager0).toFixed(2);
	     console.log("wager0: " + Number(wager0).toFixed(2));
	     //payout0 = Number(payout0).toFixed(2);
	     console.log("payout0: " + Number(payout0).toFixed(2));
	     //win0 = Number(win0).toFixed(2);
	     console.log("win0: " + Number(win0).toFixed(2));
	     //profit0 = Number(payout0 - (wager1 + wager0));
	     console.log("profit0: " + Number(profit0).toFixed(2));
	     //wager1 = Number(wager1).toFixed(2);
	     console.log("wager1: " + Number(wager1).toFixed(2));
	     //payout1 = Number(payout1).toFixed(2);
	     console.log("payout1: " + Number(payout1).toFixed(2));
	     //win1 = Number(win1).toFixed(2);
	     console.log("win1: " + Number(win1).toFixed(2));
	     //profit1 = Number(payout1 - (wager1 + wager0));
	     console.log("profit1: " + Number(profit1).toFixed(2));

	}

    wagerAll = parseFloat(wager0) + parseFloat(wager1); // + parseFloat(wager2);
    wagerAll = wager0 + wager1; // + wager2;
 
    tableResults();
}

function calcWager0(){
	console.log("wager0: " + Number(wager0).toFixed(2));
	//payout0 = 0.00; 
	//win0 = 0.00; 
	//profit0 = 0.00;
	while(profit0 < profitAll){
		wager0 = +wager0 + 0.01;
		payout0 = wager0 * decOdds0;
		win0 = payout0 - wager0;
		profit0 = parseFloat(payout0) - (parseFloat(wager1) + parseFloat(wager0) + parseFloat(wager2));
	}
	payout0 = Number(payout0).toFixed(2);
	console.log("payout0: " + Number(payout0).toFixed(2));
	win0 = Number(win0).toFixed(2);
	console.log("win0: " + Number(win0).toFixed(2));
	profit0 = Number(payout0 - (wager1 + wager0 + wager2));
	console.log("profit0: " + Number(profit0).toFixed(2));
}

function calcWager1(){
	console.log("wager1: " + Number(wager1).toFixed(2));
	//payout1 = 0.00; 
	//win1 = 0.00; 
	//profit1 = 0.00;
	while(profit1 < profitAll){
		wager1 = +wager1 + 0.01;
		payout1 = wager1 * decOdds1;
		win1 = payout1 - wager1;
		profit1 = parseFloat(payout1) - (parseFloat(wager1) + parseFloat(wager0) + parseFloat(wager2));
	}		
	payout1 = Number(payout1).toFixed(2);
	console.log("payout1: " + Number(payout1).toFixed(2));
	win1 = Number(win1).toFixed(2);
	console.log("win1: " + Number(win1).toFixed(2));
	profit1 = Number(payout1 - (wager1 + wager0 + wager2));
	console.log("profit1: " + Number(profit1).toFixed(2));
}

function calcWager2(){
	//wager2 = 0.50;
	console.log("wager2: " + Number(wager2).toFixed(2));
	payout2 = 0.00; 
	win2 = 0.00; 
	profit2 = 0.00;
	while(profit2 < profitAll){
		wager2 = +wager2 + 0.01;
		payout2 = wager2 * decOdds2;
		win2 = payout2 - wager2;
		profit2 = parseFloat(payout2) - (parseFloat(wager2) + parseFloat(wager1) + parseFloat(wager0));
		calcWager0();
		calcWager1();
	}		
	payout2 = Number(payout2).toFixed(2);
	console.log("payout2: " + Number(payout2).toFixed(2));
	win2 = Number(win2).toFixed(2);
	console.log("win2: " + Number(win2).toFixed(2));
	profit2 = Number(payout2 - (wager2 + wager1 + wager0));
	console.log("profit2: " + Number(profit2).toFixed(2));
	
	//wager0
	//payout0 = wager0 * decOdds0;
	//win0 = payout0 - wager0;
	//profit0 = parseFloat(payout0) - (parseFloat(wager1) + parseFloat(wager0));
	
	//wager1
	//payout1 = wager1 * decOdds1;
	//win1 = payout1 - wager1;
	//profit1 = parseFloat(payout1) - (parseFloat(wager1) + parseFloat(wager0));
}

function nextPass0(){
	console.log("nextPass0");
	if(profit0 < profitAll){// && profit1 < profitAll){// || profit2 < 0){
		if(wager0 < 0.50){
			wager0 = 0.50;
		}
		else{
			wager0 = +wager0 + 0.01;
		}
		//console.log("profit0");
		console.log("While profit0: " + Number(profit0).toFixed(2));
		//console.log("While profit1: " + Number(profit1).toFixed(2));
		//wager0 = +wager0 + 0.01;
		//wager1 = +wager1 + 0.01;
		//wager2 = +wager2 + 0.01;
		/* if(profit0 < profitAll) { // || profit1 < profitAll || profit2 < profitAll){
			//console.log("HERE");
		}
		if(profit0 < 0){
			//console.log("THERE");
			//wager0 = +wager0 + 0.01;
		}
		if(profit1 < 0){
			//console.log("EVERY");
			//wager1 = +wager1 + 0.01;
		}
		if(profit2 < (wager0 + wager1)){
			//console.log("wager2: " + wager2);
			//wager2 = +wager2 + 0.01;
		} */
		payout0 = wager0 * decOdds0;
		payout0 = Number(payout0).toFixed(2);
		/* payout1 = wager1 * decOdds1;
		payout1 = Number(payout1).toFixed(2);
		payout2 = wager2 * decOdds2;
		payout2 = Number(payout2).toFixed(2); */
		win0 = payout0 - wager0;
		win0 = Number(win0).toFixed(2);
		/* win1 = payout1 - wager1;
		win1 = Number(win1).toFixed(2);
		win2 = payout2 - wager2;
		win2 = Number(win2).toFixed(2); */
		//profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//console.log("profit0: " + Number(profit0).toFixed(2));
		//console.log("profit1: " + Number(profit1).toFixed(2));
		//console.log("profit2: " + Number(profit2).toFixed(2));
		//console.log("profitAll: " + Number(profitAll).toFixed(2));
		//console.log("wager0: " + Number(wager0).toFixed(2));
		//if(profit0 < profitAll){
			//wager0 = +wager0 + 0.01;
		//}
		//if(profit2 < profitAll){
			//wager2 = +wager2 + 0.01;
			//nextPass2();
		//}
		//if(profit1 < profitAll){
			//wager1 = +wager1 + 0.01;
			//nextPass1();
		//}
	}
	/* if(profit1 < 0){// && profit1 < profitAll){// || profit2 < 0){
		//console.log("profit1");
		//console.log("While profit0: " + Number(profit0).toFixed(2));
		//console.log("While profit1: " + Number(profit1).toFixed(2));
		//wager0 = +wager0 + 0.01;
		//wager1 = +wager1 + 0.01;
		//wager2 = +wager2 + 0.01;
		if(profit1 < profitAll || profit1 < profitAll || profit2 < profitAll){
			//console.log("HERE");
		}
		if(profit0 < 0){
			//console.log("THERE");
			//wager0 = +wager0 + 0.01;
		}
		if(profit1 < 0){
			//console.log("EVERY");
			//wager1 = +wager1 + 0.01;
		}
		if(profit2 < 0){ //(wager0 + wager1)){
			//console.log("wager2: " + wager2);
			//wager2 = (parseFloat(payout0) + parseFloat(payout1))/ parseFloat(decOdds2); // +wager2 + 0.01;
		}
		payout0 = wager0 * decOdds0;
		payout0 = Number(payout0).toFixed(2);
		payout1 = wager1 * decOdds1;
		payout1 = Number(payout1).toFixed(2);
		payout2 = wager2 * decOdds2;
		payout2 = Number(payout2).toFixed(2);
		win0 = payout0 - wager0;
		win0 = Number(win0).toFixed(2);
		win1 = payout1 - wager1;
		win1 = Number(win1).toFixed(2);
		win2 = payout2 - wager2;
		win2 = Number(win2).toFixed(2);
		//profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//console.log("profit0: " + Number(profit0).toFixed(2));
		//console.log("profit1: " + Number(profit1).toFixed(2));
		//console.log("profit2: " + Number(profit2).toFixed(2));
		//console.log("profitAll: " + Number(profitAll).toFixed(2));
	} */
	/* if(profit2 < profitAll){// && profit1 < profitAll){// || profit2 < 0){
		//console.log("profit2");
		//console.log("While profit0: " + Number(profit0).toFixed(2));
		//console.log("While profit1: " + Number(profit1).toFixed(2));
		//wager0 = +wager0 + 0.01;
		//wager1 = +wager1 + 0.01;
		//wager2 = +wager2 + 0.01;
		if(profit1 < profitAll || profit1 < profitAll || profit2 < profitAll){
			//console.log("HERE");
		}
		if(profit0 < 0){
			//console.log("THERE");
			//wager0 = +wager0 + 0.01;
		}
		if(profit1 < 0){
			//console.log("EVERY");
			//wager1 = +wager1 + 0.01;
		}
		if(profit2 < 0 && wagerAll < 100){
			//console.log("wager2: " + wager2);
			//wager2 = +wager2 + 0.01;
		}
		payout0 = wager0 * decOdds0;
		payout0 = Number(payout0).toFixed(2);
		payout1 = wager1 * decOdds1;
		payout1 = Number(payout1).toFixed(2);
		payout2 = wager2 * decOdds2;
		payout2 = Number(payout2).toFixed(2);
		win0 = payout0 - wager0;
		win0 = Number(win0).toFixed(2);
		win1 = payout1 - wager1;
		win1 = Number(win1).toFixed(2);
		win2 = payout2 - wager2;
		win2 = Number(win2).toFixed(2);
		//profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//console.log("profit0: " + Number(profit0).toFixed(2));
		//console.log("profit1: " + Number(profit1).toFixed(2));
		//console.log("profit2: " + Number(profit2).toFixed(2));
		//console.log("profitAll: " + Number(profitAll).toFixed(2));
	} */
}
function nextPass1(){
	console.log("nextPass1");
	while(profit1 < profitAll){// && profit0 >= profitAll){
		//wager1 = +wager1 + 0.01;
		payout1 = wager1 * decOdds1;
		payout1 = Number(payout1).toFixed(2);
		win1 = payout1 - wager1;
		win1 = Number(win1).toFixed(2);
		//profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		console.log("profit1: " + Number(profit1).toFixed(2));
		//console.log("wager1: " + Number(wager1).toFixed(2));
		if(profit1 < profitAll){
			if(wager1 < 0.50){
				wager1 = 0.50;
			}
			else{
				wager1 = +wager1 + 0.01;
			}
			//wager1 = +wager1 + 0.01;
		}
		if(profit0 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass0();
		}
		//if(profit2 < profitAll){
			//wager1 = +wager1 + 0.01;
			//nextPass2();
		//}
	}
}
function nextPass2(){
	console.log("nextPass2");

	while(profit2 < profitAll){// && profit0 >= profitAll && profit1 >= profitAll){
		//wager2 = +wager2 + 0.01;
		payout2 = wager2 * decOdds2;
		payout2 = Number(payout2).toFixed(2);
		win2 = payout2 - wager2;
		win2 = Number(win2).toFixed(2);
		//profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		//console.log("profit2: " + Number(profit2).toFixed(2));
		//console.log("wager2: " + Number(wager2).toFixed(2));
		
		profit2 = parseFloat(payout2) - parseFloat(wager2);
		profit2 = Number(payout2 - wager0);
		
		if(profit2 < profitAll){
			wager2 = +wager2 + 0.01;
		}
		//if(profit1 < profitAll){
			//wager1 = +wager1 + 0.01;
			//nextPass1();
		//}
		//if(profit0 < profitAll){
			//wager1 = +wager1 + 0.01;
			//nextPass0();
		//}
	}
	
		//profit2 = parseFloat(payout2) - parseFloat(wager2);
		//profit2 = Number(payout2 - wager0);
}
function nextPass3(){
	console.log("nextPass3");
	while(profit3 < profitAll){
		//wager3 = +wager3 + 0.01;
		payout3 = wager3 * decOdds3;
		payout3 = Number(payout3).toFixed(2);
		win3 = payout3 - wager3;
		win3 = Number(win3).toFixed(2);
		profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		console.log("profit3: " + Number(profit3).toFixed(2));
		//console.log("wager3: " + Number(wager3).toFixed(2));
		if(profit3 < profitAll){
			wager3 = +wager3 + 0.01;
		}
		if(profit2 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass2();
		}
		if(profit1 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass1();
		}
		if(profit0 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass0();
		}
	}
}
function nextPass4(){
	console.log("nextPass4");
	while(profit4 < profitAll){
		//wager4 = +wager4 + 0.01;
		payout4 = wager4 * decOdds4;
		payout4 = Number(payout4).toFixed(2);
		win4 = payout4 - wager4;
		win4 = Number(win4).toFixed(2);
		profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		console.log("profit4: " + Number(profit4).toFixed(2));
		//console.log("wager4: " + Number(wager4).toFixed(2));
		if(profit4 < profitAll){
			wager4 = +wager4 + 0.01;
		}
		if(profit3 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass3();
		}
		if(profit2 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass2();
		}
		if(profit1 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass1();
		}
		if(profit0 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass0();
		}
	}
}
function nextPass5(){
	console.log("nextPass5");
	while(profit5 < profitAll){
		//wager5 = +wager5 + 0.01;
		payout5 = wager5 * decOdds5;
		payout5 = Number(payout5).toFixed(2);
		win5 = payout5 - wager5;
		win5 = Number(win5).toFixed(2);
		profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		console.log("profit5: " + Number(profit5).toFixed(2));
		//console.log("wager5: " + Number(wager5).toFixed(2));
		if(profit5 < profitAll){
			//console.log("HERE");
			wager5 = +wager5 + 0.01;
			nextPass5();
		}
		if(profit4 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass4();
		}
		if(profit3 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass3();
		}
		if(profit2 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass2();
		}
		if(profit1 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass1();
		}
		if(profit0 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass0();
		}

	}
}
function nextPass6(){
	while(profit6 < profitAll){
		//wager6 = +wager6 + 0.01;
		payout6 = wager6 * decOdds6;
		payout6 = Number(payout6).toFixed(2);
		win6 = payout6 - wager6;
		win6 = Number(win6).toFixed(2);
		profit6 = parseFloat(payout6) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit6 = Number((payout6 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		console.log("profit6: " + Number(profit6).toFixed(2));
		//console.log("wager2: " + Number(wager2).toFixed(2));
		while(profit6 < profitAll){
			console.log("HERE");
			wager6 = +wager6 + 0.01;
			nextPass6();
		//}
		if(profit5 < profitAll){
			//wager5 = +wager5 + 0.01;
			nextPass5();
		}
		if(profit4 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass4();
		}
		if(profit3 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass3();
		}
		if(profit2 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass2();
		}
		if(profit1 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass1();
		}
		if(profit0 < profitAll){
			//wager1 = +wager1 + 0.01;
			nextPass0();
		}
	    }
	}
}

function updateProfit(){
		profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		
		profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		
		//profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		//profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		//profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		//profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		//profit6 = parseFloat(payout6) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit6 = Number((payout6 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
}

function nextPass(){
	console.log("nextPass")
	if(profit0 <= 0){
		nextPass0();
	}
	if(profit1 <= 0){
		nextPass1();
	}
	if(profit1 <= 0){
		nextPass1();
	}
	if(profit1 <= 0){
		nextPass1();
	}
	if(profit1 <= 0){
		nextPass1();
	}
	if(profit1 <= 0){
		nextPass1();
	}
	if(profit1 <= 0){
		nextPass1();
	}

	/* if(profit0 <= 0){
		while(profit0 < profitAll){
			wager0 = +wager0 + 0.01;
			payout0 = wager0 * decOdds0;
			payout0 = Number(payout0).toFixed(2);
			win0 = payout0 - wager0;
			win0 = Number(win0).toFixed(2);
			profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
			profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			//console.log("profit0: " + Number(profit0).toFixed(2));
			//console.log("wager0: " + Number(wager0).toFixed(2));
		}
		
		//tableResults();
	}
	if(profit1 <= 0){
		while(profit1 < profitAll){
			wager1 = +wager1 + 0.01;
			payout1 = wager1 * decOdds1;
			payout1 = Number(payout1).toFixed(2);
			win1 = payout1 - wager1;
			win1 = Number(win1).toFixed(2);
			profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
			profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			//console.log("profit1: " + Number(profit1).toFixed(2));
			//console.log("wager1: " + Number(wager1).toFixed(2));
		}
		
		//tableResults();
	}
	if(profit2 <= 0){
		while(profit2 < profitAll){
			wager2 = +wager2 + 0.01;
			payout2 = wager2 * decOdds2;
			payout2 = Number(payout2).toFixed(2);
			win2 = payout2 - wager2;
			win2 = Number(win2).toFixed(2);
			profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
			profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			//console.log("profit2: " + Number(profit2).toFixed(2));
			//console.log("wager2: " + Number(wager2).toFixed(2));
		}
		
		//tableResults();
	}
	if(profit3 <= 0){
		while(profit3 < profitAll){
			wager3 = +wager3 + 0.01;
			payout3 = wager3 * decOdds3;
			payout3 = Number(payout3).toFixed(2);
			win3 = payout3 - wager3;
			win3 = Number(win3).toFixed(2);
			profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
			profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			//console.log("profit3: " + Number(profit3).toFixed(2));
			//console.log("wager3: " + Number(wager3).toFixed(2));
		}
		
		//tableResults();
	}
	if(profit4 <= 0){
		while(profit4 < profitAll){
			wager4 = +wager4 + 0.01;
			payout4 = wager4 * decOdds4;
			payout4 = Number(payout4).toFixed(2);
			win4 = payout4 - wager4;
			win4 = Number(win4).toFixed(2);
			profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
			profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			//console.log("profit4: " + Number(profit4).toFixed(2));
			//console.log("wager4: " + Number(wager4).toFixed(2));
		}
		
		//tableResults();
	}
	if(profit5 <= 0){
		while(profit5 < profitAll){
			wager5 = +wager5 + 0.01
			payout5 = wager5 * decOdds5;
			payout5 = Number(payout5).toFixed(2);
			win5 = payout5 - wager5;
			win5 = Number(win5).toFixed(2);
			profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
			profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			//console.log("profit5: " + Number(profit5).toFixed(2));
			//console.log("wager5: " + Number(wager5).toFixed(2));
		}
		
		//tableResults();
	}
	if(profit6 <= 0){
		while(profit6 < profitAll){
			wager6 = +wager6 + 0.01;
			payout6 = wager6 * decOdds6;
			payout6 = Number(payout6).toFixed(2);
			win6 = payout6 - wager6;
			win6 = Number(win6).toFixed(2);
			profit6 = parseFloat(payout6) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
			profit6 = Number((payout6 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			//console.log("profit6: " + Number(profit6).toFixed(2));
			//console.log("wager6: " + Number(wager6).toFixed(2));
		}
		
		t//ableResults();
	} */
	
		updateProfit();
		
		/* profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		
		profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		
		profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		profit6 = parseFloat(payout6) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit6 = Number((payout6 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2)); */
			
		wagerAll = parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6);
		wagerAll = wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6;
		console.log("wagerAll: " + Number(wagerAll).toFixed(2));
		
		/* if(profit0 < profitAll){
			calcProfit0();
		}
		if(profit1 < profitAll){
			calcProfit1();
		}	
		if(profit2 < profitAll){
			calcProfit2();
		}
		if(profit3 < profitAll){
			calcProfit3();
		}
		if(profit4 < profitAll){
			calcProfit4();
		}
		if(profit5 < profitAll){
			calcProfit5();
		}
		if(profit6 < profitAll){
			calcProfit6();
		} */
		
		tableResults();
}

function calcProfit0(){
	console.log("calcProfit0");
	if(profit0 <= profitAll){
		while(profit0 < profitAll){ 
			wager0 = +wager0 + 0.01;
			payout0 = wager0 * decOdds0;
			payout0 = Number(payout0).toFixed(2);
			win0 = payout0 - wager0;
			win0 = Number(win0).toFixed(2);
			profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
			profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			console.log("profit0: " + Number(profit0).toFixed(2));
			console.log("wager0: " + Number(wager0).toFixed(2));
		}
		
		tableResults();
	}
}

function calcProfit1(){
	console.log("calcProfit1");
	if(profit1 <= profitAll){
		while(profit1 < profitAll){
			wager1 = +wager1 + 0.01;
			payout1 = wager1 * decOdds1;
			payout1 = Number(payout1).toFixed(2);
			win1 = payout1 - wager1;
			win1 = Number(win1).toFixed(2);
			profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
			profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			console.log("profit1: " + Number(profit1).toFixed(2));
			console.log("wager1: " + Number(wager1).toFixed(2));
		}
		
		tableResults();
	}
}

function calcProfit2(){
	console.log("calcProfit2");
	if(profit2 <= profitAll){
		while(profit2 < profitAll){
			wager2 = +wager2 + 0.01;
			payout2 = wager2 * decOdds2;
			payout2 = Number(payout2).toFixed(2);
			win2 = payout2 - wager2;
			win2 = Number(win2).toFixed(2);
			profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
			profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			console.log("profit2: " + Number(profit2).toFixed(2));
			console.log("wager2: " + Number(wager2).toFixed(2));
		}
		
		tableResults();
	}
}

function calcProfit3(){
	console.log("calcProfit3");
	if(profit3 <= profitAll){
		while(profit3 < profitAll){
			wager3 = +wager3 + 0.01;
			payout3 = wager3 * decOdds3;
			payout3 = Number(payout3).toFixed(2);
			win3 = payout3 - wager3;
			win3 = Number(win3).toFixed(2);
			profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
			profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			console.log("profit3: " + Number(profit3).toFixed(2));
			console.log("wager3: " + Number(wager3).toFixed(2));
		}
		
		tableResults();
	}
}

function calcProfit4(){
	console.log("calcProfit4");
	if(profit4 <= profitAll){
		while(profit4 < profitAll){
			wager4 = +wager4 + 0.01;
			payout4 = wager4 * decOdds4;
			payout4 = Number(payout4).toFixed(2);
			win4 = payout4 - wager4;
			win4 = Number(win4).toFixed(2);
			profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
			profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			console.log("profit4: " + Number(profit4).toFixed(2));
			console.log("wager4: " + Number(wager4).toFixed(2));
		}
		
		tableResults();
	}
}

function calcProfit5(){
	console.log("calcProfit5");
	if(profit5 <= profitAll){
		while(profit5 < profitAll){
			wager5 = +wager5 + 0.01
			payout5 = wager5 * decOdds5;
			payout5 = Number(payout5).toFixed(2);
			win5 = payout5 - wager5;
			win5 = Number(win5).toFixed(2);
			profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
			profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			console.log("profit5: " + Number(profit5).toFixed(2));
			console.log("wager5: " + Number(wager5).toFixed(2));
		}
		
		tableResults();
	}
}

function calcProfit6(){
	console.log("calcProfit6");
	if(profit6 <= profitAll){
		while(profit6 < profitAll){
			wager6 = +wager6 + 0.01;
			payout6 = wager6 * decOdds6;
			payout6 = Number(payout6).toFixed(2);
			win6 = payout6 - wager6;
			win6 = Number(win6).toFixed(2);
			profit6 = parseFloat(payout6) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
			profit6 = Number((payout6 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			console.log("profit6: " + Number(profit6).toFixed(2));
			console.log("wager6: " + Number(wager6).toFixed(2));
		}
		
		tableResults();
	}
}

function tableResults(){
		//profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		
		//profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		
		//profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		//profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		//profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		//profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		//profit6 = parseFloat(payout6) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit6 = Number((payout6 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			
		//wagerAll = parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6);
		//wagerAll = wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6;
		//console.log("wagerAll: " + Number(wagerAll).toFixed(2));
		
		//Table Entries
		//Wager 0
		$('#0_Wager').text(Number(wager0).toFixed(2));
		//Payout 0
		$('#0_Payout').text(Number(payout0).toFixed(2));
		//Win 0
		$('#0_Win').text(Number(win0).toFixed(2));
		//Profit 0
		$('#0_Profit').text(Number(profit0).toFixed(2));
		
		//Table Entries
		//Wager 1
		$('#1_Wager').text(Number(wager1).toFixed(2));
		//Payout 1
		$('#1_Payout').text(Number(payout1).toFixed(2));
		//Win 1
		$('#1_Win').text(Number(win1).toFixed(2));
		//Profit 1
		$('#1_Profit').text(Number(profit1).toFixed(2));
		
		//Table Entries
		//Wager 2
		$('#2_Wager').text(Number(wager2).toFixed(2));
		//Payout 2
		$('#2_Payout').text(Number(payout2).toFixed(2));
		//Win 2
		$('#2_Win').text(Number(win2).toFixed(2));
		//Profit 2
		$('#2_Profit').text(Number(profit2).toFixed(2));
		
		/* //Table Entries
		//Wager 3
		$('#3_Wager').text(Number(wager3).toFixed(2));
		//Payout 3
		$('#3_Payout').text(Number(payout3).toFixed(2));
		//Win 3
		$('#3_Win').text(Number(win3).toFixed(2));
		//Profit 3
		$('#3_Profit').text(Number(profit3).toFixed(2));

		//Table Entries
		//Wager 4
		$('#4_Wager').text(Number(wager4).toFixed(2));
		//Payout 4
		$('#4_Payout').text(Number(payout4).toFixed(2));
		//Win 4
		$('#4_Win').text(Number(win4).toFixed(2));
		//Profit 4
		$('#4_Profit').text(Number(profit4).toFixed(2));

		//Table Entries
		//Wager 5
		$('#5_Wager').text(Number(wager5).toFixed(2));
		//Payout 5
		$('#5_Payout').text(Number(payout5).toFixed(2));
		//Win 5
		$('#5_Win').text(Number(win5).toFixed(2));
		//Profit 5
		$('#5_Profit').text(Number(profit5).toFixed(2));

		//Table Entries
		//Wager 6
		$('#6_Wager').text(Number(wager6).toFixed(2));
		//Payout 6
		$('#6_Payout').text(Number(payout6).toFixed(2));
		//Win 6
		$('#6_Win').text(Number(win6).toFixed(2));
		//Profit 6
		$('#6_Profit').text(Number(profit6).toFixed(2)); */
		
		//All Wagers
		$('#ALL_TotalWager').text(Number(wagerAll).toFixed(2));
		//console.log("ALL_TotalWager: " + Number(wagerAll).toFixed(2));
}

function tableResultsTrade(){
		//profit0 = parseFloat(payout0) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit0 = Number((payout0 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		
		//profit1 = parseFloat(payout1) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit1 = Number((payout1 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
		
		profit2 = parseFloat(payout2) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		profit2 = Number((payout2 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		//profit3 = parseFloat(payout3) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit3 = Number((payout3 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		//profit4 = parseFloat(payout4) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit4 = Number((payout4 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		//profit5 = parseFloat(payout5) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit5 = Number((payout5 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));

		//profit6 = parseFloat(payout6) - (parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6));
		//profit6 = Number((payout6 - (wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6)).toFixed(2));
			
		//wagerAll = parseFloat(wager0) + parseFloat(wager1) + parseFloat(wager2) + parseFloat(wager3) + parseFloat(wager4) + parseFloat(wager5) + parseFloat(wager6);
		//wagerAll = wager0 + wager1 + wager2 + wager3 + wager4 + wager5 + wager6;
		//console.log("wagerAll: " + Number(wagerAll).toFixed(2));
		
		//Table Entries
		//Wager 0
		$('#0_Wager').text(Number(wager0).toFixed(2));
		//Payout 0
		$('#0_Payout').text(Number(payout0).toFixed(2));
		//Win 0
		$('#0_Win').text(Number(win0).toFixed(2));
		//Profit 0
		$('#0_Profit').text(Number(profit0).toFixed(2));
		
		//Table Entries
		//Wager 1
		$('#1_Wager').text(Number(wager1).toFixed(2));
		//Payout 1
		$('#1_Payout').text(Number(payout1).toFixed(2));
		//Win 1
		$('#1_Win').text(Number(win1).toFixed(2));
		//Profit 1
		$('#1_Profit').text(Number(profit1).toFixed(2));
		
		//Table Entries
		//Wager 2
		$('#2_Wager').text(Number(wager2).toFixed(2));
		//Payout 2
		$('#2_Payout').text(Number(payout2).toFixed(2));
		//Win 2
		$('#2_Win').text(Number(win2).toFixed(2));
		//Profit 2
		$('#2_Profit').text(Number(profit2).toFixed(2));
		
		//Table Entries
		//Wager 3
		$('#3_Wager').text(Number(wager3).toFixed(2));
		//Payout 3
		$('#3_Payout').text(Number(payout3).toFixed(2));
		//Win 3
		$('#3_Win').text(Number(win3).toFixed(2));
		//Profit 3
		$('#3_Profit').text(Number(profit3).toFixed(2));

		//Table Entries
		//Wager 4
		$('#4_Wager').text(Number(wager4).toFixed(2));
		//Payout 4
		$('#4_Payout').text(Number(payout4).toFixed(2));
		//Win 4
		$('#4_Win').text(Number(win4).toFixed(2));
		//Profit 4
		$('#4_Profit').text(Number(profit4).toFixed(2));

		//Table Entries
		//Wager 5
		$('#5_Wager').text(Number(wager5).toFixed(2));
		//Payout 5
		$('#5_Payout').text(Number(payout5).toFixed(2));
		//Win 5
		$('#5_Win').text(Number(win5).toFixed(2));
		//Profit 5
		$('#5_Profit').text(Number(profit5).toFixed(2));

		//Table Entries
		//Wager 6
		$('#6_Wager').text(Number(wager6).toFixed(2));
		//Payout 6
		$('#6_Payout').text(Number(payout6).toFixed(2));
		//Win 6
		$('#6_Win').text(Number(win6).toFixed(2));
		//Profit 6
		$('#6_Profit').text(Number(profit6).toFixed(2));
		
		//All Wagers
		$('#ALL_TotalWager').text(Number(wagerAll).toFixed(2));
		//console.log("ALL_TotalWager: " + Number(wagerAll).toFixed(2));
}
	
function calcProfit_3Odds(decOddsDraw, decOddsFave, decOddsUD, minProfitAll, prevLossAll) {
    console.log("calcProfit");

	//console.log("wagerFave: " + wagerFave);
	//console.log("decOddsDraw: " + Number(decOddsDraw).toFixed(2));
	//console.log("decOddsFave: " + Number(decOddsFave).toFixed(2));
	//console.log("decOddsUD: " + Number(decOddsUD).toFixed(2));
	//console.log("minProfitAll: " + Number(minProfitAll).toFixed(2));
	//console.log("prevLossAll: " + Number(prevLossAll).toFixed(2));
	
	profitAll = Number(parseFloat(minProfitAll) + parseFloat(prevLossAll)).toFixed(2);
	console.log("profitAll: " + Number(profitAll).toFixed(2));
	
	wagerFave = 0.50;
	payoutFave = 0.00; //wagerFave * decOddsFave;
	winFave = 0.00; //payoutFave - wagerFave;
	profitFave = 0.00; //winFave - wagerDraw;
	console.log("profitFave: " + Number(profitFave).toFixed(2));
	
	wagerUD = 0.50;
	payoutUD = 0.00; //wagerFave * decOddsFave;
	winUD = 0.00; //payoutFave - wagerFave;
	profitUD = 0.00; //winFave - wagerDraw;
	console.log("profitUD: " + Number(profitUD).toFixed(2));
	
	wagerDraw = 0.50;
	payoutDraw = 0.00; //wagerDraw * decOddsDraw;
	winDraw = 0.00; //payoutDraw - wagerDraw;
	profitDraw = 0.00; //winDraw - wagerFave;
	console.log("profitDraw: " + Number(profitDraw).toFixed(2));
	
	wagerAll = parseFloat(wagerFave) + parseFloat(wagerUD) + parseFloat(wagerDraw);
	wagerAll = wagerFave + wagerUD + wagerDraw;
	console.log("wagerAll: " + Number(wagerAll).toFixed(2));
		
	if ((profitFave < profitAll) && (profitUD < profitAll) && (profitDraw < profitAll)) {
		console.log("SET Profit");
		while(profitFave < wagerAll){
			wagerFave = +wagerFave + 0.01;
			payoutFave = wagerFave * decOddsFave;
			payoutFave = Number(payoutFave).toFixed(2);
			winFave = payoutFave - wagerFave;
			winFave = Number(winFave).toFixed(2);
			profitFave = parseFloat(winFave) - (parseFloat(wagerUD) + parseFloat(wagerDraw));
			profitFave = Number((winFave - (wagerUD + wagerDraw)).toFixed(2));
			//console.log("profitFave: " + Number(profitFave).toFixed(2));
			//console.log("wagerFave: " + Number(wagerFave).toFixed(2));
		}
		while(profitUD < wagerAll){
			wagerUD = +wagerUD + 0.01;
			payoutUD = wagerUD * decOddsUD;
			payoutUD = Number(payoutUD).toFixed(2);
			winUD = payoutUD - wagerUD;
			winUD = Number(winUD).toFixed(2);
			profitUD = parseFloat(winUD) - (parseFloat(wagerFave) + parseFloat(wagerDraw));
			profitUD = Number((winUD - (wagerFave + wagerDraw)).toFixed(2));
			//console.log("profitUD: " + Number(profitUD).toFixed(2));
			//console.log("wagerUD: " + Number(wagerUD).toFixed(2));
		}
		while(profitDraw < wagerAll){
			wagerDraw = +wagerDraw + 0.01;
			payoutDraw = wagerDraw * decOddsDraw;
			payoutDraw = Number(payoutDraw).toFixed(2);
			winDraw = payoutDraw - wagerDraw;
			winDraw = Number(winDraw).toFixed(2);
			profitDraw = parseFloat(winDraw) - (parseFloat(wagerFave) + parseFloat(wagerUD));
			profitDraw = Number((winDraw - (wagerFave + wagerUD)).toFixed(2));
			//console.log("profitDraw: " + Number(profitDraw).toFixed(2));
			//console.log("wagerDraw: " + Number(wagerDraw).toFixed(2));
		}
		
		wagerAll = parseFloat(wagerFave) + parseFloat(wagerUD) + parseFloat(wagerDraw);
		wagerAll = wagerFave + wagerUD + wagerDraw;
		console.log("wagerAll: " + Number(wagerAll).toFixed(2));
	}
	//profitFave = parseFloat(payoutFave) - (parseFloat(wagerAll));
	//console.log("profitFave: " + Number(profitFave).toFixed(2));
	/* //while ((winFave - wagerDraw) < profitAll || (winDraw - wagerFave) < profitAll) {
	//while ((winFave - wagerUD) < profitAll || (winFave - wagerDraw) < profitAll
	//|| (winUD - wagerFave) < profitAll || (winUD - wagerDraw) < profitAll
	//|| (winDraw - wagerFave) < profitAll || (winDraw - wagerUD) < profitAll) {
	if (winFave < (wagerUD + wagerDraw) || winUD < (wagerDraw + wagerFave)
		|| winDraw < (wagerFave + wagerUD)){
		console.log("YES");
		while(winFave < (wagerDraw + wagerUD)){// < profitAll){
			console.log("Fave");
			wagerFave = +wagerFave + 0.01;
			payoutFave = wagerFave * decOddsFave;
			payoutFave = Number(payoutFave).toFixed(2);
			winFave = payoutFave - wagerFave;
			winFave = Number(winFave).toFixed(2);
			profitFave = parseFloat(winFave) - (parseFloat(wagerDraw) + parseFloat(wagerUD));
			profitFave = Number(winFave - (wagerDraw + wagerUD).toFixed(2));
			//console.log("profitFave: " + Number(profitFave).toFixed(2));
			//console.log("wagerFave: " + Number(wagerFave).toFixed(2));
		}
		console.log("Done With Fave");
		while(winUD < (wagerDraw + wagerFave)){// < profitAll){
			console.log("UD");
			wagerUD = +wagerUD + 0.01;
			payoutUD = wagerUD * decOddsUD;
			payoutUD = Number(payoutUD).toFixed(2);
			winUD = payoutUD - wagerUD;
			winUD = Number(winUD).toFixed(2);
			profitUD = parseFloat(winUD) - (parseFloat(wagerDraw) + parseFloat(wagerFave));
			profitUD = Number(winUD - (wagerDraw + wagerFave).toFixed(2));
			//console.log("profitFave: " + Number(profitFave).toFixed(2));
			//console.log("wagerFave: " + Number(wagerFave).toFixed(2));
		}
		console.log("Done With UD");
		while(winDraw < (wagerFave + wagerUD)){ // < profitAll){
			console.log("Draw");
			wagerDraw = +wagerDraw + 0.01;
			payoutDraw = wagerDraw * decOddsDraw;
			payoutDraw = Number(payoutDraw).toFixed(2);
			winDraw = payoutDraw - wagerDraw;
			winDraw = Number(winDraw).toFixed(2);
			profitDraw = parseFloat(winDraw) - (parseFloat(wagerFave) + parseFloat(wagerUD));
			profitDraw = Number(winDraw - (wagerFave + wagerUD).toFixed(2));
			//console.log("profitDraw: " + Number(profitDraw).toFixed(2));
			//console.log("wagerDraw: " + Number(wagerDraw).toFixed(2));
		}
		console.log("Done With Draw");
		wagerAll = parseFloat(wagerFave) + parseFloat(wagerUD) + parseFloat(wagerDraw);
		wagerAll = wagerFave + wagerUD + wagerDraw;
		console.log("wagerAll: " + Number(wagerAll).toFixed(2));
	} */
/* 		console.log("wagerUD: " + Number(wagerUD).toFixed(2));
		console.log("wagerDraw: " + Number(wagerDraw).toFixed(2));
	while(winFave < (wagerUD + wagerDraw)){
		console.log("Hello");
		console.log("winFave: " + Number(winFave).toFixed(2));
		winFave = +winFave + 0.01;
		console.log("winFave: " + Number(winFave).toFixed(2));
	} */
	console.log("Bye");
	//console.log("winFave: " + winFave);
	/* if ((winFave - wagerDraw) < profitAll || (winDraw - wagerFave) < profitAll) {
		console.log("YES");
		while((winFave - wagerDraw) < profitAll){
			console.log("Fave");
			wagerFave = wagerFave + 0.01;
			payoutFave = wagerFave * decOddsFave;
			payoutFave = Number(payoutFave).toFixed(2);
			winFave = payoutFave - wagerFave;
			winFave = Number(winFave).toFixed(2);
			//profitFave = Math.abs(Number((winFave - wagerDraw).toFixed(2)));
			profitFave = parseFloat(winFave) - parseFloat(wagerDraw);
			profitFave = Number((winFave - wagerDraw).toFixed(2));
			//console.log("profitFave: " + Number(profitFave).toFixed(2));
			//console.log("wagerFave: " + Number(wagerFave).toFixed(2));
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
			profitDraw = parseFloat(winDraw) - parseFloat(wagerFave);
			profitDraw = Number((winDraw - wagerFave).toFixed(2));
			//console.log("profitDraw: " + Number(profitDraw).toFixed(2));
			//console.log("wagerDraw: " + Number(wagerDraw).toFixed(2));
		}
		console.log("Done With Draw");
		wagerAll = parseFloat(wagerFave) + parseFloat(wagerDraw);
		wagerAll = wagerFave + wagerDraw;
		//console.log("wagerAll: " + Number(wagerAll).toFixed(2));
	} */
	

		console.log("wagerFave: " + Number(wagerFave).toFixed(2));
		console.log("wagerUD: " + Number(wagerUD).toFixed(2));
		console.log("wagerDraw: " + Number(wagerDraw).toFixed(2));
		
		//wagerAll = Number(wagerFave + wagerDraw).toFixed(2);
		//wagerAll = parseFloat(wagerFave) + parseFloat(wagerDraw);
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
		//Wager UD
		$('#UD_Wager').text(Number(wagerUD).toFixed(2));
		//Payout UD
		$('#UD_Payout').text(Number(payoutUD).toFixed(2));
		//Win UD
		$('#UD_Win').text(Number(winUD).toFixed(2));
		//Profit UD
		$('#UD_Profit').text(Number(profitUD).toFixed(2));
		
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
        winStreak = parseFloat(winStreak);

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
        loseStreak = parseFloat(loseStreak);

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
            winStreak = parseFloat(winStreak);
            loseStreak = parseFloat(loseStreak);
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
        var streak = parseFloat($(this).text());
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
