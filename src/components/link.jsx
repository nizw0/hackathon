export function Link(props) {
  return (
    <a className="font-medium text-blue-600 underline hover:no-underline dark:text-blue-500" href={props.href}>
      {props.children}
    </a>
  )
}
