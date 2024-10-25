import './Projects.scss'
import { projects, global } from '../../data/data.json'
import Image from 'next/image'
import BtnGreenBar from '../../lib/BtnGreenBar/BtnGreenBar'

const Projects = ({ data = { projects, ...global } }) => {
  return (
    <section>
      <div className='project-title'>
        <h2 className='title'>{data.projects.title}</h2>
        <BtnGreenBar text={data.contact.text} type={'link'} />
      </div>
      <div className='project-grid'>
        {data.projects.projects.map((project, index) => (
          <div key={index}>
            <Image src={project.image.large} width={545} height={400} />
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
