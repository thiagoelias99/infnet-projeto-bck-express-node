import { Box, Paper } from '@mui/material'
import React, { useContext } from 'react'
import { ItemDepartamento } from './ItemDepartamento'
import { AppContext } from '../../context/AppProvider';

export function ListaDepartamento() {
  const { departamentos } = useContext(AppContext)

  return (
    <Box
      component={Paper}
      width="100%"
      display='flex'
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      gap={1}
      marginX={1}
      marginY={1}
      padding={1}
    >
      {
        departamentos.map(departamento => {
          return (
            <ItemDepartamento key={departamento.id} props={departamento} />
          )
        })
      }
    </Box>
  )
}
