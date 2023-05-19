import { Box, Paper } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { ItemEmpregado } from './ItemEmpregado'
import { AppContext } from '../../context/AppProvider';

export function ListaEmpregado() {
  const { empregados } = useContext(AppContext)

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
        empregados.map(empregado => {
          return (
            <ItemEmpregado key={empregado.id} props={empregado} />
          )
        })
      }
    </Box>
  )
}
