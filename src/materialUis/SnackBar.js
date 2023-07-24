import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const SnackBar = ({handleClick, handleClose, oopen, msg, value}) => {
 

//   const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//   };

  const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClick}>
          {/* UNDO */}
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClick}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  return (
    <div>
            
            <Snackbar
            open={oopen}
            autoHideDuration={5000}
            onClose={handleClose}
            message={msg + " " + value}
            action={action}
            />
    </div>
  )
}

export default SnackBar
