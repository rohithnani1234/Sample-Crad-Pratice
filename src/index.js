import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function Card() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="img.png" />;
}

function Intro() {
  return (
    <div>
      <h1>Alex Smith</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="Java Script" emoji="💪" color="red" />
      <Skill skill="HTML + CSS" emoji="💪" color="green" />
      <Skill skill="Web Development" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="✌️" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Card />
  </StrictMode>
);
