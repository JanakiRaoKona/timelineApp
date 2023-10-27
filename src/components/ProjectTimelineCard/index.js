// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projects} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = projects
  return (
    <li className="list-element">
      <img src={imageUrl} alt="projectTitle" className="project-image" />
      <div className="title-duration-container">
        <h1>{projectTitle}</h1>
        <div className="course-duration">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </li>
  )
}
export default ProjectTimelineCard
