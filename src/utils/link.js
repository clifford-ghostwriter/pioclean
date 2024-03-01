import { FaHome } from "react-icons/fa";
import { BiSolidNotepad } from "react-icons/bi";
import { MdLocalLaundryService } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import dirtyClothes from "../assests/dirtyclothes.png";
import cleanClothes from "../assests/cleanclothes.png";
import washingMachine from "../assests/washingmachine.png";
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
    icon: <MdOutlineLocalLaundryService />,
  },
  {
    id: 4,
    text: "price list",
    url: "/pricelist",
    icon: <MdOutlinePriceChange />,
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
    icon: <IoMdContacts />,
  },
];

export const slides = [
  {
    text: "clean clothes",
    Image: { cleanClothes },
  },
  {
    text: "dirty clothes",
    Image: { dirtyClothes },
  },
  {
    text: "washing machine",
    Image: { washingMachine },
  },
];
