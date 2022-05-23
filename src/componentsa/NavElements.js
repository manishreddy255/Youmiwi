import { Anchor, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const NavElements =  ({computerNavigation}) => {
    return(
        <div className={`w-[60vw] flex justify-start items-center flex-wrap ${computerNavigation}`}>

        <Anchor className="text-slate-900 hover:text-sky-900 text-xl antialiased hover:subpixel-antialiased font-bold mr-[5vw] " component={Link} to="/">
      Home
    </Anchor>
        <Anchor className="text-slate-900 hover:text-sky-900 text-xl antialiased hover:subpixel-antialiased font-bold mr-[5vw]" component={Link} to="/about">
      About
    </Anchor>
    <Anchor className="text-slate-900 hover:text-sky-900 text-xl mr-[5vw] antialiased hover:subpixel-antialiased font-bold" component={Link} to="/events">
      Events
    </Anchor>
    <Anchor className="text-slate-900 hover:text-sky-900 text-xl mr-[5vw] antialiased hover:subpixel-antialiased font-bold" component={Link} to="/contactus">
      Contact Us
    </Anchor>
    <Link to="/joinus">
    <Button className="bg-blue-600 mr-[5vw]">
      Join Us
    </Button>
    </Link>
    

        </div>
    )
}

export default NavElements