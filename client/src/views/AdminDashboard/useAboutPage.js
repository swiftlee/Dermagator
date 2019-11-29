import React, {useState} from 'react';
import axios from 'axios';
import data from '../../data/AboutPage'
const useAboutPage = () => {
    const [inputs, setInputs] = useState(data);
    const [section,setSection]=useState({name:"", text:"",type:"section"})
    const handleNewSectionChange=(event)=>{
        event.persist();
        setSection({...section, [event.target.name]: event.target.value});
    }
    const handleNewSection=()=>{
        let temporary=inputs;
        temporary.data.splice(-1,0,section)
        setInputs(inputs=>({...inputs,data:temporary.data}));
        handleSubmit();
    }
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
    const setInfoCardName=(index,information)=>{
        let temporary=inputs;
        temporary.data[index].name=information;
        setInputs(inputs=>({...inputs,data:temporary.data}));
    }
    const setInfoCardPerson=(index,index2,information)=>{
        let temporary=inputs;
        temporary.data[index].team[index2].personName=information;
        setInputs(inputs=>({...inputs,data:temporary.data}));
    }
    const setInfoCardText=(index,index2,information)=>{
        let temporary=inputs;
        temporary.data[index].team[index2].info=information;
        setInputs(inputs=>({...inputs,data:temporary.data}));
    }

    return {
        handleSubmit,
        inputs,
        setText,
        setName,
        setInfoCardName,
        setInfoCardPerson,
        setInfoCardText,
        handleNewSection,
        handleNewSectionChange,
        section
    };
};
export default useAboutPage;
