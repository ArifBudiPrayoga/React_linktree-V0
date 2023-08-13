import ParticlesBg from "particles-bg";
import "./App.css";
import { CiGlobe } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";
function App() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="profile textcenter">
            <img src="./logo192.png" alt="logo" className="avatar" />
            <div className="contenbg">
              <p>Let's Connect</p>
            </div>
          </div>
          <div className="nt-16">
            <a className="btn_action" href="/some-url">
              <CiGlobe />
              <span>My website</span>
            </a>
          </div>
          <div className="nt-16">
            <a className="btn_action" href="/some-url">
              <CiLinkedin />
              <span>Linkedin</span>
            </a>
          </div>
          <div className="nt-16">
            <a className="btn_action" href="/some-url">
              <AiOutlineInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="nt-16">
            <a className="btn_action" href="/some-url">
              <AiOutlineGithub />
              <span>Github</span>
            </a>
          </div>
          <div className="nt-16">
            <a className="btn_action" href="/some-url">
              <AiOutlineCodepen />
              <span>Codepen</span>
            </a>
          </div>
          <div className="nt-16">
            <a className="btn_action" href="/some-url">
              <MdMailOutline />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="circle" bg={true} />
    </div>
  );
}

export default App;
