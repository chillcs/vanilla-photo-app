// CONFIGURE API ----------

var searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', searchPhotos);

function searchPhotos(e) {
	e.preventDefault();

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(xhttp.responseText);
			var photoData = response.photos;
			var column1 = document.querySelector('.column1');
			var column2 = document.querySelector('.column2');
			var column3 = document.querySelector('.column3');

			column1.innerHTML = '';
			column2.innerHTML = '';
			column3.innerHTML = '';

			for (i = 0; i < photoData.length; i += 3) {
				var photos1 = document.createElement('div');
				photos1.classList.add('photos1');
				photos1.innerHTML = `<img src=${photoData[i].src.large}>`;
				column1.appendChild(photos1);
			}

			for (i = 1; i < photoData.length; i += 3) {
				var photos2 = document.createElement('div');
				photos2.classList.add('photos2');
				photos2.innerHTML = `<img src=${photoData[i].src.large}>`;
				column2.appendChild(photos2);
			}

			for (i = 2; i < photoData.length; i += 3) {
				var photos3 = document.createElement('div');
				photos3.classList.add('photos3');
				photos3.innerHTML = `<img src=${photoData[i].src.large}>`;
				column3.appendChild(photos3);
			}
		}
	};

	var textValue = document.querySelector('#search-bar').value;
	const API_KEY = '563492ad6f91700001000001cea42a89654b496fa8f5525dec821d75';
	xhttp.open(
		'GET',
		`https://api.pexels.com/v1/search?query=${textValue}&page=1&per_page=80`,
		true
	);
	xhttp.setRequestHeader('Authorization', API_KEY);
	xhttp.send();
}
