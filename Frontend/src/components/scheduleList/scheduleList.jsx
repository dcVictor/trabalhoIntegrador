import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import React, { useState } from "react";

function ListaProgramacao() {
  const [currentEvents] = useState([
    { id: '1', title: 'Portão Seccionado - Enio', start: new Date() },
    { id: '2', title: 'Portão de Enrolar - GianCarlo', start: new Date() },
    { id: '3', title: 'Portão de Enrolar - GianCarlo', start: new Date() },
    { id: '2', title: 'Portão de Enrolar - GianCarlo', start: new Date() },
    { id: '2', title: 'Portão de Enrolar - GianCarlo', start: new Date() },
    { id: '2', title: 'Portão de Enrolar - GianCarlo', start: new Date() },
     { id: '2', title: 'Portão de Enrolar - GianCarlo', start: new Date() },
      { id: '2', title: 'Portão de Enrolar - GianCarlo', start: new Date() },
       { id: '2', title: 'Portão de Enrolar - GianCarlo', start: new Date() },
        { id: '2', title: 'Portão de Enrolar - GianCarlo', start: new Date() },
         { id: '2', title: 'Portão de Enrolar - GianCarlo', start: new Date() },
          { id: '2', title: 'Portão de Enrolar - GianCarlo', start: new Date() },


  ]);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '300px',     // Limita a largura para não forçar overflow
        padding: 1,
        boxSizing: 'border-box',
   
        
      }}
    >
      <Typography variant="h5" sx={{ color: "#fff", wordWrap: 'break-word' }}>
        Programação
      </Typography>
      <Box
         sx={{
        maxHeight: "70vh", // define altura máxima
        overflowY: "auto",   // ativa scroll apenas se necessário
        pr: 1 }}    >
        
    
      <List disablePadding>
        {currentEvents.map((event) => (
          <ListItem
            key={event.id}
            sx={{
              backgroundColor: "#DAA520",
              margin: "10px 0",
              borderRadius: "4px",
              overflow: "hidden",
              wordWrap: "break-word"  // Garante quebra de texto
            }}
          >
            <ListItemText
              primary={event.title}
              secondary={formatDate(event.start, {
                year: "numeric",
                month: "short",
                day: "numeric",
                locale: "pt-br"
              })}
              sx={{
                '& .MuiListItemText-primary': {
                  whiteSpace: 'normal'  // Evita uma linha só
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
    </Box>
  );
}

export default ListaProgramacao;
