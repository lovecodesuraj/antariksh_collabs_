import React from 'react';
import Styles from './PDFContainer.module.css';
import { getNewsletter as getNewsletterApi } from './api';

function PDFContainer() {
  
  return (
    <div className={Styles.pdfContainer}>
    
    <iframe src={getNewsletterApi().link} allow="autoplay" title='Newsletter'></iframe>
    
    </div>
  );
}

export default PDFContainer;






