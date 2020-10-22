
/**
 * This function is going to be used to take the updated objects and then draw them on the map.
 * @param snake The snake that will be drawn
 * @param gameMap The map element that the snake will be drawn in
 */
export function snakeDraw(snake,gameMap){
    const x = 0
    const y = 1
    let num = 0

    console.log(snake.body)
    snake.body.forEach(part => {
        // part[y] = null
        // part[x] = null
        console.log(num)
        console.log(part[y])
        const currentSnake = document.createElement('div'); // makes a div for our snake
        currentSnake.style.gridRowStart = part[y]; // creates snake at y = part[1]
        currentSnake.style.gridColumnStart = part[x]; // creates snake at x = part[0] 
        currentSnake.classList.add('snake'); // this adds the stylings to our snake div
        gameMap.appendChild(currentSnake); // this adds a snake div as a child node
        num = num + 1
    })
}

export function foodDraw(myFood,gameMap){
    const x = 0
    const y = 1

    myFood.foodAll.forEach(food => {
        const currentFood = document.createElement('div'); // makes a div for our food
        currentFood.style.gridRowStart = food.getFoodLocation()[y]; // creates food at y = part[1]
        currentFood.style.gridColumnStart = food.getFoodLocation()[x]; // creates food at x = part[0]
        currentFood.classList.add('food'); // this adds the stylings to our food div
        gameMap.appendChild(currentFood); // this adds a food div as a child node
    })
}

