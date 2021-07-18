export const Footer = () => {
  const links = [
    { to: 'https://github.com/aydangoon', content: 'github' },
    {
      to: 'https://www.linkedin.com/in/aydan-gooneratne-118b49178',
      content: 'linkedin',
    },
    {
      to: 'https://www.youtube.com/channel/UCmMr6shG5iTZqRoB4pRGM0A',
      content: 'youtube',
    },
  ]

  return (
    <div className="footer">
      {links.map(({ to, content }) => (
        <a id={to} href={to} target="_blank" rel="noreferrer">
          {content}
        </a>
      ))}
    </div>
  )
}
