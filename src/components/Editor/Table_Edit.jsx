import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { supabase } from '../../supabase/supabaseClient'

const Table_Edit = ({year, month}) => {


  const [MonthData, setMonthData] = useState(null);


  const fetchData = async () => {
    const { data, error } = await supabase
      .rpc('get_monthly_history', { target_year: year , target_month: month })
    if (error) {
    console.error('Error fetching data:', error)
    }
    else {
      if (data && data.length > 0)
        setMonthData(data);
      else
        setMonthData(null);
    }
  }

  useEffect(() => {
    fetchData()
  }, [year, month])
    
  return (
    <>
      <TableContainer component={Paper} sx={{m:'auto',maxWidth: '65%'}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>用途</TableCell>
            <TableCell align="right">種類</TableCell>
            <TableCell align="right">日付</TableCell>
            <TableCell align="right">支出額</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {MonthData?.map((item) => (
            <TableRow
              key={item.id}
              sx={{backgroundColor: item.type === 1 ? '#ffdfdf70' : '#ccf0ff70' , '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row">
                {item.note}
              </TableCell>
              <TableCell align="right">{item.category}</TableCell>
              <TableCell align="right">{item.date}</TableCell>
              <TableCell align="right">{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Table_Edit