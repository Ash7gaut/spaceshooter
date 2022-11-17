/**
 * Game
 */
// paper initialization
paper.install(window);
paper.setup(canvas);


const ship1 = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship1.position = new Point(350, 100);
ship1.scale (0.9);

const ship2 = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship2.position = new Point(450, 100);
ship2.scale (0.9);

const ship3 = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship3.position = new Point(550, 100);
ship3.scale (0.9);

const ship4 = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship4.position = new Point(650, 100);
ship4.scale (0.9);

const ship5 = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship5.position = new Point(750, 100);
ship5.scale (0.9);

const ship6 = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship6.position = new Point(850, 100);
ship6.scale (0.9);

const ship7 = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship7.position = new Point(950, 100);
ship7.scale (0.9);

const ship8 = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship8.position = new Point(1050, 100);
ship8.scale (0.9);

const ship1b = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship1b.position = new Point(350, 200);
ship1b.scale (0.9);

const ship2b = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship2b.position = new Point(450, 200);
ship2b.scale (0.9);

const ship3b = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship3b.position = new Point(550, 200);
ship3b.scale (0.9);

const ship4b = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship4b.position = new Point(650, 200);
ship4b.scale (0.9);

const ship5b = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship5b.position = new Point(750, 200);
ship5b.scale ((0.9));

const ship6b = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship6b.position = new Point(850, 200);
ship6b.scale (0.9);

const ship7b = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship7b.position = new Point(950, 200);
ship7b.scale (0.9);

const ship8b = new Raster({ source: 'SpaceShooterRedux/PNG/Enemies/enemyBlack1.png'});

ship8b.position = new Point(1050, 200);
ship8b.scale (0.9);

const playerLive1 = new Raster({ source: 'SpaceShooterRedux/PNG/playerShip2_red.png'});
playerLive1.position = new Point (20, 710);
playerLive1.scale (0.4);

const playerLive2 = new Raster({ source: 'SpaceShooterRedux/PNG/playerShip2_red.png'});
playerLive2.position = new Point (60, 710);
playerLive2.scale (0.4);

const playerLive3 = new Raster({ source: 'SpaceShooterRedux/PNG/playerShip2_red.png'});
playerLive3.position = new Point (100, 710);
playerLive3.scale (0.4);

// l'image du joueur
const playerShip = new Raster({ source: 'SpaceShooterRedux/PNG/playerShip2_red.png' });
playerShip.position = new Point(742, 650);

// la zone de collision du joueur
const playerHitCircle = new Path.Circle(new Point(742, 650), 60);
// playerHitCircle.strokeColor = "red";
// playerHitCircle.strokeWidth = 1;

// je crée le groupe
const playerGroup = new Group();

// j'ajoute mes deux éléments dans le groupe
playerGroup.addChild(playerShip);
playerGroup.addChild(playerHitCircle);

// et maintenant, si je change la position du groupe, ça bougera à la fois l'image et le cercle de collision !
playerGroup.position = new Point(650, 650);

const start = new Point(290, 710);
const end = new Point(1110, 440);   
const rectangle = new Path.Rectangle(start, end);

// rectangle.strokeColor = "red";
// rectangle.strokeWidth = 1;

//deplacement player
view.onKeyDown = function (event) {
    switch (event.key) {
      case "left":
        if (playerGroup.position.x > 350){
          playerGroup.position.x -= 50
        }
        break;
        case "right":
        if (playerGroup.position.x < 1050){
          playerGroup.position.x += 50
        }
        break;
        case "up":
          if (playerGroup.position.y > 500) {
            playerGroup.position.y -= 50
          }
        break;
        case "down":
          if (playerGroup.position.y < 650) {
            playerGroup.position.y += 50;
          }
        break;
        case "space":
          laserPlayer.visible = true
          laserPlayer.position=playerGroup.position
        break;
    }
}

//audio

const audio = new Audio ('')


// laser

const laserPlayer = new Raster({ source: "SpaceShooterRedux/PNG/Lasers/laserRed01.png"});
laserPlayer.position = playerGroup.position;
laserPlayer.visible = false

view.onFrame = function () {
  laserPlayer.position.y -= 6;
};