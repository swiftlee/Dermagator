import React, {useState} from 'react';
import FormControl from "react-bootstrap/FormControl";
import isEmpty from "is-empty";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddImageForm = (props) => {
    const token = props.token;
    const [images, setImages] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
        setSubmitted(false);
        setError('');
        if (!isEmpty(images) && token) {
            console.log('wiggity wot');
            axios.defaults.headers.common["Authorization"] = token;
            const copy = [...images];
            const formData = {file: copy};
            console.log(copy);
            axios.post('/api/upload/img', formData).then(res => {
                setSubmitted(true);
                setImages([]);
            });
        } else {
            setError('There was an issue uploading your images. Verify they are all images!');
        }
    };

    return (
        <Form>
            <Form.Row className='row row-divided'>
                <div className='col-sm-6 col-md-6 col-xl-2 col-lg-2 m-3'>
                    {submitted ? <span className='text-success'>Successfully uploaded images!</span> : null}
                    {!isEmpty(error) ? <span className='text-danger'>{error}</span> : null}
                    <FormControl id="formControlsFile"
                                 onChange={e => {
                                     let imgs = [...images];
                                     console.log(...e.target.files);
                                     imgs.push(...e.target.files);
                                     imgs = imgs.filter(img => img !== null);
                                     setImages(imgs);
                                 }}
                                 type="file"
                                 required
                                 multiple
                                 label="File"/>
                    <Button variant='primary' className='mt-3' onClick={handleSubmit}>Upload</Button>
                </div>
                <div className='col-sm-6 col-md-6 col-xl-2 col-lg-2 border border-primary w-25 p-2'>
                    <table className='text-center m-auto'>
                        <thead className='text-secondary h6'>Queued Files</thead>
                        <div className='table-row'>
                            {
                                isEmpty(images) ? <tr className='text-muted'>No images added.</tr> : null
                            }
                            {
                                images.map((img, index) => {
                                    return <tr key={index}><span style={{cursor: 'pointer'}} className='text-right float-right'
                                                                 onClick={() => setImages(images.filter(img => img !== images[index]))}>&times;</span> {img.name}
                                    </tr>
                                })
                            }
                        </div>
                    </table>
                </div>
            </Form.Row>
        </Form>
    );
};

export default AddImageForm;