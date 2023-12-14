//import { signOut } from 'next-auth/react';
import { BiLogOut } from "react-icons/bi";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";

//import useCurrentUser from '@/hooks/useCurrentUser';

//import SidebarItem from './SidebarItem';
///import SidebarLogo from './SidebarLogo';
//import SidebarTweetButton from './SidebarTweetButton';

const Sidebar = () => {
  const items = [
    {
      icon: BsHouseFill,
      label: "Home",
      href: "/",
    },
    {
      icon: BsBellFill,
      label: "Notifications",
      href: "/notifications",
      //auth: true,
      // alert: currentUser?.hasNotification
    },
    {
      icon: FaUser,
      label: "Profile",
      href: "/user/123",
      //  href: `/users/${currentUser?.id}`,
      // auth: true,
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
