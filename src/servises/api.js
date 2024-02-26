import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzNkMWNlMGNiNmEzYWMzYzFkYjM4ZDM3N2I4MjRlZiIsInN1YiI6IjY0ODYzMjhlMDI4ZjE0MDEzYjg2MmZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HoABGc9RClt9cVwg4PCMlGrDzSxlVjcxQL3XcwPvhY0';

export async function getData() {
  const { data } = await axios.get(`/trending/movie/day?language=en-US`);
  console.log(data);
  return data;
}
// getData();

export async function getDataByQuery(query) {
  const { data } = await axios.get(
    `search/movie?query=${query}&language=en-US`
  );
  // console.log(data);
  return data;
}

export async function getDataById(id) {
  const data = await axios.get(`/movie/${id}?language=en-US`);
  //console.log(data);
  return data;
}
// getDataById();

export async function getDataAboutCast(id) {
  const data = await axios.get(`/movie/${id}/credits?language=en-US`);
  //console.log(data);
  return data;
}

export async function getDataAboutReviews(id) {
  const data = await axios.get(`/movie/${id}/reviews?language=en-US`);
  //console.log(data);
  return data;
}

export async function getTrailer(id) {
  const { data } = await axios(`/movie/${id}/videos`);
  const trailerResults = data.results;
  console.log(trailerResults);
  if (trailerResults.length === 0) return;
  const trailers = trailerResults.filter(
    trailer => trailer.type === 'Trailer' && trailer.site === 'YouTube'
  );
  console.log(trailers);

  if (trailers.length === 0) return;

  console.log(trailers[0]);
}
getTrailer(496243);
