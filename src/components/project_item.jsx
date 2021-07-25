import { Tag } from './tag'

export const ProjectItem = ({ title, tags, startDate, endDate, content }) => {
  return (
    <div style={{ maxWidth: '500px' }}>
      <div>
        <h4>{title}</h4>
        <small>
          {startDate} - {endDate ? endDate : `present`}
        </small>
      </div>
      {content}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <Tag key={tag} value={tag} />
        ))}
      </div>
    </div>
  )
}
