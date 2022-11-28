export function Timeline(props) {
  return (
    <ol className="relative items-center border-l border-gray-200 dark:border-gray-700 lg:flex lg:border-none">
      {props.children}
    </ol>
  )
}

export function TimelineEvent(props) {
  const { date, description } = props
  return (
    <li className="relative mb-6 lg:mb-0">
      <div className="flex items-center">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-blue-600 dark:text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 lg:flex" />
      </div>
      <div className="mt-3 lg:pr-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{description}</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
      </div>
    </li>
  )
}
