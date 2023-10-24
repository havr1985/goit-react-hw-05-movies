import axios from "axios";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGViMWNlYjdkMDA2NzJlNGYyZWZlMDI2MTQwNWNjNiIsInN1YiI6IjY0ZjczOTllZmZjOWRlMDBhYzRmMTg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.arW0TovcOo_eqnVO6td0Nh7eaWCU_GXyNFEcZBWV-_o'
  }
};

export async function fetchTrandingList(page) {
    const response = await axios.get(`https://api.themoviedb.org/3/trending//movie/week?page=${page}`, options);
    return response.data.results;
};

export async function fetchMovieById(id) {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  return response.data;
}