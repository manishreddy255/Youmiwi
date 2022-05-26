
import { Link } from "react-router-dom";
import youmewi from "../images/youmewi.png"
import { Anchor, Avatar } from "@mantine/core";

const Footer = () => {

    return (
        <>

            <div className=" 
      flex h-[12vh] 
      pr-[4vw] pl-[4vw] flex-col md:flex-row 
       items-center justify-between ">
                <Link to={"/"}>
                    <div className=" 
        w-[20vw] h-[fit-content] flex justify-start items-center  ">

                        <img src={youmewi} className="w-[70%]" alt="youmewi" />
                    </div>
                </Link>

                <div>
                    All rights reserved © 2022
                </div>
                <div className="flex justify-center items-center ">
                    <h1> website maintanance by </h1>
                    <Anchor href="https://www.linkedin.com/in/aremanishreddy/" target="_blank">
                        <Avatar src={null} alt="Are Manish Reddy" color="red">MR</Avatar>
                    </Anchor>

                </div>
            </div>
        </>
    )

}

export default Footer;