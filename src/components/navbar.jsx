import { Button, Navbar as Nav } from 'flowbite-react'
import logo from '../assets/aws-educate-logo.png'

export function Navbar() {
  return (
    <Nav fluid={true} rounded={true} className="rounded bg-[#fe7101]">
      <Nav.Brand href="https://aws.amazon.com/tw/education/awseducate/">
        <img alt="AWS Educate Logo" className="h-12 mr-3" src={logo} />
      </Nav.Brand>
      <div className="flex md:order-2">
        <Button className="mr-2 border-none px-2 py-0.5">
          <a href="https://forms.zohopublic.com/joojoohappy/form/AmathonWarriorSagaAWSAWSEDUCATEHACKATHON/formperma/0SSNW_KrutCXTFj3xIRzlOImL9c0c2CLaBjgf6DiGEU">
            立即報名！
          </a>
        </Button>
        <Nav.Toggle />
      </div>
      <Nav.Collapse className="block w-full text-white md:block md:w-auto">
        <Nav.Link className="text-lg" href="#event">
          活動辦法
        </Nav.Link>
        <Nav.Link className="text-lg" href="#board">
          最新公告
        </Nav.Link>
      </Nav.Collapse>
    </Nav>
  )
}
