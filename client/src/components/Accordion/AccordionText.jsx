import * as React from 'react';
import styles from '../Accordion/AccordionText.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';


export default function SimpleAccordion() {
  const findParams = useSelector((state)=>state.findParams); // массив с документами


function find(){
  return (
    <div>
        {findParams.map((el,index)=>
      <Accordion  key={new Date().getTime()+Math.random()}>
          <AccordionSummary className={styles.mainName}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{el!==null?el.name:'Документ не найден'}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {el!==null?el.text:'измените параметры поиска'}
          </Typography>
        </AccordionDetails>
        
      </Accordion>
        )}
    </div>
  )
}


  return (
    findParams.length?find():<div>Результаты поиска будут тут</div>
  );
}
