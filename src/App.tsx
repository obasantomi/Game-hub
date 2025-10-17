import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="gold">
        Nav
      </GridItem>
      <GridItem area="main" bg="coral">
        Main
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="dodgerblue">
          Aside
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
