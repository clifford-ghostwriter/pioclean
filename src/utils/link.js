import { FaHome } from "react-icons/fa";
import { BiSolidNotepad } from "react-icons/bi";
// import { MdLocalLaundryService } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import dirtyClothes from "../assests/dirtyclothes.png";
import cleanClothes from "../assests/cleanclothes.png";
import washingMachine from "../assests/washingmachine.png";
import { GiClothes } from "react-icons/gi";
import dirtyclothesone from "../assests/dirty-clothes-02.avif";
import washingmachineone from "../assests/washing-machine-two.jpg";
import cleanclothesone from "../assests/clean-clothes-one.jpg";
import drycleanedclothes from "../assests/drycleanedclothes.avif";
import ben from "../assests/customer/ben.jpg";
import dave from "../assests/customer/dave.jpg";
import hannah from "../assests/customer/hannah.jpg";
import josh from "../assests/customer/customer-5.jpg";
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
    // icon: <MdLocalLaundryService />,
    icon: <GiClothes />,
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
    image: cleanClothes,
  },
  {
    text: "dirty clothes",
    image: dirtyClothes,
  },
  {
    text: "washing machine",
    image: washingMachine,
  },
];

export const orderSteps = [
  {
    image: dirtyclothesone,
  },
  {
    image: washingmachineone,
  },

  {
    image: cleanclothesone,
  },
  {
    image: drycleanedclothes,
  },
];

export const testimonies = [
  {
    image: ben,
    name: "ben benjamin",
  },
  {
    image: hannah,
    name: "hannah ann",
  },
  {
    image: dave,
    name: "dave david",
  },
  {
    image: josh,
    name: "josh joshua",
  },
];

export const sampleorder = [];
