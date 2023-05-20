import { Box, Paper, Typography, IconButton, TextField, Button, Autocomplete, LinearProgress } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';

import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context/AppProvider';

export function ItemEmpregado({ props, departamentos }) {
  const [nome, setNome] = useState(props.nome);
  const [email, setEmail] = useState(props.email);
  const [idade, setIdade] = useState(props.idade);
  const [departamento, setDepartamento] = useState(props.departamento);
  const [salario, setSalario] = useState(props.salario);
  const [isUpdate, setIsUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const { getEmpregados, deleteEmpregados, updateEmpregados } = useContext(AppContext)

  function handleDelete() {
    setLoading(true)
    deleteEmpregados(props.id)
    setTimeout(() => {
      getEmpregados()
      setLoading(false)
    }, 1000);
  }

  function handleUpdate() {
    setIsUpdate(!isUpdate)
  }

  function handleCancel() {
    setNome(props.nome)
    setEmail(props.email)
    setIdade(props.idade)
    setSalario(props.salario)
    setDepartamento(props.departamento)

    setIsUpdate(!isUpdate)
  }

  async function handleConfirm() {
    setLoading(true)
    const data = {
      nome,
      email,
      idade,
      departamento,
      salario
    };
    const result = await updateEmpregados(props.id, data)
    if (result instanceof Error) {
      setLoading(false)
    } else {
      setTimeout(() => {
        getEmpregados()
        handleUpdate()
        setLoading(false)
      }, 1000);
    }
  }

  const depatamentoOptions = departamentos.map(departamento => departamento.nome)

  return (
    <Box
      component={Paper}
      width="250px"
      minHeight="250px"
      display='flex'
      flexDirection="column"
      alignItems='flex-start'
      justifyContent="space-between"
      gap={1}
      marginX={1}
      marginY={1}
      padding={1}
    >
      {!isUpdate &&
        <>
          {loading && <Box sx={{ width: '100%' }}>
            <LinearProgress color='success' />
          </Box>}
          <Box
            display='flex'
            flexDirection="column"
            alignItems='flex-start'
            justifyContent="fles-start"
            gap={1}
          >
            <Typography variant='h6'>{nome}</Typography>
            <Typography variant='subtitle1'>{departamento}</Typography>
            <Typography variant='subtitle2'>R$ {salario}</Typography>
            <Typography variant='subtitle2'>{email}</Typography>
            <Typography variant='subtitle2'>{idade} {idade == 1 ? "ano" : "anos"}</Typography>
          </Box>
          <Box
            display='flex'
            flexDirection="row"
            alignItems='flex-start'
            justifyContent="fles-start"
            gap={1}
          >
            <IconButton onClick={handleUpdate}>
              <EditIcon color='primary' />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon color='error' />
            </IconButton>
          </Box>
        </>
      }

      {isUpdate &&
        <>
          {loading && <Box sx={{ width: '100%' }}>
            <LinearProgress color='success' />
          </Box>}
          <TextField
            id="nome"
            label="Nome"
            variant="outlined"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            fullWidth
          />
          <Autocomplete
            value={departamento}
            options={depatamentoOptions}
            onChange={(e, newValue) => setDepartamento(newValue)}
            fullWidth
            renderInput={(params) =>
              <TextField {...params} label="Departamento" />
            }
          />
          <TextField
            id="salario"
            type='number'
            label="Salário"
            variant="outlined"
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
            fullWidth
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            id="idade"
            type='number'
            label="Idade"
            variant="outlined"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            fullWidth
          />
          <Box>
            <IconButton onClick={handleConfirm}>
              <CheckIcon color="success" />
            </IconButton>
            <IconButton onClick={handleCancel}>
              <CancelIcon color="error" />
            </IconButton>
          </Box>
        </>
      }
    </Box>
  )
}
