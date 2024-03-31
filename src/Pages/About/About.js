import Header from '../../component/Header/Header';
import { useEffect, useState } from 'react';
import styles from './About.module.scss'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const About = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid xs={6}>
          <Box sx={{ background: 'blue', minHeight: '100px' }}>
            This is Left Section
            <Stack sx={{ direction: 'row' }}>
              <Box> Hiihoihih iooih</Box>
              <Box> Hiihoihih iooih</Box>
            </Stack>
          </Box>
        </Grid>
        <Grid xs={6} 
        className={styles.rightgrid}
        >
          <Box>   <div>
            <Button sx={{ background: "red" }} onClick={handleClick}>Open Snackbar</Button>

          </div></Box>
        </Grid>
        {/************************** Snakbar Toster Msg***************************** */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
           icon={ <CheckCircleOutlineIcon fontSize="inherit" />}
            severity="success"
            variant="standard"
            sx={{ width: '100%' }}
          >
            Your Registration Has Been SuccessFully Comleted...!
          </Alert>
        </Snackbar>
      </Grid>
    </>


  );
}
export default About;

