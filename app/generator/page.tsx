'use client';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import OptionsDialog from "../ui/optionsDialog";

export default function Home() {
  const [source, setSource] = useState('');
  const [opendedOptionsDialog, setOpendedOptionsDialog] = useState(false);

  const openOptionsDialog = () => {
    setOpendedOptionsDialog(true);
  };

  const handleClose = () => {
    setOpendedOptionsDialog(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSource(event.target.value);
  };

  return (
    <Container maxWidth={'xl'}>
      <br />
      <Typography variant="h3" gutterBottom>
        Generatore di esami
      </Typography>
      <Grid container spacing={2} sx={{
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel>Sorgente</InputLabel>
            <Select
              value={source}
              onChange={handleChange}
              autoWidth
              label="Sorgente"
              fullWidth
            >
              <MenuItem value={0}>Domande 1.xlsx</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={2}>
          <Button variant="contained" fullWidth>Genera template</Button>
        </Grid>
        <Grid size={2}>
          <Button variant="contained" color='success'>Carica nuova sorgente</Button>
        </Grid>
        <Grid size={1}>
          <Button variant="contained" color='success' onClick={openOptionsDialog}>Opzioni...</Button>
        </Grid>
        <Grid size={1}>
          <Button variant="contained" color='success' onClick={openOptionsDialog}>Stile...</Button>
        </Grid>
        <Grid size={12}>
          <TextField label="Titolo del documento" variant="outlined" fullWidth />
        </Grid>
        <Grid size={12}>
          <TextField label="Sottotitolo del documento" variant="outlined" fullWidth />
        </Grid>
        <Grid size={6}>
          <TextField label="Prefisso dei file" variant="outlined" fullWidth />
        </Grid>
        <Grid size={6}>
          <TextField label="Nome del file zip" variant="outlined" fullWidth />
        </Grid>
        <Grid size={4}>
          <TextField label="Numero di esami" variant="outlined" type="number"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            fullWidth />
        </Grid>
        <Grid size={4}>
          <TextField label="Numero di inizio" variant="outlined" type="number"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            fullWidth />
        </Grid>
        <Grid size={4}>
          <TextField label="Numero di domande per esame" variant="outlined" type="number"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            fullWidth />
        </Grid>
      </Grid>
      <br />
      <Typography variant="h5" gutterBottom>
        Filtri
      </Typography>
      <Grid container spacing={2} sx={{
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Grid size={6}>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel required control={<Checkbox />} label="Required" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
          </FormGroup>
        </Grid>
      </Grid>
      <OptionsDialog open={opendedOptionsDialog} handleClose={handleClose} />
    </Container>
  );
}