import './Projects.scss'
import content from '../../data/data.json'
import Image from 'next/image'
import BtnGreenBar from '../../lib/BtnGreenBar/BtnGreenBar'

const Projects = () => {
  const { global, projects } = content
  return (
    <section id='project-component'>
      <div className='project-title'>
        <h2 className='title'>{projects.title}</h2>
        <BtnGreenBar text={global.contact.text} type={'link'} />
      </div>
      <div className='project-grid'>
        {projects.projects.map((project, index) => (
          <div key={index}>
            <Image
              src={project.image.large}
              width={545}
              height={400}
              alt='project i worked on'
            />
            <div className='description'>
              <span className='description--name'>{project.name}</span>
              <div className='description--tags'>
                {project.technology.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
            <div className='buttons mobile-tablet'>
              <BtnGreenBar
                text={projects.external.project}
                type={'link'}
                link={project.links.project}
                blank
              />
              <BtnGreenBar
                text={projects.external.code}
                type={'link'}
                link={project.links.code}
                blank
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
