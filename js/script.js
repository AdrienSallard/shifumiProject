class Shifumi {
    buttons = document.querySelectorAll('button')
    resultDom = document.querySelector('#resultat')
    result = {}

    gameStart () {
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].addEventListener('click', () => {
                const player = this.buttons[i].innerHTML;
                const opponent = this.buttons[Math.floor(Math.random() * this.buttons.length)].innerHTML;
                console.log(player)
                console.log(opponent)
                if (player === opponent) {
                    this.onEquality(player, opponent)
                } else if ((player === "Pierre" && opponent === "Ciseaux") || (player === "Feuille" && opponent === "Pierre") || (player === "Ciseaux" && opponent === "Feuille")) {
                    this.onVictory(player, opponent)
                } else {
                    this.onDefeat(player, opponent)
                }
            })
        }
    }

    addLi () {
        var li = document.createElement("li")
        var text = document.createTextNode(`${this.result.versus}, ${this.result.result}`)
        li.appendChild(text)
        document.querySelector('#resultat').appendChild(li)
    }

    onEquality (player, opponent) {
        this.result = {
            versus: `${player} vs ${opponent}`,
            result: 'Egalité'
        }
        this.addLi()
    }

    onVictory (player, opponent) {
        this.result = {
            versus: `${player} vs ${opponent}`,
            result: 'Victoire'
        }
        this.addLi()
    }

    onDefeat (player, opponent) {
        this.result = {
            versus: `${player} vs ${opponent}`,
            result: 'Défaite'
        }
        this.addLi()
    }
}

var newGame = new Shifumi()
newGame.gameStart()


