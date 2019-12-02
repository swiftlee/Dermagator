import React, {useState} from 'react';
import axios from 'axios';
import data from '../../data/AboutPage'
const useAboutPage = () => {
    const [inputs, setInputs] = useState(data);
    const [section,setSection]=useState({id:"",name:"", text:"",type:"section"});
    const [employee,setEmployee]=useState({personName:"",info:""});
    
    const deleteSection=(index,event)=>{
        let temporary=inputs;
        temporary.data.splice(index,1);
        setInputs(inputs=>({...inputs,data:temporary.data}));
        handleSubmit(event);
    };
    const deleteEmployee=(index,event)=>{
        
        let temporary=inputs;
        console.log(temporary.data.length);
        for(var i=0;i<temporary.data.length;i++){
            console.log(temporary.data[i]);
            if(temporary.data[i].id==="team"){
                temporary.data[i].team.splice(index,1);//should remove the offending
                console.log(temporary.data[i].team);
                break;
            }
        }
        setInputs(inputs=>({...inputs,data:temporary.data}));
        handleSubmit(event);
    };
    const handleEmployeeChange=(event)=>{
        event.persist();
        setEmployee({...employee,[event.target.name]:event.target.value});
    };
    const handleNewEmployee=(event)=>{
        let temporary=inputs;
        for(let i=0;i<temporary.data.length;i++){
            if(temporary.data[i].id==="team"){
                temporary.data[i].team.push(employee);
            }
        }
        
        setInputs(inputs=>({...inputs,data:temporary.data}));
        handleSubmit(event);
    };
    const handleNewSectionChange=(event)=>{
        event.persist();
        setSection({...section, [event.target.name]: event.target.value});
    };
    const handleNewSection=(event)=>{
        let temporary=inputs;
        temporary.data.splice(-1,0,section);
        setInputs(inputs=>({...inputs,data:temporary.data}));
        handleSubmit(event);
    };
    const handleSubmit = async(event) => {
        event.preventDefault();
        axios.post("/api/update/updateAbout", inputs)
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
    const setInfoCardName=(index,information)=>{
        let temporary=inputs;
        temporary.data[index].name=information;
        setInputs(inputs=>({...inputs,data:temporary.data}));
    };
    const setInfoCardPerson=(index,index2,information)=>{
        let temporary=inputs;
        temporary.data[index].team[index2].personName=information;
        setInputs(inputs=>({...inputs,data:temporary.data}));
    };
    const setInfoCardText=(index,index2,information)=>{
        let temporary=inputs;
        temporary.data[index].team[index2].info=information;
        setInputs(inputs=>({...inputs,data:temporary.data}));
    };

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
        section,
        handleEmployeeChange,
        handleNewEmployee,
        employee,
        deleteSection,
        deleteEmployee
    };
};
export default useAboutPage;
