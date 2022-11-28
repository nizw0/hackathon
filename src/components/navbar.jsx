import logo from '../assets/aws-educate-logo.png'

export function Navbar() {
  return (
    <nav className="rounded bg-[#fe7101] px-2 py-2 dark:bg-gray-900 md:px-4 md:py-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a className="flex items-center" href="https://aws.amazon.com/tw/education/awseducate/">
          <img alt="AWS Educate Logo" className="h-12 mr-3" src={logo} />
        </a>
        <div className="flex md:order-2">
          <button
            className="mr-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
            type="button"
          >
            <a href="https://forms.zohopublic.com/joojoohappy/form/AmathonWarriorSagaAWSAWSEDUCATEHACKATHON/formperma/0SSNW_KrutCXTFj3xIRzlOImL9c0c2CLaBjgf6DiGEU">
              立即報名！
            </a>
          </button>
          <button
            aria-controls="navbar-cta"
            aria-expanded="false"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            data-collapse-toggle="navbar-cta"
            type="button"
          >
            <span className="sr-only">Open menu</span>
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:order-1 md:flex md:w-auto" id="navbar-cta">
          <ul className="flex flex-col p-4 mt-4 border rounded-lg dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium md:dark:bg-gray-900">
            <li>
              <a
                className="block py-2 pl-3 pr-4 text-lg text-white rounded hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                href="#event"
              >
                活動辦法
              </a>
            </li>
            <li>
              <a
                className="block py-2 pl-3 pr-4 text-lg text-white rounded hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                href="#footer"
              >
                聯絡我們
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
