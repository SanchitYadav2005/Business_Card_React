import React from "react";



function Form() {
    return (
        <div className="form-feild">
            <div className="form-input">
                <label for="name">Name: </label>
                <input type="text" id="name" />
            </div>
            <div className="form-input">
                <label for="email">Email: </label>
                <input type="email" id="email" />
            </div>
            <div className="form-input">
                <label for="profession">Profession: </label>
                <input type="text" id="profession" />
            </div>

            <label className="inputTag">
                Select Image
                <input type="file" accept="image" id="img" />
            </label>

            <button className="form-btn">Generate</button>
        </div>
    )
}

export default Form;