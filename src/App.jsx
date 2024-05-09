import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import { Toaster } from "react-hot-toast";
import Others from "./pages/Others";

const App = () => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F0F0F] text-[#0F0F0F] dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Search />} />
          <Route path="/watch" element={<Watch />} />

          <Route path="/feed/history" element={<Home />} />
          <Route path="/shorts" element={<Home />} />
          <Route path="/feed/subscriptions" element={<Home />} />
          <Route path="/feed/playlists" element={<Home />} />
          <Route path="/channel/:id" element={<Home />} />
          <Route path="/playlist" element={<Home />} />
          <Route path="/feed/clips" element={<Home />} />
          <Route path="/feed/trending" element={<Others />} />
          <Route path="/shopping" element={<Others />} />
          <Route path="/music" element={<Others />} />
          <Route path="/movies" element={<Others />} />
          <Route path="/live" element={<Others />} />
          <Route path="/gaming" element={<Others />} />
          <Route path="/news" element={<Others />} />
          <Route path="/sports" element={<Others />} />
          <Route path="/feed/courses_destination" element={<Others />} />
          <Route path="/fashion-beauty" element={<Others />} />
          <Route path="/podcasts" element={<Others />} />
          <Route path="/account" element={<Home />} />
          <Route path="/reporthistory" element={<Home />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
