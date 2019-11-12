/*
const PDFJS = () => {
    const init = (source, element) => {
        const textNode = document.createElement('p');
        textNode.innerHTML = 'Our PDF source will be: ${source}';

        element.appendChild(textNode);
    }
}

export default PDFJS;
*/

export default class PDFJs {
    init = (source, element) => {
      const iframe = document.createElement('iframe');

      iframe.src = '/publicfile=${source}';
      iframe.width = '100%';
      iframe.height = '100%';
  
      element.appendChild(iframe);
    }
}