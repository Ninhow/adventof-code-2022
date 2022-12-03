const scoreA = {
    A: 1, //Rock
    B: 2, //Paper
    C: 3  //Scissors
}

const scoreB = {
    X: 1, //Rock
    Y: 2, //Paper
    Z: 3, //Scissors
}

const bonusPoints = {
    win: 6,
    loss: 0,
    equal: 3
}

const puzzleA = (playerA, playerB) => {
    if ((scoreB[playerB] - scoreA[playerA] === 1) || (scoreB[playerB] - scoreA[playerA] === -2)) {
        return bonusPoints.win + scoreB[playerB]
    }

    return scoreB[playerB] - scoreA[playerA] === 0 ? bonusPoints.equal + scoreB[playerB] : bonusPoints.loss + scoreB[playerB];
}

const puzzleB = (playerA, playerB) => {
    if (playerB === 'Z') {
        return bonusPoints.win + scoreB[Object.keys(scoreB)[(scoreA[playerA]) % 3]]
    }

    return playerB === 'Y' ? 
        bonusPoints.equal + scoreA[playerA] : 
        bonusPoints.loss + scoreB[Object.keys(scoreB)[(scoreA[playerA] + 1) % 3]]
}


process.stdin.on('data', function (data) {
    const matches = data.toString().split("\n");
    const [a, b] = matches
        .map((matchElement) =>
            matchElement
                .split(' ')
                .reduce((playerA, playerB) => [
                    puzzleA(playerA, playerB),
                    puzzleB(playerA, playerB)
                ])
        )
        .reduce(
            (accumulator, value) => accumulator.map((num, index) => num + value[index]),
            [0, 0]
        );


    console.log({ a, b })
});
