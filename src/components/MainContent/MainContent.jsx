import { useState } from "react";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdCall, IoMdSend } from "react-icons/io";
import { IoMicOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";

const MainContent = ({ chat }) => {
  const [message, setMessage] = useState("");
  const [textValue, setTextValue] = useState("");
  const [display, setDisplay] = useState(false);

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleDisplay = () => {
    setDisplay(true);
    setTextValue(message);
    setMessage("");
  };

  return (
    <div>
      {chat.length === 0 ? (
        <div className='w-full flex justify-center items-center h-screen'>
          <h1 className='text-base w-fit bg-neutral-500 bg-opacity-75 px-4 py-2 rounded-full font-semibold text-white'>
            Select a chat to start messaging
          </h1>
        </div>
      ) : (
        <div className='relative'>
          <div className='bg-white py-5 border-s px-5 flex justify-between items-center'>
            <div>
              <p className='font-semibold text-lg'>{chat[0].sender.name}</p>
              <p className='text-slate-500'>last seen 9 hours ago</p>
            </div>
            <div className='flex gap-5 text-slate-500 text-2xl'>
              <IoSearchOutline className='cursor-pointer' />
              <IoMdCall className='cursor-pointer' />
              <BsLayoutSidebarReverse className='cursor-pointer' />
              <HiDotsVertical className='cursor-pointer' />
            </div>
          </div>
          <div className='h-[625px] flex flex-col justify-end'>
            <div id='displayMessage' className='space-y-3 px-5 mb-3'>
              {chat.slice(-5).map((c) => (
                <p
                  className='bg-white px-5 rounded-e-xl rounded-t-xl py-4 w-fit'
                  key={c.id}>
                  {c.message}
                </p>
              ))}
              {display && (
                <div className='float-right'>
                  <p className='bg-white px-5 rounded-s-xl rounded-t-xl py-4 w-fit'>
                    {textValue}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className='bg-white py-4 border-s fixed bottom-0 w-full'>
            <div className='px-5 flex justify-between relative'>
              <div className='flex items-center'>
                <MdOutlineAttachFile className='text-2xl cursor-pointer text-slate-500 rotate-45' />
                <input
                  value={message}
                  onChange={handleMessage}
                  type='text'
                  className='px-5 outline-none w-full text-lg'
                  placeholder='Write a message...'
                />
              </div>
              <div className='text-2xl absolute top-1 left-[69%] flex items-center gap-4 text-slate-500'>
                <GrEmoji className='cursor-pointer' />
                {message ? (
                  <IoMdSend
                    onClick={handleDisplay}
                    className='cursor-pointer text-[#0088cc]'
                  />
                ) : (
                  <IoMicOutline className='cursor-pointer' />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
