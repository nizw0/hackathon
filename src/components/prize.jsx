import { Line } from './line'

export function Prize(props) {
  return (
    <div className="bg-[#182025] px-5 py-12" id={props.id}>
      <h2 className="text-5xl font-bold text-white">競賽獎項</h2>
      <Line />
      <div className="relative grid justify-center overflow-x-auto">
        <table className="w-full text-sm text-left text-white">
          <tbody>
            <tr className="border-b bg-[#182025]">
              <th scope="row" className="py-4 pl-6 font-bold whitespace-nowrap">
                🥇第一名
              </th>
              <td className="py-4 pr-6">
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>AWS Console Credits 50$ USD</li>
                  <li>AWS 限量電腦包</li>
                  <li>AWS 內部主管 一對一面談機會</li>
                </ol>
              </td>
            </tr>
            <tr className="border-b bg-[#182025]">
              <th scope="row" className="py-4 pl-6 font-bold whitespace-nowrap">
                🥈第二名
              </th>
              <td className="py-4 pr-6">
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>AWS Console Credits 30$ USD</li>
                  <li>AWS 簡報筆</li>
                </ol>
              </td>
            </tr>
            <tr className="border-b bg-[#182025]">
              <th scope="row" className="py-4 pl-6 font-bold whitespace-nowrap">
                🥉第三名
              </th>
              <td className="py-4 pr-6">
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>AWS Console Credits 20$ USD</li>
                  <li>AWS 無線座充</li>
                </ol>
              </td>
            </tr>
            <tr className="border-b bg-[#182025]">
              <th scope="row" className="py-4 pl-6 font-bold whitespace-nowrap">
                🎖️通過初賽隊伍
              </th>
              <td className="py-4 pr-6">
                <ol className="pl-6 mt-2 space-y-1 list-none list-inside">
                  <li>初賽參與證書、參賽小禮包</li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-5 font-bold text-white">* 活動主辦單位保有最終解釋權利。</p>
      </div>
    </div>
  )
}
