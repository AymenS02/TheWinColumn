import React from 'react';
import "./Create.scss";

function Create() {
    return (
        <div className="create">
            <div className="box">
                <h1 className="title">Create a Course!</h1>
                <form className="create-form">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="details">Details</label>
                        <input type="text" placeholder="Details"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" placeholder="Price"/>
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
}

export default Create;