import { useState } from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Conan from '../assets/Conan.jpg'
import Suzume from '../assets/Suzume.jpg'
import ConanHalloween from '../assets/ConanHalloween.jpg'
import Kuroko from '../assets/Kuroko.jpg'
import './HomeCard.css'

export default function HomeCard() {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <Grid></Grid>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        paddingY={4}
      >
        <Typography variant="h4">Movies I watched recently</Typography>
        <Stack direction="column">
          <a href="https://www.conan-movie.jp" target="_blank" rel="noreferrer">
            <img src={Conan} height={250} alt="Conan" />
          </a>
          8/10
          <a href="https://suzume-tojimari-movie.jp" target="_blank" rel="noreferrer">
            <img src={Suzume} height={250} alt="Suzume" />
          </a>
          6/10
          <a href="https://www.conan-movie.jp" target="_blank" rel="noreferrer">
            <img src={ConanHalloween} height={250} alt="ConanHalloween" />
          </a>
          9/10
          <a href="http://kurobas-lg.com" target="_blank" rel="noreferrer">
            <img src={Kuroko} height={250} alt="Kuroko" />
          </a>
          11/10
        </Stack>
        <Divider />
      </Stack>
    </Card>
  );
}
