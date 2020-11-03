import Emoji from "./emoji";

export default function Hero() {
  return (
    <section className="hero">
      <Emoji hexcode="&#128075;" />
      <h1 className="heading">Hi, I'm Zach.</h1>
      <p className="light-text tagline">
        I'm a full stack developer currently working with JavaScript. This is my
        personal website.
      </p>
    </section>
  );
}
