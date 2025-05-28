import { Building2, ChartArea, CalendarCheck, Users } from "lucide-react";
import { img1, img2, img3 } from "@assets/index";

export const STATS_DATA = [
  {
    Icon: <ChartArea className="text-primary w-6" />,
    count: "1M+",
    label: "Sqft Area Constracted ",
  },
  {
    Icon: <Building2 className="text-primary w-6" />,
    count: "180",
    label: "Sqft Area Constracted ",
  },
  {
    Icon: <CalendarCheck className="text-primary w-6" />,
    count: "25",
    label: "Years of Exprience",
  },
  {
    Icon: <Users className="text-primary w-6" />,
    count: "151",
    label: "Trainded Profesionals",
  },
];

export const SERVICES = [
  {
    img: img1,
    title: "Pre-Construnction",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum minima nam excepturi saepe sint harum! Exercitationem eveniet, vel explicabo ab molestias eius in eos quos enim eligendi adipisci, fuga sapiente?",
  },
  {
    img: img2,
    title: "General Constructing",
    description:
      "Amet consectetur adipisicing elit. Laborum minima nam excepturi saepe sint harum! Exercitationem eveniet, vel explicabo ab eius in eos quos enim eligendi adipisci, fuga sapiente?",
  },
  {
    img: img3,
    title: "Design Build",
    description:
      "Fuga sapiente? lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum minima nam saepe sint harum! Exercitationem eveniet, vel explicabo ab molestias eius in eos quos ",
  },
];
