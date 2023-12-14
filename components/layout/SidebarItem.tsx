import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  //auth?: boolean;
  //alert?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div
        className="
       relative
        rounded-full 
        h-14
        w-14
        flex
        items-center
        justify-center 
        p-4
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer 
        lg:hidden"
      >
        <Icon size={28} color="red" />
      </div>
      <div
        className=" 
       relative
        hidden 
        lg:flex  
        gap-4 
        p-4 
        rounded-full 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer
        items-center"
      >
        <Icon size={24} color="red" />

        <p className="hidden lg:block text-red-950 text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
