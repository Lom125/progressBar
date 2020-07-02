let progBar = 10;
let progText = "";

const butn1 = $('.btn1');
const butn3 = $('.btn3');
const butn7 = $('.btn7');

const increase = [1, 3, 7];

function increaseBar (var1, var2) {
	var1 += var2;
	if (var1 < 101) {
		progBar = var1;
		progText = var1 + "%";
		$(".progress-bar").width(progText).html(progText);
	}
	else {var1 -=var2;}
}


// Установим обработчик нажатия кнопкой мыши
butn1.bind("click", function() {
   	increaseBar (progBar,increase[0]);
});

butn3.bind("click", function() {
  	increaseBar (progBar,increase[1]);
});

butn7.bind("click", function() {
    increaseBar (progBar,increase[2]);
});


