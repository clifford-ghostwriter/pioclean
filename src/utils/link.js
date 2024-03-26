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
import organizationPlan from "../assests/planimages/organizationimage.jpeg";

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

// partners
import partnerOne from "../assests/partners/partner1.png";
import partnerTwo from "../assests/partners/partner2.png";

// services
import { GiWashingMachine } from "react-icons/gi";
// import { PiNeedleDuotone } from "react-icons/pi";
import { PiVanBold } from "react-icons/pi";
import { BsFillHousesFill } from "react-icons/bs";
import { GiSewingNeedle } from "react-icons/gi";
import { GiFactory } from "react-icons/gi";
import { HiBuildingOffice2 } from "react-icons/hi2";

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
    text: "bag up your dity clothes",
  },
  {
    image: washingmachineone,
    text: "we pick up and wash your clothes",
  },

  {
    image: cleanclothesone,
    text: "we clean your clothes to perfection",
  },
  {
    image: drycleanedclothes,
    text: "we deliver clean and neatly packaged clothes",
  },
];

export const testimonies = [
  {
    image: ben,
    name: "David Awoniyi",
    text: "I haven’t had too much experience with dry cleaners in the past, but i was please with the service i received at The Laundry Box. The prices were reasonable and my items were ready at the time they were supposed to bready at. I’d go back!",
    occupation: "Banker",
  },
  {
    image: hannah,
    name: "Femi Adelaja",
    text: "The Laundry Box treats their customers with the utmost respect and courtesy. The employees are so friendly and really want to help all of the customers that walk through the door. You can point out what stubborn stains need to be treated and they do their best to get rid of them for you. I’d trust any of my items tothese cleaners",
    occupation: "Engineer",
  },
  {
    image: dave,
    name: "dave david",
    text: "The Laundry Box treats their customers with the utmost respect and courtesy. The employees are so friendly and really want to help all of the customers that walk through the door. You can point out what stubborn stains need to be treated and they do their best to get rid of them for you. I’d trust any of my items tothese cleaners",
    occupation: "Engineer",
  },
  {
    image: josh,
    name: "josh joshua",
    text: "I haven’t had too much experience with dry cleaners in the past, but i was please with the service i received at The Laundry Box. The prices were reasonable and my items were ready at the time they were supposed to bready at. I’d go back!",
    occupation: "Banker",
  },
];

export const monthlyplan = [
  {
    plan: "basic",
    amount: 1000,
    image: basicPlan,
    features: [
      "covers only one person",
      "covers unlimited dirty clothes",
      "two pickup monthly",
      "free laundry bag",
      "free amendment item",
      "covers two duvet monthly",
    ],
  },

  {
    plan: "elite",
    amount: 2000,
    image: elitePlan,
    features: [
      "covers only one person",
      "covers unlimited dirty clothes",
      "two pickup monthly",
      "free laundry bag",
      "free amendment item",
      "covers two duvet monthly",
    ],
  },
  {
    plan: "unlimited",
    amount: 3000,
    image: unlimitedPlan,
    features: [
      "covers only one person",
      "covers unlimited dirty clothes",
      "two pickup monthly",
      "free laundry bag",
      "free amendment item",
      "covers two duvet monthly",
    ],
  },
  {
    plan: "organization",
    amount: 5000,
    image: organizationPlan,
    features: [
      "covers only one person",
      "covers unlimited dirty clothes",
      "two pickup monthly",
      "free laundry bag",
      "free amendment item",
      "covers two duvet monthly",
    ],
  },
];

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

export const partners = [partnerOne, partnerTwo, partnerOne, partnerTwo];

export const whyUs = [
  {
    heading: "Quality and unique services",
    text: ` We have a 
    community of professionals that deliver 
    quality services that meet your needs.`,
  },
  {
    heading: "Safe and transparent system",
    text: `  Your items and personal
     data with us are 100% secured. Track your
     requests from conception to delivery.`,
  },
  {
    heading: "User friendly technology",
    text: `  Our channels are user friendly,
                thereby making your online process seamless and effective.`,
  },
  {
    heading: "24hours support system",
    text: `  We have a team of professionals ready to support 
    and provide assistance through our various online outlet at anytime .`,
  },
  {
    heading: "Flexible payment systems",
    text: `  We have a flexible payment system, payment can be made through 
    various payment channels.`,
  },
];

export const services = [
  {
    icon: <PiVanBold />,
    text: "pickup and delivery",
  },
  {
    icon: <GiSewingNeedle />,
    text: "garment repair",
  },
  // {
  //   icon: <PiNeedleDuotone />,
  //   text: "garment repair",
  // },
  {
    icon: <GiWashingMachine />,
    text: "laundry service",
  },

  {
    icon: <BsFillHousesFill />,
    text: "household cleaning",
  },

  {
    icon: <GiFactory />,
    text: "factory cleaning",
  },

  {
    icon: <HiBuildingOffice2 />,
    text: "office cleaning",
  },
];
