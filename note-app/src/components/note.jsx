import React from "react";

const Note = ({ notes }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-10">

      {notes.map((item) => (
        <div
          key={item.id}
          className="relative w-[300px] h-[300px]"
        >
          {/* Sticky Note Image */}
          <img
            src="https://freepngimg.com/save/74899-note-notes-paper-sticky-post-it-png-file-hd/1161x1168"
            alt="Sticky Note"
            className="w-full h-full object-contain drop-shadow-2xl"
          />

          {/* Text on Image */}
          <div
            className="absolute
                       top-[18%]
                       left-[13%]
                       w-[72%]
                       h-[65%]
                       overflow-hidden"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            <h1 className="text-3xl text-gray-800 font-bold break-words">
              {item.note}
            </h1>

            <p className="mt-4 text-xl leading-7 text-gray-700 whitespace-pre-wrap break-words">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Note;