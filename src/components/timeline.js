export function Timeline(props) {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 text-left ml-10 space-y-6">
      {props.children}
    </ol>
  )
}

export function TimelineEvent(props) {
  const { date, description } = props
  return (
    <li className="ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{description}</h3>
    </li>
  )
}
