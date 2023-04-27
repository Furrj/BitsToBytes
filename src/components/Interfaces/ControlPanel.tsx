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

  const nodeRef: React.MutableRefObject<null> = React.useRef(null);

  const instructionList: string[][] = useSelector(
    (state: RootState) => state.instructions.instructions
  );

  const ramValues: number[] = useSelector((state: RootState) => state.ram.data);
  const address: number = useSelector(
    (state: RootState) => state.ram.currentAddress
  );
  const accValue: number = useSelector(
    (state: RootState) => state.register.value
  );
  const dispatch = useDispatch();

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function instructions(): void {
    console.log(instructionList);
  }

  return (
    <Draggable nodeRef={nodeRef}>
      <div className={styles.controlPanel} ref={nodeRef}>
        <div className={styles.title}>Control Panel</div>
        <div className={styles.panelCont}>
          <div className={styles.addressBox}>
            <div className={styles.boxTitle}>Address</div>
            <input
              type="number"
              name="address"
              id="address"
              onChange={inputHandler}
              value={input.address}
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
              value={input.value}
            />
            <button
              onClick={() =>
                dispatch(ramReducer.setValue([input.address, input.value]))
              }
            >
              Set
            </button>
            <div className={styles.currentValue}>{ramValues[address]}</div>
          </div>
          <div className={styles.accumulatorBox}>
            <div className={styles.boxTitle} style={{ marginLeft: "2px" }}>
              Accumulator
            </div>
            <button onClick={() => dispatch(setValue(ramValues[address]))}>
              Load
            </button>
            <button
              onClick={() => dispatch(ramReducer.setValue([address, accValue]))}
            >
              Store
            </button>
            <button onClick={instructions}>Instructions</button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default ControlPanel;
