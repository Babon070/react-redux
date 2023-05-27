import React from "react";
import Container from "../../utilis/Container";
import campus from "../../asset/campus_univer.jpg";
import "./News.scss";

const News = () => {
  return (
    <section>
      <Container>
        <div className="news">
          <p className="news__desc">University Campus</p>
          <h3 className="news__head">Самая свежая архитектура и новости</h3>
          <p className="news__desc2">Интеграция кампуса и его города</p>
          <img src={campus} alt="" />

          <p className="news__desc3">
            Университетский городок имеет отличительную пространственную
            типологию. Созданные как микрорайоны, эти автономные среды
            подчиняются своим собственным правилам и системам. Они
            спроектированы как отклонение от городов, в которых они проводятся,
            чтобы обеспечить рост и распространение знаний за пределами
            статус-кво. Сосредоточенные вокруг передачи информации,
            академические центры становятся все более актуальными для урбанизма.
            Кампусы и принимающие их города эволюционируют, имитируя структуру
            друг друга, создавая возможности для обновления городов.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default News;
