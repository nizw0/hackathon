import { Line } from './line'
import style from './prize.module.css'

export function Prize() {
  return (
    <div className="bg-[#182025] px-5 py-12">
      <h2 className={style.h2}>競賽獎項</h2>
      <Line />
      <div className="relative grid justify-center overflow-x-auto">
        <table className="w-full text-sm text-left text-white">
          <tbody>
            <tr className="border-b bg-[#182025]">
              <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap">
                🥇第一名
              </th>
              <td className="px-6 py-4">
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>AWS 內部 BD/DEV 部門 一對一面談機會</li>
                  <li>AWS 雲端技術專屬 Training Session</li>
                  <li>AWS 證照優惠（全額補助 價值 3000 元新台幣）</li>
                </ol>
              </td>
            </tr>
            <tr className="border-b bg-[#182025]">
              <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap">
                🥈第二名
              </th>
              <td className="px-6 py-4">
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>AWS 內部 BD/DEV 部門 一對一面談機會</li>
                  <li>AWS 雲端技術專屬 Training Session</li>
                </ol>
              </td>
            </tr>
            <tr className="border-b bg-[#182025]">
              <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap">
                🥉第三名
              </th>
              <td className="px-6 py-4">
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>AWS 雲端技術專屬 Training Session</li>
                </ol>
              </td>
            </tr>
            <tr className="border-b bg-[#182025]">
              <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap">
                🏅最佳技術獎
              </th>
              <td className="px-6 py-4">
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>紀念簡報筆、AWS Credit 25$ （所有隊員各一份）</li>
                </ol>
              </td>
            </tr>
            <tr className="border-b bg-[#182025]">
              <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap">
                🎖️通過初賽隊伍
              </th>
              <td className="px-6 py-4">
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>初賽參與證書、參賽小禮包</li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
