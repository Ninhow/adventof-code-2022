
const puzzleA = (value) => {
    return Number(value[0][0]) <= Number(value[1][0]) 
        && Number(value[0][1]) >= Number(value[1][1]) 
        || Number(value[0][0]) >= Number(value[1][0]) 
        && Number(value[0][1]) <= Number(value[1][1])
}


const puzzleB = (value) => {
    for(let i = Number(value[0][0]); i <= Number(value[0][1]); i++){
        if(i >= Number(value[1][0]) && i <= Number(value[1][1]) ) return true;
    }
    return false

}

process.stdin.on('data', function (data) {
	const sections = data.toString().split('\n');
    const test = sections.map(sectionGroups => sectionGroups.split(','))
    .map(sectionPairs => [sectionPairs[0].split('-'), sectionPairs[1].split('-')])
    .map(value => puzzleB(value))
    .filter(value => value === true)
    console.log(test.length)
});
