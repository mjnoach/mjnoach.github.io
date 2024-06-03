import { GithubButton } from '../buttons/github'
import { LinkedinButton } from '../buttons/linkedin'

export const AboutSection = () => (
  <section id="about" className="container">
    <h2 className="mb-8">About</h2>
    <div className="rounded-lg border">
      <div className="space-y-8 p-8 text-justify text-lg">
        <p>
          I specialize in providing top-tier IT services and consulting,
          tailored to meet the unique needs of businesses. With extensive
          expertise in full stack development, my primary technology stack
          includes TypeScript, React.js, and Node.js, though I have experience
          with a broad range of technologies and programming languages, such as
          PHP, SQL, Docker, Kubernetes, GraphQL, and Ruby. My professional
          background encompasses both independent contracting and full-time
          roles, collaborating with international teams on remote and on-site
          projects.
        </p>
        <p>
          My services focus on delivering comprehensive IT solutions, from
          building and maintaining customer-facing and internal web applications
          to extending functionalities of existing systems. Additionally, I have
          experience in improving software release processes, enhancing SEO
          metrics, and developing open-source projects, showcasing a commitment
          to innovation and community contributions.
        </p>
        <p>
          I am dedicated to providing efficient, reliable, and scalable
          solutions that drive business success. By leveraging my expertise and
          logical approach, I help businesses navigate the complexities of
          technology, ensuring seamless integration and optimal performance. My
          continuous learning ethos ensures I stay ahead of industry trends,
          delivering cutting-edge solutions and strategic IT consulting to my
          clients.
        </p>
        <div className="buttons-row">
          <GithubButton href="https://github.com/mjnoach" />
          <LinkedinButton />
        </div>
      </div>
    </div>
  </section>
)
