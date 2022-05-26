import { Title, Text } from "@mantine/core";

const Home = () => {

    return (
        <>
            <div className="grid  grid-cols-1 text-[0.9em] gap-5 md:grid-cols-2 md:text-[1em] pl-[5vw] pr-[10vw] pt-[5vw]  pb-[5vw] " >
                <div className=" flex flex-col items-center justify-center ">

                    <Title order={3} style={{ fontSize: "2.4em" }}>You Me Wi </Title>
                    <Text style={{ fontSize: "1.5em" }} size="lg">Youth Meditation Wing</Text>
                </div>
                <Text style={{ fontSize: "1.4em" }} size="sm" className="text-center md:text-left">
                    YouMeWi(Youth Meditation Wing) is a not-for-profit organization in India set up on 26th May of 2021 as a part of Spiritual tablets. Our mission is to impart meditation into the daily lives of children, teenagers, and youth through various forms of arts.
                    <br />
                    <br />

                    As a part of our mission, we conduct online interactive sessions for yoga, music, painting, and dance(Kuchipudi) for children, teenagers, and youth. We also organize weekly fun-packed game sessions and cultural programs where people display their unique skills and interests.
                    <br />
                    <br />
                    We also promote vegetarianism for a happy, healthy, and holistic life.</Text>
            </div>
        </>
    )
}

export default Home;

