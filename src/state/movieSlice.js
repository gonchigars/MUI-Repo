import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchgenres, fetchMovies, fetchSingleMovie } from "../API/movie-apis";

const initialState = {
  value: 2003,
  movies: null,
  status: null,
  movieDetails: null,
  genres: null,
  selectedGenre: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSelectedGenre: (state, action) => {
      console.log("setSelectedGenre", action.payload);
      state.selectedGenre = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        console.log("Movies fetched successfully:", action.payload); // Debugging message
        state.movies = action.payload;
        state.status = "succeeded";
      })
      .addCase(getMovies.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getMovie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        console.log("Movie fetched successfully:", action.payload); // Debugging message
        state.movieDetails = action.payload;
        state.status = "succeeded";
      })
      .addCase(getMovie.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getGenres.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        console.log("Movie fetched successfully:", action.payload); // Debugging message
        state.genres = action.payload;
        state.status = "succeeded";
      })
      .addCase(getGenres.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setSelectedGenre } =
  movieSlice.actions;

export default movieSlice.reducer;

export const getMovies = createAsyncThunk("movie/getMovies", async (genres) => {
  const responce = await fetchMovies(genres);
  return responce?.results;
});
export const getMovie = createAsyncThunk("movie/getMovie", async (id) => {
  const responce = await fetchSingleMovie(id);
  return responce;
});
export const getGenres = createAsyncThunk("movie/getGenres", async () => {
  const responce = await fetchgenres();
  return responce?.genres;
});
