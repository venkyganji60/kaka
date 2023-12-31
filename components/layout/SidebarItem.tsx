import { useRouter } from "next/router";
import { useCallback } from "react";
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
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (href) {
      router.push(href);
    }
  }, [router, onClick, href]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
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

        <p className="hidden lg:block text-yellow-500 text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
