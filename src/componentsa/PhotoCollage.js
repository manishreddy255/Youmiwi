import { Group, Image } from "@mantine/core";

const PhotoCollage = ({ photos }) => {

    console.log(photos)
    return (
        <>
        <Group className="grid  grid-cols-1  md:grid-cols-2 w-[80%] md:w-[70%] m-auto pd-[5vh] pt-[5vh] ">

        {
            photos.map((photo, index) => {
                return (
                    <Image
                        key={index}
                        src={photo}
                        alt="Random unsplash image"
                        className=" h-auto object-cover"
                    />
                )
            })
        }
        </Group>
        </>
    )
}

export default PhotoCollage;