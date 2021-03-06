import React from "react";
import { Link } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import Payments from "../../components/footer/accepted-payments/payments.component";

import "./homepage.styles.scss";
import "./mobile/1200.homepage.scss";
import "./mobile/1024.homepage.scss";
import "./mobile/768.homepage.scss";
import "./mobile/480.homepage.scss";
import "./mobile/320.homepage.scss";


const HomePage = () => {
    return (
        <div className="homepage">
            <div className="showcase container">
                <div className="greetings-div">
                    <h1 className="greetings">Welcome To</h1>
                    <h2 className="title">
                        Greenwood
                        <br /> Furniture
                    </h2>
                    <Link to="/collection">
                        <button className="collection-btn">
                            View Collection
                        </button>
                    </Link>
                </div>
                <Directory />
            </div>
            <section className="about-section container">
                <div className="about-paragraph">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Repudiandpae praesentium officia laudantium
                        eligendi quas voluptatem sapiente, fugiat at esse cum,
                        iure nobis quam mollitia! Aspernatur reiciendis
                        veritatis atque provident tempore iure fuga, corrupti
                        sequi illum amet numquam sed laboriosam consequuntur?
                    </p>

                    <br />

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eligendi quas recusandae distinctio perspiciatis!
                        Esse magnam, ab aliquam ut sint a, sit eaque impedit
                        illo ex odio placeat voluptatum quaerat ipsam!
                    </p>

                    <br />

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eligendi quas recusandae distinctio perspiciatis!
                        Esse magnam, ab aliquam ut sint a, sit eaque impedit
                        illo ex odio placeat voluptatum quaerat ipsam!
                    </p>
                </div>
                <img
                    className="about-sofa"
                    src={require("../../assets/images/sofa-hd.png").default}
                    alt=""
                />
            </section>
            <section className="identify-section container">
                <div className="identify-info">
                    <h2>Identifying Quality Furniture</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptatum beatae dicta blanditiis asperiores
                        assumenda sapiente sunt! Optio voluptatum rerum
                        perferendis fugiat sequi. Laboriosam, repudiandae
                    </p>
                    <br />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptatum beatae dicta blanditiis asperiores
                        assumenda sapiente sunt! Optio voluptatum rerum
                        perferendis fugiat sequi. Laboriosam, repudiandae
                        accusamus.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptatum beatae dicta blanditiis asperiores
                        assumenda sapiente sunt! Optio voluptatum rerum
                        perferendis fugiat sequi. Laboriosam, repudiandae
                        accusamus.
                    </p>
                </div>
                <div className="iframe">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/VEiJ4Bsnaeo"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
            <Payments />
        </div>
    );
};

export default HomePage;
