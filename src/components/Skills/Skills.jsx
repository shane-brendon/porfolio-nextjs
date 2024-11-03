import './skills.scss'
import content from '../../data/data.json'
import RingPattern from '../assets/RingPattern'

const Skills = () => {
  const { global, skills } = content
  return (
    <section id='skill-component'>
      <div className='container'>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <span className='skill--title'>{skill.text}</span>
              <span className='skill--experience'>
                {skill.experience} {global.experience}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='ringPattern__skill'>
        <div className='ringPattern__skill--container'>
          <RingPattern />
        </div>
      </div>
    </section>
  )
}
export default Skills
