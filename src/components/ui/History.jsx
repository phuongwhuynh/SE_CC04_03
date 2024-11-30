import * as React from "react"
import { styled } from "@mui/system"

import { TablePagination, tablePaginationClasses as classes } from "@mui/material"

export default function History() {
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
    <Root sx={{ maxWidth: "100%", width: 500 }}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Thời gian</th>
            <th>SPSO</th>
            <th>Nội dung</th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr key={row.date}>
              <td>
                <p className="text-black">{row.date}</p>
                <p className="text-[13px]">{row.time}</p>
              </td>
              <td style={{ width: 160 }} align="right">
                {row.name}
              </td>
              <td style={{ width: 160 }} align="right">
                {row.content}
              </td>
            </tr>
          ))}
          {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={3} aria-hidden />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
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

function createData(date, time, name, content) {
  return { date, time, name, content }
}

const rows = [
  createData("20/09/2024", "13:25", "Anh", "Thêm giấy: 500 A4, 200 A3"),
  createData("22/09/2024", "13:25", "Khoa", "Thay mực: HP 107A"),
  createData("18/09/2024", "13:25", "Phuong", "Sửa chữa: Kẹt giấy"),
  createData("28/09/2024", "13:25", "Quan", "Thêm giấy: 500 A4, 200 A3"),
  createData("02/10/2024", "13:25", "Hung", "Thêm giấy: 500 A4, 200 A3"),
  createData("09/05/2024", "13:25", "Anh", "Thêm giấy: 500 A4, 200 A3"),
  createData("12/11/2024", "13:25", "Khoa", "Tạm ngừng máy"),
  createData("7/09/2024", "13:25", "Phuong", "Sửa chữa: In lỗi"),
  createData("01/12/2024", "13:25", "Quan", "Thêm giấy: 500 A4, 200 A3"),
  createData("07/11/2024", "13:25", "Hung", "Thêm giấy: 500 A4, 200 A3"),
  createData("06/10/2024", "13:25", "Anh", "Thêm giấy: 500 A4, 200 A3"),
  createData("10/06/2024", "13:25", "Khoa", "Tạm ngừng máy"),
  createData("12/12/2024", "13:25", "Phuong", "Sửa chữa"),
  createData("10/09/2024", "13:25", "Quan", "Thêm giấy: 500 A4, 200 A3"),
  createData("15/09/2024", "13:25", "Hung", "Thêm giấy: 500 A4, 200 A3"),
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
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    text-align: left;
    padding: 8px;
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
