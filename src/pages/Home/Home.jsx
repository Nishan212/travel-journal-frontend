import React from 'react';
import Blogs from '../../components/Blogs/BlogsComponent';
import NavBar from '../../components/NavBar/NavBarComponent';

function Home() {
  return (
    <>
      <NavBar page="home" />
      <Blogs />
    </>
  );
}

export default Home;
