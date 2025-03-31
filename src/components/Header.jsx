import GitHubIcon from "../assets/github-logo.png";

export default function Header(){
  return (
    <h1 className="header">
      <a href="https://github.com/dfitch96/cv-app" target="_blank">
        <img src={GitHubIcon} className="header-icon"></img>
      </a>
      <div>CV Builder</div>
    </h1>
  );
}