import './skills.scss'
import content from '../../data/data.json'

const Skills = () => {
  const { global, skills } = content
  return (
    <section id='skill-component'>
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
    </section>
  )
}
export default Skills
