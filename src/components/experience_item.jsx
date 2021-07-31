export const ExperienceItem = ({
  organization,
  position,
  startDate,
  endDate,
  content,
}) => {
  return (
    <div className="experience-item">
      <div className="header">
        <h4>
          {position} {organization && `@ ${organization}`}
        </h4>
        <small>
          {startDate} - {endDate ? endDate : `present`}
        </small>
      </div>
      <p>{content}</p>
    </div>
  )
}
