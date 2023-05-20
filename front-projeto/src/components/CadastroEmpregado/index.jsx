import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState, useContext } from 'react'
import { AppContext } from '../../context/AppProvider';
import { fakerPT_BR as faker } from '@faker-js/faker';

export function CadastroEmpregado() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [salario, setSalario] = useState("");
  const { postEmpregados, getEmpregados } = useContext(AppContext)

  async function handleAddButton() {
    const data = {
      nome,
      email,
      idade,
      salario
    };
    const result = await postEmpregados(data)
    if (result instanceof Error) {
    } else {
      setNome("")
      setEmail("")
      setIdade("")
      setSalario("")
    }
    getEmpregados()
  }

  function handleFakerButton() {
    const nomeFaker = faker.person.firstName()
    const sobreNomeFaker = faker.person.lastName()
    const salarioFaker = faker.commerce.price({ min: 1000.00, max: 16000.00 })
    const emailFaker = faker.internet.email(
      { firstName: nomeFaker, lastName: sobreNomeFaker }
    )
    const idadeFaker = faker.number.int({ min: 16, max: 80 })

    setNome(`${nomeFaker} ${sobreNomeFaker}`)
    setEmail(emailFaker)
    setIdade(idadeFaker)
    setSalario(salarioFaker)
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
      marginTop={1}
      padding={1}
    >
      <Typography variant='h4'>Empregados</Typography>
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
          id="salario"
          label="Salário"
          type='number'
          variant="outlined"
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
          sx={{
            width: "150px"
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
        >Aleatório</Button>
      </Box>
    </Box>
  )
}
