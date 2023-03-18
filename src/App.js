import './App.css';
import { Slider, Slide } from './components/Slider/Slider';

import logoCatalyst from "./assets/logo-catalyst.svg";

import tonightShowPoster from "./assets/titles/thetonightshow.jpg";
import topChefPoster from "./assets/titles/topchef.jpg";
import fastXPoster from "./assets/titles/fastx.jpg";
import kellyPoster from "./assets/titles/thekellyclarksonshow.jpg";

function App() {
  return (
    <>
      <header>
        <img src={logoCatalyst} alt="Catalyst logo" />
        <nav>
          <ul>
            <li><a>About Us</a></li>
            <li><a>Our Work</a></li>
            <li><a>CMO Now</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="unlock">
        <h1>
          UNLOCK THE WORLD
          <br />
          <span>THROUGH NBCUniversal CATALYST</span>
        </h1>
      </section>

      <section id="global">
        <h2>
          The global creative
          <br />
          <span>Agency of nbcuniversal</span>
        </h2>
      </section>

      <section id="culture">
        <h2>
          Creating
          <br />
          <span>Culture-shaping</span>
          <br />
          moments
        </h2>
      </section>

      <section id="entertainment">
        <div>
          <h2>
            Across
            <br />
            <span>entertainment</span>
          </h2>
          <Slider>
            <Slide>
              <img src={tonightShowPoster} alt="The Tonight Show poster" />
            </Slide>
            <Slide>
              <img src={topChefPoster} alt="Top Chef poster" />
            </Slide>
            <Slide>
              <img src={fastXPoster} alt="Fast X poster" />
            </Slide>
            <Slide>
              <img src={kellyPoster} alt="The Kelly Clarkson Show poster" />
            </Slide>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default App;