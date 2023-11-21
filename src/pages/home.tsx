import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HomePage = ({ data }) => {
  return (
    <div className="relative overflow-auto p-8 bg-sky-100 min-h-screen">
      <div
        className={`grid grid-cols-${data.contentfulFlexibleZone.columns} grid-rows-${data.contentfulFlexibleZone.rows} gap-6 font-mono text-black text-sm text-center font-bold leading-6 rounded-lg`}
      >
        {data.contentfulFlexibleZone.products.map((p, i) => (
          <div
            id={`card-${i}`}
            key={i}
            className={`p-4 rounded-lg shadow-xl bg-white grid place-content-center row-span-${p.rowSpan} col-span-${p.columnSpan}`}
          >
            <h3>{p.cardTitle}</h3>
            <div>
              <GatsbyImage image={getImage(p.cardArt)} alt="card art" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

export const pageQuery = graphql`
  {
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
