import { Helmet } from "react-helmet-async";

function SEO({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default SEO;
