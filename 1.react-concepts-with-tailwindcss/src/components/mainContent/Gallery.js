import React from "react";

const Profile = () => {
  return (
    <div>
      <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
    </div>
  );
};

const Gallery = () => {
  return (
    <>
      <section>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </>
  );
};

export default Gallery;
