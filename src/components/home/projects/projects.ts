import img from "../../../assets/hero2.jpg";

export type projectType = {
  id: number;
  img: string;

  title: string;
  txt: string;
  date: string;
  location: string;
  link: string;
};

export const project: projectType[] = [
  {
    id: 0,
    img: img,

    link: "/article/1",
    location: "Malete, Ilorin",
    date: "Aug 10, 2023",
    title: "Become a Volunteer",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam.",
  },
];
export const featuredproject: projectType[] = [
  {
    id: 0,
    img: img,

    link: "/article/1",
    location: "Malete, Ilorin",
    date: "Aug 10, 2023",
    title: "Become a Volunteer",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam.",
  },
];
