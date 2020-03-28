//namespace the engine , world and the bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//create the variable for engine and world
var engine, world;

//create the vaiables for raindrops
var raindrop1;
var raindrop2;
var raindrop3;
var raindrop4;
var raindrop5;
var raindrop6;
var raindrop7;
var raindrop8;
var raindrop9;
var raindrop10;
var raindrop11;
var raindrop12;
var raindrop13;
var raindrop14;
var raindrop15;
var raindrop16;
var raindrop17;
var raindrop18;
var raindrop19;
var raindrop20;
var raindrop21;
var raindrop22;
var raindrop23;
var raindrop24;
var raindrop25;
var raindrop26;
var raindrop27;
var raindrop28;
var raindrop29;
var raindrop30;
var raindrop31;
var raindrop32;
var raindrop33;
var raindrop34;
var raindrop35;
var raindrop36;
var raindrop37;
var raindrop38;
var raindrop39;
var raindrop40;
var raindrop41;
var raindrop42;
var raindrop43;
var raindrop44;
var raindrop45;
var raindrop46;
var raindrop47;
var raindrop48;
var raindrop49;
var raindrop50;
var raindrop51;
var raindrop52;
var raindrop53;
var raindrop54;
var raindrop55;
var raindrop56;
var raindrop57;
var raindrop58;
var raindrop59;
var raindrop60;
var raindrop61;
var raindrop62;
var raindrop63;
var raindrop64;
var raindrop65;
var raindrop66;
var raindrop67;
var raindrop68;
var raindrop69;
var raindrop70;
var raindrop71;
var raindrop72;
var raindrop73;
var raindrop74;
var raindrop75;
var raindrop76;
var raindrop77;
var raindrop78;
var raindrop79;
var raindrop80;






function setup() {

  //create the canvas
  createCanvas(800, 400);

  //create our own engine
  engine = Engine.create();

  //create the world
  world = engine.world;

  //create all the raindrops by calling the class functions
  raindrop1 = new Raindrop(400, -100, 10, 40);
  raindrop9 = new Raindrop(100, -50, 10, 35);
  raindrop10 = new Raindrop(200, -150, 10, 30);
  raindrop11 = new Raindrop(300, -600, 10, 40);
  raindrop12 = new Raindrop(150, -220, 10, 45);
  raindrop13 = new Raindrop(500, -897, 10, 30);
  raindrop14 = new Raindrop(600, -800, 10, 40);
  raindrop15 = new Raindrop(700, -420, 10, 40);
  raindrop16 = new Raindrop(800, -550, 10, 25);
  raindrop17 = new Raindrop(250, -350, 10, 20);


  raindrop2 = new Raindropgreen(50, -100, 10, 40);
  raindrop18 = new Raindropgreen(100, -441, 10, 50);
  raindrop19 = new Raindropgreen(140, -256, 10, 40);
  raindrop20 = new Raindropgreen(200, -876, 10, 40);
  raindrop21 = new Raindropgreen(250, -660, 10, 30);
  raindrop22 = new Raindropgreen(300, -180, 10, 35);
  raindrop23 = new Raindropgreen(350, -210, 10, 25);
  raindrop24 = new Raindropgreen(395, -997, 10, 20);
  raindrop25 = new Raindropgreen(234, -340, 10, 40);
  raindrop26 = new Raindropgreen(123, -400, 10, 35);



  raindrop3 = new Raindropblue(25, -50, 10, 30);
  raindrop27 = new Raindropblue(50, -260, 10, 40);
  raindrop28 = new Raindropblue(100, -750, 10, 50);
  raindrop29 = new Raindropblue(150, -650, 10, 35);
  raindrop30 = new Raindropblue(175, -870, 10, 40);
  raindrop31 = new Raindropblue(200, -950, 10, 40);
  raindrop32 = new Raindropblue(234, -445, 10, 45);
  raindrop33 = new Raindropblue(345, -532, 10, 20);
  raindrop34 = new Raindropblue(321, -345, 10, 25);
  raindrop35 = new Raindropblue(387, -234, 10, 30);


  raindrop4 = new Raindropyellow(300, -100, 10, 50);
  raindrop36 = new Raindropyellow(321, -321, 10, 50);
  raindrop37 = new Raindropyellow(189, -213, 10, 40);
  raindrop38 = new Raindropyellow(278, -435, 10, 40);
  raindrop39 = new Raindropyellow(387, -770, 10, 30);
  raindrop40 = new Raindropyellow(125, -614, 10, 35);
  raindrop41 = new Raindropyellow(256, -965, 10, 26);
  raindrop42 = new Raindropyellow(21, -876, 10, 21);
  raindrop43 = new Raindropyellow(50, -590, 10, 30);
  raindrop44 = new Raindropyellow(332, -20, 10, 40);


  raindrop5 = new Raindroppink(500, -1000, 10, 50);
  raindrop45 = new Raindroppink(650, -1200, 10, 40);
  raindrop46 = new Raindroppink(600, -220, 10, 35);
  raindrop47 = new Raindroppink(550, -345, 10, 30);
  raindrop48 = new Raindroppink(700, -433, 10, 45);
  raindrop49 = new Raindroppink(376, -634, 10, 32);
  raindrop50 = new Raindroppink(456, -780, 10, 23);
  raindrop51 = new Raindroppink(233, -856, 10, 46);
  raindrop52 = new Raindroppink(149, -591, 10, 44);
  raindrop53 = new Raindroppink(78, -411, 10, 40);




  raindrop6 = new Raindroppurple(650, -80, 10, 20);
  raindrop54 = new Raindroppurple(150, -1100, 10, 25);
  raindrop55 = new Raindroppurple(350, -280, 10, 40);
  raindrop56 = new Raindroppurple(450, -480, 10, 50);
  raindrop57 = new Raindroppurple(750, -340, 10, 45);
  raindrop58 = new Raindroppurple(200, -560, 10, 30);
  raindrop59 = new Raindroppurple(50, -900, 10, 35);
  raindrop60 = new Raindroppurple(550, -650, 10, 30);
  raindrop61 = new Raindroppurple(276, -700, 10, 30);
  raindrop62 = new Raindroppurple(10, -844, 10, 30);


  raindrop7 = new Raindroporange(700, -60, 10, 20);
  raindrop63 = new Raindroporange(735, -1220, 10, 25);
  raindrop64 = new Raindroporange(143, -190, 10, 40);
  raindrop65 = new Raindroporange(345, -240, 10, 50);
  raindrop66 = new Raindroporange(67, -688, 10, 35);
  raindrop67 = new Raindroporange(660, -360, 10, 30);
  raindrop68 = new Raindroporange(549, -470, 10, 40);
  raindrop69 = new Raindroporange(499, -756, 10, 30);
  raindrop70 = new Raindroporange(618, -439, 10, 40);
  raindrop71 = new Raindroporange(775, -533, 10, 45);


  raindrop8 = new Raindropwhite(790, -450, 10, 40);
  raindrop72 = new Raindropwhite(690, -130, 10, 40);
  raindrop73 = new Raindropwhite(590, -222, 10, 30);
  raindrop74 = new Raindropwhite(490, -787, 10, 30);
  raindrop75 = new Raindropwhite(390, -689, 10, 35);
  raindrop76 = new Raindropwhite(290, -590, 10, 35);
  raindrop77 = new Raindropwhite(190, -1090, 10, 50);
  raindrop78 = new Raindropwhite(90, -910, 10, 20);
  raindrop79 = new Raindropwhite(455, -810, 10, 27);
  raindrop80 = new Raindropwhite(135, -500, 10, 40);





}

function draw() {

  //clear the background
  background(0);

  //update the engine
  Engine.update(engine);

  //display all the raindrops
  raindrop1.display();
  raindrop2.display();
  raindrop3.display();
  raindrop4.display();
  raindrop5.display();
  raindrop6.display();
  raindrop7.display();
  raindrop8.display();
  raindrop9.display();
  raindrop10.display();
  raindrop11.display();
  raindrop12.display();
  raindrop13.display();
  raindrop14.display();
  raindrop15.display();
  raindrop16.display();
  raindrop17.display();
  raindrop18.display();
  raindrop19.display();
  raindrop20.display();
  raindrop21.display();
  raindrop22.display();
  raindrop23.display();
  raindrop24.display();
  raindrop25.display();
  raindrop26.display();
  raindrop27.display();
  raindrop28.display();
  raindrop29.display();
  raindrop30.display();

  raindrop31.display();
  raindrop32.display();
  raindrop33.display();
  raindrop34.display();
  raindrop35.display();
  raindrop36.display();
  raindrop37.display();

  raindrop38.display();
  raindrop39.display();
  raindrop40.display();
  raindrop41.display();
  raindrop42.display();
  raindrop43.display();
  raindrop44.display();
  raindrop45.display();
  raindrop46.display();
  raindrop47.display();
  raindrop48.display();
  raindrop49.display();
  raindrop50.display();
  raindrop51.display();

  raindrop52.display();
  raindrop53.display();
  raindrop54.display();
  raindrop55.display();
  raindrop56.display();
  raindrop57.display();
  raindrop58.display();
  raindrop59.display();

  raindrop60.display();

  raindrop61.display();
  raindrop62.display();
  raindrop63.display();
  raindrop64.display();
  raindrop65.display();
  raindrop66.display();
  raindrop67.display();
  raindrop68.display();
  raindrop69.display();
  raindrop70.display();
  raindrop71.display();
  raindrop72.display();
  raindrop73.display();
  raindrop74.display();
  raindrop75.display();
  raindrop76.display();
  raindrop77.display();
  raindrop78.display();
  raindrop79.display();
  raindrop80.display();




}