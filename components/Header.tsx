"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import Button from "@/components/Button";
import useAuthModal from "@/hooks/useAuthModal";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const authModal = useAuthModal();
  const router = useRouter();
  const handleLogout = () => {
    //Handle Logout
  };
  return (
    <div
      className={twMerge(`h-fit bg-gradient-to-b from-cyan-800 p-6`, className)}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-neutral-950 flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-neutral-100" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-neutral-950 flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight className="text-neutral-100" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-neutral-100 flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-neutral-950" size={20} />
          </button>
          <button className="rounded-full p-2 bg-neutral-100 flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-neutral-950" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={authModal.onOpen}
                className="bg-transparent text-neutral-300 font-medium"
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button
                onClick={authModal.onOpen}
                className="bg-neutral-100 px-6 py-2"
              >
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
