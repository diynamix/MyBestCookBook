export default function Home() {
    return (
        <div class="home">
          
            <div class="banner divider">
                <img src="../../public/images/banner.png" alt="banner image" />
            </div>
            
            <div class="divider">
                <div class="content-wrap home">
                    <div class="macarons-line first-macarons-line">
                        <img src="../../public/images/macarons_line.png" alt="macarons image" />
                    </div>

                    <section id="introduction">
                        <h2>Welcome to the cooking blog!</h2>
                        <h3>
                            Here, you can explore a selection of delicious recipes
                            <br />
                            or share with us some of your own.
                        </h3>
                    </section>

                    <div class="macarons-line second-macarons-line">
                        <img src="../../public/images/macarons_line.png" alt="macarons image" />
                    </div>
                </div>
            </div>
        </div>
    );
}