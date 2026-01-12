import React, { useState } from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SavingsIcon from "@mui/icons-material/Savings"
import PaidIcon from "@mui/icons-material/Paid"
import PaymentIcon from "@mui/icons-material/Payment"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';  
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

const actions = [
  { icon: <PaidIcon />, name: '支出' },
  { icon: <SavingsIcon />, name: '収入' },
  { icon: <PaymentIcon />, name: '借入' },
];



const Sp_Dial = () => {

  const [open, setOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);

  const [note, setNote] = useState(null);
  const [category, setCategory] = useState(null);
  const [date, setDate] = useState(null);
  const [amount, setAmount] = useState(null);

  const handleClickOpen = (actionName) => {
    setSelectedAction(actionName);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAction(null);
  };

  const Push_Data = async () => {
    
    //データベースに追加する処理
  }


  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<SpeedDialIcon />}
        sx={{ position: 'absolute', bottom: '10vh', right: '4vw', m: 4 }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            onClick={() => handleClickOpen(action.name)}
            icon={action.icon}
            slotProps={{
              tooltip: {
                title: action.name,
              },
            }}
          />
        ))}
      </SpeedDial>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          {selectedAction}に追加
        </DialogTitle>
        <DialogContent sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
          <TextField id="standard-basic" label="用途" variant="standard" sx={{m:1}}/>
          <TextField id="standard-basic" label="カテゴリー" variant="standard" sx={{m:1}}/>
          <TextField id="standard-basic" label="日付" variant="standard" sx={{m:1}}/>
          <TextField id="standard-basic" label="値段" variant="standard" sx={{m:1}}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleClose} autoFocus>
            追加
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Sp_Dial