import React from "react";
import Container from "../../utilis/Container";
import "./ListStyle.scss";
import { useSelector } from "react-redux";

const List = () => {
  const saveInfo = useSelector((state) => state.saveREducer);
  console.log(saveInfo.user);

  return (
    <section>
      <Container>
        <div className="list__info">
          <p className="list__desc">
            {saveInfo?.user?.firstName ? saveInfo?.user?.firstName : <></>}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default List;
