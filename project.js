// // 1. deposit some money
// // 2. determine no of lines to bet
// // 3. collect a bet money
// // 4. spin the slot machine
// // 5. check if user won
// // 6. if user won, add the bet money to the user's balance
// // 7. play again

// const prompt = require("prompt-sync")();

// const ROWS= 3; //global variables should be in cap
// const COLS= 3;

// const SYMBOLS_COUNT= {
//     "A":2,
//     "B":4,
//     "C":6,
//     "D":8,
// }

// const SYMBOL_VALUES = {
//     "A": 5,
//     "B": 4,
//     "C": 3,
//     "D": 2
// }
// const deposit= () => {
//     while(true){
//     const depositAmount = prompt( "enter a deposit amount: ") ; 
//     const numberDepositAmount = parseFloat(depositAmount);

//     if(isNaN(numberDepositAmount) || numberDepositAmount<=0){
//         console.log("invalid number");
//     } else{
//         return numberDepositAmount;
//     }
//     }
//     };

//     const getNumberOfLines = () => {
//         while(true){
//             const lines = prompt( "enter the number of lines to bet on(1-3): ") ; 
//             const numberOfLines = parseFloat(lines);
        
//             if(isNaN(numberOfLines) || numberOfLines<=0 || numberOfLines >3){
//                 console.log("invalid number of lines, try again");
//             } else{
//                 return numberOfLines;
//             }
//             }
//     };

//     const getBet= (balance, lines) =>{
//         while(true){
//             const bet = prompt( "enter the bet per line ") ; 
//             const numberBet = parseFloat(bet);
        
//             if(isNaN(numberBet) || numberBet<=0 || numberBet >balance/lines){
//                 console.log("invalid bet, try again");
//             } else{
//                 return numberBet;
//             }
//             }
//     };

//     const spin =  ()=> {
//         const symbols = [];
//         for (const [symbol, count] of Object.entries (SYMBOLS_COUNT)) {
//             for(let i = 0; i< count ; i++){
//                 symbols.push(symbol);
//             }
//         }
//        const reels= [];
//        for (let i = 0; i< COLS; i++){
//         reels.push([]);
//         const reelSymbols = [...symbols];
//         for(let j=0; j<ROWS;j++){
//             const randomIndex = Math.floor(Math.random()*reelSymbols.length);
//             const selectedSymbol =reelSymbols[randomIndex];
//             reels[i].push(selectedSymbol);
//             reelSymbols.splice(randomIndex,1);
//         }
//        }
//        return reels;
//     };
//     const transpose =(reels)=>{
//         const rows= [];

//         for(let i=0;i<ROWS; i++){
//             rows.push([]);
//             for(let j=0; j<COLS;j++){
//                 rows[i].push(reels[j][i]);
//             }
//         }
//         return rows;
//     };
//     const printRows= (rows)=>{
//         for(const row of rows){
//             let rowString= "";
//             for(const [i,symbol] of row.entries()){
//                 rowString += symbol;
//                 if( i!= row.length -1){
//                     rowString += " | ";
//                 }
//             }
//             console.log(rowString);
//         }
//     };
//     const getWinnings= (rows,bet,lines)=>{
//         let winnings = 0;
//         for(let row=0; row<lines;row++){
//             const symbols =rows[row];
//             let allSame= true;
//             for(const symbol of symbols){
//                 if(symbol != symbols[0]){
//                     allSame= false;
//                     break;
//                 }
//             }
//             if(allSame){
//                 winnings+= bet* SYMBOL_VALUES[symbols[0]];
//             }
//         }
//         return winnings;
// };

// const game= ()=>{
   
//     let balance = deposit();
//     while(true){
//         console.log("you have a balance of $" + balance);
//     const numberOfLines= getNumberOfLines();
//     const bet= getBet(balance, numberOfLines);
//     balance -= bet*numberOfLines;
//     const reels= spin();
//     const  rows= transpose(reels);
//     printRows(rows);
//   const winnings=getWinnings(rows,bet,numberOfLines);
//   balance+= winnings;
//   console.log("You won, $ "+ winnings.toString());
//   if(balance<=0){
//     console.log("yu ran out of money");
//     break;
//   }
//   const payAgain= prompt("Do you wanna play again?(y/n)");
//   if(payAgain!="y")break;
// }
// };
// game();
const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
};

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
};

const deposit = () => {
    const depositAmount = parseFloat(document.getElementById('deposit').value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Invalid deposit amount.");
        return null;
    }
    return depositAmount;
};

const getNumberOfLines = () => {
    const numberOfLines = parseInt(document.getElementById('lines').value);
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
        alert("Invalid number of lines.");
        return null;
    }
    return numberOfLines;
};

const getBet = (balance, lines) => {
    const bet = parseFloat(document.getElementById('bet').value);
    if (isNaN(bet) || bet <= 0 || bet > balance / lines) {
        alert("Invalid bet amount.");
        return null;
    }
    return bet;
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows = [];
    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
};

const printRows = (rows) => {
    const reelElements = document.querySelectorAll('.reel');
    rows.forEach((row, index) => {
        reelElements[index].textContent = row.join(' | ');
    });
};

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;
        for (const symbol of symbols) {
            if (symbol !== symbols[0]) {
                allSame = false;
                break;
            }
        }
        if (allSame) {
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
    }
    return winnings;
};

document.getElementById('spin-button').addEventListener('click', () => {
    let balance = deposit();
    if (balance === null) return;

    const numberOfLines = getNumberOfLines();
    if (numberOfLines === null) return;

    const bet = getBet(balance, numberOfLines);
    if (bet === null) return;

    balance -= bet * numberOfLines;
    const reels = spin();
    const rows = transpose(reels);
    printRows(rows);

    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;

    document.getElementById('balance-display').textContent = `Balance: ₹${balance}`;
    document.getElementById('winnings-display').textContent = `You won:  ₹${winnings}`;

    if (balance <= 0) {
        alert("You ran out of money!");
    }
});

 