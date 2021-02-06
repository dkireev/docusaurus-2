import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Feature from "../components/Feature";
import features from "./features";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";

const Home = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <div>
      <Header className={classnames("hero hero--primary")}>
        <div className="container">
          <h1 className="hero__title">
            Filters for ventilation system R 200 V
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <Buttons>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg"
              )}
              to={useBaseUrl("docs/doc1")}
            >
              Get Started now
            </Link>
          </Buttons>
        </div>
      </Header>
      <main>
        {features && features.length && (
          <Section>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </Section>
        )}
      </main>
    </div>
  );
};

export default React.memo(Home);
