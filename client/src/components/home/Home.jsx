export default function Home() {
    return (
        <div className="home">
          
            <div className="banner divider">
                <img src="../../public/images/banner.png" alt="banner image" />
            </div>
            
            <div>
                <div className="content-wrap home">
                    <div className="macarons-line first-macarons-line">
                        <img src="../../public/images/macarons_line.png" alt="macarons image" />
                    </div>

                    <section id="introduction">
                        <h2>Welcome to the cooking blog!</h2>
                        <p>
                            Here, you can explore a selection of delicious recipes
                            <br />
                            or share with us some of your own.
                        </p>
                    </section>

                    <div className="macarons-line second-macarons-line">
                        <img src="../../public/images/macarons_line.png" alt="macarons image" />
                    </div>
                </div>
            </div>
        </div>
    );
}