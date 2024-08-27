import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import couple from './couples.png';
import crime from './crime.png';
import child from './child.png';
import Card1 from './Card1';
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
  return (
    <div className="caraousel">
      <Slider {...settings}>
      <Card1 name={"Whispers of the Heart"} description={"A collection of poems that explores the tender emotions of love, longing, and passion."} image={couple}/>
      <Card1 name={"Shadow of Retribution"} description={"In the dead of night, a relentless detective walks the rain-slicked streets, driven by a personal vendetta and a need for justice"} image={crime}/>
      <Card1 name={"Sunlit Pages"} description={"This enchanting children's book invites young readers on a magical journey through the wonders of imagination."} image={child}/>   
      </Slider>   
    </div>
  );
};
export default Carousel;
