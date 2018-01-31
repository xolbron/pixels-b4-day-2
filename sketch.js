var userUpload;

function preload(){
    userUpload = loadImage("preview-lawrence-jennifer.jpg");
}

function setup(){
    createCanvas(userUpload.width, userUpload.height);
}

function draw(){
    background(0);
    image(userUpload, 0, 0);
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
            var startingIndex = (col +row * width) * 4;
            
            var r = pixels[startingIndex + 0];
            var g = pixels[startingIndex + 1];
            var b = pixels[startingIndex + 2];
            var a = pixels[startingIndex + 3];
            
            if(keyIsPressed){
                if(key=="1"){
                     grey_filter(startingIndex, r, g, b, a);
                 }
                if(key=="2"){
                     green_filter(startingIndex, r, g, b, a);
                 }
                if(key=="3"){
                     alien_filter(startingIndex, r, g, b, a);
                 }
                if(key=="4"){
                     dark_filter(startingIndex, r, g, b, a);
                 }
                if(key=="5"){
                     lighter_filter(startingIndex, r, g, b, a);
                 }
                if(key=="6"){
                     l_filter(startingIndex, r, g, b, a);
                 }
                if(key=="7"){
                     random_filter(startingIndex, r, g, b, a);
                 }
                if(key=="8"){
                     the_filter(startingIndex, r, g, b, a);
                 }
            }
        }
    }
    updatePixels();
}

function grey_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = g; // Red Color
    pixels[startingIndex + 1] = g; // Green Color
    pixels[startingIndex + 2] = g; // Blue Color
    pixels[startingIndex + 3] = a; // Alpha Transparency
}

function green_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = 0; // Red Color
    pixels[startingIndex + 1] = g; // Green Color
    pixels[startingIndex + 2] = 0; // Blue Color
    pixels[startingIndex + 3] = a; // Alpha Transparency
}

function alien_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r; // Red Color
    pixels[startingIndex + 1] = b; // Green Color
    pixels[startingIndex + 2] = g; // Blue Color
    pixels[startingIndex + 3] = a; // Alpha Transparency
}

function dark_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r / 2; // Red Color
    pixels[startingIndex + 1] = g / 2; // Green Color
    pixels[startingIndex + 2] = b / 2; // Blue Color
    pixels[startingIndex + 3] = a; // Alpha Transparency
}

function lighter_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r * 2; // Red Color
    pixels[startingIndex + 1] = g * 2; // Green Color
    pixels[startingIndex + 2] = b * 2; // Blue Color
    pixels[startingIndex + 3] = a; // Alpha Transparency
}

function l_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = 255 - r; // Red Color
    pixels[startingIndex + 1] = 255 - g; // Green Color
    pixels[startingIndex + 2] = 255 - b; // Blue Color
    pixels[startingIndex + 3] = a; // Alpha Transparency
}

function random_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = g; // Red Color
    pixels[startingIndex + 1] = r - random(50, 155); // Green Color
    pixels[startingIndex + 2] = b - random(10, 15); // Blue Color
    pixels[startingIndex + 3] = a; // Alpha Transparency
}

function the_filter(startingIndex, r, g, b, a){
    if(255 >= b >= 251){
        b = random(0,255);
    }
    if(250 >= b >= 201){
        b = b + 225;
    }
    if(200 >= b >= 151){
        b = b + 175;
    }
    if(150 >= b >= 100){
        b = b + 125;
    }
    if(99 >= b >= 50){
        b = b + 75;
    }
    if(49 >= b >= 0){
        b = b + 25;
    }
    if(g < 145 || b < 15){
        r = random(0,255);
        b = b - 20;
        g = g - 20;
    }
    
    if(r < 65){
        b = random(0,255);
        r = r - 50;
        g = g - 20;
    }
    // if(g = 0){
    //     if(b = 0){
    //     r = 0;
    //     b = 80;
    //     g = 100;
    //     }
    // }
    

    pixels[startingIndex + 0] = r; // Red Color
    pixels[startingIndex + 1] = g; // Green Color
    pixels[startingIndex + 2] = b; // Blue Color8
    pixels[startingIndex + 3] = a; // Alpha Transparency
}