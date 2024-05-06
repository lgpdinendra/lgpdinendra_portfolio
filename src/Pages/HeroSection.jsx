import background from '../assets/images/background.jpg'

export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <br/>
            {/* <p className="section--title">Hey, I'm Pawan</p> */}
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Pawan Dinendra</span>{" "}
              {/* <br />
              Developer */}
            </h1>
            <p className="hero--section-description">
             "Front end Developer","Backend Developer","Software Enginner"
              <br /> 
              <br /> 
            </p>
          </div>
          <button className="btn btn-primary"><a href="../../src/assets/images/LGPDINENDRA.pdf" download="LGPDINENDRA.pdf" >My CV</a></button>
        </div>
        <div className="hero--section--img">
          <img src={background} alt="Hero Section" />
        </div>
      </section>
    );
  }