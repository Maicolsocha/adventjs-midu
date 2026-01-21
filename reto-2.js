const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]

function manufactureGifts(giftsToProduce) {

  if (giftsToProduce) {
    let arr = []
    giftsToProduce.forEach(gift => {
      for (let i = 0; i < gift.quantity; i++) {
        arr.push(gift.toy)
      }
    })
    return arr
  }
}



console.log(manufactureGifts(production1))




