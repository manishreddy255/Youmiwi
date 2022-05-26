import { TextInput, Group, Button, Chips, Chip, Text , InputWrapper} from "@mantine/core";
import { At, PhoneCall, Location } from 'tabler-icons-react';
import { useState } from 'react';
const RegisterFrom = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [mailError, setMailError] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [ageGroup, setAgeGroup] = useState('');

    const mailValidate = (val) => {
        console.log(val)
        if (val === "") {
            setMailError('Email is required')
        } else if (/^\S+@\S+$/.test(val)) {
            setMailError("")
        } else {
            setMailError("Invalid email")
        }
    }

    const numberValidate = (val) => {
        console.log(val)
        if (val === "") {
            setPhoneError('enter phone number')
        } else if (/^\d{10}$/.test(val)) {
            setPhoneError("")
        } else {
            setPhoneError("Invalid phone number")
        }
    }

    const submitData = (event) => {
        event.preventDefault();
        console.log(
            fullName,
            email,
            phone,
            city,
            state,
            ageGroup
        )
    }

    return (
        <>
            <div className="pl-[5vw] pr-[5vw]  pb-[5vw]">

                <Text>Register</Text>
                <Text>Get access to our WhatsApp community by regestring</Text>
                <form onSubmit={submitData} className="w-[100%] md:w-[70%] m-auto " >
                    <TextInput
                        placeholder="Your name"
                        label="Full name"
                        required
                        value={fullName}
                        className=" text-left "
                        size="md"
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <TextInput
                        icon={<At />}
                        required
                        label="Email"
                        placeholder="your@email.com"
                        error={mailError}
                        className=" text-left "
                        size="md"
                        value={email}
                        onChange={(e) => {

                            setEmail(e.target.value)
                            mailValidate(e.target.value)
                        }}
                    />
                    <TextInput
                        icon={<PhoneCall />}
                        required
                        label="Phone Number"
                        error={phoneError}
                        className=" text-left "
                        size="md"
                        value={phone}
                        onChange={(e) => {

                            setPhone(e.target.value)
                            numberValidate(e.target.value)
                        }}
                    />
                    <Group className="flex">
                        <TextInput
                            icon={<Location />}
                            required
                            label="State"
                            className=" text-left "
                            size="md"
                            value={state}
                            onChange={(e) => {

                                setState(e.target.value)
                            }}
                        />
                        <TextInput
                            icon={<Location />}
                            required
                            label="City"
                            className=" text-left "
                            size="md"
                            value={city}
                            onChange={(e) => {

                                setCity(e.target.value)
                            }}
                        />
                    </Group>
                    <InputWrapper label="Age Group"
                        className=" text-left "
                        size="md"
                        required>
                        <Chips className="mt-[1vh]" value={ageGroup} onChange={setAgeGroup}
                        >
                            <Chip value="Below 12yrs ">Below 12yrs </Chip>
                            <Chip value="13 to 17 yrs">13 to 17 yrs</Chip>
                            <Chip value="18 to 25 yrs">18 to 25 yrs</Chip>
                        </Chips>
                    </InputWrapper>

                    <Button className=" bg-[#228be6] mt-[2vh]" >
                        Register
                    </Button>
                </form>
        </div>
            
        </>
    )
}

export default RegisterFrom;