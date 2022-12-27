import themePicture from '../assets/esg-and-csr.png'
import { Line } from './line'
import { Link } from './link'

export function Notice(props) {
  return (
    <div className="bg-[#182025] px-5 py-12" id={props.id}>
      <h2 className="text-5xl font-bold text-white">競賽須知</h2>
      <Line />
      <div>
        <h3 className="px-5 text-3xl font-bold text-left text-white">競賽主題</h3>
        <div className="mt-2 bg-[#292e42] py-4">
          <h4 className="pb-5 text-2xl font-bold text-left text-white">🌱永續發展與社會責任</h4>
          <p className="mb-4 text-lg font-normal tracking-wide text-left text-white indent-6 dark:text-gray-400 lg:tracking-normal">
            以永續發展為主題，發想如何運用雲端技術創造新的服務或相關應用，例如：碳足跡計算、可負擔潔淨能源分析
          </p>
          <p className="mb-4 text-lg font-normal tracking-wide text-left text-white indent-6 dark:text-gray-400 lg:tracking-normal">
            可參考相關資料集：
            <Link href="https://data.gov.tw/">政府公開資料集</Link>、
            <Link href="https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions">各國家碳排資料</Link>、
            <Link href="https://energydata.info/dataset?vocab_topics=Renewable%20energy">能源資料集</Link>
          </p>
          <p className="mb-4 text-lg font-normal tracking-wide text-left text-white indent-6 dark:text-gray-400 lg:tracking-normal">
            主題細分項目：（如圖）
          </p>
          <img className="w-full h-auto mx-auto mb-5 rounded-lg md:w-4/5" src={themePicture} />
          <div className="text-left">
            <Link href="https://aws.amazon.com/tw/events/taiwan/interviews/articles-climatepledge">
              AWS王定愷：引領企業永續發展的綠色雲
            </Link>
            <p className="my-4 text-lg font-bold tracking-wide text-left text-white indent-6 dark:text-gray-400 lg:tracking-normal">
              亞馬遜 AWS 香港暨台灣總經理王定愷： 「AWS
              作為全球雲端運算的先鋒和領導者，不僅以環境友好的方式營運業務，還希望透過提供高效節能、低能耗的綠色雲端服務，幫助客戶和合作夥伴實現其永續發展目標，推動經濟社會發展向綠色低碳轉型。」
            </p>
            <p className="mb-4 text-lg font-bold tracking-wide text-left text-white indent-6 dark:text-gray-400 lg:tracking-normal">
              雲端運算的能源效率優勢助力企業實現永續發展目標。雲端運算因其規模效應，在資料中心能耗管理、冷卻優化、高效節能伺服器使用和伺服器利用率提高方面都比傳統本地資料中心具有更多優勢，也能更有效地減少二氧化碳排放和對環境的負面影響。
            </p>
            <p className="mb-4 text-lg font-bold tracking-wide text-left text-white indent-6 dark:text-gray-400 lg:tracking-normal">
              AWS
              在為企業提高敏捷性、彈性、加速創新和節約成本的同時，也提供比傳統本地基礎設施更好的資源利用率和能源效率。
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="px-5 py-5 text-3xl font-bold text-left text-white">線上說明影片</h3>
        <div className="flex justify-center">
          {/* <iframe
            className="border-8 border-double border-sky-700"
            width="910"
            height="528"
            src="https://www.youtube.com/watch?v=BtlywlXopUE"
            title="Introduction of AWS Educate Warrior Saga"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /> */}
          <iframe
            className="border-8 border-gray-700 border-double"
            width="910"
            height="528"
            src="https://www.youtube.com/embed/BtlywlXopUE"
            title="2022 AWS Educate雲端提案競賽說明會"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div>
        <h3 className="px-5 py-5 text-3xl font-bold text-left text-white">評分方式</h3>
        <div className="mb-5">
          <h4 className="pb-5 text-2xl font-bold text-left text-white">初賽</h4>
          <ul className="space-y-4 text-lg font-bold text-left text-white list-decimal list-inside md:text-xl">
            <li>
              相關性 20%
              <ol className="pl-5 mt-2 space-y-1 font-normal list-disc list-inside">
                <li>題目與 AWS Educate 課程內容是否相符？是否運用到雲端概念？</li>
              </ol>
            </li>
            <li>
              可行性 20%
              <ol className="pl-5 mt-2 space-y-1 font-normal list-disc list-inside">
                <li>
                  方法設計是否可行、邏輯性、是否能在活動時間內完成？（時間軸、資料來源（若需做資料分析）、方法架構）
                </li>
              </ol>
            </li>
            <li>
              應用性 30%
              <ol className="pl-5 mt-2 space-y-1 font-normal list-disc list-inside">
                <li>是否結合在能對 AWS 現有資源改良/功能擴增？（實用性）</li>
                <li>是否為現實中重要的議題？（市場潛力、民眾接受度、商業效益、議題急迫性）</li>
              </ol>
            </li>
            <li>
              創意性 20%
              <ol className="pl-5 mt-2 space-y-1 font-normal list-disc list-inside">
                <li>解題成果是否運用創新解法或技術</li>
              </ol>
            </li>
            <li>
              預期效益與結果 10%
              <ol className="pl-5 mt-2 space-y-1 font-normal list-disc list-inside">
                <li>預期呈現結果（量化與質化）</li>
              </ol>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="pb-5 text-2xl font-bold text-left text-white">決賽</h4>
          <ul className="space-y-4 text-lg font-bold text-left text-white list-decimal list-inside md:text-xl">
            <li>
              內容完整性 30%
              <ol className="pl-5 mt-2 space-y-1 font-normal list-disc list-inside">
                <li>解決問題的解決方案的有效性</li>
                <li>解決方案是否具有成本效益</li>
              </ol>
            </li>
            <li>
              內容應用性 30%
              <ol className="pl-5 mt-2 space-y-1 font-normal list-disc list-inside">
                <li>解題成果及其技術是否能落地實用與擴散</li>
                <li>解題成果將如何應用與結合於目標議題</li>
              </ol>
            </li>
            <li>
              未來發展性 20%
              <ol className="pl-5 mt-2 space-y-1 font-normal list-disc list-inside">
                <li>解題成果是否具備市場實用性或商業價值</li>
                <li>解題成果是否能解決產業問題</li>
              </ol>
            </li>
            <li>
              成果呈現 20%
              <ol className="pl-5 mt-2 space-y-1 font-normal list-disc list-inside">
                <li>簡報呈現︰可讀性、組織性、成果、目標相關性</li>
                <li>產品發表︰台風、口語邏輯、反應評分</li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
