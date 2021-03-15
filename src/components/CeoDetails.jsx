import { useParams } from "react-router-dom";

const CeoDetails = ({ ceos }) => {
  const { ceo_slug } = useParams();
  const ceo = ceos.find((ceo) => {
    return ceo.slug === ceo_slug ? ceo : null;
  });

  //   const ceo = await fetch(`http://127.0.0.1:3333/ceo/${ceo_slug}`)

  return (
    <>
      <h1>{ceo.name}</h1>
      <h3>
        {ceo.name} was CEO of Apple in {ceo.year}
      </h3>
    </>
  );
};

export default CeoDetails;
