process.stdin.on('data', function (data) {
    const elfsCalories = data.toString().split("\n\n");
    let highestCalorieCount = 0
    elfsCalories.forEach((elf)=>{
        const sum = elf.split('\n').reduce((partialSum, value) => partialSum + (+value), 0)
        if( highestCalorieCount < sum ){
            highestCalorieCount = sum;
        }
    })
    console.log(highestCalorieCount)
});
