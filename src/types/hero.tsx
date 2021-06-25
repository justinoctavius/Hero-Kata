import superpower from "./superpower";

type Hero = {
  name: string;
  nickname: string;
  age: number;
  raze: string;
  description: string;
  superpowers: superpower[];
  image: string;
  gender: string;
};

export default Hero;