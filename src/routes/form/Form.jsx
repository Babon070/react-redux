import React from "react";
import { useState } from "react";
import Container from "../../utilis/Container";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Form.scss";

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    select: "",
    sity: "",
    document: "",
  });
  console.log(formData);

  const createStatement = (e) => {
    e.preventDefault();
    dispatch({
      user: formData,
      type: "FORM_DATA",
    });
    if (dispatch) {
      history.push("/list");
    }
  };

  return (
    <section className="form">
      <Container>
        <div className="form-wrap">
          <form className="form__statement" onSubmit={createStatement}>
            <h4 className="form-head">Ariza</h4>
            <div>
              <input
                className="input"
                type="text"
                placeholder="Ismingiz"
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Familiyangiz"
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Guruhingiz"
                maxLength="4"
                size="4"
                onChange={(e) =>
                  setFormData({ ...formData, number: e.target.value })
                }
              />
            </div>

            <div className="form-select">
              <select
                onChange={(e) =>
                  setFormData({ ...formData, select: e.target.value })
                }
              >
                <option value="Namangan">Namangan</option>
                <option value="Andijon">Andijon</option>
                <option value="Farg'ona">Farg'ona</option>
              </select>

              <input
                type="file"
                onChange={(e) =>
                  setFormData({ ...formData, document: e.target.value })
                }
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Tumaningiz"
                onChange={(e) =>
                  setFormData({ ...formData, sity: e.target.value })
                }
              />
            </div>
            {/* <div>
             
            </div> */}
            <button className="formBtn">Add to List</button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Form;
