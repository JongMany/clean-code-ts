{
  // AS-IS
  const theList: number[][] = [];
  function getThem(): number[][] {
    const list1: number[][] = [];
    for (const x of theList) {
      if (x[0] === 4) {
        list1.push(x);
      }
    }
    return list1;
  }
}

{
  // TO-BE
  const gameBoard: number[][] = [];
  const STATUS_VALUE = 0;
  const FLAGGED = 4;

  const getFlaggedCells = () => {
    const flaggedCells: number[][] = [];
    for (const cell of gameBoard) {
      if (cell[STATUS_VALUE] === FLAGGED) {
        flaggedCells.push(cell);
      }
    }
    return flaggedCells;
  };
}

{
  // REFACTOR
  interface ICell {
    isFlagged: () => boolean;
    value: number[];
  }

  // TO-BE
  const gameBoard: ICell[] = [];
  const STATUS_VALUE = 0;
  const FLAGGED = 4;

  const getFlaggedCells = () => {
    const flaggedCells: ICell[] = [];
    for (const cell of gameBoard) {
      if (cell.isFlagged()) {
        flaggedCells.push(cell);
      }
    }
    return flaggedCells;
  };
}
