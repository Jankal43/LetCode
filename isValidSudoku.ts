function isValidSudoku(board) {
    let box: number[][][] = [];

    for (let i = 0; i < 3; i++) {
        box[i] = [];
        for (let j = 0; j < 3; j++) {
            box[i][j] = [];
            for (let k = 0; k < 9; k++) {
                box[i][j][k] = 0;
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        let rows = {}
        let cols = {}

        for (let j = 0; j < board[i].length; j++) {
            if(board[i][j] != ".") {

                let boxRow = Math.floor(i / 3);
                let boxCol = Math.floor(j / 3);

                if (box[boxRow][boxCol][board[i][j]]) {
                    return false;
                } else {
                    box[boxRow][boxCol][board[i][j]] = 1;
                }


                if(rows[board[i][j]]) {
                    return false
                }else {
                    rows[board[i][j]] = 1;
                }
            }
            if(board[j][i] != "."){
                if(cols[board[j][i]]) {
                    return false
                }else {
                    cols[board[j][i]] = 1;
                }
            }

        }

    }
    return true
}

let board =
        [["1","2",".",".","3",".",".",".","."],
        ["4","1",".","5",".",".",".",".","."],
        [".","9","8",".",".",".",".",".","3"],
        ["5",".",".",".","6",".",".",".","4"],
        [".",".",".","8",".","3",".",".","5"],
        ["7",".",".",".","2",".",".",".","6"],
        [".",".",".",".",".",".","2",".","."],
        [".",".",".","4","1","9",".",".","8"],
        [".",".",".",".","8",".",".","7","9"]]


console.log(isValidSudoku(board));
