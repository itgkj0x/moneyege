import { Typography,Box } from "@mui/material"
import Table from '../components/home/Table.jsx'
import { PieChart } from '@mui/x-charts/PieChart';

import { supabase } from '../supabase/supabaseClient.js'
import { useEffect, useState } from "react"

const Home = ({ user }) => {

  const today = new Date();

  // 年・月・日・曜日を取得
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  const [month_data, setMonthData] = useState({ expense: 0, income: 0 });


  const fetchData = async () => {
    const { data, error } = await supabase
      .rpc('get_monthly_balance', { target_year: year , target_month: month })
    if (error) {
      console.error('Error fetching data:', error)
    }
    else {
      if (data && data.length > 0)
        setMonthData(data[0]);
      else
        setMonthData({ expense: 0, income: 0 });
    }
    // データの処理
  }

  useEffect(() => {
    fetchData()
  }, [fetchData]) // これを追加

  if(!month_data || (month_data.expense === 0 && month_data.income === 0)){
    return (
      <>
      <Typography sx={{textAlign:"center",m:3}}>{user?.email}の消費記録</Typography>
        <Typography variant='h5' sx={{textAlign:"center",m:1}}>
          今月のデータがありません
          <br />
          記録しましょう
        </Typography>
      </>
    );
  }

  return (
    <>
    <Typography sx={{textAlign:"center",m:3}}>{user?.email}の消費記録</Typography>
    <Typography variant='h5' sx={{textAlign:"center",m:1}}>
      あなたは今月{month_data?.expense}円使い
      {month_data?.income}円稼ぎました
      </Typography>
    <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around",p:4}}>
    
    
      <PieChart
        series={[{
          data: [
            { id: 0, value: month_data?.expense, label: 'expense' },
            { id: 1, value: month_data?.income, label: 'income' },
          ],
        },
      ]}
      width={200}
      height={200}
      sx={{m:1,p:0}}
      />
    <Box sx={{mr:10}}>
      <Table user={user} sort="expense" />
      <Table user={user} sort="income" />
    </Box>
    </Box>
    </>
  )
}

export default Home