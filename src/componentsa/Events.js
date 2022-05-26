import { Group, Image, Text, Container, Divider } from "@mantine/core"
import republic from "../events/republic-22.jpeg"
import magicofMeditation from "../events/magicOfMed.jpeg"
import yogasession from "../events/yogasession.jpeg"
import shashikanth from "../events/shashikanth.jpeg"

const Events = () => {

    return (
        <>
            <div className="pl-[10vw]">
                <Text className="text-[1.5em] text-slate-600 text-left" weight={500}>Events</Text>
            </div>
            <Container className="mt-[7vh]" >


                <Group className="grid  grid-cols-1 md:grid-cols-2 gap-6 mb-[5vh] text-[1em] ">
                    <div className="flex justify-center md:justify-start items-center ">

                        <Image
                            className="w-[30vh] h-auto object-cover flex justify-center"
                            src={republic}
                        />
                    </div>
                    <Text className="text-[1.3em] w-[15em] text-center md:text-left">
                        A session on the eve of 73rd Republic day with most beautiful patriotic performances from our talented peeps
                    </Text>
                </Group>
                <Divider my="sm" />


                <Group className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[5vh] mt-[5vh]">
                    <Text className="text-[1.3em] w-[15em] text-center md:text-left">
                        A session by Captain Shashikant about carrier in Indian Army Aviation for the young and talented aspirants
                    </Text>
                    <div className="flex justify-center md:justify-start items-center">

                        <Image
                            className="w-[30vh] h-auto object-cover"
                            src={shashikanth}
                        />
                    </div>
                </Group>
                <Divider my="sm" />
                <Group className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[5vh] mt-[5vh]">
                    <div className="flex justify-center md:justify-start items-center">

                        <Image
                            className="w-[30vh] h-auto object-cover"
                            src={magicofMeditation}
                        />
                    </div>
                    <Text className="text-[1.3em] w-[15em] text-center md:text-left">
                        A session with the 6 time guinness book of World Records holder Master Eshwar on his spiritual and professional journey 😍
                    </Text>
                </Group>
                <Divider my="sm" />
                <Group className="grid grid-cols-1  md:grid-cols-2   gap-6 mb-[5vh]">
                    <Text className="text-[1.3em] w-[15em] text-center md:text-left">
                        Taking a step towards a fit and healthy society, We begun our Yoga sessions under the guidance of a professional trainer
                    </Text>
                    <div className="flex justify-center md:justify-start items-center">

                        <Image
                            className="w-[30vh] h-auto object-cover"
                            src={yogasession}
                        />
                    </div>
                </Group>
            </Container>
        </>
    )
}

export default Events;