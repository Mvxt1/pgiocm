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
import AddTaskIcon from '@mui/icons-material/AddTask';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import {Link} from 'react-router-dom'
import { grey } from '@mui/material/colors';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EscalatorWarning from '@mui/icons-material/EscalatorWarning';


function    SidebarOrf() {

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
            <Link to="/backOrf">
                <C.lgo src={Logotipo} />
            </Link>
        </div>
        <div className='center'>
            <ul>

                <p className='title'>PRINCIPAL</p>
                <Link to="/backOrf" style={{textDecoration: "none"}}>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                </Link>

                <p className='title'>LISTAS</p>
                <Link to="/backOrf/crianca" style={{textDecoration: "none"}}>
                    <li>
                        <ChildCareIcon className='icon'/>
                        <span>Crianças</span>
                    </li>
                </Link>

                <Link to="/backOrf/actividade" style={{textDecoration: "none"}}>
                    <li>
                        <AddTaskIcon className='icon'/>
                        <span>Actividades</span>
                    </li>
                </Link>

                <Link to="" style={{textDecoration: "none"}}>
                    <li>
                        <EscalatorWarning className='icon'/>
                        <span>Adopção</span>
                    </li>
                </Link>

                <Link to="" style={{textDecoration: "none"}}>
                    <li>
                        <AttachMoneyIcon className='icon'/>
                        <span>Doações</span>
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

export default SidebarOrf