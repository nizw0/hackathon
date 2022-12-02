import aws from '../assets/aws-in-taiwan.png'
import hackathon from '../assets/hackathon.png'
import { Line } from './line'

export function Event(props) {
  return (
    <div className="bg-[#182025] px-5 py-12" id={props.id}>
      <h2 className="text-5xl font-bold text-white">活動辦法</h2>
      <Line />
      <p className="mb-4 text-lg font-normal tracking-wide text-left text-white indent-6 lg:tracking-normal">
        由第三屆 AWS Educate 南區雲端大使舉辦，分成初賽及決賽的提案競賽！初賽參賽資格為註冊 AWS Educate
        學習平台的證明，希望參賽者能運用 AWS Educate 上的資源來豐富化競賽提案，並具備相關雲端知識！
        實體活動將由初賽線上篩選及實體複賽為賽制，初賽 3-6 人的小組進行繳交提案線上審查，決賽則會於 AWS
        台北辦公室舉辦並進行頒獎，以促成更多不同背景的隊員一起進行競賽！
      </p>
      <div className="flex flex-col items-center space-y-10 md:flex-row md:justify-center md:space-x-16 md:space-y-0">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800">
          <img className="rounded-t-lg" src={hackathon} />
          <div className="p-5">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">初賽</h3>
            <ul className="space-y-4 text-left text-gray-600 list-disc list-inside">
              <li>
                <span className="text-lg">參賽資格</span>
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>註冊 AWS Educate 並於表單上傳完成註冊截圖3-6人一組，每組只能繳交一份，以表單繳交提案</li>
                </ol>
              </li>
              <li>
                <span className="text-lg">舉辦地點</span>
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>
                    線上審查（<time>11/28</time> - <time>12/28</time>）
                  </li>
                </ol>
              </li>
              <li>
                <span className="text-lg">繳交資料</span>
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <ol className="mt-2 space-y-1 list-decimal list-inside">
                    <li>報名資料</li>
                    <li>AWS Educate 註冊截圖</li>
                    <li>初賽提案PDF檔</li>
                  </ol>
                  <li>
                    <time>12/28</time> 截止 詳細規範見報名表單
                  </li>
                </ol>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <a href="https://forms.zohopublic.com/joojoohappy/form/AmathonWarriorSagaAWSAWSEDUCATEHACKATHON/formperma/0SSNW_KrutCXTFj3xIRzlOImL9c0c2CLaBjgf6DiGEU">
              馬上報名
            </a>
          </button>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800">
          <img className="rounded-t-lg" src={aws} />
          <div className="p-5">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">決賽</h3>
            <ul className="space-y-4 text-left text-gray-600 list-disc list-inside">
              <li>
                <span className="text-lg">參賽資格</span>
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>通過複賽的提案在表定時間前完成決賽的組隊 並須以小組為單位填寫「決賽確認出席表單」</li>
                </ol>
              </li>
              <li>
                <span className="text-lg">舉辦地點</span>
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>
                    實體舉辦（<time>01/19</time>）
                  </li>
                  <li>AWS Taiwan 台北辦公室</li>
                  <li>台北市信義區松仁路100號12樓</li>
                </ol>
              </li>
              <li>
                <span className="text-lg">繳交資料</span>
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>簡報及成果Demo</li>
                  <li></li>
                </ol>
              </li>
              <br />
            </ul>
          </div>
          <button
            type="button"
            disabled={true}
            className="mr-2 mb-2  cursor-not-allowed rounded-lg bg-blue-400 px-5 py-2.5 text-sm font-medium text-white focus:ring-4 focus:ring-blue-300 dark:bg-blue-500"
          >
            出席複賽
          </button>
        </div>
      </div>
    </div>
  )
}
