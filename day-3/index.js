const getItemCharCode = (compartmentA, compartmentB) => {
	for (let i = 0; i < compartmentA.length; i++) {
		if (compartmentB.includes(compartmentA[i])) {
			const letter = compartmentA[i];
			return letter === letter.toUpperCase()
				? letter.charCodeAt(0) - 38
				: letter.charCodeAt(0) - 96;
		}
	}
};

const getItemCharCode2 = (itemsListA, itemsListB, itemsListC) => {
	for (let i = 0; i < itemsListA.length; i++) {
		if (
			itemsListB.includes(itemsListA[i]) &&
			itemsListC.includes(itemsListA[i])
		) {
			const letter = itemsListA[i];
			return letter === letter.toUpperCase()
				? letter.charCodeAt(0) - 38
				: letter.charCodeAt(0) - 96;
		}
	}
};

process.stdin.on('data', function (data) {
	const rucksack = data.toString().split('\n');
	const puzzleA = rucksack
		.map(items => [
			[...items.substring(0, items.length / 2)],
			[...items.substring(items.length / 2, items.length)],
		])
		.map(compartments => getItemCharCode(compartments[0], compartments[1]))
		.reduce((accumulator, value) => accumulator + value, 0);

	const puzzleB = rucksack
		.reduce((accumulator, currentValue, currentIndex, array) => {
			if (currentIndex % 3 === 0) {
				accumulator.push(array.slice(currentIndex, currentIndex + 3));
			}
			return accumulator;
		}, [])
		.map(group =>
			getItemCharCode2([...group[0]], [...group[1]], [...group[2]])
		)
		.reduce((accumulator, value) => accumulator + value, 0);

	console.log(puzzleA);
	console.log(puzzleB);
});
