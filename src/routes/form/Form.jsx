import React from "react";
import { useState } from "react";
import Container from "../../utilis/Container";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Form = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        number: '',
        select: '',
        sity: '',
    })
    console.log(formData);

    const createStatement = (e) => {
        e.preventDefault();
        dispatch(
            {
                user: formData,
                type: "FORM_DATA"
            }
        )
        if(dispatch){
            history.push('/list')
        }
    }


  return (
    <section>
      <Container>
        <div className="form">
          <form className="form__statement" onSubmit={createStatement}>
            <div>
              <label>Ismingiz</label>
              <input 
              type="text" 
              placeholder="Ismingiz"
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
            </div>
            <div>
              <label>Familiyangiz</label>
              <input type="text" placeholder="Ismingiz"
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
            <div>
              <label >Guruh no'meringiz</label>
              <input type="number" maxLength="4" size="4" 
              onChange={(e) => setFormData({...formData, number: e.target.value})}
              />
            </div>
            <div>
              <label >Tug'ilgan joy(shaxar)</label>
              <select onChange={(e) => setFormData({...formData, select: e.target.value})}>
                <option value="Andijon">Andijon</option>
                <option value="Namangan">Namangan</option>
                <option value="Farg'ona">Farg'ona</option>
              </select>
            </div>
            <div>
              <label >Tugilgan joy(tuman)</label>
              <input type="text" placeholder="Tumaningiz" 
              onChange={(e) => setFormData({...formData, sity: e.target.value})}
              />
            </div>
            <div>
              <label >Pasport</label>
              <input type="file" 
              onChange={(e) => setFormData({...formData, document: e.target.value})}
              />
            </div>
            <button>Add to List</button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Form;
