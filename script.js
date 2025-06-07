const indices = [2, 6, 11, 12];

moveRight(indices)

for (const i of indices) {
  board.children[i].innerText = 2;
}

function moveRight(indices) {
  for (let j = 0; j < indices.length; j++) {
    const i = indices[j]
    if (i <= 3) {
      indices[j] = 3
    } else if (i <= 7) {
      indices[j] = 7
    } else if (i <= 11) {
      indices[j] = 11
    } else {
      indices[j] = 15
    }
  }
}