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
import basicPlan from "../assests/planimages/basicplanImage.jpg";
import elitePlan from "../assests/planimages/eliteplanImage.jpg";
import unlimitedPlan from "../assests/planimages/unlimitedImage.jpg";

// pricelist images
import suit from "../assests/priceimages/shirts/suits.jpg";
import agbada from "../assests/priceimages/shirts/agbada.jpg";
import denim from "../assests/priceimages/shirts/denim.jpg";
import hanginShirt from "../assests/priceimages/shirts/hanging shirt.webp";
import ironedShirt from "../assests/priceimages/shirts/ironedshirt.webp";
import trousers from "../assests/priceimages/shirts/plaintrousers.jpg";
import tshirt from "../assests/priceimages/shirts/tshirt.jpg";

// female
import dress from "../assests/priceimages/ladies/dress.jpg";
import bedsheet from "../assests/priceimages/duvet and towel/bedsheet.jpg";
import duvet from "../assests/priceimages/duvet and towel/duvet.jpg";
import pyjamas from "../assests/priceimages/duvet and towel/pyjamas.webp";
import towel from "../assests/priceimages/duvet and towel/towel.jpg";

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
    id: 5,
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
    id: 6,
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

export const monthlyplan = [
  {
    plan: "basic",
    amount: 1000,
    image: basicPlan,
  },

  {
    plan: "elite",
    amount: 2000,
    image: elitePlan,
  },
  {
    plan: "unlimited",
    amount: 3000,
    image: unlimitedPlan,
  },
];

// import suit from "../assests/priceimages/shirts/suits.jpg"
// import agbada from "../assests/priceimages/shirts/agbada.jpg"
// import denim from "../assests/priceimages/shirts/denim.jpg"
// import hanginShirt from "../assests/priceimages/shirts/hanging shirt.webp"
// import ironedShirt from "../assests/priceimages/shirts/ironedshirt.webp"
// import trousers from "../assests/priceimages/shirts/plaintrousers.jpg"
// import tshirt from "../assests/priceimages/shirts/tshirt.jpg"

// import dress from "../assests/priceimages/ladies/dress.jpg"
// import bedsheet from "../assests/priceimages/duvet and towel/bedsheet.jpg"
// import duvet from "../assests/priceimages/duvet and towel/duvet.jpg"
// import pyjamas from "../assests/priceimages/duvet and towel/pyjamas.webp"
// import towel from "../assests/priceimages/duvet and towel/towel.jpg"

export const prices = [
  {
    name: "suit",
    image: suit,
    price: 1000,
  },
  {
    name: "agbada",
    image: agbada,
    price: 1000,
  },
  {
    name: "denim",
    image: denim,
    price: 1000,
  },
  {
    name: "hangin shirt",
    image: hanginShirt,
    price: 1000,
  },
  {
    name: "ironed shirt",
    image: ironedShirt,
    price: 1000,
  },
  {
    name: "trousers",
    image: trousers,
    price: 1000,
  },
  {
    name: "t shirt",
    image: tshirt,
    price: 1000,
  },
  {
    name: "dress",
    image: dress,
    price: 1000,
  },
  {
    name: "bedsheet",
    image: bedsheet,
    price: 1000,
  },
  {
    name: "duvet",
    image: duvet,
    price: 1000,
  },
  {
    name: "pyjamas",
    image: pyjamas,
    price: 1000,
  },
  {
    name: "towel",
    image: towel,
    price: 1000,
  },
];
