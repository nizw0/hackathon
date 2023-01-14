import { GrayLine } from './line'

export function FinalList() {
  return (
    <div className="items-center justify-center mb-5">
      <h2 className="text-5xl font-bold text-gray-600">入選決賽名單</h2>
      <GrayLine />
      <div className="justify-center my-3 space-y-3 md:flex md:space-y-0 md:space-x-3">
        <div>
          <span className="relative inline-block whitespace-nowrap rounded-full bg-blue-600 py-1 px-2.5 text-center align-baseline text-lg font-bold leading-none text-white">
            A-Rx
          </span>
        </div>
        <div>
          <span className="relative inline-block whitespace-nowrap rounded-full bg-blue-600 py-1 px-2.5 text-center align-baseline text-lg font-bold leading-none text-white">
            ESGoal
          </span>
        </div>
        <div>
          <span className="relative inline-block whitespace-nowrap rounded-full bg-blue-600 py-1 px-2.5 text-center align-baseline text-lg font-bold leading-none text-white">
            府城企鵝
          </span>
        </div>
        <div>
          <span className="relative inline-block whitespace-nowrap rounded-full bg-blue-600 py-1 px-2.5 text-center align-baseline text-lg font-bold leading-none text-white">
            N.M.S_Taiwan
          </span>
        </div>
        <div>
          <span className="relative inline-block whitespace-nowrap rounded-full bg-blue-600 py-1 px-2.5 text-center align-baseline text-lg font-bold leading-none text-white">
            拉風吉米轟隆隆
          </span>
        </div>
        <div>
          <span className="relative inline-block whitespace-nowrap rounded-full bg-blue-600 py-1 px-2.5 text-center align-baseline text-lg font-bold leading-none text-white">
            北大動保團
          </span>
        </div>
      </div>
      <span className="text-2xl font-bold text-gray-700">恭喜以上隊伍！</span>
    </div>
  )
}
