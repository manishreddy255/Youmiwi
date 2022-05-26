import { Card, Group, Text, Avatar, Anchor } from "@mantine/core"

import facebookLg from "../images/facbookLg.png"
import instagramLg from "../images/instaLg.png"
import mailLg from "../images/mailLg.png"
import socials from "../images/socials.png"
import RegisterFrom from "./RegisterForm"
import youtube from "../images/youtube.png"

const Contact = () => {

    return (
        <>
            <div className="pl-[5vw]">
                <Text className="text-[1.5em] text-slate-600 text-left" weight={500}>Contact Us</Text>
            </div>
            <div className=" w-[100%] pl-[5vw] pr-[5vw] pt-[5vw]  pb-[5vw] flex flex-col justify-center items-center text-[1em] ">
                <Card shadow="lg" p="lg" className="w-[100%] md:w-[70%] ">
                    <Card.Section className="flex justify-center items-center">
                        <Text className="text-2xl mr-[2vw] text-slate-900" weight={700}>Socials</Text>
                        <Avatar src={socials} size="md" />
                    </Card.Section>
                    <div className=" md:pl-[4vw]">

                    
                    <Group className="
                    flex flex-col md:flex-row pb-[2vh] 
                    "
                    >
                        <Avatar size="xl" src={facebookLg} />
                        <Anchor className="text-slate-900 hover:text-[#f58730] text-xl  antialiased hover:subpixel-antialiased text-center " component="a" href="https://www.facebook.com/youmewi/" >
                            Youth Meditation Wing-youmewi
                        </Anchor>


                    </Group>
                    <Group className="
                    flex flex-col md:flex-row pb-[2vh]
                    ">

                        <Avatar size="xl" src={mailLg} />
                        <Anchor className="text-slate-900 hover:text-[#f58730] text-xl  antialiased hover:subpixel-antialiased " component="a" href="mailto:youmewi2605@gmail.com" >
                            youmewi2605@gmail.com
                        </Anchor>
                    </Group>
                    <Group className="
                    flex flex-col md:flex-row
                    pb-[2vh]">

                        <Avatar size="xl" src={instagramLg} />
                        <Anchor className="text-slate-700 hover:text-[#f58730] text-xl  antialiased hover:subpixel-antialiased " component="a" href="https://www.instagram.com/youmewi2605/" >
                            youmewi2605
                        </Anchor>


                    </Group>
                    <Group className="
                    flex flex-col md:flex-row
                    pb-[2vh]">

                        <Avatar size="xl" src={youtube} />
                        <Anchor className="text-slate-700 hover:text-[#f58730] text-xl  antialiased hover:subpixel-antialiased " component="a" href="https://youtube.com/channel/UCJqbc_j1J82NSteuIGGCmMA" >
                            Youth Meditation Wing
                        </Anchor>


                    </Group>
                    </div>
                </Card>
            </div>

            <RegisterFrom />

        </>
    )

}

export default Contact;