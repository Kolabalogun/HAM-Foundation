import hand from "../../../assets/hands-white.png";
import hand1 from "../../../assets/hands-gray.png";
import charity from "../../../assets/charity-white.png";
import charity1 from "../../../assets/charity-gray.png";
import donation from "../../../assets/donation-white.png";
import donation1 from "../../../assets/donation-gray.png";

export type contentType = {
  id: number;
  img: string;
  img2: string;
  title: string;
  txt: string;
};

const content: contentType[] = [
  {
    id: 0,
    img: hand,
    img2: hand1,
    title: "Become a Volunteer",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam.",
  },
  {
    id: 1,
    img: charity,
    img2: charity1,
    title: "Start Donating",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam.",
  },
  {
    id: 2,
    img: donation,
    img2: donation1,
    title: "Join Our Community",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam.",
  },
];

export default content;
