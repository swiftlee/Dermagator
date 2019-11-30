import React, {useState} from 'react';
import axios from 'axios';
import data from '../../data/Footer'
const useHomePage = () => {
    const [inputs, setInputs] = useState(data);
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        axios.post("/api/update/updateFooter", inputs)
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
        setName
    };
};
export default useHomePage;