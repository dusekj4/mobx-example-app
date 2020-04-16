import * as React from 'react';
import { observer } from 'mobx-react';
import { useLocation } from 'react-router';
import { CurrencyValueStore } from '../../stores/CurrencyValueStore';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  wrapper: {
    marginTop: '50px'
  }
});

export const CurrencyValueContainer = observer(() => {
  const classes = useStyles();
  const valuestore = CurrencyValueStore([]);
  const location = useLocation();


  const getBitcoinPrices = async () => {
    const url = 'http://localhost:3001/bitcoin';
    const { data } = await axios.get(url);
    valuestore.addCurrencyValues(data);
  }

  React.useEffect(() => {
    getBitcoinPrices()
  }, [location.hash]);

  return (
    <div className={classes.wrapper}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell align="right">Trade price 24h</TableCell>
              <TableCell align="right">Trade price 7d</TableCell>
              <TableCell align="right">Trade price 30d</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {valuestore.values.map((row) => (
              <TableRow key={row.currency} id={row.currency}>
                <TableCell component="th" scope="row">
                  {row.currency}
                </TableCell>
                <TableCell align="right">{row["24h"]}</TableCell>
                <TableCell align="right">{row["7d"]}</TableCell>
                <TableCell align="right">{row["30d"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
});
