import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function StyleDialog({open, handleClose}) {
    
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Opzioni</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Prova" />
                    </FormGroup>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
