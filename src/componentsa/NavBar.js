import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { Anchor, Button, Burger } from '@mantine/core';
import youmewi from "../images/youmewi.svg"


export default function NavBar() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

    return (
      <div className=" 
      flex h-[7vh]
      pr-[2vw] pl-[2vw]
       items-center justify-between ">
         <Link to={"/"}>
        <div className=" 
        w-[40vw] h-[100%] flex justify-start items-center  ">

       <img className="h-[5vh] " src={youmewi} alt="youmewi"/>
        </div>
         </Link>


        <div className=" w-[60vw] flex justify-start items-center ">

        <Anchor className="text-slate-900 hover:text-sky-900 text-xl antialiased hover:subpixel-antialiased font-bold mr-[5vw] " component={Link} to="/">
      Home
    </Anchor>
        <Anchor className="text-slate-900 hover:text-sky-900 text-xl antialiased hover:subpixel-antialiased font-bold mr-[5vw]" component={Link} to="/about">
      About
    </Anchor>
    <Anchor className="text-slate-900 hover:text-sky-900 text-xl mr-[5vw] antialiased hover:subpixel-antialiased font-bold" component={Link} to="/events">
      Events
    </Anchor>
    <Anchor className="text-slate-900 hover:text-sky-900 mr-[5vw] text-xl antialiased hover:subpixel-antialiased font-bold" component={Link} to="/contactus">
      Contact Us
    </Anchor>
    <Button className="bg-blue-600">
      Join Us
    </Button>
    

        </div>
        <Burger
      opened={opened}
      onClick={() => setOpened((o) => !o)}
      title={title}
    />
      </div>
    )
}