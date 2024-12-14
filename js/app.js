class Game {
    constructor() {
        this.countDisplay = document.getElementById('countDisplay')
        this.gameBoard = document.getElementById('gameBoard')
        this.count = 0
        this.colors = [
            'red', 'blue', 'yellow', 'green', 'purple', 'orange', 'brown', 'gray', 'pink',
        ]
        
        this.boxes = [
            {
                id: 1,
                color: 'red',
            },
            {
                id: 2,
                color: 'blue'
            },
            {
                id: 3,
                color: 'yellow'
            },
            {
                id : 4,
                color: 'green'
            },
            {
                id : 5,
                color: 'purple'
            },
            {
                id : 6,
                color: 'orange'
            },
            {
                id : 7,
                color: 'brown'
            },
            {
                id : 8,
                color: 'gray'
            },
            {
                id : 9,
                color: 'pink'
            },
        ]
    }
    
    init() {
        // console.log('initalized')
        this.makeBoxes()
    }
    makeBoxes() {
        this.boxes.forEach(item => {
            const box = document.createElement('div')
            box.classList.add('box')
            box.setAttribute('id', `box-${item.id}`)
            box.style.backgroundColor = item.color
            box.style.width = '200px'
            box.style.height = '200px'
            this.placeOnBoard(box)
            this.handleClick(box)
        })
    }
    placeOnBoard(item) {
        this.gameBoard.appendChild(item)
    }
    handleClick(item) {
        item.addEventListener('click', ()=>{
            console.log(item.style.backgroundColor)
            this.changeColor(item, this.getRandomColor())
            this.getCount()
        })
    }
    
    getRandomColor() {
        const idx = Math.floor(Math.random() * this.colors.length)
        const randonColor = this.colors[idx]
        console.log(randonColor)
        return randonColor
    }
}
const action = new Game()
action.init()