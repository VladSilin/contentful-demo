import React from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HomePage = ({ data }: PageProps<Queries.HomePageQuery>) => {
  return (
    <>
      <section className="bg-sky-950">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            {data.contentfulHeroBanner?.header}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
            {data.contentfulHeroBanner?.subheader}
          </p>
        </div>
      </section>
      <div className="relative overflow-auto p-8 bg-sky-100 min-h-screen">
        <div
          className={`grid grid-cols-${data.contentfulFlexibleZone?.columns} grid-rows-${data.contentfulFlexibleZone?.rows} gap-6 font-mono text-black text-sm text-center font-bold leading-6 rounded-lg`}
        >
          {data.contentfulFlexibleZone?.products?.map((p, i) => (
            <div
              id={`card-${i}`}
              key={i}
              className={`p-4 rounded-lg shadow-xl bg-white grid place-content-center row-span-${p?.rowSpan} col-span-${p?.columnSpan}`}
            >
              <h3>{p?.cardTitle}</h3>
              <div>
                <GatsbyImage
                  image={getImage(p?.cardArt || null)}
                  alt="card art"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query HomePage {
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
    contentfulHeroBanner(contentful_id: { eq: "4xg5cANsIrthwVnqnWhLMt" }) {
      header
      subheader
    }
  }
`;
