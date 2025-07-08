import { Box } from "@mui/material";
import ListaProgramacao from "../../components/scheduleList/scheduleList";
import BarChart from "../../components/charts/barChart";
import PieChart from "../../components/charts/pieChart";

function HomePage() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '90%',
        overflowX: 'hidden',
        boxSizing: 'border-box',

      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        flexWrap="wrap"
        width="100%"
      >
        {/* Gráficos */}
        <Box
          flex={1}
          minWidth="0" // evita overflow causado por flex
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box width="120vh" maxWidth="14000px" height="35vh" minHeight={250}>
            <PieChart />
          </Box>

          <Box />

          <Box width="115vh" maxWidth="1000px"  minHeight={200}>
            <BarChart />
          </Box>
        </Box>

        {/* Lista de programação */}
        <Box
          width={{ xs: "90%", md: "300px" }}
          paddingLeft={{ md: 2 }}
          paddingTop={{ xs: 2, md: 0 }}
          boxSizing="border-box"
          overflow="hidden"
        >
          <ListaProgramacao />
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
