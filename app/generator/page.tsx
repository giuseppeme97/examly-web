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
import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    ochre: Palette['primary'];
  }

  interface PaletteOptions {
    ochre?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    ochre: true;
  }
}

const theme = createTheme({
  palette: {
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
});

export default function Home() {
  const [source, setSource] = useState('');
  const [optionsDialog, setOptionsDialog] = useState(false);
  const [styleDialog, setStyleDialog] = useState(false);
  const [documentTitle, setDocumentTitle] = useState("Verifica scritta di Sistemi e Reti - A.S. 2024/2025 - Classe 3F");
  const [documentSubtitle, setDocumentSubtitle] = useState("Segnare solo una delle quattro opzioni per ciascuna domanda.");
  const [documentFilename, setDocumentFilename] = useState("esame");
  const [zipFilename, setZipFilename] = useState("compito");
  const [documentsNumber, setDocumentsNumber] = useState("20");
  const [startNumber, setStartNumber] = useState("1");
  const [questionsNumber, setQuestionsNumber] = useState("20");

  const openOptionsDialog = () => {
    setOptionsDialog(true);
  };

  const closeOptionsDialog = () => {
    setOptionsDialog(false);
  };

  const openStyleDialog = () => {
    setStyleDialog(true);
  };

  const closeStyleDialog = () => {
    setOptionsDialog(false);
  };

  const handleSource = (event: SelectChangeEvent) => {
    setSource(event.target.value);
  };

  const handleNewTemplate = () => {
  };

  const handleLoadNewSource = () => {
  };

  const handleDocumentTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentTitle(event.target.value);
  };

  const handleDocumentSubtitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentSubtitle(event.target.value);
  };

  const handleDocumentFilename = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentFilename(event.target.value);
  };

  const handleZipFilename = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipFilename(event.target.value);
  };

  const handleDocumentsNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentsNumber(event.target.value);
  };

  const handleStartNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartNumber(event.target.value);
  };

  const handleQuestionsNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionsNumber(event.target.value);
  };

  const start = () => {};

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
              onChange={handleSource}
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
          <TextField label="Titolo del documento" variant="outlined" fullWidth value={documentTitle} onChange={handleDocumentTitle}/>
        </Grid>
        <Grid size={12}>
          <TextField label="Sottotitolo del documento" variant="outlined" fullWidth value={documentSubtitle} onChange={handleDocumentSubtitle}/>
        </Grid>
        <Grid size={6}>
          <TextField label="Prefisso dei file" variant="outlined" fullWidth value={documentFilename} onChange={handleDocumentFilename}/>
        </Grid>
        <Grid size={6}>
          <TextField label="Nome del file zip" variant="outlined" fullWidth value={zipFilename} onChange={handleZipFilename}/>
        </Grid>
        <Grid size={4}>
          <TextField label="Numero di esami" variant="outlined" type="number" value={documentsNumber} onChange={handleDocumentsNumber}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            fullWidth />
        </Grid>
        <Grid size={4}>
          <TextField label="Numero di inizio" variant="outlined" type="number" value={startNumber} onChange={handleStartNumber}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            fullWidth />
        </Grid>
        <Grid size={4}>
          <TextField label="Numero di domande per esame" variant="outlined" type="number" value={questionsNumber} onChange={handleQuestionsNumber}
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
        <Grid size={1}>
          <FormGroup>
            <FormControlLabel control={<Checkbox/>} label="Filtro 1" />
          </FormGroup>
        </Grid>
        <Grid size={11}>
        </Grid>
        <Grid size={12}>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color='ochre' onClick={() => {}} fullWidth>Genera esami</Button>
          </ThemeProvider>
        </Grid>
      </Grid>
      <OptionsDialog open={optionsDialog} handleClose={closeOptionsDialog} />
    </Container>
  );
}