class DataHandler {
  ramData: number[];

  constructor() {
    this.ramData = [];
  }

  setRamData(address: number, updateValue: number): void {
    this.ramData[address] = updateValue;
  }

  getRamData(): number[] {
    return this.ramData;
  }
}

export default DataHandler;
