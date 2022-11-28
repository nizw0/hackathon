import { GrayLine } from './line'
import { Link } from './link'

function Post(props) {
  return <li className="text-xl text-gray-600">{props.children}</li>
}

export function Board(props) {
  return (
    <div className="px-1 py-20" id={props.id}>
      <h2 className="text-5xl font-bold text-gray-600">最新公告</h2>
      <GrayLine />
      <ul className="space-y-1 text-center text-gray-500 list-none list-inside dark:text-gray-400">
        <Post>競賽【線上說明影片】網址</Post>
        <Post>
          <span className="block md:inline-block">敬請關注AWS Educate雲端校園大使的</span>
          <span className="block md:inline-block">
            <Link href="https://www.instagram.com/awseducatestdambtw/">Instagram</Link>、
            <Link href="https://www.facebook.com/awseducatestudentambassadortaiwan">Facebook</Link>
            以獲得最新消息
          </span>
        </Post>
        <Post>
          初賽報名表單（含提案上傳）
          <Link href="https://forms.zohopublic.com/joojoohappy/form/AmathonWarriorSagaAWSAWSEDUCATEHACKATHON/formperma/0SSNW_KrutCXTFj3xIRzlOImL9c0c2CLaBjgf6DiGEU">
            網址
          </Link>
        </Post>
        <Post>
          <Link href="https://tellonym.me/Amathon.Warrior.Saga">-QA- 競賽相關匿名提問留言板</Link>
        </Post>
        <Post>
          任何技術問題、相關資源、隊伍交流、成員組隊請加入
          <Link href="https://discord.gg/NzNsqJFvKJ">Discord 競賽討論群</Link>
        </Post>
      </ul>
    </div>
  )
}
