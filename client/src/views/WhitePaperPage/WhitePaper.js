import React from 'react';
import './WhitePaper.css';
import NavBar from '../../components/Header/NavBar';
import navItems from '../../utils/navItems';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import data from '../../data/PDFS';

const WhitePaper = () => {
    const pdfViewers = [];
    let counter = 1;
    for (let key in data) {
        for (let i in data[key]) {
            pdfViewers.push(
                <div className={data[key][i].id + "-page"} id={`doc${counter}`}>
                    <PDFViewer file={data[key][i].file}/>
                </div>
            );
            counter++;
        }
    }

    return (
        <div className="main">
            <h1> Documents </h1>
            <NavBar items={navItems["whitepage-bar"]}/>
            {pdfViewers}
        </div>
    )
};
export default WhitePaper;  
