import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import caro1 from '../assets/Carousel/caro1.jpg'
import caro2 from '../assets/Carousel/caro2.jpg'
import caro3 from '../assets/Carousel/caro3.jpg'
import caro4 from '../assets/Carousel/caro4.jpg'
import caro5 from '../assets/Carousel/caro5.jpg'
import caro6 from '../assets/Carousel/caro6.jpg'
import caro7 from '../assets/Carousel/caro7.jpg'

const Carousels = () => {
    var settings = {
        dots: false,
        arrows:false, 
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        easing:"inout",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,

              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
  return (
    <div className='w-full'>

    <Slider {...settings} className='w-full'>
        <div>
            <img src={caro7} className="w-5/6 aspect-square object-cover object-center rounded-xl"></img>
        </div>
        <div>
            <img src={caro6} className="w-5/6 aspect-square object-cover object-center rounded-xl"></img>  
        </div>
        <div>
            <img src={caro5} className="w-5/6 aspect-square object-cover object-center rounded-xl"></img>
        </div>
        <div>
            <img src={caro1} className="w-5/6 aspect-square object-cover object-center rounded-xl"></img>  
        </div>
        <div>
            <img src={caro2} className="w-5/6 aspect-square object-cover object-center rounded-xl"></img>  
        </div>
        <div>
            <img src={caro3} className="w-5/6 aspect-square object-cover object-center rounded-xl"></img>
        </div>
        <div>
            <img src={caro4} className="w-5/6 aspect-square object-cover object-center rounded-xl"></img>
        </div>
      </Slider>
    </div>
  )
}

export default Carousels