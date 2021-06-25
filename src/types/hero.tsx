import superpower from "./superpower";

type hero = {
  name: string;
  nickname: string;
  age: number;
  partners: hero[];
  raze: string;
  description: string;
  superpowers: superpower[]
};

export default hero;