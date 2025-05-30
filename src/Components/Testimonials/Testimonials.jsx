import React from "react";
import CSS from "./Testimonils.module.css";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
const Testimonials = () => {
  return (
    <div className={CSS.Testimonials}>
      <div className={CSS.wrapper}>
        <div className={CSS.container}>
          <span>Top Rated</span>
          <span>
            Seedly say has suitable disposal and boy. Excercise joy man children
            rejoice.
          </span>
        </div>

        <img src={Hero} alt="HeroTestimonial" />
        <div className={CSS.container}>
          <span>100K</span>
          <span>Happy Customer with Us</span>
        </div>
      </div>
      <div className={CSS.Review}>Reviews</div>
      <div className={CSS.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={CSS.tCarousel}
          breakpoints={
            {
              856:{
                slidesPerView: 3
              },
              640:{
                slidesPerView: 2
              },
              0:{
                slidesPerView: 1
              }
            }
           
          }
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className={CSS.testimonial}>
                <img src={testimonial.image } alt="profile" style={{background:'white'}} />
                <span style={{background:'white'}}>{testimonial.comment}</span>
                <hr />
                <span style={{background:'white'}}>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
