import React from "react";
import SideBar from "./components/SearchBar";
import SearchBar from "./components/SearchBar";
import { Route, Routes } from "react-router-dom";
import Discover from "./pages/Discover";
import TopArtists from "./pages/TopArtists";
import AroundYou from "./pages/AroundYou";
import TopCharts from "./pages/TopCharts";
import { ArtistDetails, Search, SongDetails } from "./pages";
import { TopPlay, MusicPlayer } from "./components";

const App = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
          <SearchBar />

          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">
              <Routes>
                <Route path="/" element={<Discover />} />
                <Route path="/top-artists" element={ <TopArtists /> } />
                <Route path="/top-charts" element={<TopCharts />} />
                <Route path="/around-you" element={<AroundYou />} />
                <Route path="/artists/:id" element={<ArtistDetails />} />
                <Route path="/songs/:songid" element={<SongDetails /> } />
                <Route path="/search/:searchTerm" element={<Search />} />
              </Routes> 
            </div>
            <div className="xl:sticky relative top-0 h-fit">
             <TopPlay /> 
            </div>
          </div>
        </div>

         {/* {activeSong?.title && (
          <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
        )}  */}
      </div>

  
    </>
  );
};

export default App;
