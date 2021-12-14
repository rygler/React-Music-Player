import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div>
      <div className={`library ${libraryStatus ? "active-library" : ""}`}>
        <h2>Library</h2>
        <div className="library-songs">
          {songs.map((song) => (
            <LibrarySong
              setCurrentSong={setCurrentSong}
              setSongs={setSongs}
              song={song}
              songs={songs}
              key={song.id}
              audioRef={audioRef}
              isPlaying={isPlaying}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
