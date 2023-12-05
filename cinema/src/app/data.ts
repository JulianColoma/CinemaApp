// Definición del tipo para un objeto de película
export interface Movie {
  Title: string;
  Description: string;
  Rating: number;
  Duration: string;
  Genre: string[];
  ReleasedDate: string;
  Img: string; // Ruta a la imagen
  TrailerLink: string;
}

// Lista de películas en formato JSON
export const moviesData: Movie[] = [
  {
    "Title": "Tenet",
    "Description": "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    "Rating": 7.8,
    "Duration": "2h 30min",
    "Genre": ["Action", "Sci-Fi"],
    "ReleasedDate": "3 September 2020",
    "Img": "../assets/resources/Tenet.png",
    "TrailerLink": "https://www.youtube.com/watch?v=LdOM0x0XDMo"
  },
  {
    "Title": "Spider-Man: Into the Spider-Verse",
    "Description": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    "Rating": 8.4,
    "Duration": "1h 57min",
    "Genre": ["Action", "Animation", "Adventure"],
    "ReleasedDate": "14 December 2018",
    "Img": "../assets/resources/Spider Man.png",
    "TrailerLink": "https://www.youtube.com/watch?v=tg52up16eq0"
  },
  {
    "Title": "Knives Out",
    "Description": "A detective investigates the death of a patriarch of an eccentric, combative family.",
    "Rating": 7.9,
    "Duration": "2h 10min",
    "Genre": ["Comedy", "Crime", "Drama"],
    "ReleasedDate": "27 November 2019",
    "Img": "../assets/resources/Knives Out.png",
    "TrailerLink": "https://www.youtube.com/watch?v=qGqiHJTsRkQ"
  },
  {
    "Title": "Guardians of the Galaxy",
    "Description": "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    "Rating": 8.0,
    "Duration": "2h 1min",
    "Genre": ["Action", "Adventure", "Comedy"],
    "ReleasedDate": "1 August 2014",
    "Img": "../assets/resources/Guardians of The Galaxy.png",
    "TrailerLink": "https://www.youtube.com/watch?v=d96cjJhvlMA"
  },
  {
    "Title": "Avengers: Age of Ultron",
    "Description": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    "Rating": 7.3,
    "Duration": "2h 21min",
    "Genre": ["Action", "Adventure", "Sci-Fi"],
    "ReleasedDate": "1 May 2015",
    "Img": "../assets/resources/Avengers.png",
    "TrailerLink": "https://www.youtube.com/watch?v=tmeOjFno6Do"
  }
];


