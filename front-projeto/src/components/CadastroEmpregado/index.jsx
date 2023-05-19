import { Box, Button, Paper, TextField } from '@mui/material'
import React, { useState, useContext } from 'react'
import { AppContext } from '../../context/AppProvider';

export function CadastroEmpregado() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const { postEmpregados, getEmpregados } = useContext(AppContext)

  async function handleButton() {
    const data = {
      nome,
      email,
      idade
    };
    const result = await postEmpregados(data)
    if (result instanceof Error) {
    } else {
      setNome("")
      setEmail("")
      setIdade("")
    }
    getEmpregados()
  }

  return (
    <Box
      component={Paper}
      width="100%"
      display='flex'
      flexDirection="column"
      alignItems='center'
      gap={1}
      marginX={1}
      marginY={1}
      padding={1}
    >
      <Box
        width="100%"
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        gap={1}
      >
        <TextField
          id="nome"
          label="Nome"
          variant="outlined"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="idade"
          type='number'
          label="Idade"
          variant="outlined"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <Button
          variant='contained'
          color='success'
          onClick={handleButton}
        >Adicionar</Button>
      </Box>
    </Box>
  )
}
