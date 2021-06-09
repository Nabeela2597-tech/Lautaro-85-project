canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

c1_height=90;
c1_width=100;
c1_image="car1.png";
c1_xposition=10;
c1_yposition=10;

c2_height=90;
c2_width=100;
c2_image="car2.png";
c2_xposition=50;
c2_yposition=50;


b_image = "Race_Track.jpeg";

function add(){
    bg = new Image();
    bg.onload = uploadBackground();
    bg.src = b_image;

    c1 = new Image();
    c1.onload = uploadcar1();
    c1.src = c1_image;

    c2 = new Image();
    c2.onload = uploadcar2();
    c2.src = c2_image;
}

function uploadBackground(){
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(c1, c1_xposition, c1_yposition, c1_width, c1_height);
}
function uploadcar2(){
    ctx.drawImage(c2, c2_xposition, c2_yposition, c2_width, c2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		
        if (keyPressed == '38'){
            c1_up();
            console.log("up");
            
        }
        else if (keyPressed == '37'){
            c1_left(); 
            console.log("left");
           
        }
        else if (keyPressed == '40'){
            c1_down(); 
            console.log("down");
            
        }
        else if (keyPressed == '39'){
            c1_right(); 
            console.log("right");
           
        }
        if(keyPressed == '87')
		{
			c2_up();
			console.log("key W");
		}
		if(keyPressed == '83')
		{
			c2_down();
			console.log("key S");
		}
		if(keyPressed == '65')
		{
			c2_left();
			console.log("key A");
		}
		if(keyPressed == '68')
		{
			c2_right();
			console.log("key D");
		}
        if(c1_xposition > 700)
        {
            console.log("car1");
            document.getElementById('game_status').innerHTML = "Car 1 Won!!";
        }
        else if(c2_xposition > 700)
        {
            console.log("car2");
            document.getElementById('game_status').innerHTML = "Car 2 Won!!";
        }
    }
    function c1_up() {
        if(c1_yposition >= 0) {
            c1_yposition = c1_yposition-10;
            console.log("when up arrow is pressed, x="+c1_xposition+" | y="+c1_yposition );
            uploadBackground();
            uploadcar1();
            uploadcar2();
            


        }
    }
    function c1_down() {
        if(c1_yposition <= 500) {
            c1_yposition = c1_yposition+10;
            console.log("when up arrow is pressed, x="+ c1_xposition+" | y="+c1_yposition );
            uploadBackground();
            uploadcar1();
            uploadcar2();

        }
    }

    function c1_left() {
        if(c1_xposition >= 0) {
            c1_xposition = c1_xposition-10;
            console.log("when up arrow is pressed, x="+ c1_xposition+" | y="+c1_yposition );
            uploadBackground();
            uploadcar1();
            uploadcar2();

        }
    }
    
    function c1_right() {
        if(c1_xposition <= 700) {
            c1_xposition = c1_xposition+10;
            console.log("when up arrow is pressed, x="+ c1_xposition+" | y="+c1_yposition );
            uploadBackground();
            uploadcar1();
            uploadcar2();

        }
    }


    function c2_up() {
        if(c2_yposition >= 0) {
            c2_yposition = c2_yposition-10;
            console.log("when up arrow is pressed, x="+ c2_xposition+" | y="+c2_yposition );
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }
    function c2_down() {
        if(c2_yposition <= 500) {
            c2_yposition = c2_yposition+10;
            console.log("when up arrow is pressed, x="+ c2_xposition+" | y="+c2_yposition );
            uploadBackground();
          
            uploadcar1();
            uploadcar2();
        }
    }
    function c2_left() {
        if(c2_xposition >= 0) {
            c2_xposition = c2_xposition-10;
            console.log("when up arrow is pressed, x="+ c2_xposition+" | y="+c2_yposition );
            uploadBackground();
            
            uploadcar1();
            uploadcar2();
        }
    }
    function c2_right() {
        if(c2_xposition <= 700) {
            c2_xposition = c2_xposition+10;
            console.log("when up arrow is pressed, x="+ c2_xposition+" | y="+c2_yposition );
            uploadBackground();
           
            uploadcar1();
            uploadcar2();
    }
}




    