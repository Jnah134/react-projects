import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobal } from './context';

const Home = () => {
  const { openModal, openSidebar } = useGlobal();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
