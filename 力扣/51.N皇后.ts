function solveNQueens(n: number): string[][] {
  const board: string[][] = new Array(n)
    .fill(0)
    .map((_) => new Array(n).fill("."));
  const resArr: string[][] = [];
  backtracking(n, board, 0);
  return resArr;
  function backtracking(n: number, board: string[][], row: number) {
    if (row === n) {
      resArr.push(transformBoard(board));
      return;
    }
    for (let i = 0; i < n; i++) {
      if (isValid(i, row, board)) {
        board[row][i] = "Q";
        backtracking(n, board, row + 1);
        board[row][i] = ".";
      }
    }
  }
  function isValid(col: number, row: number, board: string[][]): boolean {
    const n: number = board.length;
    if (col < 0 || col >= n || row < 0 || row >= n) return false;
    for (let row of board) {
      if (row[col] === "Q") return false;
    }
    let x: number = col;
    let y: number = row;
    while (y >= 0 && x < n) {
      if (board[y--][x++] === "Q") return false;
    }
    // 检查135度方向
    x = col;
    y = row;
    while (x >= 0 && y >= 0) {
      if (board[y--][x--] === "Q") return false;
    }
    return true;
  }
  function transformBoard(board: string[][]): string[] {
    const resArr: string[] = [];
    for (let i of board) {
      resArr.push(i.join(""));
    }
    return resArr;
  }
}
