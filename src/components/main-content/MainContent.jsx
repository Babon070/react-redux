import React from "react";
import Container from "../../utilis/Container";
import "./MainContent.scss";

const MainContent = () => {
  return (
    <section className="main">
      <Container>
        <div className="main__content">
          <div>
            <h1>Кампус</h1>
            <p>
              Кампус университета – это место, где расположены учебные корпуса,
              научные лаборатории, студенческие общежития, библиотеки, столовая
              и спортивные центры вуза.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainContent;
