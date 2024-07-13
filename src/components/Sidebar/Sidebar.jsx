import { Menu } from "lucide-react";

const Sidebar = () => {

  return (
    <div>
      <div className='flex items-center gap-4 p-5'>
        <Menu width={35} className="text-zinc-500 cursor-pointer" />
        <input
          type='text'
          className='bg-zinc-400 w-full bg-opacity-40 outline-none py-3 rounded-full px-5'
          placeholder='Search'
          name=''
          id=''
        />
      </div>
    </div>
  );
};

export default Sidebar;
