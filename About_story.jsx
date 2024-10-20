import React from "react";
import SimpleParallax from "simple-parallax-js";
import about from "../img/about_img.png";
import sale from "../sale.jpg";
import newstyle from "../newstyle.jpg";
import adi from "../poster.jpeg";
function About_story() {
  return (
    <>
      <div className="about_story">
        <h3>welcome to our site</h3>
        <h4>
          Welcome to R Shop, your number one source for [ fashion, electronics,
          home goods , jweeleries or more]. We're dedicated to giving you the
          very best of [products], with a focus on quality, customer service,
          and uniqueness.
        </h4>
        <h4>
          Founded in 2024, R Shop has come a long way from its beginnings in New
          Delhi. When we first started out, our passion for drove us to start
          our own business.
        </h4>
        <h4>
          We hope you enjoy our products as much as we enjoy offering them to
          you. If you have any questions or comments, please don't hesitate to
          contact us. Sincerely, Rohit Thakur [founder and ceo] of the company
        </h4>
        <div className="image-area">
          <SimpleParallax overflow>
            <img src={about} alt={"image"} />
          </SimpleParallax>
        </div>
        <h3 className="think"> Product Thinking</h3>
        <h4>
          Eco-ShopEase aims to revolutionize the online shopping experience by
          creating a sustainable, user-friendly e-commerce platform. Our focus
          is to offer a diverse range of eco-friendly, ethically-sourced
          products that cater to conscious consumers looking to make a positive
          impact on the environment.
        </h4>
        <h4>
          Vision: To become the leading e-commerce platform for sustainable
          products, empowering consumers to make informed and responsible
          choices. Mission: To provide a seamless, enjoyable shopping experience
          while promoting sustainability, fair trade, and eco-conscious living.
        </h4>
        <div className="image1">
          <SimpleParallax orientation="right">
            <img src={sale} alt={"image"} />
          </SimpleParallax>
        </div>
        <div className="image1">
          <SimpleParallax orientation="left">
            <img src={newstyle} alt={"image"} />
          </SimpleParallax>
        </div>
        <div className="image1">
          <SimpleParallax orientation="right">
            <img src={adi} alt={"image"} />
          </SimpleParallax>
        </div>
        <div className="image-data">
          <h4>
            At [Your E-commerce Store], we blend innovation with excellence to
            bring you the finest selection of [product types, e.g., fashion,
            electronics, home goods]. Since our inception in [year], we've
            dedicated ourselves to providing quality products and unparalleled
            customer service.
          </h4>
          <h3>about the founder</h3>
          <h4>
            Meet Rohit Thakur, the visionary behind R shop.
            With a passion for innovation and a commitment to excellence,
            [Founder’s Name] embarked on a journey to create a platform that
            redefines the online shopping experience. With years of experience
            in [industry/field], [Founder’s Name] combines expertise and a keen
            eye for quality to ensure every product on our platform meets the
            highest standards. Under [Founder’s Name]’s leadership, [Your
            E-commerce Store] has grown into a trusted name, known for its
            dedication to customer satisfaction and sustainability.
          </h4>
        </div>
      </div>
    </>
  );
}

export default About_story;
