import "./about-page.scss";

export const AboutPage = () => {
  return (
    <div className="about-page">
      <article className="article">
        <section className="article__content-text">
          <h2>About me</h2>
          <p>
            <span>
              After a degree in Silversmithin and Metalwork at London’s
              Camberwell College of Arts, I moved back to Sweden to start up my
              very own workshop. On the beautiful peninsula Bjäre, unique
              creations are exclusively handmade with the luxurious feel that
              only handcrafted pieces pocess.
            </span>
          </p>
          <p>
            <span>
              You are hereby invited to have a connection to how things are
              made, who made it and what materials were used.
            </span>
          </p>
        </section>
        <section className="article__content-image">
          <img
            src="https://raw.githubusercontent.com/maxtkarlsson/jk-se/main/public/600x400/jennyverkstad20april2016nr500-600x400.webp"
            alt="Person hammering a silver bowl in a workshop."
          />
        </section>
      </article>

      <article className="article">
        <section className="article__content-image">
          <img
            src="https://raw.githubusercontent.com/maxtkarlsson/jk-se/main/public/600x400/jennyverkstad20april2016nr287-600x400.webp"
            alt="Blowtorch blowing on silver bracelet."
          />
        </section>
        <section className="article__content-text">
          <h2>Story</h2>
          <p>
            <span>
              The craft of silversmithing is a huge inspiration, where old
              techniques are forged with new designs, creating those
              one-of-a-kind pieces that don’t follow any fashions or trends.
              Individuality and fearless approach is my name of the game.
            </span>
          </p>
        </section>
      </article>

      <article className="article">
        <section className="article__content-text">
          <h2>Commitment</h2>
          <p>
            <span>
              I am comitted to sustainably and ethically sourced materials. The
              silver I use are recycled from the industry, I am registered for
              buying Fair Trade gold and work with AA Ethical gemstones for
              sourcing the finest gemstones and diamonds. I believe that this
              industry needs a change, and empowering those who are working hard
              to find the treasures of the earth in a sustainable way is a great
              benefit for us all and our planet.
            </span>
          </p>
        </section>
        <section className="article__content-image">
          <img
            src="https://raw.githubusercontent.com/maxtkarlsson/jk-se/main/public/600x400/jennyverkstad20april2016nr424-600x400.webp"
            alt="Hands holding and measuring stone."
          />
        </section>
      </article>
    </div>
  );
};
