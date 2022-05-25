import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Burger, Drawer } from '@mantine/core';
import youmewi from "../images/youmewi.png"
import NavElements from "./NavElements";


export default function NavBar() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';
  const burger = opened ? 'visible' : 'hidden';


  return (
    <>
      <div className=" 
      flex h-[12vh]
      pr-[4vw] pl-[4vw]
       items-center justify-between ">
        <Link to={"/"}>
          <div className=" 
        w-[20vw] h-[fit-content] flex justify-start items-center  ">

            <img src={youmewi} className="w-[100%]" alt="youmewi" />
          </div>
        </Link>
        <NavElements computerNavigation={"navbar_navigation"} />



        <Burger
          className="burger"
          opened={opened}
          onClick={() =>
            setOpened((o) => !o)

          }
          title={title}
        />


      </div>


      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        position="right"
        className=" w-[fit-content] "
      >
        <NavElements computerNavigation={`mobile_navbar_navigation ${burger} `} />
      </Drawer>

    </>
  )
}