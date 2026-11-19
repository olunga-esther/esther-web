import Image from "next/image";

const strengths = [
  { number: "01", title: "Web development", detail: "Building for the web, one thoughtful step at a time." },
  { number: "02", title: "IT foundations", detail: "Curious about the systems and ideas behind technology." },
  { number: "03", title: "Creative thinking", detail: "Bringing a fresh perspective to every challenge." },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav wrap" aria-label="Main navigation">
          <a className="wordmark" href="#home" aria-label="Esther Olunga home">EO<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#focus">What I do</a>
            <a className="nav-contact" href="mailto:hello@example.com?subject=Hello%20Esther">Let’s talk <span>↗</span></a>
          </div>
        </nav>

        <div className="hero-content wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> IT student · Kenya</p>
            <h1>Curious mind.<br /><span>Creative</span> code.</h1>
            <p className="intro">I’m Esther Olunga, an aspiring IT professional learning to turn ideas into thoughtful digital experiences.</p>
            <div className="hero-actions">
              <a className="button" href="mailto:hello@example.com?subject=Hello%20Esther">Get in touch <span>↗</span></a>
              <a className="text-link" href="#about">A little about me <span>↓</span></a>
            </div>
            <div className="hero-meta"><span>BASED IN NAIROBI, KENYA</span><span>01 — 03</span></div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame"><Image src="/profile.jpg" alt="Esther Olunga" fill priority sizes="(max-width: 760px) 78vw, 38vw" className="portrait" /></div>
            <div className="portrait-note"><span className="note-star">✳</span><span>Learning today,<br />building tomorrow.</span></div>
            <div className="portrait-index">ESTHER<br />OLUNGA</div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">SCROLL TO EXPLORE <span>↓</span></a>
        </div>
        <div className="hero-glow" />
      </section>

      <section className="about section wrap" id="about">
        <div className="section-label"><span>01 / ABOUT ME</span><i /></div>
        <div className="about-grid">
          <h2>Technology is<br />my <span>playground.</span></h2>
          <div className="about-copy">
            <p>I’m pursuing a Bachelor of Science in Information Technology at Multimedia University of Kenya. I enjoy exploring how technology can solve real problems and make everyday experiences better.</p>
            <p>Right now, I’m growing my skills, experimenting with ideas, and finding my own path in the world of tech. There’s always something new to learn—and I’m here for it.</p>
            <div className="school-chip"><span className="chip-mark">MMU</span><span><b>Multimedia University of Kenya</b><small>BSc Information Technology</small></span></div>
          </div>
        </div>
      </section>

      <section className="focus section" id="focus">
        <div className="wrap">
          <div className="section-label"><span>02 / WHAT I’M INTO</span><i /></div>
          <div className="focus-heading"><h2>My areas of<br /><span>curiosity.</span></h2><p>A few things I’m exploring as I grow into the kind of technologist I want to be.</p></div>
          <div className="strength-list">{strengths.map((item) => <article className="strength" key={item.number}><span className="strength-number">{item.number}</span><h3>{item.title}</h3><p>{item.detail}</p><span className="strength-arrow">↗</span></article>)}</div>
        </div>
      </section>

      <footer className="footer wrap" id="contact">
        <div className="section-label"><span>03 / SAY HELLO</span><i /></div>
        <div className="footer-content"><div><p className="eyebrow">HAVE A PROJECT OR AN IDEA?</p><h2>Let’s make<br /><span>something</span> matter.</h2></div><a className="button footer-button" href="mailto:hello@example.com?subject=Hello%20Esther">Email me <span>↗</span></a></div>
        <div className="footer-bottom"><a className="wordmark" href="#home">EO<span>.</span></a><span>Designed with curiosity · Nairobi, Kenya</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
