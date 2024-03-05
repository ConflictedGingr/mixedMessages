function generateRandomNumber(num) {
	// Gets number from 0 -> num -1
	return Math.floor(Math.random() * num);
}

// creates array for the nations

const collectiveNations = {
	nationName: ["Fire", "Water", "Air", "Earth"],
	elementBender: ["a bender", "not a bender"],
	nationWar: ["Fire Nation", "Water Nation", "Air Nation", "Earth Nation"],
	advice: ["seek refuge", "blend in", "fight your enemies"],
};

// stor the 'Nation' in an array
let personalNation = [];

// Iterate over the object
for (let prop in collectiveNations) {
	let optIdx = generateRandomNumber(collectiveNations[prop]);

	// Use the object's properties to generate the messaged given to personalNation
	switch (prop) {
		case "nationName":
			personalNation.push(`You are in the ${collectiveNations[prop][optIdx]}.`);
			break;
		case "elementBender":
			personalNation.push(`You are ${collectiveNations[prop][optIdx]}.`);
			break;
		case "nationWar":
			personalNation.push(
				`Your nation is at war with the ${collectiveNations[prop][optIdx]}.`
			);
			break;
		case "advice":
			personalNation.push(
				`You should ${collectiveNations[prop][optIdx]} to survive.`
			);
			break;
		default:
			personalNation.push("There is not enough information available.");
	}
}

function formatNation(nation) {
	const formatted = personalNation.join("\n");
	console.log(formatted);
}

formatNation(personalNation);
