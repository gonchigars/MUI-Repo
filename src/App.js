import React, { useEffect, useState } from "react";
import FeaturedCompanies from "./components/FeaturedCompanies";
import Pagination from "./components/Pagination";
import { Grid, Box } from "@mui/material";
import { MuiDrawer } from "./components/MuiDrawer/mui-drawer";
import { MainCompo } from "./components/MainContentCompo/MainCompo";

import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Details } from "./components/Details/Details";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "./state/movieSlice";

function App() {
  const { genres, selectedGenre } = useSelector((state) => state.movieSlice);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    selectedGenre ? dispatch(getMovies(selectedGenre)) : dispatch(getMovies());
  }, [selectedGenre]);

  const handleOpen = (val) => {
    setOpen(val);
  };
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MuiDrawer handleOpen={handleOpen} />,
      children: [
        {
          path: "/",
          index: true,
          element: <MainCompo open={open} />,
        },
      ],
    },
    {
      path: "details/:id",
      element: <Details />,
    },
    {
      path: "/del/",
      element: <h1>Del component</h1>,
    },
  ]);
  return (
    // <BrowserRouter>
    <Box className="App" id="root">
      {/* <MuiDrawer handleOpen={handleOpen}> */}
      <RouterProvider router={routes} />
      {/* </MuiDrawer> */}
    </Box>
    // </BrowserRouter>
  );
}

export default App;
