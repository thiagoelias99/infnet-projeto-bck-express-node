import { Box, Button, Paper, TextField } from '@mui/material'
import React, { useState, useContext } from 'react'
import { AppContext } from '../../context/AppProvider';
import { fakerPT_BR as faker } from '@faker-js/faker';

export function CadastroDepartamento() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const { postDepartamentos, getDepartamentos } = useContext(AppContext)

  async function handleAddButton() {
    const data = {
      nome,
      cidade,
    };
    const result = await postDepartamentos(data)
    if (result instanceof Error) {
    } else {
      setNome("")
      setCidade("")
    }
    getDepartamentos()
  }

  function handleFakerButton() {
    const nomeFaker = faker.commerce.department()
    const cidadeFaker = faker.location.city()

    setNome(nomeFaker)
    setCidade(cidadeFaker)
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
          sx={{
            width: "220px"
          }}
        />
        <TextField
          id="cidade"
          label="Cidade"
          variant="outlined"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          sx={{
            width: "330px"
          }}
        />
        <Button
          variant='contained'
          color='success'
          onClick={handleAddButton}
        >Adicionar
        </Button>
        <Button
          variant='contained'
          color='info'
          onClick={handleFakerButton}
        >Faker</Button>
      </Box>
    </Box>
  )
}
