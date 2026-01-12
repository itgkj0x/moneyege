import React, { useState } from 'react'
import { Box,FormControl,Tab,Typography} from '@mui/material'
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Table_Edit from '../components/Editor/Table_Edit.jsx';
import Sp_Dial from '../components/Editor/Sp_Dial.jsx';

const currentYear = dayjs();

dayjs.locale('ja');

const Editor = () => {
  const [selectedDate, setSelectedDate] = useState(currentYear); //UseStateで状態管理

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  }; //日付変更時の処理

  const selectedYear = selectedDate.year();
  const selectedMonth = selectedDate.month() + 1;

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FormControl varient="standrad" sx={{ m: 4 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
          <DatePicker
            label="月日を選択してください"
            value={selectedDate}
            onChange={handleDateChange}
            maxDate={currentYear}
            openTo="year"
            views={['year', 'month']}
            yearsOrder="desc"
            format='YYYY年MM月'
            sx={{ minWidth: 250}}
          />
          </LocalizationProvider>
        </FormControl>
        <Typography>の記録</Typography>
        <Sp_Dial  />
      </Box>
      <Table_Edit year={selectedYear} month={selectedMonth} />
    </>
  )
}

export default Editor