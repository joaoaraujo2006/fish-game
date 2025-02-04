var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);
var tubaraozin;
var peixinho;
let pontos = 0;
let TextoPontos;
let tv = 3;
let nivel = 1;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png')
    this.load.image('logo', 'assets/logo-inteli_branco.png')
    this.load.image('peixe', 'assets/peixes/peixinho_roxo.png')
    this.load.image('tubarao', 'assets/tubarao.png')
}

function create() {
    this.add.image(400, 300, 'mar')
    this.add.image(400, 525, 'logo').setScale(0.5);
    TextoPontos = this.add.text(25, 75, "Pontos: 0", {
        fontSize: '32px',
        fill: '#ffffff' 
    });
    nivelText = this.add.text(25, 25, `Level: ${nivel}`, {
        fontSize: '32px',
        fill: '#ffffff' 
    });

    this.time.addEvent({
        delay: 1000,
        callback: aumentarPontos,
        loop: true
    });
    this.time.addEvent({
        delay: 15000,
        callback: LevelUp,
        loop: true
    });

    tubaraozin = this.add.image(710, 415, 'tubarao').setScale(0.2)
    peixinho = this.add.image(400, 300, 'peixe');

    peixinho.setFlip(true, false)
    tubaraozin.setFlip(true, false)

}

function update() {

    if (colidiu = "false") {
        let pontos = 0;
        pontos = pontos + 1;

        peixinho.x = this.input.x;
        peixinho.y = this.input.y;

        
        tubaraozin.x = tubaraozin.x + tv;

        if (tubaraozin.x > 800) {
            tubaraozin.x = 0;
        }
        if (tubaraozin.x == 0) {
            tubaraozin.y = Phaser.Math.Between(0, 800);
        }

        if (Phaser.Geom.Intersects.RectangleToRectangle(peixinho.getBounds(), tubaraozin.getBounds())) {
           zerarPontos();
           zerarLevel();
        }

    }
}
function aumentarPontos() {
    pontos += 1;
    TextoPontos.setText(`Pontos: ${pontos}`);
}
function zerarPontos() {
    pontos = 0;
    TextoPontos.setText(`Pontos: ${pontos}`);
}
function LevelUp() {
    nivel += 1;
    nivelText.setText(`Level: ${nivel}`);
    tv = tv * 2
}
function zerarLevel() {
    nivel = 1;
    nivelText.setText(`Level: ${nivel}`);
    tv = 2;
}

