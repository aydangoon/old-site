import { Tag } from './tag'

export const ProjectItem = ({ title, tags, startDate, endDate, content }) => {
  return (
    <div className="project-item">
      <div className="header">
        <h4>{title}</h4>
        <small>
          {startDate} - {endDate ? endDate : `present`}
        </small>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <Tag key={tag} value={tag} />
        ))}
      </div>
      {content}
    </div>
  )
}
