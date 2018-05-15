makeArray(array)
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      array.push("asdf")
    } else {
      array.push("`I am ${i} strange loops.`")
    }
    //myArray.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
}

