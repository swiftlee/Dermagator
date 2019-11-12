//import React, { useEffect } from 'react';
//import pdfjs from '../backends/pdfjs';
import React, { Component, useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

const PDFViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNum, setPageNum] = useState(1);


    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    }
    const goToPrevPage = () => {
        if (pageNum != 1)
            setPageNum(pageNum - 1);
    }
    const goToNextPage = () => {
        if (pageNum != numPages)
            setPageNum(pageNum + 1);
    }

    return(
        <div>
            <div style={{ width: 600 }}>
                <Document
                    file="/cream_article.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNum} width={925} />
                </Document>
            </div>
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
}

export default PDFViewer;

/*
export default class PDFViewer extends React.Component {
    constructor(props) {
        super(props);
        this.viewerRef = React.createRef();
        this.backend = new props.backend();
    }

    componentDidMount() {
        const { src } = this.props;
        const element = this.viewerRef.current;

        this.backend.init(src, element);
    }

    render() {
        return (
            <div ref={this.viewerRef} id='viewer' style={{ width: '100%', height: '100%'}}>

            </div>
        )
    }
}
const PDFViewer = (props) => {
    const viewerRef = React.createRef();
    const backend = new props.backend();

    useEffect(() => {
        const { src } = props;
        const element = viewerRef.current;
        backend.init(src, element);
    });

    return (
        <div 
            ref={viewerRef} 
            id='viewer'
            style={{ width: '100%', height: '100%'}}>
        </div>
    );
}

export default PDFViewer;
*/
