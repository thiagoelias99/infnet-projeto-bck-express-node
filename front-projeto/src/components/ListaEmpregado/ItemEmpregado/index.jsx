import { Box, Paper, Typography, IconButton, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';

import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context/AppProvider';

export function ItemEmpregado({ props }) {
  const [nome, setNome] = useState(props.nome);
  const [email, setEmail] = useState(props.email);
  const [idade, setIdade] = useState(props.idade);
  const [isUpdate, setIsUpdate] = useState(false)
  const { getEmpregados, deleteEmpregados, updateEmpregados } = useContext(AppContext)

  function handleDelete() {
    deleteEmpregados(props.id)
    getEmpregados()
    getEmpregados()
  }

  function handleUpdate() {
    setIsUpdate(!isUpdate)
  }

  function handleConfirm() {
    handleUpdate()
    const data = {
      nome,
      email,
      idade
    };
    updateEmpregados(props.id, data)
    getEmpregados()
  }

  return (
    <Box
      component={Paper}
      width="250px"
      display='flex'
      flexDirection="column"
      alignItems='flex-start'
      justifyContent="flex-start"
      gap={1}
      marginX={1}
      marginY={1}
      padding={1}
    >
      {!isUpdate &&
        <>
          <Typography variant='h6'>{nome}</Typography>
          <Typography variant='subtitle2'>{email}</Typography>
          <Typography variant='subtitle2'>{idade} {idade == 1 ? "ano" : "anos"}</Typography>
          <Box>
            <IconButton onClick={handleUpdate}>
              <EditIcon color='action' />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon color='error' />
            </IconButton>
          </Box>
        </>
      }

      {isUpdate &&
        <>
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
          <Box>
            <IconButton onClick={handleConfirm}>
              <CheckIcon color="success" />
            </IconButton>
            <IconButton onClick={handleUpdate}>
              <CancelIcon color="error" />
            </IconButton>
          </Box>
        </>
      }
    </Box>
  )
}
