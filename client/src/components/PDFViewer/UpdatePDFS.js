import React from 'react';
import usePDFS from './usePDFS';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PDFSUpdate = () => {
    const { inputs,
            handleSubmit,
            setFilename,
            handleNewFile,
            handleNewFileChange,
            file,
            deleteFile } = usePDFS();

    return (
        <div className='border-primary border p-4 m-3'>
            <h2>Update PDFS Sections</h2>
            {
                inputs.pdfs.map((divs, index) => {
                    return (
                        <Form className='border-primary border p-4 m-3' key = {divs.type + index}>
                            <Form.Label column=''>Name of PDF File {index + 1}:</Form.Label>
                            <Form.Control type="text"
                                          placeholder="File to Update"
                                          value={inputs.pdfs[index].file}
                                          onChange={event => setFilename(index, event.target.value)} 
                                          required/>
                            <div className='mt-3 mb-3'>
                                <Button className='mr-3' type="submit" onClick={handleSubmit}>
                                    Update PDF {index + 1} 
                                </Button>
                                <Button type="submit" onClick={event => deleteFile(index, event)}>
                                    Delete PDF {index  + 1}
                                </Button>
                            </div>
                        </Form>
                    )
                })
                
            }
            <div className='border-primary border p-4 m-3'>
                <h2>Add new PDF</h2>
                <Form onSubmit={handleSubmit} className='border-primary border p-4 m-3'>
                    <Form.Label column=''>PDF File:</Form.Label>
                    <Form.Control type="text"
                                  name="file"
                                  value={file.file}
                                  onChange={handleNewFileChange}
                                  required/>
                    <Form.Label column=''>PDF Unique id:</Form.Label>
                    <Form.Control type="text"
                                  placeholder="ID for new PDF"
                                  name="id"
                                  value={file.id}
                                  onChange={handleNewFileChange}
                                  required/>
                    <Button className='mr-3 mt-3 mb-3' type="submit" onClick={handleNewFile}>
                        Make new PDF
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default PDFSUpdate;