import React from 'react';
import './WhitePaper.css';
import NavBar from '../../components/Header/NavBar';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import data from '../../data/PDFS';

const WhitePaper = () => {
    var pdfViewers = []; 
    for (var key in data) {
        for (var i in data[key]) {
            console.log(data[key][i]);
            console.log(key);
            console.log(i);
            console.log(data[key][i].file);
            pdfViewers.push(              
                <div className={data[key][i].id + "-page"} id={data[key][i].id}>
                <PDFViewer file={data[key][i].file}/>
                </div>
            );
        }
    }

    return(
        <div className="main">
            <h1> Documents </h1>
            {pdfViewers}
        </div>
    )
};
export default WhitePaper;  