import { Anchor, Button, Avatar } from '@mantine/core';
import { Link } from 'react-router-dom';
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import youtube from "../images/youtube.png"

const NavElements = ({ computerNavigation }) => {
  return (
    <div className={`w-[70vw] flex justify-between items-center ${computerNavigation}`}>

      <Anchor className="text-slate-900 hover:text-[#f58730] text-xl antialiased hover:subpixel-antialiased " component={Link} to="/">
        Home
      </Anchor>
      <Anchor className="text-slate-900 hover:text-[#f58730] text-xl antialiased hover:subpixel-antialiased  " component={Link} to="/gallery">
        Gallery
      </Anchor>
      <Anchor className="text-slate-900 hover:text-[#f58730] text-xl  antialiased hover:subpixel-antialiased " component={Link} to="/events">
        Events
      </Anchor>
      <Anchor className="text-slate-900 hover:text-[#f58730] text-xl  antialiased hover:subpixel-antialiased " component={Link} to="/contact">
        Contact
      </Anchor>

      <div className='flex justify-between w-[13vw] '>


        <Avatar src={facebook}
          component="a"
          href="https://www.facebook.com/youmewi/"
          target="_blank"
          radius="xl" alt="it's me" />
        <Avatar src={instagram}
          component="a"
          href="https://instagram.com/youmewi2605?igshid=YmMyMTA2M2Y="
          target="_blank"
          radius="xl" alt="it's me" />
        <Avatar src={youtube}
          component="a"
          href='https://youtube.com/channel/UCJqbc_j1J82NSteuIGGCmMA'
          target="_blank"
          radius="xl" alt="it's me" />
      </div>
      <Link to="/donate">
        <Button className="bg-[#f58730] hover:bg-cyan-600 ">
          Donate
        </Button>
      </Link>
    </div>
  )
}

export default NavElements