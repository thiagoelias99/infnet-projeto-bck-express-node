import { Box, Paper, Typography, IconButton, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';

import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context/AppProvider';

export function ItemDepartamento({ props }) {
  const [nome, setNome] = useState(props.nome);
  const [cidade, setCidade] = useState(props.cidade);
  const [isUpdate, setIsUpdate] = useState(false)
  const {deleteDepartamentos, updateDepartamentos, getDepartamentos } = useContext(AppContext)

  function handleDelete() {
    deleteDepartamentos(props.id)
    getDepartamentos()
    getDepartamentos()

  }

  function handleUpdate() {
    setIsUpdate(!isUpdate)
  }

  function handleConfirm() {
    handleUpdate()
    const data = {
      nome,
      cidade
    };
    updateDepartamentos(props.id, data)
    getDepartamentos()
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
          <Typography variant='subtitle2'>{cidade}</Typography>
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
            id="cidade"
            label="Cidade"
            variant="outlined"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
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
