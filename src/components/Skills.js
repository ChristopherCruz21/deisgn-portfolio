import meter95 from "../assets/img/meter95.svg";
import meter90 from "../assets/img/meter90.svg";
import meter80 from "../assets/img/meter80.svg";
import meter50 from "../assets/img/meter50.svg";
import meter60 from "../assets/img/meter60.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I am a web developer with a vast array of knowledge in many
                different front end and back end languages, responsive
                frameworks, databases, and best code practices. My objective is
                simply to be the best web developer that I can be and to
                contribute to the technology industry all that I know and can
                do.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter95} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter90} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter95} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter80} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter50} alt="Image" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={meter60} alt="Image" />
                  <h5>Vue</h5>
                </div>
                <div className="item">
                  <img src={meter80} alt="Image" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={meter50} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter50} alt="Image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={meter50} alt="Image" />
                  <h5>FireBase</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
