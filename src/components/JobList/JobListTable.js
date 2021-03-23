import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import { AutoSizer, Column, Table } from "react-virtualized";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
const styles = (theme) => ({
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box"
  },
  table: {
    "& .ReactVirtualized__Table__headerRow": {
      flip: false,
      paddingRight: theme.direction === "rtl" ? "0 !important" : undefined
    }
  },
  tableRow: {
    cursor: "pointer"
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200]
    }
  },
  tableCell: {
    flex: 1
  },
  noClick: {
    cursor: "initial"
  }
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? "right"
            : "left"
        }
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? "right" : "left"}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const {
      classes,
      columns,
      rowHeight,
      headerHeight,
      ...tableProps
    } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: "inherit"
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired
    })
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

const sample = [
  [
    "Job_2021_01_004501",
    "MSD",
    "Pending for Review",
    "27 july 2021",
    "29 july 2021",
    1232,
    "No",
    "Regular",
    "Accepted"
  ],
  [
    "Job_2021_01_004501",
    "MSD",
    "Draft",
    "27 july 2021",
    "29 july 2021",
    1232,
    "No",
    "Rejected",
    "Reviewing"
  ],
  [
    "Job_2021_01_004501",
    "MSD",
    "Pending for Agent Accept",
    "27 july 2021",
    "29 july 2021",
    1298,
    "Yes",
    "Regular",
    "Pending"
  ],
  [
    "Job_2021_01_004501",
    "MSD",
    "Reviewing",
    "27 july 2021",
    "29 july 2021",
    1287,
    "No",
    "Trial",
    "Rejected",
    "Edit"
  ],
  [
    "Job_2021_01_004501",
    "MSD",
    "In Progress",
    "27 july 2021",
    "29 july 2021",
    1232,
    "Yes",
    "Regular",
    "Rejected",
    "Edit"
  ],
  [
    "Job_2021_01_004501",
    "MSD",
    "Rejected",
    "27 july 2021",
    "29 july 2021",
    1232,
    "Yes",
    "Regular",
    "Accepted",
    "Edit"
  ],
  [
    "Job_2021_01_004501",
    "MSD",
    "Correction",
    "27 july 2021",
    "29 july 2021",
    1232,
    "Yes",
    "Regular",
    "Accepted",
    "Edit"
  ],
  
];

const statusColor = {
  "Pending for Review": "#FC8D62",
  "Completed": "#00C2FF",
  "In Progress": "#EBC623",
  "Reviewing":"#8DA0CB",
  "Draft":"#FF4C4C",
  "Pending for Agent Accept":"#A6D854",
  "Correction":"#727272",
  "Rejected":"#FF1C1C",
};
const jobStatusColor = {
  "Trial":"#FC8D62",
  "Regular":"#9FCC3B",
  "Rejected":"#FF0000",
};
const statusClearanceColor = {
  "Accepted":"#E8BD00",
  "Rejected":"#FF0000",
  "Pending":"#FC8D62",
  "Reviewing":"#727272",
}

function createData(
  id,
  jobId,
  jobTitle,
  status,
  postingTime,
  deliveryTime,
  totalQuality,
  isUrgent,
  jobType,
  statusClearance,
  action
) {
  status = <span style={{"color": statusColor[status]}}>{status}</span>;
  jobType = <span style={{"color":jobStatusColor[jobType]}}>{jobType}</span>;
  statusClearance = <div>
                    <span style={{"backgroundColor":statusClearanceColor[statusClearance],"color":"white","padding":"8px","margin":"5px","borderRadius":"10px"}}>{statusClearance}</span>
                    <span style={{"backgroundColor":statusClearanceColor[statusClearance],"color":"white","padding":"8px","borderRadius":"10px"}}>{statusClearance}</span>
                   </div>
  action = <div><EditIcon style={{"color":"#9FCC3B"}}></EditIcon>
                <DeleteIcon style={{"color":"#FF0000"}}></DeleteIcon>
                <CloudDownloadIcon style={{"color":"#9FCC3B"}}></CloudDownloadIcon>
            </div>;
  return {
    id,
    jobId,
    jobTitle,
    status,
    postingTime,
    deliveryTime,
    totalQuality,
    isUrgent,
    jobType,
    statusClearance,
    action
  };
}

const rows = [];

for (let i = 0; i < 10; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}

export default function JobListTable() {
  return (
    <Paper style={{ height: 600, width: "100%" }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 150,
            label: "ID",
            dataKey: "jobId"
          },
          {
            width: 150,
            label: "Job Title",
            dataKey: "jobTitle",
            numeric: true
          },
          {
            width: 200,
            label: "Status",
            dataKey: "status",
            numeric: true
          },
          {
            width: 150,
            label: "Posting Time",
            dataKey: "postingTime",
            numeric: true
          },
          {
            width: 150,
            label: "Delivery Time",
            dataKey: "deliveryTime",
            numeric: true
          },
          {
            width: 150,
            label: "Total Quality",
            dataKey: "totalQuality",
            numeric: true
          },
          {
            width: 150,
            label: "Is Urgent",
            dataKey: "isUrgent",
            numeric: true
          },
          {
            width: 150,
            label: "Job Type",
            dataKey: "jobType",
            numeric: true
          },
          {
            width: 200,
            label: "Status Clearance",
            dataKey: "statusClearance",
            numeric: true
          },
          {
            width: 150,
            label: "Action",
            dataKey: "action",
            numeric: true
          }
        ]}
      />
    </Paper>
  );
}
