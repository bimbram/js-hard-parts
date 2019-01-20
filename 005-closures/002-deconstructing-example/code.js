function instructionGenerator() {
  function mulplyBy2 (num) {
    return num*2;
  }
  return mulplyBy2;
}

let generatedFuc = instructionGenerator();
