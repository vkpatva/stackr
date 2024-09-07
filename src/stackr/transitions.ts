import { STF, Transitions } from "@stackr/sdk/machine";
import { CrissCrossState } from "./state";
import { machine } from "./machine";

const move: STF<CrissCrossState> = {
  handler: ({ inputs: { moves }, state, emit }) => {

    if (JSON.parse(moves).move != 0) {
      const prevgame = JSON.parse(machine.state).game;
      // console.log("prev state", prevgame);

      /*todo :
      1. The state which it is updating must be non - zero 
      2. If even it can update any cell 
      3. if odd fetch prev row and col & check it updating the correct state
      4. also check move id is increasing linearly
      */
      //cond : 1
      // console.log("current moves", JSON.parse(moves))
      const updatingRow = JSON.parse(moves).row;
      const updatingCol = JSON.parse(moves).col;

      const state = prevgame[updatingRow][updatingCol];
      if (state) {
        throw new Error('cannot update already filled state')
      }
      //condition 3 
      if (JSON.parse(moves).move % 2 == 1) {

      }
      const prevMove = JSON.parse(machine.state).move;
      const currentMove = JSON.parse(moves).move;
      if (currentMove != prevMove + 1) {
        throw new Error('cannot jump states')
      }
    }
    console.log("new state", moves)
    state = moves;
    emit({ name: "After Move", value: state });
    return state;
  },
};



export const transitions: Transitions<CrissCrossState> = {
  move,
};
