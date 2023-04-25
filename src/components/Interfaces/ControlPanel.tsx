import React, { useState } from "react";
import styles from "./ControlPanel.module.css";
import Draggable from "react-draggable";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import * as ramReducer from "../../data/ramSlice";
import { setValue } from "../../data/registerSlice";
import { RootState } from "../../data/store";

//STATE
interface IInput {
  address: number;
  value: number;
}

const initInput: IInput = {
  address: 0,
  value: 0,
};

const ControlPanel: React.FC = () => {
  const [input, setInput] = useState<IInput>(initInput);

  const values: number[] = useSelector((state: RootState) => state.ram.data);
  const address: number = useSelector(
    (state: RootState) => state.ram.currentAddress
  );
  const dispatch = useDispatch();

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  return (
    <Draggable>
      <div className={styles.controlPanel}>
        <div className={styles.title}>Control Panel</div>
        <div className={styles.panelCont}>
          <div className={styles.addressBox}>
            <div className={styles.boxTitle}>Address</div>
            <input
              type="number"
              name="address"
              id="address"
              onChange={inputHandler}
            />
            <button
              onClick={() => dispatch(ramReducer.setAddress(input.address))}
            >
              Set
            </button>
            <div className={styles.currentValue}>{address}</div>
          </div>
          <div className={styles.valueBox}>
            <div className={styles.boxTitle}>Value</div>
            <input
              type="number"
              name="value"
              id="value"
              onChange={inputHandler}
            />
            <button
              onClick={() =>
                dispatch(ramReducer.setValue([input.address, input.value]))
              }
            >
              Set
            </button>
            <div className={styles.currentValue}>{values[address]}</div>
          </div>
          <div className={styles.accumulatorBox}>
            <div className={styles.boxTitle} style={{ marginLeft: "2px" }}>
              Accumulator
            </div>
            <button onClick={() => dispatch(setValue(values[address]))}>
              Load
            </button>
            <button>Store</button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default ControlPanel;
