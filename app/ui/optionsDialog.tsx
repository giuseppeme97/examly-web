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

export default function OptionsDialog({open, handleClose}) {
    
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Opzioni aggiuntive</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Inserisci spazio cognome - nome" />
                        <FormControlLabel control={<Checkbox />} label="Inserisci sottotitolo" />
                        <FormControlLabel control={<Checkbox />} label="Inserisci numero di pagina" />
                        <FormControlLabel control={<Checkbox />} label="Numera documenti" />
                        <FormControlLabel control={<Checkbox />} label="Numero documento preciso" />
                        <FormControlLabel control={<Checkbox />} label="Numera domande" />
                        <FormControlLabel control={<Checkbox />} label="Mescola domande" />
                        <FormControlLabel control={<Checkbox />} label="Mescola risposte" />
                        <FormControlLabel control={<Checkbox />} label="Inserisci immagini domande" />
                        <FormControlLabel control={<Checkbox />} label="Includi domande singolarmente" />
                        <FormControlLabel control={<Checkbox />} label="Esporta soluzioni" />
                        <FormControlLabel control={<Checkbox />} label="Esporta RAW" />
                        <FormControlLabel control={<Checkbox />} label="Esporta in PDF" />
                        <FormControlLabel control={<Checkbox />} label="Esporta in ZIP" />
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Chiudi</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
