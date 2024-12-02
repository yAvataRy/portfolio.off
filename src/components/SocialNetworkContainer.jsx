import { FaGithub, FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  // { name: "linkedin", icon: <FaLinkedinIn />, ref: "" },
  { name: "github", icon: <FaGithub />, ref: "https://github.com/yAvataRy" },
  { name: "instagram", icon: <FaInstagram />, ref: "https://instagram.com/lbm.vinicius" },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
          <a href={network.ref} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
