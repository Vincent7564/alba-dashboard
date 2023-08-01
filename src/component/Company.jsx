import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Company1 from '../assets/Company.json'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Company = () =>{
    return (
        <>
            <Carousel responsive={responsive} showDots={true} arrows={false}>
                {Company1.map((company)=>{
                    return (
                        <div className=" text-center flex justify-center">
                            <img key={company.img} src={require("../images/" + company.img)} alt="" />
                        </div>
                    )
                })}
            </Carousel>;
        </>
    );
}

export default Company;