import React from 'react';
import './WhitePaper.css';
import NavBar from '../../components/Header/NavBar';
import navItems from '../../utils/navItems';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import data from '../../data/PDFS';

const WhitePaper = () => {
    var pdfViewers = []; 
    for (var key in data) {
        for (var i in data[key]) {
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
            <NavBar items={navItems["home-bar"]}/>
            {pdfViewers}
        </div>
    )
};
export default WhitePaper;  
