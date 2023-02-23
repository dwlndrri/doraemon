let j;
function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    y = 170;
    y2 = 200;
    y3 = 210;
    y4 = 220;
    y5 = 245;
    y6 = 325;
    j = 0;
}

function windowResized() { 
    resizeCanvas(windowWidth, windowHeight); 
} 


function draw() {
    // put drawing code here
    background(20) 
    stroke(255,255,255) 
    strokeWeight(4); 
    line(windowWidth/2, 0, windowWidth/2, windowHeight)


    //Gambar bergerak
    //kepala
    strokeWeight(3);
    fill(0,0,255);
    stroke(0,0,0);
    arc(350+windowHeight,250,250,255,(130*PI)/180,(410*PI)/180);
    fill(255,255,255);
    arc(350+windowHeight,270,210,200,(130*PI)/180,(410*PI)/180);

    fill(255,255,255);
    noStroke();
    rect(283+windowHeight,300,135,50);

    //mata kiri
    var y = 170 + 10 * Math.cos(PI/60*j)
    j+=1
    fill(255,255,255);
    stroke(0,0,0);
    ellipse (330+windowHeight,y, 50, 60); 
    fill(0,0,0);
    strokeWeight(15);
    point(340+windowHeight,y);

    //mata kanan
    var y = 170 + 10 * Math.sin(PI/60*j)
    j+=1
    strokeWeight(3);
    fill(255,255,255);
    ellipse (385+windowHeight,y, 50, 60);
    fill(0,0,0);
    strokeWeight(15);
    point(375+windowHeight,5+y);

    //hidung
    strokeWeight(3);
    fill(255,0,0);
    ellipse(357+windowHeight,200,25,20);
    line(356+windowHeight,210,356+windowHeight,245);

    //mulut
    var y5 = 245 + 2 * Math.sin(PI/70*j)
    j+=1
    var y6 = 325 + 3 * Math.sin(PI/70*j)
    j+=1
    arc(350+windowHeight,y5,140,180,(0*PI)/180,(180*PI)/180);
    arc(350+windowHeight,y6,140,115,(215*PI)/180,(325*PI)/180);
    line(280+windowHeight,y5,420+windowHeight,y5);

    //kumis kiri
    var y2 = 210 + 10 * Math.sin(PI/60*j)
    j+=1
    line(330+windowHeight,210,290+windowHeight,y2);
    var y3 = 220 + 10 * Math.sin(PI/60*j)
    j+=1
    line(330+windowHeight,220,290+windowHeight,y3);
    var y4 = 230 + 10 * Math.sin(PI/60*j)
    j+=1
    line(330+windowHeight,230,290+windowHeight,y4);

    //kumis kanan
    var y2 = 210 + 10 * Math.sin(PI/60*j)
    j+=1
    line(378+windowHeight,210,418+windowHeight,y2);
    var y3 = 220 + 10 * Math.sin(PI/60*j)
    j+=1
    line(378+windowHeight,220,418+windowHeight,y3);
    var y3 = 230 + 10 * Math.sin(PI/60*j)
    j+=1
    line(378+windowHeight,230,418+windowHeight,y4);

    //choker
    strokeWeight(9);
    stroke(255,0,0);
    line(255+windowHeight,345,445+windowHeight,345);

    //lonceng
    fill(255,255,0);
    strokeWeight(3);
    stroke(0,0,0);
    ellipse(350+windowHeight,358,25,25);
    ellipse(350+windowHeight,365,10,10);
    arc(350+windowHeight,356,25,10,(180*PI)/180,(360*PI)/180);
    arc(350+windowHeight,360,25,10,(180*PI)/180,(360*PI)/180);


    //Gambar Diam
    //kepala
    strokeWeight(3);
    fill(0,0,255);
    stroke(0,0,0);
    arc(350,250,250,255,(130*PI)/180,(410*PI)/180);
    fill(255,255,255);
    arc(350,270,210,200,(130*PI)/180,(410*PI)/180);

    fill(255,255,255);
    noStroke();
    rect(283,300,135,50);

    //mata kiri
    fill(255,255,255);
    stroke(0,0,0);
    ellipse (330,170, 50, 60); 
    fill(0,0,0);
    strokeWeight(15);
    point(340,180);

    //mata kanan
    strokeWeight(3);
    fill(255,255,255);
    ellipse (385,170, 50, 60);
    fill(0,0,0);
    strokeWeight(15);
    point(375,180);

    //hidung
    strokeWeight(3);
    fill(255,0,0);
    ellipse(357,200,25,20);
    line(356,210,356,245);

    //mulut
    arc(350,245,140,180,(0*PI)/180,(180*PI)/180);
    arc(350,325,140,115,(215*PI)/180,(325*PI)/180);
    line(280,245,420,245);

    //kumis kiri
    line(330,210,290,200);
    line(330,220,290,210);
    line(330,230,290,220);

    //kumis kanan
    line(378,210,418,200);
    line(378,220,418,210);
    line(378,230,418,220);

    //choker
    strokeWeight(9);
    stroke(255,0,0);
    line(255,345,445,345);

    //lonceng
    fill(255,255,0);
    strokeWeight(3);
    stroke(0,0,0);
    ellipse(350,358,25,25);
    ellipse(350,365,10,10);
    arc(350,356,25,10,(180*PI)/180,(360*PI)/180);
    arc(350,360,25,10,(180*PI)/180,(360*PI)/180);
}