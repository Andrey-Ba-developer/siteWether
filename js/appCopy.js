const apiKey = '0cbfe68a1fc24494a9b72631232103';

const header = document.querySelector('#header');
const form = document.querySelector('#form');
const input = document.querySelector('#inputCity');

function removeCard() {
	const prevCard = document.querySelector('.card');
	if (prevCard) prevCard.remove();
}

function showError(errorMessage) {
	const html = `<div class="card">${errorMessage}</div>`;
	header.insertAdjacentHTML('afterend', html);
}

function showDate() {
	
}






form.onsubmit = function (e) {
	e.preventDefault();

	let city = input.value.trim();

	const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`

	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);

			if (data.error) {
				removeCard();
				showError(data.error.message);

			} else {
				removeCard();
				
				const today = new Date();

				const tomorrow = new Date(today);
				tomorrow.setDate(today.getDate() + 1);

				const dayAfterTomorrow = new Date(today);
				dayAfterTomorrow.setDate(today.getDate() + 2);

				const threeDaysFromNow = new Date(today);
				threeDaysFromNow.setDate(today.getDate() + 3);

				const fourDaysFromNow = new Date(today);
				fourDaysFromNow.setDate(today.getDate() + 4);

				const fiveDaysFromNow = new Date(today);
				fiveDaysFromNow.setDate(today.getDate() + 5);

				const sixDaysFromNow = new Date(today);
				sixDaysFromNow.setDate(today.getDate() + 6);

				const formatDate = (date) => {
					const monthNames = [
						"января", "февраля", "марта", "апреля", "мая", "июня",
						"июля", "августа", "сентября", "октября", "ноября", "декабря"
					];
					const day = date.getDate();
					const monthName = monthNames[date.getMonth()];
					return `${day} ${monthName} `;
				};

				const formatDayOfWeek = (date) => {
					const dayOfWeekNames = [
						"воскресенье", "понедельник", "вторник",
						"среда", "четверг", "пятница", "суббота"
					];
					const dayOfWeekName = dayOfWeekNames[date.getDay()];
					return dayOfWeekName;
				};




				const html = `<div class="card">
									<div class="location">
											<img src="./img/geo.png" alt="Location icon">
											<span>${data.location.name}, ${data.location.country}</span>
										</div>
					
									<div class="container-main">

										<div class="weather-block">
											<div class="weather-date">
												<div class="weather-month">${formatDate(today)}</div>
												<div class="weather-day">${formatDayOfWeek(today)}</div>
											</div>
											<div class="weather-description">
												<div class="weather-info">
													<div class="weather-text">${data.forecast.forecastday[0].day.condition.text}</div>
												</div>
											</div>
											<div class="weather-icon">
												<img class="weather-icon-img" src="./img/icon-4.png" alt="иконка погоды">
											</div>
											<div class="weather-image">
												<img class="weather-image-human" src="./img/дождь-2.png" alt="Человек">
											</div>
											<div class="temperature-reading-day">
												<span>${data.forecast.forecastday[0].day.maxtemp_c}
													<span class='celsius-day'>℃</span>
												</span>
											</div>
											<div class="temperature-reading-night">
												<span>${data.forecast.forecastday[0].day.mintemp_c}
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
													<div class="weather-text">${data.forecast.forecastday[1].day.condition.text}</div>
												</div>
											</div>
											<div class="weather-icon">
												<img class="weather-icon-img" src="./img/icon-4.png" alt="иконка погоды">
											</div>
											<div class="weather-image">
												<img class="weather-image-human" src="./img/дождь-2.png" alt="Человек">
											</div>
											<div class="temperature-reading-day">
												<span>${data.forecast.forecastday[1].day.maxtemp_c}
													<span class='celsius-day'>℃</span>
												</span>
											</div>
											<div class="temperature-reading-night">
												<span>${data.forecast.forecastday[1].day.mintemp_c}
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
													<div class="weather-text">${data.forecast.forecastday[2].day.condition.text}</div>
												</div>
											</div>
											<div class="weather-icon">
												<img class="weather-icon-img" src="./img/icon-4.png" alt="иконка погоды">
											</div>
											<div class="weather-image">
												<img class="weather-image-human" src="./img/дождь-2.png" alt="Человек">
											</div>
											<div class="temperature-reading-day">
												<span>${data.forecast.forecastday[2].day.maxtemp_c}
													<span class='celsius-day'>℃</span>
												</span>
											</div>
											<div class="temperature-reading-night">
												<span>${data.forecast.forecastday[2].day.mintemp_c}
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
													<div class="weather-text">${data.forecast.forecastday[3].day.condition.text}</div>
												</div>
											</div>
											<div class="weather-icon">
												<img class="weather-icon-img" src="./img/icon-4.png" alt="иконка погоды">
											</div>
											<div class="weather-image">
												<img class="weather-image-human" src="./img/дождь-2.png" alt="Человек">
											</div>
											<div class="temperature-reading-day">
												<span>${data.forecast.forecastday[3].day.maxtemp_c}
													<span class='celsius-day'>℃</span>
												</span>
											</div>
											<div class="temperature-reading-night">
												<span>${data.forecast.forecastday[3].day.mintemp_c}
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
													<div class="weather-text">${data.forecast.forecastday[4].day.condition.text}</div>
												</div>
											</div>
											<div class="weather-icon">
												<img class="weather-icon-img" src="./img/icon-4.png" alt="иконка погоды">
											</div>
											<div class="weather-image">
												<img class="weather-image-human" src="./img/дождь-2.png" alt="Человек">
											</div>
											<div class="temperature-reading-day">
												<span>${data.forecast.forecastday[4].day.maxtemp_c}
													<span class='celsius-day'>℃</span>
												</span>
											</div>
											<div class="temperature-reading-night">
												<span>${data.forecast.forecastday[4].day.mintemp_c}
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
													<div class="weather-text">${data.forecast.forecastday[5].day.condition.text}</div>
												</div>
											</div>
											<div class="weather-icon">
												<img class="weather-icon-img" src="./img/icon-4.png" alt="иконка погоды">
											</div>
											<div class="weather-image">
												<img class="weather-image-human" src="./img/дождь-2.png" alt="Человек">
											</div>
											<div class="temperature-reading-day">
												<span>${data.forecast.forecastday[5].day.maxtemp_c}
													<span class='celsius-day'>℃</span>
												</span>
											</div>
											<div class="temperature-reading-night">
												<span>${data.forecast.forecastday[5].day.mintemp_c}
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
													<div class="weather-text">${data.forecast.forecastday[6].day.condition.text}</div>
												</div>
											</div>
											<div class="weather-icon">
												<img class="weather-icon-img" src="./img/icon-4.png" alt="иконка погоды">
											</div>
											<div class="weather-image">
												<img class="weather-image-human" src="./img/дождь-2.png" alt="Человек">
											</div>
											<div class="temperature-reading-day">
												<span>${data.forecast.forecastday[6].day.maxtemp_c}
													<span class='celsius-day'>℃</span>
												</span>
											</div>
											<div class="temperature-reading-night">
												<span>${data.forecast.forecastday[6].day.mintemp_c}
													<span class='celsius-night'>℃</span>
												</span>
											</div>
										</div>
									</div>
								</div>`;

				header.insertAdjacentHTML('afterend', html);
			}







		});
}