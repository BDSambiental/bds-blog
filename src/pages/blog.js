import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import SearchPosts from "../components/searchPosts";

class Blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;
    const localSearchBlog = data.localSearchBlog;

    return (
      <>
        <section
          class="banner"
          style={{ position: "relative", height: "350px" }}
        >
          <img
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%",
              filter: "brightness(0) invert(1)",
              zIndex: "99",
              width: "250px",
            }}
            class="bannerLogo"
            src="../images/logo.png"
            alt="Logo BDS Ambiental"
          />
          <div
            class="overlay"
            style={{
              background: "rgba(0,0,0,0.35)",
              position: "absolute",
              zIndex: "9",
              top: "0px",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <img
            style={{ width: `100%`, objectFit: `cover`, height: `100%` }}
            class="bannerImage"
            src="../images/banner.jpg"
            alt="Imagem Banner"
          />
        </section>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="Todas notícias" />
          <Bio />
          <SearchPosts
            posts={posts}
            localSearchBlog={localSearchBlog}
            navigate={navigate}
            location={location}
          />
        </Layout>
      </>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
