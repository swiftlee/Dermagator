//import React, { useEffect } from 'react';
//import pdfjs from '../backends/pdfjs';
import React, { Component, useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

export default class PDFViewer extends Component {
    state = { numPages: null, pageNumber: 1 };
  
    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    };
  
    goToPrevPage = () => {
        if (this.state.pageNumber != 1)
            this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    }
    goToNextPage = () => {
        if (this.state.pageNumber != this.state.numPages)
            this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
    }
    render() {
      const { pageNumber, numPages } = this.state;
    
    
      return (
        <div>
          <nav>
            <button onClick={this.goToPrevPage}>Prev</button>
            <button onClick={this.goToNextPage}>Next</button>
          </nav>
  
          <div style={{ width: 600 }}>
            <Document
              file="/cream_article.pdf"
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} width={600} />
            </Document>
          </div>
  
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      );
    }
  }

/*
const PDFViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNum, setPageNum] = useState(1);


    const onDocumentLoadSuccess = (numPages) => {
        setNumPages(numPages);
    }
    const goToPrevPage = () => {
        setPageNumber(pageNumber - 1);
    }
    const goToNextPage = () => {
        setPageNumber(pageNumber + 1);
    }



    return(
        <div>
            <nav>
                <button onClick={goToPrevPage}>
                    Prev
                </button>
                <button onClick={goToNextPage}>
                    Next
                </button>
            </nav>
            <div style={{ width: 600 }}>
                <Document
                    file="/cream_article.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNum={pageNum} width={600} />
                </Document>
            </div>
            <p>
                Page {pageNum} of {numPages}
            </p>
        </div>
    )
}

export default PDFViewer;
*/
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
*/
/*
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
