import { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [chat, setChat] = useState([]);

  return (
    <div className='flex h-screen'>
      <div className='w-[25%]'>
        <Sidebar setChat={setChat} />
      </div>
      <div
        style={{ backgroundImage: 'url("/src/assets/chatbg.png")' }}
        className='w-[75%] bg-cover bg-center bg-no-repeat'>
        <MainContent chat={chat} />
      </div>
    </div>
  );
}

export default App;
