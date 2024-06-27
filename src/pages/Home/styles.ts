import tw from "tailwind-styled-components";

export const Container = tw.div`
  text-white
  px-4
  mt-8
  mb-12
  max-w-[1200px]
  mx-auto
`;

export const Title = tw.h1`
  text-lg
  text-center
  mb-2
  md:text-[32px]
  md:mb-4
`;

export const SubTitle = tw.h2`
  text-xs
  text-white/80
  text-center
  md:text-base
`;

export const Form = tw.form`
  flex
  flex-col
  items-center
  my-8
  space-y-5
`;