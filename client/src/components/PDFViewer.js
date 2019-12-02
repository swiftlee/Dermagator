import React, {useState, useEffect} from 'react';
import {Document, Page} from 'react-pdf';

const PDFViewer = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        setPageNum(pageNum);
        setNumPages(numPages);
    }, [numPages, pageNum, props]);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () => {
        if (pageNum == 1)
            setPageNum(numPages);
        else
            setPageNum(pageNum - 1);
    };

    const goToNextPage = () => {
        if (pageNum == numPages)
            setPageNum(1);
        else
            setPageNum(pageNum + 1);
    };

    const defaultPDF = (
        <div className='pdf'>
        <Document
            file={props.file}
            onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNum}/>
        </Document>
        </div>
    )

    const pageBar = (
        <div className='border border-info'>
            <p align="center">
                Page <span className='font-weight-bolder'>{pageNum}</span> of <span
                className='font-weight-bolder'>{numPages}</span>
            </p>
        </div>
    )

    const buttonChanger = (
        <nav>
            <button onClick={goToPrevPage} className='m-3 btn btn-dark'>
                Prev
            </button>
            <button onClick={goToNextPage} className='btn btn-dark'>
                Next
            </button>
        </nav>
    )

    if (numPages == 1)  {
        return(
            <div>
                {defaultPDF}
                {pageBar}
            </div>
        )
    } else {
        return (
            <div>
                {defaultPDF}
                    {buttonChanger}
                {pageBar}
            </div>
        )
    }
};

export default PDFViewer;
