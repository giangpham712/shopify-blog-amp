export default function Navigation({children, navigations}) {
  return (
    <>
      {navigations && navigations.map(navigation => {
        return (
          <div key={navigation.handle} className="grid__item one-half m-b-md">
            <h3>{navigation.title}</h3>
            <ul>
              {navigation.links && navigation.links.map((link, index) => {
                return (
                  <li key={index}><a href={link.url} title={link.title}>{link.title}</a></li>
                );
              })}
            </ul>
          </div>
        )
      })}
    </>
  )
}
