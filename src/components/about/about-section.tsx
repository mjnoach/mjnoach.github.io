import { GithubButton } from '../buttons/github'
import { LinkedinButton } from '../buttons/linkedin'

export const AboutSection = () => (
  <section id="about" className="container">
    <h2 className="section-heading">About</h2>
    <div className="frame-border">
      <div className="space-y-8 p-4 text-justify text-lg sm:p-8">
        <p>
          I have a personal interest in tech, which aligns with my career as a
          Software Developer. Keen to learn, I apply gained insight in ongoing
          projects. I have a university education in Computer Science and a
          bunch of experience working remote and on-site jobs with international
          teams of professionals – clients and colleagues. I have a logical mind
          and a friendly attitude, which I employ to further develop my talents
          and competences in IT.
        </p>
        <div className="buttons-row">
          <GithubButton href="https://github.com/mjnoach" />
          <LinkedinButton />
        </div>
      </div>
    </div>
  </section>
)
