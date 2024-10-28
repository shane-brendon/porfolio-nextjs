import './Projects.scss'
import content from '../../data/data.json'
import Image from 'next/image'
import BtnGreenBar from '../../lib/BtnGreenBar/BtnGreenBar'

const Projects = () => {
  const data = { ...content.global, ...content.projects }
  return (
    <section>
      <div className='project-title'>
        <h2 className='title'>{data.title}</h2>
        <BtnGreenBar text={data.contact.text} type={'link'} />
      </div>
      <div className='project-grid'>
        {data.projects.map((project, index) => (
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
                text={data.external.project}
                type={'link'}
                link={project.links.project}
                blank
              />
              <BtnGreenBar
                text={data.external.code}
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
