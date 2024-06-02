import React, { useMemo } from "react";
import { useTable } from "react-table";

//@ts-expect-error
const TableReport = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Data", accessor: "date" },
      { Header: "Czas", accessor: "time" },
      { Header: "Typ operacji", accessor: "type" },
      { Header: "Nominały", accessor: "data" },
      { Header: "Suma", accessor: "sum" },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <div >
      <table className="table-fixed" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr className="p-5" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td className="p-5" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableReport;