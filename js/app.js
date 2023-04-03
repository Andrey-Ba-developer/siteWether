import conditions from "./conditions.js";





const apiKey = '0cbfe68a1fc24494a9b72631232103';

const header = document.querySelector('#header');
const form = document.querySelector('#form');
const input = document.querySelector('#inputCity');


const today = new Date();
const tomorrow = new Date(today);
const dayAfterTomorrow = new Date(today);
const threeDaysFromNow = new Date(today);
const fourDaysFromNow = new Date(today);
const fiveDaysFromNow = new Date(today);
const sixDaysFromNow = new Date(today);

tomorrow.setDate(today.getDate() + 1);
dayAfterTomorrow.setDate(today.getDate() + 2);
threeDaysFromNow.setDate(today.getDate() + 3);
fourDaysFromNow.setDate(today.getDate() + 4);
fiveDaysFromNow.setDate(today.getDate() + 5);
sixDaysFromNow.setDate(today.getDate() + 6);

function removeCard() {
	const prevCard = document.querySelector('.card');
	if (prevCard) prevCard.remove();
}

function showError(errorMessage) {
	const html = `<div class="card">${errorMessage}</div>`;
	header.insertAdjacentHTML('afterend', html);
}
function showCard({
	localTime, name, country,
	text0, maxtemp0, mintemp0, imgPath0, imageUrl0,
	text1, maxtemp1, mintemp1, imgPath1, imageUrl1,
	text2, maxtemp2, mintemp2, imgPath2, imageUrl2,
	text3, maxtemp3, mintemp3, imgPath3, imageUrl3,
	text4, maxtemp4, mintemp4, imgPath4, imageUrl4,
	text5, maxtemp5, mintemp5, imgPath5, imageUrl5,
	text6, maxtemp6, mintemp6, imgPath6, imageUrl6,
}) {
	const html = `<div class="card">
					<div class="location">
							<img src="./img/geo.png" alt="Location icon">
							<span>${name}, ${country}</span>
						</div>
					<div class = 'localTime'>${localTime}</div>
	
					<div class="container-main">

						<div class="weather-block">
							<div class="weather-date">
								<div class="weather-month">${formatDate(today)}</div>
								<div class="weather-day">${formatDayOfWeek(today)}</div>
							</div>
							<div class="weather-description">
								<div class="weather-info">
									<div class="weather-text">${text0}</div>
								</div>
							</div>
							<div class="weather-icon">
								<img class="weather-icon-img" src="${imgPath0}" alt="иконка погоды">
							</div>
							<div class="weather-image">
								<img class="weather-image-human" src="${imageUrl0}" alt="Человек">
							</div>
							<div class="temperature-reading-day0">
								<span>${maxtemp0}
									<span class='celsius-day'>℃</span>
								</span>
							</div>
							<div class="temperature-reading-night">
								<span>${mintemp0}
									<span class='celsius-night'>℃</span>
								</span>
							</div>



						</div>
						<div class="weather-block">
							<div class="weather-date">
								<div class="weather-month">${formatDate(tomorrow)}</div>
								<div class="weather-day">${formatDayOfWeek(tomorrow)}</div>
							</div>
							<div class="weather-description">
								<div class="weather-info">
									<div class="weather-text">${text1}</div>
								</div>
							</div>
							<div class="weather-icon">
								<img class="weather-icon-img" src="${imgPath1}" alt="иконка погоды">
							</div>
							<div class="weather-image">
								<img class="weather-image-human" src="${imageUrl1}" alt="Человек">
							</div>
							<div class="temperature-reading-day1">
								<span >${maxtemp1}
									<span class='celsius-day'>℃</span>
								</span>
							</div>
							<div class="temperature-reading-night">
								<span>${mintemp1}
									<span class='celsius-night'>℃</span>
								</span>
							</div>



						</div>
						<div class="weather-block">
							<div class="weather-date">
								<div class="weather-month">${formatDate(dayAfterTomorrow)}</div>
								<div class="weather-day">${formatDayOfWeek(dayAfterTomorrow)}</div>
							</div>
							<div class="weather-description">
								<div class="weather-info">
									<div class="weather-text">${text2}</div>
								</div>
							</div>
							<div class="weather-icon">
								<img class="weather-icon-img" src="${imgPath2}" alt="иконка погоды">
							</div>
							<div class="weather-image">
								<img class="weather-image-human" src="${imageUrl2}" alt="Человек">
							</div>
							<div class="temperature-reading-day2">
								<span>${maxtemp2}
									<span class='celsius-day'>℃</span>
								</span>
							</div>
							<div class="temperature-reading-night">
								<span>${mintemp2}
									<span class='celsius-night'>℃</span>
								</span>
							</div>



						</div>
						<div class="weather-block">
							<div class="weather-date">
								<div class="weather-month">${formatDate(threeDaysFromNow)}</div>
								<div class="weather-day">${formatDayOfWeek(threeDaysFromNow)}</div>
							</div>
							<div class="weather-description">
								<div class="weather-info">
									<div class="weather-text">${text3}</div>
								</div>
							</div>
							<div class="weather-icon">
								<img class="weather-icon-img" src="${imgPath3}" alt="иконка погоды">
							</div>
							<div class="weather-image">
								<img class="weather-image-human" src="${imageUrl3}" alt="Человек">
							</div>
							<div class="temperature-reading-day3">
								<span>${maxtemp3}
									<span class='celsius-day'>℃</span>
								</span>
							</div>
							<div class="temperature-reading-night">
								<span>${mintemp3}
									<span class='celsius-night'>℃</span>
								</span>
							</div>



						</div>
						<div class="weather-block">
							<div class="weather-date">
								<div class="weather-month">${formatDate(fourDaysFromNow)}</div>
								<div class="weather-day">${formatDayOfWeek(fourDaysFromNow)}</div>
							</div>
							<div class="weather-description">
								<div class="weather-info">
									<div class="weather-text">${text4}</div>
								</div>
							</div>
							<div class="weather-icon">
								<img class="weather-icon-img" src="${imgPath4}" alt="иконка погоды">
							</div>
							<div class="weather-image">
								<img class="weather-image-human" src="${imageUrl4}" alt="Человек">
							</div>
							<div class="temperature-reading-day4">
								<span>${maxtemp4}
									<span class='celsius-day'>℃</span>
								</span>
							</div>
							<div class="temperature-reading-night">
								<span>${mintemp4}
									<span class='celsius-night'>℃</span>
								</span>
							</div>



						</div>
						<div class="weather-block">
							<div class="weather-date">
								<div class="weather-month">${formatDate(fiveDaysFromNow)}</div>
								<div class="weather-day">${formatDayOfWeek(fiveDaysFromNow)}</div>
							</div>
							<div class="weather-description">
								<div class="weather-info">
									<div class="weather-text">${text5}</div>
								</div>
							</div>
							<div class="weather-icon">
								<img class="weather-icon-img" src="${imgPath5}" alt="иконка погоды">
							</div>
							<div class="weather-image">
								<img class="weather-image-human" src="${imageUrl5}" alt="Человек">
							</div>
							<div class="temperature-reading-day5">
								<span>${maxtemp5}
									<span class='celsius-day'>℃</span>
								</span>
							</div>
							<div class="temperature-reading-night">
								<span>${mintemp5}
									<span class='celsius-night'>℃</span>
								</span>
							</div>



						</div>
						<div class="weather-block">
							<div class="weather-date">
								<div class="weather-month">${formatDate(sixDaysFromNow)}</div>
								<div class="weather-day">${formatDayOfWeek(sixDaysFromNow)}</div>
							</div>
							<div class="weather-description">
								<div class="weather-info">
									<div class="weather-text">${text6}</div>
								</div>
							</div>
							<div class="weather-icon">
								<img class="weather-icon-img" src="${imgPath6}" alt="иконка погоды">
							</div>
							<div class="weather-image">
								<img class="weather-image-human" src="${imageUrl6}" alt="Человек">
							</div>
							<div class="temperature-reading-day6">
								<span>${maxtemp6}
									<span class='celsius-day'>℃</span>
								</span>
							</div>
							<div class="temperature-reading-night">
								<span>${mintemp6}
									<span class='celsius-night'>℃</span>
								</span>
							</div>
						</div>
					</div>
				</div>`;

	header.insertAdjacentHTML('afterend', html);





	const tempBlockDay0 = document.querySelector('.temperature-reading-day0');
	const tempBlockDay1 = document.querySelector('.temperature-reading-day1');
	const tempBlockDay2 = document.querySelector('.temperature-reading-day2');
	const tempBlockDay3 = document.querySelector('.temperature-reading-day3');
	const tempBlockDay4 = document.querySelector('.temperature-reading-day4');
	const tempBlockDay5 = document.querySelector('.temperature-reading-day5');
	const tempBlockDay6 = document.querySelector('.temperature-reading-day6');

	const minTemp = -50;
	const maxTemp = 50;
	const colors = [
		[2, 147, 250], // -50
		[10, 204, 247], // -40
		[46, 185, 217], // -30
		[74, 168, 189], // -20
		[92, 167, 184], // -15
		[101, 160, 173], // -10
		[163, 195, 201], // -5
		[237, 237, 237], // 0
		[209, 204, 186], // 3
		[207, 194, 147], // 5
		[207, 186, 114], // 8
		[212, 186, 93], // 10
		[212, 183, 80], // 15
		[212, 179, 59], // 20
		[222, 181, 33], // 25
		[235, 187, 16], // 30
		[237, 171, 2], // 40
		[237, 171, 2], // 50
	];

	const getIndex = (val) => {
		if (val <= minTemp) {
			return 0;
		} else if (val >= maxTemp) {
			return colors.length - 1;
		} else {
			return Math.floor(((val - minTemp) / (maxTemp - minTemp)) * colors.length);
		}
	};

	const interpolateColor = (val) => {
		const index = getIndex(val);
		return `rgb(${colors[index][0]}, ${colors[index][1]}, ${colors[index][2]})`;
	};



	tempBlockDay0.style.backgroundColor = interpolateColor(maxtemp0);
	tempBlockDay0.style.fontSize = '46px';
	tempBlockDay0.style.textAlign = 'center';
	tempBlockDay0.style.position = 'absolute';
	tempBlockDay0.style.bottom = '28px';
	tempBlockDay0.style.left = '0';
	tempBlockDay0.style.right = '0';
	tempBlockDay1.style.backgroundColor = interpolateColor(maxtemp1);
	tempBlockDay1.style.fontSize = '46px';
	tempBlockDay1.style.textAlign = 'center';
	tempBlockDay1.style.position = 'absolute';
	tempBlockDay1.style.bottom = '28px';
	tempBlockDay1.style.left = '0';
	tempBlockDay1.style.right = '0';
	tempBlockDay2.style.backgroundColor = interpolateColor(maxtemp2);
	tempBlockDay2.style.fontSize = '46px';
	tempBlockDay2.style.textAlign = 'center';
	tempBlockDay2.style.position = 'absolute';
	tempBlockDay2.style.bottom = '28px';
	tempBlockDay2.style.left = '0';
	tempBlockDay2.style.right = '0';
	tempBlockDay3.style.backgroundColor = interpolateColor(maxtemp3);
	tempBlockDay3.style.fontSize = '46px';
	tempBlockDay3.style.textAlign = 'center';
	tempBlockDay3.style.position = 'absolute';
	tempBlockDay3.style.bottom = '28px';
	tempBlockDay3.style.left = '0';
	tempBlockDay3.style.right = '0';
	tempBlockDay4.style.backgroundColor = interpolateColor(maxtemp4);
	tempBlockDay4.style.fontSize = '46px';
	tempBlockDay4.style.textAlign = 'center';
	tempBlockDay4.style.position = 'absolute';
	tempBlockDay4.style.bottom = '28px';
	tempBlockDay4.style.left = '0';
	tempBlockDay4.style.right = '0';
	tempBlockDay5.style.backgroundColor = interpolateColor(maxtemp5);
	tempBlockDay5.style.fontSize = '46px';
	tempBlockDay5.style.textAlign = 'center';
	tempBlockDay5.style.position = 'absolute';
	tempBlockDay5.style.bottom = '28px';
	tempBlockDay5.style.left = '0';
	tempBlockDay5.style.right = '0';
	tempBlockDay6.style.backgroundColor = interpolateColor(maxtemp6);
	tempBlockDay6.style.fontSize = '46px';
	tempBlockDay6.style.textAlign = 'center';
	tempBlockDay6.style.position = 'absolute';
	tempBlockDay6.style.bottom = '28px';
	tempBlockDay6.style.left = '0';
	tempBlockDay6.style.right = '0';












	// tempBlockDay1.style.backgroundColor = 'rgb(145 22 182)';
	// tempBlockDay1.style.fontSize = '46px';
	// tempBlockDay1.style.textAlign = 'center';


}

const formatDate = (date) => {
	const monthNames = [
		"янв", "фев", "мар", "апр", "май", "июн",
		"июл", "авг", "сен", "окт", "ноя", "дек"
	];
	const day = date.getDate();
	const monthName = monthNames[date.getMonth()];
	return `${day} ${monthName} `;
};

const formatDayOfWeek = (date) => {
	const dayOfWeekNames = [
		"Вс", "Пн", "Вт",
		"Ср", "Чт", "Пт", "Сб"
	];
	const dayOfWeekName = dayOfWeekNames[date.getDay()];

	if (dayOfWeekName === 'Вс') {
		return '<span class="sunday">' + dayOfWeekName + '</span>';
	} else if (dayOfWeekName === 'Сб') {
		return '<span class="saturday">' + dayOfWeekName + '</span>';
	} else {
		return dayOfWeekName;
	}
};

async function getWeather(city) {
	const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;
	const response = await fetch(url);
	const data = await response.json();
	console.log('data', data);
	return data;
}




form.onsubmit = async function (e) {

	e.preventDefault();

	let city = input.value.trim();

	const data = await getWeather(city);


	if (data.error) {

		removeCard();
		showError(data.error.message);

	} else {

		removeCard();

		const info0 = conditions.find((obj) => obj.code === data.forecast.forecastday[0].day.condition.code);
		const info1 = conditions.find((obj) => obj.code === data.forecast.forecastday[1].day.condition.code);
		const info2 = conditions.find((obj) => obj.code === data.forecast.forecastday[2].day.condition.code);
		const info3 = conditions.find((obj) => obj.code === data.forecast.forecastday[3].day.condition.code);
		const info4 = conditions.find((obj) => obj.code === data.forecast.forecastday[4].day.condition.code);
		const info5 = conditions.find((obj) => obj.code === data.forecast.forecastday[5].day.condition.code);
		const info6 = conditions.find((obj) => obj.code === data.forecast.forecastday[6].day.condition.code);

		// console.log('conditions', conditions);
		// console.log('info0', info0);
		// console.log(info0.languages[23]['day_text']);




		const filePath = './img/weather_icons/' + (data.current.is_day ? 'day' : 'night') + '/';

		const fileName0 = (data.current.is_day ? info0.day : info0.night) + '.png';
		const imgPath0 = filePath + fileName0;


		// console.log('info0', info0);
		// console.log('filePath', filePath);
		// console.log('fileName', fileName0);
		// console.log('imgPath0', imgPath0);
		// console.log(data.forecast.forecastday[4].day.daily_will_it_rain);
		// console.log(data.forecast.forecastday[4].day.totalsnow_cm);


		const avgTemp0 = data.forecast.forecastday[0].day.avgtemp_c;
		const avgTemp1 = data.forecast.forecastday[1].day.avgtemp_c;
		const avgTemp2 = data.forecast.forecastday[2].day.avgtemp_c;
		const avgTemp3 = data.forecast.forecastday[3].day.avgtemp_c;
		const avgTemp4 = data.forecast.forecastday[4].day.avgtemp_c;
		const avgTemp5 = data.forecast.forecastday[5].day.avgtemp_c;
		const avgTemp6 = data.forecast.forecastday[6].day.avgtemp_c;


		const rain0 = data.forecast.forecastday[0].day.daily_will_it_rain;
		const rain1 = data.forecast.forecastday[1].day.daily_will_it_rain;
		const rain2 = data.forecast.forecastday[2].day.daily_will_it_rain;
		const rain3 = data.forecast.forecastday[3].day.daily_will_it_rain;
		const rain4 = data.forecast.forecastday[4].day.daily_will_it_rain;
		const rain5 = data.forecast.forecastday[5].day.daily_will_it_rain;
		const rain6 = data.forecast.forecastday[6].day.daily_will_it_rain;

		const snow0 = data.forecast.forecastday[0].day.totalsnow_cm;
		const snow1 = data.forecast.forecastday[1].day.totalsnow_cm;
		const snow2 = data.forecast.forecastday[2].day.totalsnow_cm;
		const snow3 = data.forecast.forecastday[3].day.totalsnow_cm;
		const snow4 = data.forecast.forecastday[4].day.totalsnow_cm;
		const snow5 = data.forecast.forecastday[5].day.totalsnow_cm;
		const snow6 = data.forecast.forecastday[6].day.totalsnow_cm;





		const avgTemps = [avgTemp0, avgTemp1, avgTemp2, avgTemp3, avgTemp4, avgTemp5, avgTemp6];
		const rains = [rain0, rain1, rain2, rain3, rain4, rain5, rain6];
		const snows = [snow0, snow1, snow2, snow3, snow4, snow5, snow6,];


		console.log(
			'avgTemp', avgTemps,
			'rains', rains,
			'snows', snows);

		const images = [
			{ range: [-Infinity, 0], url: "./img/women_icons/winter.png" },
			{ range: [0, 6], url: "./img/women_icons/autumn.png" },
			{ range: [6, 8], url: "./img/women_icons/autumn2.png" },
			{ range: [8, 10], url: "./img/women_icons/heat.png" },
			{ range: [10, 12], url: "./img/women_icons/heat3.png" },
			{ range: [12, 15], url: "./img/women_icons/heat2.png" },
			{ range: [15, 18], url: "./img/women_icons/sunny.png" },
			{ range: [18, 20], url: "./img/women_icons/sunny2.png" },
			{ range: [20, Infinity], url: "./img/women_icons/sunny3.png" },
			{ range: [0.50, Infinity], url: "./img/women_icons/snow.png" },
			{ range: [0, 2], url: "./img/women_icons/rain.png" },
		];

		const getImageUrl = (avgTemp, snows, rains) => {
			let imageUrl = "";

			const temperatureImage = images.find((img) => {
				const [min, max] = img.range;
				return avgTemp >= min && avgTemp <= max;
			});

			if (snows > 0.50) {
				const snowImage = images.find((img) => img.url === "./img/women_icons/snow.png");
				imageUrl = snowImage.url;
			} else if (rains > 0) {
				const rainImage = images.find((img) => img.url === "./img/women_icons/rain.png");
				imageUrl = rainImage.url;
			} else {
				imageUrl = temperatureImage ? temperatureImage.url : "";
			}

			return imageUrl;
		};

		const imageUrl0 = getImageUrl(avgTemps[0], snows[0], rains[0]);
		const imageUrl1 = getImageUrl(avgTemps[1], snows[1], rains[1]);
		const imageUrl2 = getImageUrl(avgTemps[2], snows[2], rains[2]);
		const imageUrl3 = getImageUrl(avgTemps[3], snows[3], rains[3]);
		const imageUrl4 = getImageUrl(avgTemps[4], snows[4], rains[4]);
		const imageUrl5 = getImageUrl(avgTemps[5], snows[5], rains[5]);
		const imageUrl6 = getImageUrl(avgTemps[6], snows[6], rains[6]);








		const fileName1 = (data.current.is_day ? info1.day : info1.night) + '.png';
		const imgPath1 = filePath + fileName1;

		const fileName2 = (data.current.is_day ? info2.day : info2.night) + '.png';
		const imgPath2 = filePath + fileName2;

		const fileName3 = (data.current.is_day ? info3.day : info3.night) + '.png';
		const imgPath3 = filePath + fileName3;

		const fileName4 = (data.current.is_day ? info4.day : info4.night) + '.png';
		const imgPath4 = filePath + fileName4;

		const fileName5 = (data.current.is_day ? info5.day : info5.night) + '.png';
		const imgPath5 = filePath + fileName5;

		const fileName6 = (data.current.is_day ? info6.day : info6.night) + '.png';
		const imgPath6 = filePath + fileName6;






		const weatherData = {
			localTime: data.location.localtime,
			name: data.location.name,
			country: data.location.country,
			text0: data.current.is_day ? info0.languages[23]['day_text'] : info0.languages[23]['night_text'],
			maxtemp0: data.forecast.forecastday[0].day.maxtemp_c,
			mintemp0: data.forecast.forecastday[0].day.mintemp_c, imgPath0, imageUrl0,
			text1: data.current.is_day ? info1.languages[23]['day_text'] : info1.languages[23]['night_text'],
			maxtemp1: data.forecast.forecastday[1].day.maxtemp_c,
			mintemp1: data.forecast.forecastday[1].day.mintemp_c, imgPath1, imageUrl1,
			text2: data.current.is_day ? info2.languages[23]['day_text'] : info2.languages[23]['night_text'],
			maxtemp2: data.forecast.forecastday[2].day.maxtemp_c,
			mintemp2: data.forecast.forecastday[2].day.mintemp_c, imgPath2, imageUrl2,
			text3: data.current.is_day ? info3.languages[23]['day_text'] : info3.languages[23]['night_text'],
			maxtemp3: data.forecast.forecastday[3].day.maxtemp_c,
			mintemp3: data.forecast.forecastday[3].day.mintemp_c, imgPath3, imageUrl3,
			text4: data.current.is_day ? info4.languages[23]['day_text'] : info4.languages[23]['night_text'],
			maxtemp4: data.forecast.forecastday[4].day.maxtemp_c,
			mintemp4: data.forecast.forecastday[4].day.mintemp_c, imgPath4, imageUrl4,
			text5: data.current.is_day ? info5.languages[23]['day_text'] : info5.languages[23]['night_text'],
			maxtemp5: data.forecast.forecastday[5].day.maxtemp_c,
			mintemp5: data.forecast.forecastday[5].day.mintemp_c, imgPath5, imageUrl5,
			text6: data.current.is_day ? info6.languages[23]['day_text'] : info6.languages[23]['night_text'],
			maxtemp6: data.forecast.forecastday[6].day.maxtemp_c,
			mintemp6: data.forecast.forecastday[6].day.mintemp_c, imgPath6, imageUrl6
		};

		
		



		showCard(weatherData);
	}

};
