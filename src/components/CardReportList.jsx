import React, { useState, useEffect } from 'react'
import styles from '../css_modules/CardReportList.module.css';
import CardReport from './CardReport';
import { dataReports } from '../data/dataReports';

function CardReportList() {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    setReports(dataReports);
  }, [])


  return (
    <div className='row d-flex justify-content-center mt-3'>
      {
        reports.map((report) => {
          return <CardReport key={report.id} name={report.name} id={report.id} description={report.description} />
        })
      }
    </div>
  )
}

export default CardReportList