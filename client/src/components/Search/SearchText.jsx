import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './SearchText.module.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFindParams } from '../../redux/actions/findParamsAC';

export default function BasicTextFields() {

  const [sortType, setSortType] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('ASC');
  const [findParam, setFindParam] = useState({typeSort: 'createdAt', sort: 'ASC'});
  const [checkDate,setCheckDate] = useState(false);
  const dispatch = useDispatch();

  const handleCheckDate = (e) =>{ /*  валидация даты */
    if(findParam.dateStart === undefined || findParam.dateStart<=e.target.value ){
    setFindParam({...findParam,dateEnd:e.target.value})
    setCheckDate(false)
    }else setCheckDate(true)
  }

  const handleCheckDateStart = (e) =>{ /*  валидация даты */
    if(findParam.dateEnd === undefined || findParam.dateEnd>=e.target.value ){
      setCheckDate(false)
    setFindParam({...findParam,dateStart:e.target.value})
    }else {setCheckDate(true)}
  }

  const handleChangeTypeSort = (event) => { // тип сортировки
    setFindParam({...findParam,typeSort:event.target.value})
    setSortType(event.target.value);
  };
  const handleChangeSortOrder = (event) => { // порядок сортировки
    setFindParam({...findParam,sort:event.target.value})
    setSortOrder(event.target.value);
  };


  useEffect(()=>{
    // if(Object.entries(findParam).length){ // проверка пустого объекта
    // axios.post(`http://localhost:3001/find/` , findParam)
    // .then((res)=>dispatch({type: 'SET_PARAMS', payload: res.data}))
    // }
    // dispatch({type: 'SET_QUERY', payload: findParam})
    dispatch(getFindParams(findParam))
  })


  return (
    <Box
   
      sx={{
        '& > :not(style)': { },
      }}
      noValidate
      autoComplete="off"
    >
      <div className={styles.mainSearch}>

        <p>ID Документа</p>
      <div className={styles.docId}>
      <TextField style={{width:'100%'}} onChange={(e)=>{setFindParam({...findParam,id:e.target.value});console.log(findParam)}} name={'id'} id="outlined-basic" type={'number'} label="ID(только цифры)" variant="outlined" />
      </div>

      <p>Создан</p>
      <div className={styles.docCreate}>
      <TextField onChange={(e)=>{handleCheckDateStart(e);}}   /*  валидация даты */ 
      name={'dateStart'} id="outlined-basic" type={'date'} />
      <TextField onChange={(e)=>{handleCheckDate(e);}}  /*  валидация даты */
       name={'dateEnd'} id="outlined-basic" type={'date'}  />
      </div>
      {checkDate?<div style={{color:'red'}}>Введите корректную конечную дату</div>:null}

      <p>Название документа</p>
      <div className={styles.docName}>
      <TextField style={{width:'100%'}}  onChange={(e)=>{setFindParam({...findParam,nameDoc:e.target.value});console.log(findParam)}} name={'nameDoc'} id="outlined-basic" type={'text'} label="Название документа" variant="outlined" />
      </div>

      <p>Сортировка</p>
      <div className={styles.docSort}>
        {/* <form className={styles.docSort}> */}
        <Select style={{width:'50%'}}  name={'sortType'} 
          value={sortType}
          onChange={handleChangeTypeSort}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value='createdAt'>
            <em>Создан</em>
          </MenuItem>
          <MenuItem value={'name'}>Название</MenuItem>
        </Select>

        <Select style={{width:'50%'}}  name={'orderType'}
          value={sortOrder}
          onChange={handleChangeSortOrder}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value='ASC'>
            <em>по убыванию</em>
          </MenuItem>
          <MenuItem value={'DESC'}>по возрастанию</MenuItem>
        </Select>

      </div>
      </div>
    </Box>
  );
}
