import { TableContainer, TableHead, TableBody, Paper, TableRow, TableCell } from '@mui/material'
import ActionButton from 'components/ActionButton';
import { Props } from './types'

const PropertyTable = (props: Props) => {
  const { tableBody= [] } = props;
  return (
    <TableContainer component={Paper}>

        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Zip code</TableCell>
            <TableCell>Capacity</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {tableBody.map((row) => 
            <TableRow>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.county}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.zip}</TableCell>
                <TableCell>{row.capacity}</TableCell>
                <TableCell> <ActionButton value='View Details' onClick={() => console.log(row.link)} /> </TableCell>
            </TableRow>)}
        </TableBody>

    </TableContainer>
  )
}

export default PropertyTable