const HeroSection = () => {

return  (

        <main className="hero container">


        <div className="hero-Content">

         <h1>YOUR FEET DESERVE THE BEST</h1>
         <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. </p>


         <div className="hero-button">
            <button className="Shop-btn">Shop Now</button>
            <button className="cat-btn">Category</button>


         </div>

         <div className="shopping">
            <p>
                Available On
            </p>

            <div className="brand-icons">
                <img src="./public/amazon.png" alt="amazon" />
                <img src="./public/flipkart.png" alt="flipkart" />

            </div>

         </div>



        </div>





        <div className="hero-Image">

        <img src="./public/shoe_image.png" alt="shoe" />
        </div>




       </main>

);
};

export default HeroSection;