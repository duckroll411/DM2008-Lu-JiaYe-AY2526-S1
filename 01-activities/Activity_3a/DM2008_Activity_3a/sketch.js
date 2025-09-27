// DM2008 — Activity 3a
// (Array Sampler, 25 min)

// 1. Create an array of colors (or other values)
//    You can make more than one array if you'd like
let palette = ["#f06449", "#009988", "#3c78d8", "#ffeb3b"];
let size = [10,20,30,40]
let spacing;

// 2. A variable to track the current index
let currentIndex = 0;
let currentSizeIndex = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(220);
  
function mousePressed() {
  // Advance to the next item
  currentIndex++;

  // Reset to 0 when we reach the end
  if (currentSizeIndex = size.length) {
    currentSizeIndex = 0;
  }
}
  
  
  // Even spacing based on how many items are in the array
  const spacing = width / (palette.length + 1);
  // Draw one circle for each palette color
  for (let i = 0; i < palette.length; i++) {
    fill(palette[i]);                   // use the i-th color
    const x = (i + 1) * spacing;        // position from the loop index
    currentSizeIndex+ 10;
    rect(x, height / 2, size[i]);
  }
}

// Try changing the array while the loop keeps adapting
function keyPressed() {
  if (key === 'a' || key === 'A') {
    const lastSize = size[size.length - 1];
    const newSize = lastSize + 10;
    const newColor = color(random(255), random(255), random(255));
    
    palette.push(newColor);
    size.push(newSize);
  } 
  
  else if (key === 'd' || key === 'D') {
    if (palette.length > 0) {
      palette.pop();
      size.pop();
    }
  }

  console.log("Palette size:", palette.length);
}
  

  // Log in the console to check
  console.log("Current index:", currentIndex, "→", palette[currentIndex]);


/* 
TODOs for students:
1. Replace colors with your own data (positions, text, sizes, etc).
2. Try mousePressed() instead of keyPressed().
3. Use push() to add new items, or splice() to remove them, then check how the sketch adapts.
4. Try looping through an array to visualize all the items within it instead of accessing one item at a time.
*/