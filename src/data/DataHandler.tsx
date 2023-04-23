class DataHandler {
  ramData: number[];

  constructor() {
    this.ramData = [];
    this.initRamData();
  }

  initRamData(): void {
    for (let i = 0; i < 20; i++) {
      this.ramData[i] = 0;
    }
  }

  setRamData(address: number, updateValue: number): void {
    this.ramData[address] = updateValue;
  }

  getRamData(): number[] {
    return this.ramData;
  }
}

export default DataHandler;
