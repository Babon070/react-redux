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
          <div className="list__desc">
            <span>Ism:</span>
            {saveInfo?.user?.firstName ? saveInfo?.user?.firstName : <></>}
          </div>
          <div className="list__desc">
            <span>Familiya:</span>
            {saveInfo?.user?.lastName ? saveInfo?.user?.lastName : <></>}
          </div>
          <div className="list__desc">
            <span>Guruh nomer:</span>
            {saveInfo?.user?.number ? saveInfo?.user?.number : <></>}
          </div>
          <div className="list__desc">
            <span>Tug'ilgan shaxar:</span>
            {saveInfo?.user?.select ? saveInfo?.user?.select : <></>}
          </div>
          <div className="list__desc">
            <span>Document:</span>
            {saveInfo?.user?.document ? saveInfo?.user?.document : <></>}
          </div>
          <div className="list__desc">
            <span>Yashah manzilingiz:</span>
            {saveInfo?.user?.sity ? saveInfo?.user?.sity : <></>}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default List;
