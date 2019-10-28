import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import dudeImg from "./assets/dude.png";
import luluImg from "./assets/shocktroopers-lulu2.png";
import musicFile from "./assets/audio/sc-money.mp3";
import { createSpeechBubble } from "./util/bubble";
import { createStrokeText } from "./util/text";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  pixelArt: true,
  scene: {
    preload: preload,
    create: create
  },
  audio: {
    disableWebAudio: true
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.audio("theme", [musicFile]);
  this.load.image("logo", logoImg);
  this.load.image("dude", dudeImg);
  this.load.image("lulu", luluImg);
}

function create() {
  const logo = this.add.image(400, 150, "logo");
  const dude = this.add.image(100, 550, "dude").setScale(2);
  const lulu = this.add.image(600, 500, "lulu");

  createSpeechBubble(
    this,
    70,
    400,
    250,
    100,
    "“And now you're a boss, too... of this pile of rubble.”"
  );

  createStrokeText(this, 100, 100, "Hello gorgeous", {
    fontFamily: "Arial Black",
    fontSize: 74,
    color: "#c51b7d"
  });

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 4000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });

  var music = this.sound.add("theme");

  music.play();
}
