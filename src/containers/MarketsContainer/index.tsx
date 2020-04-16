import * as React from 'react';
import { observer } from 'mobx-react';
import { useLocation } from 'react-router';
import { useMarketStore } from '../../stores/MarketStore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  wrapper: {
    marginTop: '50px'
  }
});

export const MarketsContainer = observer(() => {
  const classes = useStyles();
  const valuestore = useMarketStore([]);
  const location = useLocation();


  const getMarkets = async () => {
    const { data } = await axios.get('http://localhost:3001/markets');
    valuestore.addMarkets(data)
  }

  React.useEffect(() => {
    getMarkets();
  }, [location.hash]);

  return (
    <div className={classes.wrapper}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Market name</TableCell>
              <TableCell align="right">BTC total trade</TableCell>
              <TableCell align="right">Currency total trade</TableCell>
              <TableCell align="right">Lowest bid</TableCell>
              <TableCell align="right">Highest bid</TableCell>
              <TableCell align="right">Price weighted</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {valuestore.markets.map((row) => (
              <TableRow key={row.symbol} id={row.symbol}>
                <TableCell component="th" scope="row">
                  {row.symbol}
                </TableCell>
                <TableCell align="right">{row.volume}</TableCell>
                <TableCell align="right">{row.currency_volume}</TableCell>
                <TableCell align="right">{row.ask}</TableCell>
                <TableCell align="right">{row.bid}</TableCell>
                <TableCell align="right">{row.weighted_price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
});
