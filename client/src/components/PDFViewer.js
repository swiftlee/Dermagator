import React, {useState, useEffect} from 'react';
import {Document, Page} from 'react-pdf';

const PDFViewer = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        props.setPage(pageNum);
        props.setNumPages(numPages);
    }, [numPages, pageNum, props]);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
        props.setNumPages(numPages);
    };

    const goToPrevPage = () => {
        if (pageNum == 1) {
            props.setPage(numPages);
            setPageNum(numPages);
        } else {
            props.setPage(pageNum - 1);
            setPageNum(pageNum - 1);
        }
    };

    const goToNextPage = () => {
        if (pageNum == numPages) {
            props.setPage(1);
            setPageNum(1);
        } else {
            props.setPage(pageNum + 1);
            setPageNum(pageNum + 1);
        }
    };

    if (numPages == 1)  {
        return(
            <div className='pdf'>
            <Document
                file={props.file}
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNum}/>
            </Document>
            </div>
        )
    } else {
        return (
            <div className='pdf'>
                <Document
                    file={props.file}
                    onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNum}/>
                </Document>
                <nav>
                    <button onClick={goToPrevPage} className='m-3 btn btn-dark'>
                        Prev
                    </button>
                    <button onClick={goToNextPage} className='btn btn-dark'>
                        Next
                    </button>
                </nav>
            </div>
        )
    }
};

export default PDFViewer;
