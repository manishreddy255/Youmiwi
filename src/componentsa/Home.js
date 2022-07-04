import { Title, Text, Image, Button } from "@mantine/core";
import parent1 from "../images/parent1.png";
import parent2 from "../images/parent-2.png";
import { CurrentLocation } from "tabler-icons-react";
const Home = () => {
  return (
    <>
      <div className=" bg-[#937DC2] text-white pb-4 pt-4 flex flex-row items-center justify-center " style={{ fontSize: "1.4em" }}>
        {/* <iframe title="nas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.343493668757!2d78.53264721487571!3d17.34719678810268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x276156ed5e75b84d!2zMTfCsDIwJzQ5LjkiTiA3OMKwMzInMDUuNCJF!5e0!3m2!1sen!2sin!4v1656935715557!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                   <a target={"_blank"} rel="noreferrer" href="https://goo.gl/maps/5mx3mKfKz1om9iJu7">click on this</a> */}
        <div>
        🔊 Hello everyone! 👋🏽🔊
        <br></br>
        Hope you all are doing well.💙
        <br></br>
        We are happy to announce that we are organising our second offline meet
        on 10th July 2022 in Hyderabad.
        </div>
        <div>
        <a href="https://goo.gl/maps/3SzVPtH2g71V4kXA6" target={"_blank"} rel="noreferrer" >
        <Button style={{ fontSize: "0.7em" }} className="bg-[#F94C66] hover:bg-cyan-600  ml-[20px] ">
        <CurrentLocation className="mr-4"/> Location 
        </Button>
      </a>
        </div>
        
      </div>
      <div className="grid  grid-cols-1 text-[0.9em] gap-5 md:grid-cols-2 md:text-[1em] pl-[5vw] pr-[10vw] pt-[5vw]  pb-[5vw] ">
        <div className=" flex flex-col items-center justify-center ">
          <Title order={3} style={{ fontSize: "2.4em" }}>
            YouMeWi{" "}
          </Title>
          <Text style={{ fontSize: "1.5em" }} size="lg">
            Youth Meditation Wing
          </Text>
        </div>
        <Text
          style={{ fontSize: "1.4em" }}
          size="sm"
          className="text-center md:text-left"
        >
          YouMeWi(Youth Meditation Wing) is a not-for-profit organization in
          India set up on 26th May of 2021 as a part of Spiritual tablets. Our
          mission is to impart meditation into the daily lives of children,
          teenagers, and youth through various forms of arts.
          <br />
          <br />
          The influence of meditation on our daily lives is enormous. Meditation
          enhances a child's focus. It cultivates mental stability and enriches
          inner peace in teens.
          <br />
          <br />
          As a part of our mission, we conduct online interactive sessions for
          yoga, music, painting, and dance(Kuchipudi) for children, teenagers,
          and youth. We also organize weekly fun-packed game sessions and
          cultural programs where people display their unique skills and
          interests.
          <br />
          <br />
          We also promote vegetarianism for a happy, healthy, and holistic life.
        </Text>
      </div>
      <div className="grid  grid-cols-1 text-[0.9em] gap-[4vh]  pl-[5vw] pr-[10vw] pt-[5vw]  pb-[5vw] ">
        <Title
          className=" text-center md:text-left "
          order={1}
          style={{ fontSize: "2em" }}
        >
          Parent Organization{" "}
        </Title>
        <div className=" flex flex-col md:flex-row justify-center items-center ">
          <div
            style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}
            className=" pb-[4vh] "
          >
            <Image
              radius="md"
              src={parent1}
              alt="Random unsplash image"
              component="a"
              href="https://www.pssmovement.org/about-pssm/"
              target="_blank"
            />
          </div>
          <div
            style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}
            className="flex justify-center items-center pb-[4vh"
          >
            <Image
              radius="md"
              src={parent2}
              alt="Random unsplash image"
              component="a"
              href="https://spiritualtablets.com/"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
