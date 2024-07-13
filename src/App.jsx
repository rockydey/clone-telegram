import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className='flex h-screen'>
      <div className='w-[25%]'>
        <Sidebar />
      </div>
      <div
        style={{ backgroundImage: 'url("/src/assets/chatbg.png")' }}
        className='w-[75%] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
