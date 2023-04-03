const avgTemps = [-40, 50, 18, 15];

const expressions = [
	{ min: -Infinity, max: -4, image: "very-cold-weather-image.png", alt: "Very Cold Weather" },
	{ min: -4, max: 4, image: "cold-weather-image.png", alt: "Cold Weather" },
	{ min: 4, max: 10, image: "cool-weather-image.png", alt: "Cool Weather" },
	{ min: 10, max: 20, image: "warm-weather-image.png", alt: "Warm Weather" },
	{ min: 20, max: Infinity, image: "hot-weather-image.png", alt: "Hot Weather" },
];

let html = '';

for (let i = 0; i < avgTemps.length; i++) {
	const avgTemp = avgTemps[i];
	let expression1 = '';
	let expression2 = '';
	let expression3 = '';

	for (let j = 0; j < expressions.length; j++) {
		const { min, max, image } = expressions[j];

		if (avgTemp >= min && avgTemp <= max) {
			if (i === 0) {
				expression1 = `./img/${image}`;
			} else if (i === 1) {
				expression2 = `./img/${image}`;
			} else if (i === 2) {
				expression3 = `./img/${image}`;
			}
		}
	}

	html += `<div class="card">
				<div class="location">
					<img src="${expression1}" >
				</div>
			</div>
			<img src="${expression2}" >
			<div class="block23">
				<div class="bear">
					<img src="${expression3}" >
				</div>
			</div>`;
}

document.body.innerHTML = html;

 