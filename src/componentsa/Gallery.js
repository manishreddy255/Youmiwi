import photo1 from "../gallery/firstPhoto.jpeg"
import photo2 from "../gallery/secondPhoto.jpeg"
import photo3 from "../gallery/thirdPhoto.jpeg"
import photo4 from "../gallery/fourthPhoto.jpeg"
import PhotoCollage from "./PhotoCollage"
import group1 from "../gallery/group1.jpeg"
import group2 from "../gallery/group2.jpeg"
import group3 from "../gallery/group3.jpeg"
import group4 from "../gallery/group4.jpeg"
import groupSession21 from "../gallery/groupSession-2-1.jpeg"
import groupSession22 from "../gallery/groupSession-2-2.jpeg"
import groupSession23 from "../gallery/groupSession-2-3.jpeg"
import groupSession24 from "../gallery/groupSession-2-4.jpeg"
import groupSession31 from "../gallery/groupSession-3-1.jpeg"
import groupSession32 from "../gallery/groupSession-3-2.jpeg"
import groupSession33 from "../gallery/groupSession-3-3.jpeg"
import groupSession34 from "../gallery/groupSession-3-4.jpeg"
import ReactPlayer from "react-player"
import video from "../videos/video-1.mp4"
import { Text, Divider } from "@mantine/core"

const GalleryYOU = () => {

    return (
        <>
            <div className="pl-[10vw]">
                <Text className="text-[1.5em] text-slate-600 text-left" weight={500}>Gallery</Text>
            </div>
            <div className="pl-[15vw] mt-[4vh] ">
                <Text className="text-[1.5em] text-slate-600 text-left" weight={500}>Photos</Text>
            </div>
            <PhotoCollage photos={[photo1, photo2, photo3, photo4]} />
            <PhotoCollage photos={[group1, group2, group3, group4]} />
            <PhotoCollage photos={[groupSession21, groupSession22, groupSession23, groupSession24]} />
            <PhotoCollage photos={[groupSession31, groupSession32, groupSession33, groupSession34]} />


            <div className="pl-[10vw] mt-[5vh] mb-[5vh]">
                <Text className="text-[1.5em] text-slate-600 text-left" weight={500}>Videos</Text>
            </div>
            <ReactPlayer url={video} controls={true} className=" w-[80% !important ] md:w-[80%] m-auto h-auto pr-[4vw] pl-[4vw] mb-[5vh] " />
        </>
    )
}

export default GalleryYOU;