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
    id: 4,
    text: "services",
    url: "/service",
    icon: <RiLockPasswordFill />,
  },
  {
    id: 4,
    text: "price list",
    url: "/pricelist",
    icon: <RiLockPasswordFill />,
  },
  {
    id: 3,
    text: "order online",
    url: "/order",
    icon: <MdLocalLaundryService />,
  },

  // {
  //   id: 4,
  //   text: "reset password",
  //   url: "/passwordreset",
  //   icon: <RiLockPasswordFill />,
  // },

  {
    id: 4,
    text: "contact us",
    url: "/contact",
    icon: <RiLockPasswordFill />,
  },
];
