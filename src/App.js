import './App.css'
import logo from './assets/aws-educate-logo.png'
import aws from './assets/aws-in-taiwan.png'
import gif from './assets/cloud-computing.gif'
import theme from './assets/esg-and-csr.png'
import hackathon from './assets/hackathon.png'
import { Timeline, TimelineEvent } from './components/timeline'

function App() {
  return (
    <div className="App">
      <div id="navbar">
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://aws.amazon.com/tw/education/awseducate/" className="flex items-center">
              <img className="h-6 mr-3 sm:h-9" alt="AWS Educate Logo" src={logo} />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AWS</span>
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <a href="https://forms.zohopublic.com/joojoohappy/form/AmathonWarriorSagaAWSAWSEDUCATEHACKATHON/formperma/0SSNW_KrutCXTFj3xIRzlOImL9c0c2CLaBjgf6DiGEU">
                  立即報名！
                </a>
              </button>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#event"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    活動辦法
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    聯絡我們
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div id="title" className="bg-gray-400">
        <span className="font-bold text-5xl">-AWS Educate-</span>
        <h1 className="space-x-4 font-bold text-6xl uppercase">
          <span className="title">Amathon</span>
          <span className="title">Warrior</span>
          <span className="title">Saga</span>
        </h1>
        <span className="font-bold text-5xl">雲端技術勇士黑客松競賽</span>
        <hr className="my-4 mx-auto w-1/2 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
        <span className="font-bold text-3xl uppercase">AWS Educate Hackathon</span>
        <br />
        <button>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            立即報名！
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </button>
        <button>
          <a
            href="#event"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            活動辦法
          </a>
        </button>
      </div>
      <div id="announcement">
        <h2 className="text-4xl">最新公告</h2>
        <hr className="my-4 mx-auto w-1/2 h-1 bg-gray-100 rounded border-0 md:my-3 dark:bg-gray-700" />
        <ul className="space-y-1 list-none list-inside text-gray-500 dark:text-gray-400 text-center">
          <li>AMATHON WARRIOR SAGA 雲端技術勇士黑客松競賽 【線上說明影片】網址</li>
          <li>
            敬請關注AWS Educate雲端校園大使的
            <a
              className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
              href="https://www.instagram.com/awseducatestdambtw/"
            >
              Instagram
            </a>
            、
            <a
              className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
              href="https://www.facebook.com/awseducatestudentambassadortaiwan"
            >
              Facebook
            </a>
            以獲得最新消息
          </li>
          <li>
            初賽報名表單（含提案上傳）
            <a
              className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
              href="https://forms.zohopublic.com/joojoohappy/form/AmathonWarriorSagaAWSAWSEDUCATEHACKATHON/formperma/0SSNW_KrutCXTFj3xIRzlOImL9c0c2CLaBjgf6DiGEU"
            >
              網址
            </a>
          </li>
          <li>
            <a
              className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
              href="https://tellonym.me/Amathon.Warrior.Saga"
            >
              -QA- 競賽相關匿名提問留言板
            </a>
          </li>
          <li>
            任何技術問題、相關資源、隊伍交流、成員組隊請加入{' '}
            <a
              className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
              href="https://discord.gg/NzNsqJFvKJ"
            >
              Discord 競賽討論群
            </a>
          </li>
        </ul>
      </div>
      <div id="introduction">
        <h1>黑客松競賽緣起</h1>
        <p>
          隨著服務IT化及自動化的風行，雲端技術的能力日漸重要，然而校園教授雲端技術的課程偏少切多半針對資工相關科系學生而較艱深，因此本活動希望推廣AWS
          Educate平台的免費訓練資源，提供學生根據自己需求學習相關雲端技術的技能，為自己的履歷更加分，同時也透過最終為期兩天的黑客松競賽，讓學生的提案有成果發表的機會。
        </p>
        <h1>關於雲端運算</h1>
        <p>
          雲端運算（Cloud
          Computing）是近年來非常熱門的科技名詞，甚至整個資訊產業的發展方向都因此受到了影響，現在已成為國際間各大科技公司爭搶的市場。根據
          LinkedIn 「2020
          年企業最需要的技能」調查指出，目前最受企業歡迎的人才分別為：AI、雲端運算、區塊鏈。雲端服務AWS市佔率超過5成。
          根據統計，在美國持有 AWS Solutions Architect Associate 證照的 IT 人員平均年薪高出同業 30% (Simplilearn
          2021)。大數據、 人工智慧與雲端等新技術已經開始被各行各業採用，從事軟體開發、
          雲端基礎架構部署、大數據分析、系統工程等等人才更加炙手可熱。
          想要凸顯個人履歷、增加面試機會，雲端技能將會是你未來不可或缺的一大優勢！
        </p>
        <h1>AWS Educate線上學習平台</h1>
        <p>
          <a
            className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
            href="https://aws.amazon.com/tw/education/awseducate/"
          >
            AWS Educate
          </a>{' '}
          是一個完全免費，可以線上學習雲端職能的學習平台，只要一個電子信箱不論是教育機構、教育工作者、
          學生都可以隨時隨地開始學習，目的是培養學習者對於未來雲端相關職缺的基本知識與應用。
          而若您是14歲以上的在學生，包含高中、技職學院、大學、研究所的學生， AWS Educate將是您培養雲端職能最適合的平台。
        </p>
        <div className="flex justify-center my-10">
          <iframe
            className="border-solid border-4 border-sky-500"
            width="910"
            height="528"
            src="https://www.youtube.com/embed/X36oOsjyoXA"
            title="Your Journey to a Cloud Career with AWS Educate"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          馬上免費學習！
        </button>
      </div>
      <div id="event">
        <h2 className="text-4xl">活動辦法</h2>
        <hr className="my-4 mx-auto w-1/2 h-1 bg-gray-100 rounded border-0 md:my-3 dark:bg-gray-700" />
        <p>
          由第三屆AWS EDUCATE 南區雲端校園大使所舉辦，分成初賽及複(決)賽的黑客松競賽！ 初賽參賽資格為註冊AWS
          EDUCATE學習平台的證明，希望參賽者能運用AWS EDUCATE上的資源來豐富化競賽提案，並具備相關雲端知識！
          實體黑客松活動將由初賽線上篩選及實體複賽為賽制，初賽3-6人的小組進行繳交提案線上審查，決賽則會於AWS台北辦公室舉辦並進行頒獎，以促成更多不同背景的隊員一起進行競賽！
        </p>
        <div className="flex justify-center space-x-10">
          <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={hackathon} />
              <div className="p-5">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">初賽</h3>
                <ul className="space-y-4 list-disc list-inside text-gray-500 dark:text-gray-400 text-left">
                  <li>
                    參賽資格：
                    <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                      <li>註冊 AWS Educate 並於表單上傳完成註冊截圖 3-6人一組，每組只能繳交一份，以表單繳交提案</li>
                    </ol>
                  </li>
                  <li>
                    舉辦地點：
                    <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                      <li>線上審查 (11/28 - 12/28) </li>
                    </ol>
                  </li>
                  <li>
                    繳交資料：
                    <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                      <ol className="mt-2 space-y-1 list-decimal list-inside">
                        <li>報名資料</li>
                        <li>AWS Educate註冊截圖</li>
                        <li>初賽提案PDF檔</li>
                      </ol>
                      <li>12/28 截止 詳細規範見報名表單</li>
                    </ol>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                馬上報名
              </button>
            </div>
          </div>
          <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={aws} />
              <div className="p-5">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">決賽</h3>
                <ul className="space-y-4 list-disc list-inside text-gray-500 dark:text-gray-400 text-left">
                  <li>
                    參賽資格：
                    <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                      <li>通過複賽的提案在表定時間前完成決賽的組隊 並須以小組為單位填寫「決賽確認出席表單」</li>
                    </ol>
                  </li>
                  <li>
                    舉辦地點：
                    <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                      <li>實體舉辦 (01/19)</li>
                      <li>AWS Taiwan 台北辦公室</li>
                      <li>台北市信義區松仁路100號12樓</li>
                    </ol>
                  </li>
                  <li>
                    繳交資料：
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
                className="text-white bg-blue-400  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-500 cursor-not-allowed"
              >
                出席複賽
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="prize">
        <h2 className="text-4xl">競賽獎項</h2>
        <hr className="my-4 mx-auto w-1/2 h-1 bg-gray-100 rounded border-0 md:my-3 dark:bg-gray-700" />
        <div className="overflow-x-auto relative grid justify-center">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  🥇第一名
                </th>
                <td className="py-4 px-6">
                  <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                    <li>AWS 內部 BD/DEV 部門 一對一面談機會</li>
                    <li>AWS 雲端技術專屬 Training Session</li>
                    <li>AWS 證照優惠（全額補助 價值 3000 元新台幣）</li>
                  </ol>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  🥈第二名
                </th>
                <td className="py-4 px-6">
                  <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                    <li>AWS 內部 BD/DEV 部門 一對一面談機會</li>
                    <li>AWS 雲端技術專屬 Training Session</li>
                  </ol>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  🥉第三名
                </th>
                <td className="py-4 px-6">
                  <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                    <li>AWS 雲端技術專屬 Training Session</li>
                  </ol>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  🏅最佳技術獎
                </th>
                <td className="py-4 px-6">
                  <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                    <li>紀念簡報筆、AWS Credit 25$ （所有隊員各一份）</li>
                  </ol>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  🎖️通過初賽隊伍
                </th>
                <td className="py-4 px-6">
                  <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                    <li>初賽參與證書、參賽小禮包</li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="notice">
        <h2 className="text-4xl">競賽須知</h2>
        <hr className="my-4 mx-auto w-1/2 h-1 bg-gray-100 rounded border-0 md:my-3 dark:bg-gray-700" />
        <div>
          <h3 className="text-left text-3xl">競賽主題</h3>
          <div>
            <h4 className="text-left text-2xl">🌱永續發展與社會責任</h4>
            <p>以永續發展為主題，發想如何運用雲端技術創造新的服務或相關應用，例如：碳足跡計算、可負擔潔淨能源分析</p>
            <p>
              →可參考相關資料集：
              <a
                className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                href="https://data.gov.tw/"
              >
                政府公開資料集
              </a>
              、
              <a
                className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                href="https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions"
              >
                各國家碳排資料
              </a>
              、
              <a
                className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                href="https://energydata.info/dataset?vocab_topics=Renewable%20energy"
              >
                能源資料集
              </a>
            </p>
            <p>主題細分項目：（如圖）</p>
            <img className="mx-auto max-w-lg h-auto rounded-lg" src={theme} />
            <a
              className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
              href="https://aws.amazon.com/tw/events/taiwan/interviews/articles-climatepledge"
            >
              AWS王定愷：引領企業永續發展的綠色雲
            </a>
            <p>
              亞馬遜AWS香港暨台灣總經理王定愷：
              「AWS作為全球雲端運算的先鋒和領導者，不僅以環境友好的方式營運業務，還希望透過提供高效節能、低能耗的綠色雲端服務，幫助客戶和合作夥伴實現其永續發展目標，推動經濟社會發展向綠色低碳轉型。」
              雲端運算的能源效率優勢助力企業實現永續發展目標。雲端運算因其規模效應，在資料中心能耗管理、冷卻優化、高效節能伺服器使用和伺服器利用率提高方面都比傳統本地資料中心具有更多優勢，也能更有效地減少二氧化碳排放和對環境的負面影響。
              AWS在為企業提高敏捷性、彈性、加速創新和節約成本的同時，也提供比傳統本地基礎設施更好的資源利用率和能源效率。
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-left text-3xl">線上說明影片（預計 12/05 釋出）</h3>
          <div className="flex justify-center">
            <div
              role="status"
              className="flex justify-center items-center w-2/5 h-96 rounded-lg animate-pulse bg-gray-300 dark:bg-gray-700"
            >
              <svg
                className="w-12 h-12 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 384 512"
              >
                <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-left text-3xl">評分方式</h3>
          <div>
            <h4 className="text-left text-2xl">初賽</h4>
            <ul className="space-y-4 list-decimal list-inside text-gray-500 dark:text-gray-400 text-left">
              <li>
                相關性 20%
                <ol className="pl-5 mt-2 space-y-1 list-none list-inside">
                  <li>題目與AWS Educate課程內容是否相符？是否運用到雲端概念？</li>
                </ol>
              </li>
              <li>
                可行性 20%
                <ol className="pl-5 mt-2 space-y-1 list-none list-inside">
                  <li>方法設計是否可行、邏輯性、是否能在黑客松時間內完成？</li>
                </ol>
              </li>
              <li>
                應用性 30%
                <ol className="pl-5 mt-2 space-y-1 list-none list-inside">
                  <li>是否結合在能對AWS現有資源改良/功能擴增？</li>
                  <li>是否為現實中重要的議題（市場潛力、民眾接受度、商業效益、議題急迫性）？</li>
                </ol>
              </li>
              <li>
                創意性 20%
                <ol className="pl-5 mt-2 space-y-1 list-none list-inside">
                  <li>解題成果是否運用創新解法或技術</li>
                </ol>
              </li>
              <li>
                預期效益與結果 10%
                <ol className="pl-5 mt-2 space-y-1 list-none list-inside">
                  <li>預期呈現結果（量化與質化）</li>
                  <li>成果呈現構想</li>
                </ol>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-left text-2xl">決賽</h4>
            <ul className="space-y-4 list-decimal list-inside text-gray-500 dark:text-gray-400 text-left">
              <li>
                內容完整性 30%
                <ol className="pl-5 mt-2 space-y-1 list-none list-inside">
                  <li>解題成果是否依照構想書執行解題</li>
                  <li>成果是否完成且可直接應用</li>
                </ol>
              </li>
              <li>
                內容應用性 30%
                <ol className="pl-5 mt-2 space-y-1 list-none list-inside">
                  <li>解題成果及其技術是否能落地實用與擴散</li>
                  <li>解題成果將如何應用與結合</li>
                </ol>
              </li>
              <li>
                未來發展性 20%
                <ol className="pl-5 mt-2 space-y-1 list-none list-inside">
                  <li>解題成果是否具備市場實用性或商業價值</li>
                  <li>解題成果是否能解決產業問題</li>
                </ol>
              </li>
              <li>
                內容創新性 30%
                <ol className="pl-5 mt-2 space-y-1 list-none list-inside">
                  <li>海報呈現︰可讀性、組織性、與成果、目標相關性</li>
                  <li>產品發表︰台風、口語邏輯、反應評分</li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="schedule">
        <h2 className="text-4xl">活動日程</h2>
        <hr className="my-4 mx-auto w-1/2 h-1 bg-gray-100 rounded border-0 md:my-3 dark:bg-gray-700" />
        <div className="flex justify-center">
          <Timeline>
            <TimelineEvent date="11/28" description="初賽開始" />
            <TimelineEvent date="12/05" description="競賽說明影片釋出" />
            <TimelineEvent date="12/28" description="初賽截止" />
            <TimelineEvent date="01/03" description="公布入選決賽名單" />
            <TimelineEvent date="01/15" description="團隊決賽簡報資料繳交" />
            <TimelineEvent date="01/19" description="決賽及頒獎" />
          </Timeline>
          <div className="flex items-center">
            <img className="mx-auto max-w-lg h-auto rounded-lg" src={gif} />
          </div>
        </div>
      </div>
      <div id="footer">
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2022{' '}
              <a href="https://aws.amazon.com/tw/education/awseducate/" className="hover:underline">
                AWS Educate Cloud Ambassador™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://www.facebook.com/awseducatestudentambassadortaiwan"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="https://www.instagram.com/awseducatestdambtw/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
