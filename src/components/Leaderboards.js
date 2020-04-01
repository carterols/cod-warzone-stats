import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

function descendingComparator (a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
}

function getComparator (order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort (array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

const headCells = [
    { id: 'userName', numeric: false, disablePadding: true, label: 'USER' },
    { id: 'kills', numeric: true, disablePadding: false, label: 'KILLS' },
    { id: 'deaths', numeric: true, disablePadding: false, label: 'DEATHS' },
    { id: 'downs', numeric: true, disablePadding: false, label: 'DOWNS' },
    { id: 'avgKills', numeric: true, disablePadding: false, label: 'AVG. KILLS' },
    { id: 'kdRatio', numeric: true, disablePadding: false, label: 'K/D RATIO' },
    { id: 'gamesPlayed', numeric: true, disablePadding: false, label: 'GAMES PLAYED' },
    { id: 'wins', numeric: true, disablePadding: false, label: 'WINS' },
    { id: 'score', numeric: true, disablePadding: false, label: 'SCORE' },
    { id: 'avgScore', numeric: true, disablePadding: false, label: 'AVG. SCORE' },
];

const EnhancedTableHead = (props) => {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
            <TableCell padding="checkbox">
                <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                color='default'
                inputProps={{ 'aria-label': 'select all users' }}
                />
            </TableCell>
            {headCells.map(headCell => (
                <TableCell
                key={headCell.id}
                align={'left'}
                padding={headCell.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === headCell.id ? order : false}
                >
                <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                    <span className={classes.visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </span>
                    ) : null}
                </TableSortLabel>
                </TableCell>
            ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles(theme => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.primary,
          },
    title: {
      flex: '1 1 100%',
    },
  }));
  
const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
  
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle">
            Leaderboards
          </Typography>
        )}
      </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};
  
const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    }
}));
  
export default function EnhancedTable(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('score');
    const selected = props.selected;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    function changeSelected(newSelected) {
        props.changeSelected(newSelected);
    }
  
    const handleSelectAllClick = event => {
      if (event.target.checked) {
          let newSelected = {};
          props.data.forEach(user => {
              newSelected[user.userName] = {
                  data: props.data[user]
              }
          });
        changeSelected(newSelected);
        return;
      }
      changeSelected({});
    };
  
    const handleClick = (event, row) => {
        console.log(row);
      let newSelected = {
        ...selected
      };
  
      if (!selected.hasOwnProperty(row.userName)) {
          newSelected[row.userName] = {
              data: row
          }
      } else {
        delete newSelected[row.userName];
      }
  
      changeSelected(newSelected);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = event => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const isSelected = userName => {
        if (selected.hasOwnProperty(userName)) {
            return true;
        }
        return false;
    };
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.data.length - page * rowsPerPage);
    
    if (props.data) {
      return (
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <EnhancedTableToolbar numSelected={Object.keys(selected).length} />
            <TableContainer>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                size={'medium'}
                aria-label="leaderboards"
              >
                <EnhancedTableHead
                  classes={classes}
                  numSelected={Object.keys(selected).length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={props.data.length}
                />
                <TableBody>
                  {stableSort(props.data, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.userName);
                      const labelId = `user-checkbox-${index}`;
    
                      return (
                        <TableRow
                          hover
                          onClick={event => handleClick(event, row)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          className={isItemSelected ? 'row-selected' : null}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              color='default'
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </TableCell>
                          <TableCell component="th" id={labelId} scope="row" padding="none">
                            {row.userName}
                          </TableCell>
                          <TableCell align="left">{row.kills}</TableCell>
                          <TableCell align="left">{row.deaths}</TableCell>
                          <TableCell align="left">{row.downs}</TableCell>
                          <TableCell align="left">{row.avgKills}</TableCell>
                          <TableCell align="left">{row.kdRatio}</TableCell>
                          <TableCell align="left">{row.gamesPlayed}</TableCell>
                          <TableCell align="left">{row.wins}</TableCell>
                          <TableCell align="left">{row.score}</TableCell>
                          <TableCell align="left">{row.avgScore}</TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: (53) * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={props.data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      );
    }
    else {
      return null;
    }
}