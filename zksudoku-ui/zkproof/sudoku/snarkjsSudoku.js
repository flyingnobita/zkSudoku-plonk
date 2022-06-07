import { exportCallDataPlonk } from "../snarkjsZkproof";

export async function sudokuCalldata(unsolved, solved) {
  const input = {
    unsolved: unsolved,
    solved: solved,
  };

  let dataResult;

  try {
    dataResult = await exportCallDataPlonk(
      input,
      "/zkproof/sudoku.wasm",
      "/zkproof/sudoku_final.zkey"
    );
  } catch (error) {
    console.log(error);
    window.alert("Wrong answer");
  }

  return dataResult;
}
