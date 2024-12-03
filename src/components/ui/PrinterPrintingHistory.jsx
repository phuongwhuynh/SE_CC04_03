import * as React from "react"
import { styled } from "@mui/system"
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/material"
import StatusButton from "./StatusButton"

export default function PrinterPrintingHistory() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Root>
      <table
        aria-label="custom pagination table"
        style={{ tableLayout: "fixed", width: "100%" }}
      >
        <thead>
          <tr className="text-sm">
            <th style={{ width: "5%" }}>ID</th>
            <th style={{ width: "25%" }}>Tài liệu</th>
            <th style={{ width: "25%" }}>Mail</th>
            <th style={{ width: "20%" }}>Ngày</th>
            <th style={{ width: "15%" }}>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, idx) => (
            <tr key={row.date} className="text-sm">
              <td>{idx + 1}</td>
              <td>{row.name}</td>
              <td className="email-cell">{row.mail}</td>
              <td>
                <p className="text-black">{row.date}</p>
                <p className="text-[13px]">{row.time}</p>
              </td>
              <td>
                <StatusButton model={{ status: row.status }} size="small" />
              </td>
            </tr>
          ))}
          {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={5} aria-hidden />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={5}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  "aria-label": "rows per page",
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
      </table>
    </Root>
  )
}

function createData(date, time, name, mail, status) {
  return { date, time, name, mail, status }
}

const rows = [
  createData(
    "20/09/2024",
    "13:25",
    "finalTest.docx",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
  createData(
    "22/09/2024",
    "13:25",
    "KTCT.pdf",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
  createData(
    "18/09/2024",
    "13:25",
    "minhchung.png",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
  createData(
    "28/09/2024",
    "13:25",
    "assignment-1.pdf",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
  createData(
    "02/10/2024",
    "13:25",
    "MMref.pdf",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
  createData(
    "09/05/2024",
    "13:25",
    "hi.docx",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
  createData(
    "12/11/2024",
    "13:25",
    "paperthesis.docx",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
  createData(
    "7/09/2024",
    "13:25",
    "lab1_erd_Design.pdf",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
  createData(
    "01/12/2024",
    "13:25",
    "pomodoro.docx",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
  createData(
    "07/11/2024",
    "13:25",
    "periodic_table.pdf",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
  createData(
    "06/10/2024",
    "13:25",
    "note_db.docx",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
  createData(
    "10/06/2024",
    "13:25",
    "salon.docx",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
  createData(
    "12/12/2024",
    "13:25",
    "slide_exact.pdf",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
  createData(
    "10/09/2024",
    "13:25",
    "genetic_colgen",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
  createData(
    "15/09/2024",
    "13:25",
    "asm2.pdf",
    "anh.huynhanh@hcmut.edu.vn",
    "done"
  ),
].sort((a, b) => {
  const dateA = new Date(a.date.split("/").reverse().join("-"))
  const dateB = new Date(b.date.split("/").reverse().join("-"))
  return dateB - dateA
})

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
}

const Root = styled("div")(
  ({ theme }) => `
  table {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed; /* Ensures fixed column widths */
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    text-align: left;
    padding: 8px;
    overflow: hidden;
  }

  .email-cell {
    word-wrap: break-word; /* Breaks long email lines */
    word-break: break-word; /* Breaks words if too long */
    white-space: pre-wrap; /* Preserves line breaks and wraps */
  }

  th {
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  }
  `
)

const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
`
