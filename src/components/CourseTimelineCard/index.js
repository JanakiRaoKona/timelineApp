// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courses} = props
  const {id, courseTitle, description, duration, tagsList} = courses
  return (
    <li key={id} className="list-element">
      <div className="title-duration-container">
        <h1>{courseTitle}</h1>
        <div className="course-duration">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="list-tags-container">
        {tagsList.map(item => (
          <li key={item.id} className="list-tags">
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </li>
  )
}
export default CourseTimelineCard
