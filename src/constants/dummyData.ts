import { Credit, Movie, MovieDetail } from "@/types/Movie.types";

export const dummyMovies: Movie[] = [
  {
    adult: false,
    backdrop_path: "/b85bJfrTOSJ7M5Ox0yp4lxIxdG1.jpg",
    genre_ids: [28, 878, 35, 10751],
    id: 939243,
    original_language: "en",
    original_title: "Sonic the Hedgehog 3",
    overview:
      "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
    popularity: 7535.831,
    poster_path: "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
    release_date: "2024-12-19",
    title: "Sonic the Hedgehog 3",
    video: false,
    vote_average: 7.8,
    vote_count: 1078,
  },
  {
    adult: false,
    backdrop_path: "/xZm5YUNY3PlYD1Q4k7X8zd2V4AK.jpg",
    genre_ids: [28, 35],
    id: 993710,
    original_language: "en",
    original_title: "Back in Action",
    overview:
      "Fifteen years after vanishing from the CIA to start a family, elite spies Matt and Emily jump back into the world of espionage when their cover is blown.",
    popularity: 3559.004,
    poster_path: "/3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg",
    release_date: "2025-01-15",
    title: "Back in Action",
    video: false,
    vote_average: 6.724,
    vote_count: 533,
  },
];

export const dummyMovie: Movie = dummyMovies[0];

export const dummyMovieDetail: MovieDetail = {
  adult: false,
  backdrop_path: "/b85bJfrTOSJ7M5Ox0yp4lxIxdG1.jpg",
  belongs_to_collection: {
    id: 720879,
    name: "Sonic the Hedgehog Collection",
    poster_path: "/fwFWhYXj8wY6gFACtecJbg229FI.jpg",
    backdrop_path: "/l5CIAdxVhhaUD3DaS4lP4AR2so9.jpg",
  },
  budget: 122000000,
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 10751,
      name: "Family",
    },
  ],
  homepage: "https://www.sonicthehedgehogmovie.com",
  id: 939243,
  imdb_id: "tt18259086",
  origin_country: ["US"],
  original_language: "en",
  original_title: "Sonic the Hedgehog 3",
  overview:
    "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
  popularity: 3560.42,
  poster_path: "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
  production_companies: [
    {
      id: 4,
      logo_path: "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
      name: "Paramount Pictures",
      origin_country: "US",
    },
    {
      id: 333,
      logo_path: "/5xUJfzPZ8jWJUDzYtIeuPO4qPIa.png",
      name: "Original Film",
      origin_country: "US",
    },
    {
      id: 77884,
      logo_path: "/dP2lxVNctD5Cried0IWVqgrO2o9.png",
      name: "Marza Animation Planet",
      origin_country: "JP",
    },
    {
      id: 113750,
      logo_path: "/A3QVZ9Ah0yI2d2GiXUFpdlbTgyr.png",
      name: "SEGA",
      origin_country: "JP",
    },
    {
      id: 10644,
      logo_path: "/ocLZIdYJBppuCt1rhYEb2jbpt5F.png",
      name: "Blur Studio",
      origin_country: "US",
    },
    {
      id: 168701,
      logo_path: "/vWdZFT4V64CCv12D10m44duQjyg.png",
      name: "SEGA of America",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "JP",
      name: "Japan",
    },
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2024-12-19",
  revenue: 422398000,
  runtime: 110,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
    {
      english_name: "French",
      iso_639_1: "fr",
      name: "Français",
    },
    {
      english_name: "German",
      iso_639_1: "de",
      name: "Deutsch",
    },
    {
      english_name: "Japanese",
      iso_639_1: "ja",
      name: "日本語",
    },
    {
      english_name: "Letzeburgesch",
      iso_639_1: "lb",
      name: "",
    },
    {
      english_name: "Malagasy",
      iso_639_1: "mg",
      name: "",
    },
    {
      english_name: "Spanish",
      iso_639_1: "es",
      name: "Español",
    },
  ],
  status: "Released",
  tagline: "Try to keep up.",
  title: "Sonic the Hedgehog 3",
  video: false,
  vote_average: 7.597,
  vote_count: 725,
};

export const dummyCredits: Credit[] = [
  {
    adult: false,
    gender: 2,
    id: 27428,
    known_for_department: "Acting",
    name: "Aaron Taylor-Johnson",
    original_name: "Aaron Taylor-Johnson",
    popularity: 49.234,
    profile_path: "/pFtHhih2XEaFaD3qOFyQW6q83br.jpg",
    cast_id: 8,
    character: "Sergei Kravinoff / Kraven the Hunter",
    credit_id: "60aec3f9d29bdd002c022ce0",
    order: 0,
  },
  {
    adult: false,
    gender: 1,
    id: 1437491,
    known_for_department: "Acting",
    name: "Ariana DeBose",
    original_name: "Ariana DeBose",
    popularity: 17.829,
    profile_path: "/hEamSutadgLbVNHch3KhJ5LfPdp.jpg",
    cast_id: 14,
    character: "Calypso Ezili",
    credit_id: "621e8519f12cf4001b7f2ccf",
    order: 1,
  },
];
export const dummyCredit: Credit = dummyCredits[0];
