import { Link } from './link'

export function Intro(props) {
  return (
    <div className="px-5 py-12 bg-gray-200" id={props.id}>
      <h3 className="pb-5 text-3xl font-bold text-left text-gray-600">提案競賽緣起</h3>
      <p className="mb-4 text-lg font-normal tracking-wide text-left text-gray-500 indent-6 dark:text-gray-400 lg:tracking-normal">
        隨著服務 IT
        化及自動化的風行，雲端技術的能力日漸重要，然而校園教授雲端技術的課程偏少切多半針對資工相關科系學生而較艱深，因此本活動希望推廣
        AWS Educate
        平台的免費訓練資源，提供學生根據自己需求學習相關雲端技術的技能，為自己的履歷更加分，同時也透過最終為期一天的提案競賽，讓學生的提案有成果發表的機會。
      </p>
      <h3 className="pb-5 text-3xl font-bold text-left text-gray-600">關於雲端運算</h3>
      <p className="mb-4 text-lg font-normal tracking-wide text-left text-gray-500 indent-6 dark:text-gray-400 lg:tracking-normal">
        雲端運算（Cloud
        Computing）是近年來非常熱門的科技名詞，甚至整個資訊產業的發展方向都因此受到了影響，現在已成為國際間各大科技公司爭搶的市場。根據
        LinkedIn 「2020
        年企業最需要的技能」調查指出，目前最受企業歡迎的人才分別為：AI、雲端運算、區塊鏈。雲端服務AWS市佔率超過5成。
        根據統計，在美國持有 AWS Solutions Architect Associate 證照的 IT 人員平均年薪高出同業 30% (Simplilearn
        2021)。大數據、 人工智慧與雲端等新技術已經開始被各行各業採用，從事軟體開發、
        雲端基礎架構部署、大數據分析、系統工程等等人才更加炙手可熱。
        想要凸顯個人履歷、增加面試機會，雲端技能將會是你未來不可或缺的一大優勢！
      </p>
      <h3 className="pb-5 text-3xl font-bold text-left text-gray-600">AWS Educate 線上學習平台</h3>
      <p className="mb-4 text-lg font-normal tracking-wide text-left text-gray-500 indent-6 dark:text-gray-400 lg:tracking-normal">
        <Link href="https://aws.amazon.com/tw/education/awseducate/">AWS Educate</Link>{' '}
        是一個完全免費，可以線上學習雲端職能的學習平台，只要一個電子信箱不論是教育機構、教育工作者、
        學生都可以隨時隨地開始學習，目的是培養學習者對於未來雲端相關職缺的基本知識與應用。 而若您是 14
        歲以上的在學生，包含高中、技職學院、大學、研究所的學生，AWS Educate 將是您培養雲端職能最適合的平台。
      </p>
      <div className="flex justify-center my-10">
        <iframe
          className="border-8 border-double border-sky-700"
          width="910"
          height="528"
          src="https://www.youtube.com/embed/X36oOsjyoXA"
          title="Your Journey to a Cloud Career with AWS Educate"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <button
        type="button"
        className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <a href="https://www.awseducate.com/registration/s/registration-detail?language=en_US&promocode=Taiwan_AWS3">
          馬上免費學習！
        </a>
      </button>
    </div>
  )
}
