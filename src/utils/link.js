import { FaHome } from "react-icons/fa";
import { BiSolidNotepad } from "react-icons/bi";
import { MdLocalLaundryService } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <FaHome />,
  },

  {
    id: 2,
    text: "abou us",
    url: "/about",
    icon: <BiSolidNotepad />,
  },
  {
    id: 3,
    text: "requests",
    url: "/request",
    icon: <MdLocalLaundryService />,
  },

  {
    id: 4,
    text: "reset password",
    url: "/passwordreset",
    icon: <RiLockPasswordFill />,
  },
];
