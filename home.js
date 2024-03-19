const searchBar = document.getElementById("search-bar");
const movieTitle = document.getElementById("mtitle");
const ratings = document.getElementById("Ratings");
const result = document.getElementById("result");
const home = document.getElementById("home");
const img = document.getElementById("img");
const genres = document.getElementById("genre");
const plots = document.getElementById("plot");
const casts = document.getElementById("cast");
const directed = document.getElementById("director");
const mlanguage = document.getElementById("mlanguage");
const boxoffice = document.getElementById("boxoffice");
const writer = document.getElementById("writer");
const released = document.getElementById("released");
const fav1 = document.getElementById("fav1");
const fav2 = document.getElementById("fav2");
const favMoviesContainer = document.getElementById("fav-movies-container");
const clearLocal = document.getElementById("clear");
clearLocal.addEventListener("click", () => {
  localStorage.clear();
  favMoviesContainer.style.display = "none";
  console.log("sdfsdf");
});
// Fetches data from api and calls function to add it in
async function fetchMovies(search) {
  const url = `https://www.omdbapi.com/?t=${search}&apikey=d19cd846`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}
addToFavDOM();
// Creating a array of all meal name to suggest user while typing in search box
let favMovieArray = [];
let movieName = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "The Godfather Part II",
  "12 Angry Men",
  "The Lord of the Rings: The Return of the King",
  "Pulp Fiction",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Il buono, il brutto, il cattivo",
  "Forrest Gump",
  "Fight Club",
  "The Lord of the Rings: The Two Towers",
  "Inception",
  "The Empire Strikes Back",
  "The Matrix",
  "GoodFellas",
  "Se7en",
  "The Silence of the Lambs",
  "Cidade de Deus",
  "Saving Private Ryan",
  "La vita è bella",
  "Interstellar",
  "The Green Mile",
  "Star Wars",
  "Terminator 2: Judgment Day",
  "Back to the Future",
  "The Pianist",
  "Psycho",
  "Gisaengchung",
  "Léon",
  "The Lion King",
  "Gladiator",
  "American History X",
  "The Departed",
  "The Usual Suspects",
  "The Prestige",
  "Whiplash",
  "Casablanca",
  "Hotaru no haka",
  "Seppuku",
  "The Intouchables",
  "Modern Times",
  "Once Upon a Time in the West",
  "Rear Window",
  "Alien",
  "City Lights",
  "Apocalypse Now",
  "Memento",
  "Django Unchained",
  "Raiders of the Lost Ark",
  "WALL·E",
  "The Lives of Others ",
  "Sunset Blvd",
  "Paths of Glory",
  "The Shining",
  "The Great Dictator",
  "Avengers: Infinity War",
  "Witness for the Prosecution",
  "Aliens",
  "Spider-Man: Into the Spider-Verse",
  "American Beauty",
  "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
  "The Dark Knight Rises",
  "Inglourious Basterds",
  "Amadeus",
  "Coco",
  "Toy Story",
  "Joker",
  "Braveheart",
  "Das Boot",
  "Avengers: Endgame",
  "Once Upon a Time in America",
  "Good Will Hunting",
  "Kimi no Na wa",
  "Requiem for a Dream",
  "3 Idiots",
  "Toy Story 3",
  "Tengoku to jigoku",
  "Star Wars: Episode VI - Return of the Jedi ",
  "Eternal Sunshine of the Spotless Mind",
  "2001: A Space Odyssey",
  "Reservoir Dogs",
  "Jagten",
  "Idi i smotri",
  "Citizen Kane",
  "laa laa Land",
  "Baa Baaa Black Sheep",
  "Lawrence of Arabia",
  "M - Eine Stadt sucht einen Mörder",
  "Top Gun: Maverick",
  "North by Northwest",
  "Vertigo",
  "Iron Man",
  "The Incredible Hulk",
  "Iron Man 2",
  "Thor",
  "Captain America: The First Avenger",
  "Iron Man 3",
  "Thor: The Dark World",
  "Captain America: The Winter Soldier",
  "Guardians of the Galaxy",
  "Avengers: Age of Ultron",
  "Ant-Man",
  "Captain America: Civil War",
  "Doctor Strange",
  "Guardians of the Galaxy Vol. 2",
  "Spider-Man: Homecoming",
  "Thor: Ragnarok",
  "Black Panther",
  "Ant-Man and the Wasp",
  "Captain Marvel",
  "Spider-Man: Far From Home",
  "Black Widow",
  "Shang-Chi and the Legend of the Ten Rings",
  "Eternals",
  "Spider-Man: No Way Home",
  "Doctor Strange in the Multiverse of Madness",
  "Thor: Love and Thunder",
  "Black Panther: Wakanda Forever ",
  "Ant-Man and the Wasp: Quantumania",
  "Guardians of the Galaxy Vol. 3",
  "The Marvels",
  "Captain America: New World Order",
  "Thunderbolts",
  "Blade",
  "Deadpool",
  "Deadpool 2",
  "Deadpool 3",
  "Fantastic Four",
  "Avengers: The Kang Dynasty",
  "Avengers: Secret Wars",
  "Avatar",
  "Avatar: The Way of Water",
  "Baahubali: The Beginning ",
  "Baahubali 2: The Conclusion",
  "Baby Driver",
  "Bad Guys Always Die",
  "Bholaa",
  "California Typewriter",
  "Chinatown",
  "Calendar Girl",
  "Dave",
  "Death Note",
  "E.T. the Extra-Terrestrial",
  "Eagle Eye",
  "Earth to Echo",
  "Eddie the Eagle",
  "The Edge of Seventeen",
  "Edge of Tomorrow",
  "Elektra",
  "Elf",
  "The Emoji Movie",
  "Enchanted",
  "Ender's Game",
  "Entourage",
  "Everest",
  "Everyone's Hero",
  "Ex Machina",
  "Friday the 13th",
  "Funny Games",
  "Final Destination",
  "Fear",
  "Freddy vs. Jason",
  "Final Examination",
  "Firewall",
  "Finding Nemo",
  "G.I. Joe: The Rise of Cobra ",
  "Gangs of New York",
  "Ghostbusters",
  "Ghost Rider",
  "Ghost Rider: Spirit of Vengeance",
  "Godzilla",
  "Godzilla vs Kong",
  "Haven",
  "Home Alone 3",
  "Home Alone 2",
  "Home Alone",
  "Hocus Pocus",
  "Hook",
  "Harry Potter",
  "Hide and Seek",
  "Harry Potter and the Goblet of Fire",
  "Hellraiser: Deader",
  "Harry Potter and the Deathly Hallows - Part 1",
  "Invincible",
  "Indiana Jones and the Kingdom of the Crystal Skull",
  "Jack and Jill",
  "Jackass Number Two",
  "Jackass 3D",
  "Jackie Brown",
  "Jack Reacher",
  "Jack Reacher: Never Go Back",
  "Jack Ryan: Shadow Recruit",
  "Jack the Giant Slayer",
  "Jason Bourne",
  "Jaws",
  "Killing Moon",
  "King Kong",
  "Keeping Mum",
  "Knock Knock",
  "Killing Mr. Griffin",
  "Kicked in the Head",
  "Kindergarten Cop",
  "Killers in the House",
  "Krrish",
  "Krrish 3",
  "Koi... Mil Gaya",
  "Laaj",
  "Laal Singh Chaddha",
  "La La Land",
  "Land of the Dead",
  "Lambada",
  "Lady in the Water",
  "Living Death",
  "Leprechaun 5: In the Hood",
  "Leprechaun 2",
  "Mad Max",
  "Made in Britain",
  "Magic",
  "Maleficent",
  "May",
  "Mom",
  "Maatr",
  "Machine",
  "Mad About Dance",
  "Maa",
  "Naam Shabana",
  "No Entry",
  "NOTA",
  "Night at the Museum",
  "Nanny McPhee",
  "National Treasure",
  "National Treasure: Book of Secrets",
  "Night of the Living Dead",
  "No Country for Old Men",
  "NightScream",
  "Odd Man Out",
  "Oldboy",
  "Olympia",
  "On the Waterfront",
  "Onibaba",
  "Osama",
  "On the Town",
  "One Eyed Jacks",
  "Pilgrim",
  "Peter Pan",
  "Pinocchio",
  "Phantom of the Rue Morgue",
  "Paranoiac",
  "Pirates of the Caribbean",
  "Poltergeist",
  "Perfect Alibi",
  "Personal Effects",
  "Pirates of the Caribbean: On Stranger Tides",
  "Play Misty for Me",
  "Qua la mano",
  "Quack Shot",
  "Quackser Fortune Has a Cousin in the Bronx ",
  "Quacker Tracker",
  "Quackodile Tears",
  "Qaidi Band",
  "Qala",
  "Qarib Qarib Single",
  "Queen",
  "Quarantine",
  "Queen Bees",
  "Radio On",
  "Raging Bull",
  "Ran",
  "Rancho Notorious",
  "Rashomon",
  "Re-Animator",
  "S Diary",
  "Under the Skin",
  "Unforgiven",
  "United 93",
  "777 Charlie",
  "Jai Bhim",
  "Udal",
  "Ugly Me",
  "Ugly Aur Pagli",
  "Ulakam Chuttum Valiban",
  "Ulidavaru Kandanthe",
  "Ultras",
  "Unbelievable!!!!!",
  "Umbrella Academy",
  "Vera Drake",
  "Vikram",
  "Victim",
  "Videodrome",
  "Village of the Damned",
  "Vadh",
  "V",
  "Veerappan",
  "Vicky Donor",
  "Vikram Vedha",
  "Villain",
  "Warriors",
  "Wargames",
  "War Game",
  "Wages of Fear",
  "Wayne's World",
  "West Side Story",
  "What's Up, Doc?",
  "Whatever Happened to Baby Jane?",
  "X-Men",
  "X-Men: The Last Stand",
  "X-Men Origins: Wolverine",
  "X-Men: First Class",
  "X-Men: Days of Future Past",
  "X-Men: Apocalypse",
  "X-Men: Dark Phoenix",
  "X=Prem",
  "Xanadu",
  "X2",
  "xXx",
  "XXX: State of the Union",
  "xXx: Return of Xander Cage",
  "X-Games",
  "Ya Rab",
  "Yaara",
  "Yaariyan",
  "Yaaram",
  "Yaara Silly Silly",
  "Yellow Earth",
  "Yellow Submarine",
  "Young Adam",
  "Young Frankenstein",
  "Y",
  "Yearly Departed",
  "Z",
  "Zatoichi",
  "Zazie Dans le Metro",
  "Zoolander",
  "Zulu",
  "Zaalim",
  "Zila Ghaziabad",
  "Zanjeer",
  "Zero",
  "Zid",
  "Pushpa: The Rise",
  "Pushpa: The Rise",
  "RRR",
  "K.G.F: Chapter 1",
  "K.G.F: Chapter 2",
  "Kantara",
  "Monica, O My Darling",
  "Love Today",
  "Mukundan Unni Associates",
  "Eega",
  "Master",
  "Pathaan",
  "Alita: Battle Angel",
  "Avengers",
];
//sort names
let sortNames = movieName.sort();
movieName = sortNames;

// add key up event listener
searchBar.addEventListener("keyup", (e) => {
  //initially remove all element
  removeElements();
  for (let i of movieName) {
    //convert input to lowercase
    if (
      i.toLowerCase().startsWith(searchBar.value.trim().toLowerCase()) &&
      searchBar.value != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");

      //Display matched part bold
      let word = "<b>" + i.substr(0, searchBar.value.length) + "</b>";
      word += i.substr(searchBar.value.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
      listItem.addEventListener("click", () => {
        resultMovie(i);
        removeElements();
      });
    }
  }
});

const resultMovie = (i) => {
  result.style.display = "block";
  home.style.display = "none";
  searchBar.value = "";
  fav2.addEventListener("click", () => {
    handleFavBtn(i);
    fav1.setAttribute("class", "fa-solid fa-heart fa-beat-fade fa-lg");
    fav1.setAttribute("style", "color: #e60000");
    setTimeout(() => {
      fav1.setAttribute("class", "fa-solid fa-heart");
      fav1.setAttribute("style", "color: #ffffff;");
    }, 3000);

    localStorage.setItem("movieName", i);
  });
  fetchMovies(i).then((e) => {
    const image = e.Poster;
    const title = e.Title;
    const genre = e.Genre;
    const cast = e.Actors;
    const rating = e.imdbRating;
    const director = e.Director;
    const plot = e.Plot;
    const lang = e.Language;
    const boxo = e.BoxOffice;
    const writers = e.Writer;
    const release = e.Released;

    img.setAttribute("src", image);
    movieTitle.textContent = title;
    ratings.textContent = rating;
    genres.textContent = genre;
    plots.textContent = plot;
    casts.textContent = `Casts : ${cast}`;
    directed.textContent = `Directed by ${director}`;
    mlanguage.textContent = `Language : ${lang}`;
    boxoffice.textContent = `Box Office collections : ${boxo}`;
    writer.textContent = `written by : ${writers}`;
    released.textContent = `Released on ${release}`;
  });
};
// display suggession values in the list
function displayNames(value) {
  searchBar.value = value;
}

// initially remove all emements
function removeElements() {
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
// Add to favourite of localStorage
async function handleFavBtn(i) {
  let data = await fetchMovies(i);

  let favMoviesLocal = localStorage.getItem("favMoviesList");

  if (favMoviesLocal) {
    favMovieArray = Array.from(JSON.parse(favMoviesLocal));
  } else {
    localStorage.setItem("favMoviesList", JSON.stringify(data));
  }

  // to check if movie is already present in the fav list
  let isPresent = false;
  favMovieArray.forEach((movie) => {
    if (data.Title == movie.Title) {
      isPresent = true;
    }
  });

  if (!isPresent) {
    favMovieArray.push(data);
  }
  console.log(favMovieArray);
  localStorage.setItem("favMoviesList", JSON.stringify(favMovieArray));
  isPresent = !isPresent;
  addToFavDOM();
}
function openNav() {
  document.getElementById("mySidebar").style.width = "380px";
  // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
}

// Add to favourite list DOM
function addToFavDOM() {
  favMoviesContainer.innerHTML = "";

  let favList = JSON.parse(localStorage.getItem("favMoviesList"));
  if (favList) {
    favList.forEach((movie) => {
      const div = document.createElement("div");
      const tit = movie.title;
      div.classList.add(
        "fav-movie-card",
        "d-flex",
        "justify-content-between",
        "align-content-center",
        "my-2"
      );
      div.innerHTML = `
       
        <img
          src="${movie.Poster}"
          alt=""
          class="fav-movie-poster"
        />
        <div class="movie-card-details">
          <p class="movie-name mt-3 mb-0">
           <a href = "movie.html" class="fav-movie-name" data-id="${movie.Title}">${movie.Title}<a> 
          </p>
          <small class="text-muted">${movie.Year}</small>
        </div>

        `;

      favMoviesContainer.prepend(div);
    });
  }
}
// Delete from favourite list
function deleteMovie(name) {
  let favList = JSON.parse(localStorage.getItem("favMoviesList"));
  let updatedList = Array.from(favList).filter((movie) => {
    return movie.Title != name;
  });

  localStorage.setItem("favMoviesList", JSON.stringify(updatedList));

  addToFavDOM();
}

favMoviesContainer.textContent;
