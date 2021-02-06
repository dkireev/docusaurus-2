import React from "react";
import classnames from "classnames";
import Feature from "../components/Feature";
import features from "./features";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";

const Home = () => (
  <div>
    <Header className={classnames("hero hero--primary")}>
      <div className="container">
        <h1 className="hero__title">Filters for ventilation system R 200 V</h1>
        <p className="hero__subtitle">Fresh air at your home forever!</p>
        <Buttons>
          <a
            className={classnames(
              "button button--outline button--secondary button--lg"
            )}
            href="#"
          >
            Get Started now
          </a>
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

export default React.memo(Home);
