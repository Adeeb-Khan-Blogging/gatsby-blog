/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        A Fitness blog{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by{" "}
        <Link to="https://github.com/PhenomenalTechs-hub">
          Ali Ashraf aka. Phenomenal Techs
        </Link>
      </p>
    </div>
  </footer>
)

export default Footer
