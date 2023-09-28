import { GetServerSideProps } from "next";

export const getServerProps: GetServerSideProps = async () => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const json = await data.json();

  return {
    props: {
      data: json.results,
    },
  };
};
