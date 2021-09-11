import { Tag } from './tag'

export const ProjectItem = ({ title, tags, startDate, content, index }) => {
  return (
    <div className={`project-item delay-animation-${index + 1}`}>
      <div className="header">
        <div>
          <h4>{title}</h4>
          <small>{startDate}</small>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          {tags.map((tag) => (
            <Tag key={tag} value={tag} />
          ))}
        </div>
      </div>

      {content}
    </div>
  )
}
