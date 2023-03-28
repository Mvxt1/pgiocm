import React from 'react'
import * as C from './styles'
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Logotipo from '../../images/Logo.png'
import {Link} from 'react-router-dom'
import { grey } from '@mui/material/colors';


function Sidebar() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <C.sidebar>
        <div className='top'>
            <Link to="/Admin">
                <C.lgo src={Logotipo} />
            </Link>
        </div>
        <div className='center'>
            <ul>

                <p className='title'>PRINCIPAL</p>
                <Link to="/Admin" style={{textDecoration: "none"}}>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                </Link>

                <p className='title'>LISTAS</p>
                <Link to="/Admin/administradores" style={{textDecoration: "none"}}>
                    <li>
                        <GroupIcon className='icon'/>
                        <span>Administradores</span>
                    </li>
                </Link>

                <Link to="/Admin/orfanatos" style={{textDecoration: "none"}}>
                    <li>
                        <OtherHousesIcon className='icon'/>
                        <span>Orfanatos</span>
                    </li>
                </Link>

                <p className='title'>USUARIO</p>
                <Link to="/Admin/perfil" style={{textDecoration: "none"}}>
                    <li>
                        <PersonIcon className='icon'/>
                        <span>Perfil</span>
                    </li>
                </Link>
                <li>
                    <ExitToAppIcon className='icon'/>
                    <span onClick={handleClickOpen}>Logout</span>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {"Terminar a sessão?"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Voce tem certeza que deseja terminar a sessão?
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} sx={{color:'green', "&:hover": {backgroundColor: '#c9c9c9'}}}>Nao</Button>
                        <Button onClick={handleClose} sx={{color:'green', "&:hover": {backgroundColor: '#c9c9c9'}}}>Sim</Button>
                        </DialogActions>
                    </Dialog>
                </li>
            </ul>
        </div>
    </C.sidebar>
  )
}

export default Sidebar