import { Box, Button, Paper, TextField } from '@mui/material'
import React, { useState, useContext } from 'react'
import { AppContext } from '../../context/AppProvider';
import { fakerPT_BR as faker } from '@faker-js/faker';

export function CadastroEmpregado() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const { postEmpregados, getEmpregados } = useContext(AppContext)

  async function handleAddButton() {
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

  function handleFakerButton() {
    const nomeFaker = faker.person.firstName()
    const sobreNomeFaker = faker.person.lastName()
    const emailFaker = faker.internet.email(
      { firstName: nomeFaker, lastName: sobreNomeFaker }
    )
    const idadeFaker = faker.number.int({ min: 16, max: 80 })

    setNome(`${nomeFaker} ${sobreNomeFaker}`)
    setEmail(emailFaker)
    setIdade(idadeFaker)
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
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: "330px"
          }}
        />
        <TextField
          id="idade"
          type='number'
          label="Idade"
          variant="outlined"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          sx={{
            width: "90px"
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
