export const ExperienceItem = ({
  organization,
  position,
  startDate,
  endDate,
  content,
}) => {
  return (
    <div>
      <div>
        <h4>
          {position} {organization && `@ ${organization}`}
        </h4>
        <small>
          {startDate} - {endDate ? endDate : `present`}
        </small>
      </div>
      {content}
    </div>
  )
}
