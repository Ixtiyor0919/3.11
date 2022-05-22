var elList = document.createElement('ul')
elList.setAttribute('class', 'list')
// var elListGenres = document.createElement('ul')
// var elLiGenres = document.createElement('li')

for(var i = 0; i < movies.length; i++) {
    var elLi = document.createElement('li')
    elLi.setAttribute('class', 'movies-item');

    var elSpanId = document.createElement('span')
    elSpanId.textContent = movies[i].id;

    var elHeading = document.createElement('h3')
    elHeading.textContent = movies[i].title;

    var elSpanYear = document.createElement('span')
    elSpanYear.textContent = movies[i].year;

    var elGenres = document.createElement('p')
    elGenres.textContent = movies[0].genres;

    var elDirector = document.createElement('h5')
    elDirector.textContent = movies[i].director;

    var elActors = document.createElement('p')
    elActors.textContent = movies[i].actors;

    var elDescription = document.createElement('p')
    elDescription.textContent = movies[i].description;

    var elImg = document.createElement('img')
    elImg.setAttribute('width', '365px')
    elImg.setAttribute('height', '300px')
    elImg.setAttribute('src', movies[i].imageUrl)

    elLi.append(elSpanId);
    elLi.append(elHeading);
    elLi.append(elSpanYear);
    elLi.appendChild(elGenres);
    elLi.append(elDirector);
    elLi.append(elActors);
    elLi.append(elDescription);
    elLi.append(elImg);
    elList.append(elLi);

    elBox.appendChild(elList);
}