import React,{useState} from 'react';
import './WhitePaper.css';
import NavBar from '../../components/Header/NavBar';
import PDFViewer from '../../components/PDFViewer';
const WhitePaper = () => {
    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(1);
    const [page2, setPage2] = useState(1);
    const [numPages2, setNumPages2] = useState(1);
    const [page3, setPage3] = useState(1);
    const [numPages3, setNumPages3] = useState(1);

    return(
        <div className="main">
            
            <h1> Documents </h1>
            <div className="first-page" id="first">
                <PDFViewer setPage={setPage} setNumPages={setNumPages} file={"/cream_one_pager.pdf"}/>
                <div className='border border-info'>
                    <p>
                        Page <span className='font-weight-bolder'>{page}</span> of <span
                        className='font-weight-bolder'>{numPages}</span>
                    </p>
                </div>
            </div>
            <div className="second-page"id="second">
                <PDFViewer setPage={setPage2} setNumPages={setNumPages2} file={"/cream_article.pdf"}/>
                <div className='border border-info'>
                    <p>
                        Page <span className='font-weight-bolder'>{page2}</span> of <span
                        className='font-weight-bolder'>{numPages2}</span>
                    </p>
                </div>
            </div>
        </div>
    );

};
export default WhitePaper;  
