import React, {useState} from 'react';
import axios from 'axios';
import data from '../../data/PDFS';

const usePDFS = () => {
    const [inputs, setInputs] = useState(data);
    const [file, setFile] = useState({id: "", file: ""});

    const handleSubmit = async(event) => {
        event.preventDefault();
        axios.post("/api/update/updatePDFS", inputs)
            .then(res => {});
    };

    const deleteFile = (index, event) => {
        let temp = inputs;
        temp.pdfs.splice(index, 1);
        setInputs(inputs => ({...inputs, pdfs:temp.pdfs}));
        handleSubmit(event);
    };

    const handleNewFileChange = (event) => {
        event.persist();
        setFile({...file, [event.target.name]:event.target.value});
    };

    const handleNewFile = (event) => {
        let temp = inputs;
        temp.pdfs.splice(temp.pdfs.length, temp.pdfs.length + 1, file);
        setInputs(inputs => ({...inputs, pdfs:temp.pdfs}));
        handleSubmit(event);
    };

    
    const setFilename = (index, info) => {
        let temp = inputs;
        temp.pdfs[index].file = info;
        setInputs(inputs => ({...inputs, pdfs:temp.pdfs}));
    };

    return {
        handleSubmit,
        inputs,
        setFilename,
        handleNewFile,
        handleNewFileChange,
        file,
        deleteFile
    };    
};

export default usePDFS;