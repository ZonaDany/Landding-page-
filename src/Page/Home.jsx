import React from "react";
////Styles
import './Home.css'
////Aos
import Aos from "aos";
import 'aos/dist/aos.css'
Aos.init()

//Components
import Header from '../Components/Header/Header'
import Benefics from "../Components/Benefics/Benefics";
import Product from "../Components/Product/Product";
import Testimonials from "../Components/Testimonials/Testimonials";
import Footer from '../Components/Footer/Footer'


export default function Home(){
    return(
        <div className="home">
            <section data-aos="fade-down"
            data-aos-duration="2000"
            >
                <Header/>
            </section>
            <section>
                <Benefics/>
            </section>
            <section>
                <Product/>
            </section>
            <section>
                <Testimonials/>
            </section>
            <section>

            </section>
            <section>
                <Footer/>
            </section>    
        </div>
    )
}