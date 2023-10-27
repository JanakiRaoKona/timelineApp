import {Component} from 'react'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const themeColors = {
  primary: '#0967d2',
  secondary: '#ffffff',
  // cardBgColor: 'yellow',
  cardForeColor: '#ffffff',
  titleColor: '#171f46',
}

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    const titlesArray = timelineItemsList.map(item => ({
      title: item.title,
    }))

    return (
      <div className="chrono-containers">
        <h1 className="heading">
          <span className="span">MY JOURNEY OF</span>
          <br />
          CCBP 4.0
        </h1>
        <div className="chrono-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={titlesArray}
            theme={themeColors}
          >
            {timelineItemsList.map(eachItem => {
              if (eachItem.categoryId === 'COURSE') {
                return (
                  <ul key={eachItem.id} className="ul-card">
                    <CourseTimelineCard courses={eachItem} />
                  </ul>
                )
              }
              if (eachItem.categoryId === 'PROJECT') {
                return (
                  <ul key={eachItem.id} className="ul-card">
                    <ProjectTimelineCard projects={eachItem} />
                  </ul>
                )
              }
              return null
            })}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
