export const Footer = () => {
  const links = [
    {
      to: 'https://github.com/aydangoon',
      content: (
        <img src="/images/github.svg" alt="github" style={{ width: '2em' }} />
      ),
    },
    {
      to: 'https://www.linkedin.com/in/aydan-gooneratne-118b49178',
      content: (
        <img
          src="/images/linkedin.png"
          alt="linkedin"
          style={{ width: '2em' }}
        />
      ),
    },
    {
      to: 'https://www.youtube.com/channel/UCmMr6shG5iTZqRoB4pRGM0A',
      content: (
        <img src="/images/youtube.png" alt="youtube" style={{ width: '2em' }} />
      ),
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
