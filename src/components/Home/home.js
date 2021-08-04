import React from 'react';

const Home = ({onChange, title, onSubmit, onBlur}) => {

    return (
        <div className="wrapper">
            <form id="myForm" className="form-wrapper" noValidate onSubmit={onSubmit}>
                <div className="grid">
                    <div className="title">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder="Title"
                            id="title"
                        />
                    </div>
                </div>
                <div className="createAccount">
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    );
};

export default Home;