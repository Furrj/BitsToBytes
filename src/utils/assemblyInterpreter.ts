function executeInstruction(
  instructionList: string[][],
  currentInstruction: number,
  ramReducer: any,
  instructionReducer: any,
  registerReducer: any,
  useSelector: any,
  dispatch: any
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
      switch (instructionLine[1]) {
        case "ACC":
          dispatch(registerReducer.setValue(instructionLine[2]));
          break;
      }
      break;
  }
}

export default executeInstruction;
