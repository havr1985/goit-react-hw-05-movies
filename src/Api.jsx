import axios from "axios";

export async function fetchTrandingList(page, options) {
  const response = await axios.get(`https://api.themoviedb.org/3/trending//movie/week?page=${page}`, options );
  return response.data.results;
  
};

export async function fetchMovieById(id, options) {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  return response.data;
};

export async function fetchCast(id, options) {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, options);
  return response.data.cast;
};

export async function fetchReviews(id, options) {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews`, options);
  return response.data;
};

export async function fetchSearchList(query, page, options) {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`, options);
  return response.data.results;
};