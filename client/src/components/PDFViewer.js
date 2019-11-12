import React, {Component, useState, useEffect} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

const PDFViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNum, setPageNum] = useState(1);


    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    };
    const goToPrevPage = () => {
        if (pageNum !== 1)
            setPageNum(pageNum - 1);
    };
    const goToNextPage = () => {
        if (pageNum !== numPages)
            setPageNum(pageNum + 1);
    };

    return (
        <div className='pdf'>
            <Document
                file="/cream_article.pdf"
                onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNum}/>
            </Document>
            <nav>
                <button onClick={goToPrevPage}>
                    Prev
                </button>
                <button onClick={goToNextPage}>
                    Next
                </button>
            </nav>
            <p>
                Page {pageNum} of {numPages}
            </p>
        </div>
    )
};

export default PDFViewer;