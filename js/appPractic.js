const date = new Date();
			const day = date.getDate();
			const monthIndex = date.getMonth();
			const monthNames = [  
				"января", "февраля", "марта", "апреля", "мая", "июня",  
				"июля", "августа", "сентября", "октября", "ноября", "декабря"
			];
			const monthName = monthNames[monthIndex];
			const formattedDate = `${day} ${monthName}`;
			
			const dayOfWeekNames = [  
				"воскресенье", "понедельник", "вторник",  
				"среда", "четверг", "пятница", "суббота"
			];
			const dayOfWeekIndex = date.getDay();
			const dayOfWeekName = dayOfWeekNames[dayOfWeekIndex];

			const html = `<div class="location">
								<img src="./img/geo.png" alt="Location icon">
								<span>${data.location.name}, ${data.location.country}</span>
								</div>

								<div class="weather-block">
									<div class="weather-date">
										<div class="weather-month">${formattedDate}</div>
										<div class="weather-day">${dayOfWeekName}</div>
									</div>
									<div class="weather-description">
										<div class="weather-info">
											<div class="weather-text">${data.current.condition.text}</div>
										</div>
									</div>
									<div class="weather-icon">
										<img class="weather-icon-img" src="./img/icon-4.png" alt="иконка погоды">
									</div>
									<div class="weather-image">
										<img class="weather-image-human" src="./img/дождь-2.png" alt="Человек">
									</div>
									



								</div>
								<div class="weather-block">
									<div class="weather-date">
										<div class="weather-month">${formattedDate}</div>
										<div class="weather-day">${dayOfWeekNames}</div>
									</div>
									<div class="weather-description">
										<div class="weather-info">
											<div class="weather-text">пасмурно, гроза</div>
										</div>
									</div>
									<div class="weather-icon">
										<img class="weather-icon-img" src="./img/icon-4.png" alt="иконка погоды">
									</div>
									<div class="weather-image">
										<img class="weather-image-human" src="./img/дождь-2.png" alt="Человек">
									</div>
								



								</div>
								<div class="weather-block">
									<div class="weather-date">
										<div class="weather-month">${formattedDate}</div>
										<div class="weather-day">${dayOfWeekNames}</div>
									</div>
									<div class="weather-description">
										<div class="weather-info">
											<div class="weather-text">пасмурно, гроза</div>
										</div>
									</div>
									<div class="weather-icon">
										<img class="weather-icon-img" src="./img/icon-4.png" alt="иконка погоды">
									</div>
									<div class="weather-image">
										<img class="weather-image-human" src="./img/дождь-2.png" alt="Человек">
								
								`;

Rewrite this code so that ${formattedDate} displays up-to-date information in the form of "March 21", "March 22", "March 23" and so on.
And ${dayOfWeekName} displayed up-to-date information in the form - "Monday", "Tuesday", "Wednesday", etc.
in each case ${formattedDate} and ${dayOfWeekName} will be different depending on the number. In the first case, today's date, in the second case tomorrow, and so on. Rewrite the code with this in mind