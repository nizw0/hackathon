import { Line } from './line'

export function Prize(props) {
  return (
    <div className="bg-[#182025] px-5 py-12" id={props.id}>
      <h2 className="text-5xl font-bold text-white ">競賽獎項</h2>
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
                  <li>AWS 證照優惠（全額補助 價值 3000 元新台幣）</li>
                  <li>AWS 內部 BD/DEV 部門 一對一面談機會</li>
                  <li>精美小禮物</li>
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
                  <li>紀念簡報筆</li>
                </ol>
              </td>
            </tr>
            <tr className="border-b bg-[#182025]">
              <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap">
                🥉第三名
              </th>
              <td className="px-6 py-4">
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>紀念電腦包、AWS Credit 25$</li>
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