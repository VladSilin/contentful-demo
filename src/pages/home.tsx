import React from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HomePage = ({ data }: PageProps<Queries.HomePageQuery>) => {
  return (
    <>
      <section id="hero-banner" className="bg-sky-950">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mt-2 mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            {data.contentfulHeroBanner?.header}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
            {data.contentfulHeroBanner?.subheader}
          </p>
        </div>
      </section>
      <section id="card-product-zone">
        <div className="relative overflow-auto p-8 bg-sky-100 min-h-screen">
          <div
            className={`grid grid-cols-1 md:grid-cols-${data.contentfulFlexibleZone?.columns} grid-rows-${data.contentfulFlexibleZone?.rows} gap-6 font-mono text-black text-xl text-center font-bold leading-6 rounded-lg`}
          >
            {data.contentfulFlexibleZone?.products?.map((p, i) => (
              <div
                id={`card-${i}`}
                key={i}
                className={`p-4 rounded-md md:rounded-lg shadow-xl bg-white grid row-span-${p?.rowSpan} col-span-1 md:col-span-${p?.columnSpan}`}
              >
                <div className="p-1 pb-6 row-span-1">
                  <h3>{p?.cardTitle}</h3>
                </div>
                <div className="p-1 pb-6">
                  <GatsbyImage
                    image={getImage(p?.cardArt || null)}
                    alt="card art"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query HomePage {
    contentfulHeroBanner(contentful_id: { eq: "4xg5cANsIrthwVnqnWhLMt" }) {
      header
      subheader
    }
    contentfulFlexibleZone(contentful_id: { eq: "3O49w84jGjrNTeRWzzvrZ0" }) {
      rows
      columns
      products {
        columnSpan
        rowSpan
        cardTitle
        cardArt {
          gatsbyImageData(width: 200)
        }
      }
    }
  }
`;
