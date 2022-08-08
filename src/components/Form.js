import React from "react";
import {useRef} from 'react'



function Form() {


    const get_name = useRef();
    const get_email = useRef();
    const get_profession = useRef();
    const get_image = useRef();

    function clickHandler(){
        get_name.current.value = "";
        get_email.current.value = "";
        get_profession.current.value = "";
        get_image.current.value = "";
    }
    return (
        <div className="form-feild">
            <div className="form-input">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" ref={get_name} />
            </div>
            <div className="form-input">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" ref={get_email}/>
            </div>
            <div className="form-input">
                <label htmlFor="profession">Profession: </label>
                <input type="text" id="profession" ref={get_profession}/>
            </div>

            <label className="inputTag">
                Select Image
                <input type="file" accept="image" id="img" ref={get_image}/>
            </label>

            <button className="form-btn" onClick={clickHandler}>Generate</button>
        </div>
    )
}

export default Form;