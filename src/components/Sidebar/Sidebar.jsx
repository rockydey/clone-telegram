import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Menu } from "lucide-react";
import RingLoader from "react-spinners/ClipLoader";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import moment from "moment";

const Sidebar = () => {
  //   const [chat1, setChat1] = useState([]);
  //   const [chat2, setChat2] = useState([]);

  const { data: chatData = [], isPending } = useQuery({
    queryKey: ["chatData"],
    queryFn: async () => {
      const res = await axios.get(
        "https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888"
      );
      return res.data.data;
    },
  });

  if (isPending) {
    return (
      <div className='flex items-center justify-center my-40'>
        <RingLoader />
      </div>
    );
  }
  const chat1 = chatData.filter((chat) => chat.sender_id === 1);
  const chat2 = chatData.filter((chat) => chat.sender_id === 3828);

  return (
    <div className='px-5'>
      <div className='flex items-center gap-4 py-5'>
        <Menu width={35} className='text-zinc-500 cursor-pointer' />
        <input
          type='text'
          className='bg-zinc-400 w-full bg-opacity-40 outline-none py-3 rounded-full px-5'
          placeholder='Search'
          name=''
          id=''
        />
      </div>
      <div>
        <div>
          {chat1.slice(-1).map((allChat) => (
            <div
              key={allChat.id}
              className='mt-5 cursor-pointer flex items-center gap-3'>
              <div>
                <img
                  className='w-16 rounded-full'
                  src={img1}
                  alt='chat image'
                />
              </div>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <p className='font-medium'>{allChat.sender.name}</p>
                  <p className='text-slate-500'>
                    {moment.utc(allChat.created_at).format("hh:mm A")}
                  </p>
                </div>
                <p className='text-slate-500'>
                  {allChat.message.slice(0, 35)}...
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          {chat2.slice(-1).map((allChat) => (
            <div
              key={allChat.id}
              className='mt-5 cursor-pointer flex items-center gap-3'>
              <div>
                <img
                  className='w-16 rounded-full'
                  src={img2}
                  alt='chat image'
                />
              </div>
              <div className='space-y-2'>
                <div className='flex gap-24'>
                  <p className='font-medium'>{allChat.sender.name}</p>
                  <p className='text-slate-500'>
                    {moment.utc(allChat.created_at).format("hh:mm A")}
                  </p>
                </div>
                <p className='text-slate-500'>
                  {allChat.message.slice(0, 35)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
