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
        A Fitness blog from
        <Link to="https://www.youtube.com/channel/UCVyt7SZpYVK-VtojzdXR_lg">
          Adeeb Khan
        </Link>
        made with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by{" "}
        <Link to="https://github.com/PhenomenalTechs-hub">PhenomenalTechs</Link>
      </p>
    </div>
  </footer>
)

export default Footer
