import { Box, Paper, Typography, IconButton, TextField, LinearProgress } from '@mui/material'
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
  const [loading, setLoading] = useState(false)
  const { deleteDepartamentos, updateDepartamentos, getDepartamentos } = useContext(AppContext)

  function handleDelete() {
    setLoading(true)
    deleteDepartamentos(props.id)
    setTimeout(() => {
      getDepartamentos()
      setLoading(false)
    }, 1000);
  }

  function handleUpdate() {
    setIsUpdate(!isUpdate)
  }

  function handleCancel() {
    setNome(props.nome)
    setCidade(props.cidade)

    setIsUpdate(!isUpdate)
  }


  function handleConfirm() {
    setLoading(true)
    const data = {
      nome,
      cidade
    };
    updateDepartamentos(props.id, data)
    setTimeout(() => {
      getDepartamentos()
      handleUpdate()
      setLoading(false)
    }, 1000);
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
          {loading && <Box sx={{ width: '100%' }}>
            <LinearProgress color='success' />
          </Box>}
          <Typography variant='h6'>{nome}</Typography>
          <Typography variant='subtitle2'>{cidade}</Typography>
          <Box>
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
            <IconButton onClick={handleCancel}>
              <CancelIcon color="error" />
            </IconButton>
          </Box>
        </>
      }
    </Box>
  )
}
