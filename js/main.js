//Dom
for(var i = 0; i < movies.length; i++) {
    var elList = document.querySelector('.list')
    var elLi = document.createElement('li')
    elLi.setAttribute('class', 'movies-item');

    // var moviesHeading = document.createElement('h2');
    // moviesHeading.textContent = 'Movies';

    var elSpanId = document.createElement('span')
    elSpanId.textContent = `Id: ` + movies[i].id;
    elSpanId.setAttribute('class', 'movies-id')

    var elHeading = document.createElement('h3')
    elHeading.textContent = `Title: ` + movies[i].title;
    elHeading.setAttribute('class', 'movies-item-heading')

    var elSpanYear = document.createElement('span')
    elSpanYear.textContent =  `Year: ` + movies[i].year;
    elSpanYear.setAttribute('class', 'movies-year')

    var elDirector = document.createElement('h5')
    elDirector.textContent =  `Director: ` + movies[i].director;
    elDirector.setAttribute('class', 'movies-director')

    var elActors = document.createElement('p')
    elActors.textContent =  `Actors: ` + movies[i].actors;
    elActors.setAttribute('class', 'movies-actors')

    var elDescription = document.createElement('p')
    elDescription.textContent =  `Decription: ` + movies[i].description;
    elDescription.setAttribute('class', 'movies-description')

    var elImg = document.createElement('img')
    elImg.setAttribute('width', '330')
    elImg.setAttribute('height', '280')
    // elImg.setAttribute('alt', 'film-image')
    elImg.setAttribute('src', movies[i].imageUrl)
    elImg.setAttribute('class', 'movies-image')

    var elListGenres = document.createElement('ul')
    elListGenres.setAttribute('class', 'movies-genres-list')
    elListGenres.setAttribute('type', 'number')
    for(var genre of movies[i].genres) {
        var elLiGenres = document.createElement('li')
        var elGenresParagraph = document.createElement('p')
        elGenresParagraph.textContent = genre;
        elGenresParagraph.setAttribute('class', 'text-light') ;
        elLiGenres.appendChild(elGenresParagraph);
        elListGenres.appendChild(elLiGenres);
    }

    elLi.appendChild(elImg);
    elLi.appendChild(elSpanId);
    elLi.append(elHeading);
    elLi.appendChild(elSpanYear);
    elLi.appendChild(elListGenres);
    elLi.appendChild(elDirector);
    elLi.appendChild(elActors);
    elLi.appendChild(elDescription);
    elList.appendChild(elLi);
}


// var myName = "Mansur"
// var yourName = myName

// console.log("MyName:", myName)
// console.log("YourName:", yourName)

// var yourName = "Oleg"

// console.log("MyName:", myName)
// console.log("YourName:", yourName)

// // 0xA421
// const myAccount = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 31
// }
// // 0xA421
// const oldAccount = { ...myAccount }

// //  0xA421
// myAccount["age"] = 32
// myAccount.firstName = "Something"

// //  0xA421
// console.log("MyAccount:", myAccount)
// console.log("OldAccount:", oldAccount)


// const user = {
//     email: "example@gmail.com",
//     balance: "100$",
//     "is Admin": true
// }
// user["email"] = 12
// user["is Admin"] = 
// console.log(user["email"])


// const arr = []

// arr["1a"] = "email@gmail.com";

// console.log(arr.length);
// console.log(arr);


// console.log("Sana:", date)
// console.log("Oy tartibi:", date.getMonth() + 1)
// console.log("Kun:", date.getDate())
// console.log("Yil:", date.getFullYear())

// console.log("Soat:", date.getHours())
// console.log("Minute:", date.getMinutes())
// console.log("Sekund:", date.getSeconds())
// console.log("MilliSekund:", date.getMilliseconds())
// setTimeout(function () {
//     // window.close()

// }, 10000)

// setInterval(function () {
//     var date = new Date()
//     var timeEl = document.querySelector("[data-time]")
//     timeEl.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
// }, 1000)



// var text = "Welc"
// // console.log(text.padStart(7, "*"))

// var phoneInput = document.querySelector("[data-phone]")
// var printEl = document.querySelector("[data-print]")
// phoneInput.addEventListener("keyup", () => {
//     var phoneValue = phoneInput.value
//     printEl.textContent = phoneValue.padEnd(6, "*")
// })