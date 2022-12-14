import { FadeIn } from 'react-slide-fade-in'
import style from './banner.module.css'
import { Line } from './line'

export function Banner(props) {
  return (
    <article
      className="grid h-screen grid-cols-1 items-center justify-center bg-[#203043] pt-5 pb-32 md:h-4/5 md:pt-10 lg:pt-24"
      id={props.id}
    >
      <section>
        <FadeIn durationInMilliseconds={750} from="left" positionOffset={300}>
          <h1 className="mt-3 mb-10 text-6xl font-extrabold md:space-x-4">
            <span className={`${style.title}`}>AWS</span>
            <span className={`${style.title} first-letter:text-white`}>Educate</span>
            <span className={`${style.title}`}>Warrior</span>
            <span className={`${style.title}`}>Saga</span>
          </h1>
        </FadeIn>
        <FadeIn durationInMilliseconds={750} from="right" positionOffset={300}>
          <span className={style.subtitle}>雲端技術</span>
          <span className={style.subtitle}>提案競賽</span>
        </FadeIn>
      </section>
      <FadeIn delayInMilliseconds={650} durationInMilliseconds={100} positionOffset={0} triggerOffset={0}>
        <Line />
      </FadeIn>
      <section>
        <FadeIn durationInMilliseconds={750} from="bottom" positionOffset={300}>
          <div className="flex items-center justify-center space-x-6">
            <button>
              <a
                href="https://forms.zohopublic.com/joojoohappy/form/AmathonWarriorSagaAWSAWSEDUCATEHACKATHON/formperma/0SSNW_KrutCXTFj3xIRzlOImL9c0c2CLaBjgf6DiGEU"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                立即報名
              </a>
            </button>
            <button>
              <a
                href="#event"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                活動辦法
              </a>
            </button>
          </div>
        </FadeIn>
      </section>
    </article>
  )
}
