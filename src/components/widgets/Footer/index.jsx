import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import Button from "@components/atoms/Button";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.top}>
        <div className={classes.topText}>
          Top companies choose <Link to="/udemy-business">Udemy Business</Link> to build in-demand
          career skills.
        </div>
        <div className={classes.companies}>
          <img alt="Nasdaq" src="/assets/companies/nasdaq-light.svg" width="115" height="44" />
          <img
            alt="Volkswagen"
            src="/assets/companies/volkswagen-light.svg"
            width="44"
            height="44"
          />
          <img alt="Box" src="/assets/companies/box-light.svg" width="67" height="44" />
          <img alt="NetApp" src="/assets/companies/netapp-light.svg" width="115" height="44" />
          <img
            alt="Eventbrite"
            src="/assets/companies/eventbrite-light.svg"
            width="115"
            height="44"
          />
        </div>
      </div>
      <div>
        <div className={classes.links}>
          <ul>
            <li>
              <Link to="/udemy-business" target="_blank">
                <span>Udemy Business</span>
              </Link>
            </li>
            <li>
              <Link to="/teaching/">
                <span>Teach on Udemy</span>
              </Link>
            </li>
            <li>
              <Link to="/mobile/" target="_blank">
                <span>Get the app</span>
              </Link>
            </li>
            <li>
              <Link to="https://about.udemy.com/">
                <span>About us</span>
              </Link>
            </li>
            <li>
              <Link to="https://about.udemy.com/company">
                <span>Contact us</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="https://about.udemy.com/careers">
                <span>Careers</span>
              </Link>
            </li>
            <li>
              <Link to="https://blog.udemy.com/">
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link to="/support/">
                <span>Help and Support</span>
              </Link>
            </li>
            <li>
              <Link to="/affiliate/">
                <span>Affiliate</span>
              </Link>
            </li>
            <li>
              <Link to="https://investors.udemy.com">
                <span>Investors</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/terms/">
                <span>Terms</span>
              </Link>
            </li>
            <li>
              <Link to="/terms/privacy/">
                <span>Privacy policy</span>
              </Link>
            </li>
            <li>
              <button type="button">
                <span>Cookie settings</span>
              </button>
            </li>
            <li>
              <Link to="/sitemap/">
                <span>Sitemap</span>
              </Link>
            </li>
            <li>
              <Link to="/accessibility-statement">
                <span>Accessibility statement</span>
              </Link>
            </li>
          </ul>
          <div className={classes.lang}>
            <Button varient="secondary">
              <LanguageOutlinedIcon className="me-2" />
              English
            </Button>
          </div>
        </div>
        <div className={classes.logo}>
          <Link to={process.env.ROOT_URL ?? "/"}>
            <img width="91" src="/assets/logo-udemy-inverted.svg" alt="udemy logo" />
          </Link>
          <span>© {new Date().getFullYear()} Udemy, Inc.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
