import React, {useState} from 'react';
import axios from 'axios';
import data from '../../data/AboutPage'
const useAboutPage = () => {
    const [inputs, setInputs] = useState(data);
    console.log("This is what we get from data:");
    console.log(inputs);
    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log("About to Post")
        axios.post("/api/about/updateAbout", inputs)
            .then(res => {
                
        });
        console.log("After Post")
    };
    const setText=(index,information)=>{
        let temporary=inputs;
        temporary.data[index].text=information;
        setInputs(inputs=>({...inputs, data:temporary.data}));
    }
    const setName=(index,information)=>{
        let temporary=inputs;
        temporary.data[index].name=information;
        setInputs(inputs=>({...inputs, data:temporary.data}));
    }

    return {
        handleSubmit,
        inputs,
        setText,
        setName
    };
};
export default useAboutPage;
