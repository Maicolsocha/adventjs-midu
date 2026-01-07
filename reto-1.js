const gifts1 = ['car', 'doll#arm', 'ball', '#train']

// function filterGifts(gifts) {
//   for (const [i, gift] of gifts.entries()) {
//     if (!Array.isArray(gifts) || gifts.length === 0) {
//       return []
//     } else
//       if (!gifts[i].includes("#")) {
//         filteredGifts.push(gifts[i])
//       }
//   }
//   return filteredGifts
// }

function filterGifts(gifts) {
  if (!Array.isArray(gifts)) {
    return []
  } else {
    return gifts.filter(gift => !gift.includes("#"))
  }
}

console.log(filterGifts(gifts1))