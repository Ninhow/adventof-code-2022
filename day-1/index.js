process.stdin.on('data', function (data) {
    const partitionedData = data.toString().split("\n\n");
    const sortedElfsByCalories = partitionedData.map((elfCalories) => 
        elfCalories.split('\n')
            .reduce((partialSum, value) => partialSum + (+value), 0)
    ).sort((a, b) => a - b)
    printAnswer(sortedElfsByCalories)
});

const printAnswer = (sortedElfs) => {
    console.log(
        `Puzzle 1: Find the Elf carrying the most Calories.
        How many total Calories is that Elf carrying? ` 
        + sortedElfs[sortedElfs.length - 1] + ' Calories'
    )
    console.log(
        `Puzzle 2: Find the top three Elves carrying the most Calories.
         How many Calories are those Elves carrying in total? `
        + (sortedElfs[sortedElfs.length - 1] + sortedElfs[sortedElfs.length - 2] + sortedElfs[sortedElfs.length - 3]) + ' Calories'
    )
}

