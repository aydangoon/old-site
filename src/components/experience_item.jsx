export const ExperienceItem = ({
  organization,
  position,
  startDate,
  endDate,
  content,
  index
}) => {
  return (
    <div className={`experience-item delay-animation-${index}`}>
      <div className="header">
        <h4>
          {position} {organization && `@ ${organization}`}
        </h4>
        <small>
          {startDate} - {endDate ? endDate : `present`}
        </small>
      </div>
      <div>{content}</div>
    </div>
  )
}
