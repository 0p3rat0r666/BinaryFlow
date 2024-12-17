var currentFrame = 0;
const frames = ["frame 1", "frame 2", "frame 3", "frame 4"];
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
