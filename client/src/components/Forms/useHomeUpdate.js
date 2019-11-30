import React, {useState} from 'react';
import axios from 'axios';
import data from '../../data/HomePage'
const useHomePage = () => {
    const [inputs, setInputs] = useState(data);
    const [section,setSection]=useState({id:"",name:"", text:"",type:"info"});
    const setInfoName=(index,index2,info)=>{
        let temporary=inputs;
        temporary.data[index].info[index2].title=info;
        setInputs(inputs=>({...inputs,data:temporary.data}));
    };
    const setInfoSub=(index,index2,info)=>{
        let temporary=inputs;
        temporary.data[index].info[index2].subtitle=info;
        setInputs(inputs=>({...inputs,data:temporary.data}));
    };
    const setInfoCardText=(index,index2,info)=>{
        let temporary=inputs;
        temporary.data[index].info[index2].information=info;
        setInputs(inputs=>({...inputs,data:temporary.data}));
    };
    const deleteSection=(index,event)=>{
        let temporary=inputs;
        temporary.data.splice(index,1);
        setInputs(inputs=>({...inputs,data:temporary.data}));
        handleSubmit(event);
    };
    const handleNewSectionChange=(event)=>{
        event.persist();
        setSection({...section, [event.target.name]: event.target.value});
    };
    const handleNewSection=(event)=>{
        let temporary=inputs;
        temporary.data.push(section);
        setInputs(inputs=>({...inputs,data:temporary.data}));
        handleSubmit(event);
    };
    const handleSubmit = async(event) => {
        event.preventDefault();
        axios.post("/api/update/updateHome", inputs)
            .then(res => {
                
        });
    };
    const setText=(index,information)=>{
        let temporary=inputs;
        temporary.data[index].text=information;
        setInputs(inputs=>({...inputs, data:temporary.data}));
    };
    const setName=(index,information)=>{
        let temporary=inputs;
        temporary.data[index].name=information;
        setInputs(inputs=>({...inputs, data:temporary.data}));
    };

    return {
        handleSubmit,
        inputs,
        setText,
        setName,
        handleNewSection,
        handleNewSectionChange,
        section,
        deleteSection,
        setInfoCardText,
        setInfoName,
        setInfoSub
    };
};
export default useHomePage;