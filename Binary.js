var currentFrame = 0;

const frames = ["0	 	0	 	0	1	1	1	 	1	1	0	1	 	 	1	1	 	1	1	0	0	1	 	 	0	 	1	0	 	0	0	0	 	 	 	0	1	 	1", "0	1	 	0	1	 	0	 	 	1	1	 	 	 	 	1	0	 	 	 	 	 	0	0	1	0	 	 	 	0	 	 	0	0	 	 	 	0	 	0", " 	0	 	1	0	 	1	0	0	 	1	1	 	 	1	 	1	1	1	 	1	 	1	1	1	 	1	1	 	1	 	0	0	0	 	 	0	 	0	 ", " 	 	0	0	0	0	0	 	 	0	 	1	0	 	 	1	1	0	 	1	0	 	 	0	0	 		1	1					1	1	1			 	0", "0	 	 	 	1	 	 	1	1	 	0	0		1	0	0	 	0	0	1	 	 	0	 	1	1	 	0	 	0	 	 	1	0	 	1	0	 	1	 ", "0	0	1	0	 	0	0	1	0	1	 	 	1	 	 	1	1	 	 	0	0	 	 	1	 	 	0	 	1	 	0	0		 	1	 	 	0	 	 ", "1	1	0	 	0	1	1	 	 	 	1	 	0	 	 	1	 	1	1	 	 	1	0	1	0	 	0	 	 	1	 	1	0	 	0	 	0	1	0	 ", " 	1	0	0	 	 	 	1	1	0	 	1	0	 	1	 	 	 	0	0	 	0	 	 	1	1	 	0	1	0	1	1	 	0	0	1	 	0	1	 ", "0	 	0	0	 	 	0	 	 	 	0	1	0	0	 	 	1	1	 	 	0	 	1	1	 	 	1	 	 	0	 	 	0	1	 	 	1	1	 	0", "1	 	 	1	1	0	 	 	0	1	 	0	 	1	1	0	0	 	 	 	1	 	0	0	 	 	 	1	1	0	 	1	 	 	1	0	0	 	0	1"];
function showFrame(){
  if(currentFrame === frames.length-1){
    currentFrame = 0;
    console.log(frames[currentFrame]);
    currentFrame = currentFrame + 1;
  }else{
    console.log(frames[currentFrame]);
    currentFrame = currentFrame + 1;
  }
}

const play = setInterval(showFrame, 1000);
