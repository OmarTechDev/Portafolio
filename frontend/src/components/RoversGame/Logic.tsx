const Next = (D:string,move:string) => {
  const cardinal = ['N','E','S','W']
  const index = cardinal.indexOf(D)
  if (move === 'R') {
    if(index === 3) {
      return cardinal[0]
    } else return cardinal[index + 1]
  } else {
    if(index === 0) {
      return cardinal[3]
    } else {
      return cardinal[index -1]
    }
  }
}

export const Logic = (initial:string, movement:string, size:string) => {

  let width = 0
  let height = 0
  let x = 0
  let y = 0
  let d = 'xa'

  if(size !==" " && initial!==""){
    const boardSize = size.split(" ")
    width = parseInt(boardSize[0])
    height = parseInt(boardSize[1])

    const initialPosition = initial.split(" ");
    x = parseInt(initialPosition[0], 10)
    y = parseInt(initialPosition[1], 10)
    d = initialPosition[2]
  }

  const movementCorrected = movement.replace(/\s/g, "")

  for(let i = 0; i < movementCorrected.length; i++) {
    const letter = movementCorrected[i]
    if (letter ==='L' || letter === 'R' ) {
      d = Next(d,letter)
    } else {
      if (d === 'N' && y < height) { y++ }
      if (d === 'S' && y > 0) { y-- }
      if (d === 'E' && x < width) { x++ }
      if (d === 'W' && x > 0) { x-- }
    }
  }
  return (`${x} ${y} ${d}`)
}
