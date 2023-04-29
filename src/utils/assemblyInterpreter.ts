function executeInstruction(
  instructionList: any,
  currentInstruction: any
): void {
  const instructionLine: string[] = instructionList[currentInstruction];

  switch (instructionLine[0]) {
    case "LOD":
      console.log("Load instruction");
      break;
    case "STO":
      console.log("Store instuction");
      break;
    case "ADD":
      console.log("Add instruction");
      break;
    case "MOV":
      console.log("Move instruction");
      break;
  }
}

export default executeInstruction;
