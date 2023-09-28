export async function getStaticProps() {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon/",
  );
  const json = await data.json();
  console.log(json);
  return {
    props: {
      pokemons: json.results 
    },
  };
}
