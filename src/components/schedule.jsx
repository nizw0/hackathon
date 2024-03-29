import { GrayLine } from './line'
import { Timeline, TimelineEvent } from './timeline'

export function Schedule(props) {
  return (
    <div className="py-5 bg-white" id={props.id}>
      <h2 className="text-5xl font-bold text-gray-600">活動日程</h2>
      <GrayLine />
      <div className="pt-5">
        <div className="flex justify-center">
          <Timeline>
            <TimelineEvent date="12/14" description="初賽開始" />
            <TimelineEvent date="12/21" description="競賽說明影片釋出" />
            <TimelineEvent date="01/12" description="初賽截止" />
            <TimelineEvent date="01/14" description="公布入選決賽名單" />
            <TimelineEvent date="01/17" description="團隊決賽簡報資料繳交" />
            <TimelineEvent date="01/19" description="決賽及頒獎" />
          </Timeline>
        </div>
      </div>
    </div>
  )
}
