import { createContext, useState, useEffect } from "react"

// Predefined printers
import printer1 from '../assets/printer1.jpg'
import printer2 from "../assets/printer2.jpg"
import printer3 from "../assets/printer3.jpg"

export const GlobalContext = createContext(null)

export const defaultPrinters = [
  {
    real_name: "Brother HL-L2366DW Wifi",
    location: "CS1",
    number: 1,
    status: "rest",
    img: printer1,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "B1 - 208",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
  {
    real_name: "Canon LBP6030",
    location: "CS1",
    number: 2,
    status: "error",
    img: printer2,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "B4 - 205",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
  {
    real_name: "Canon G3420",
    location: "CS1",
    number: 3,
    status: "rest",
    img: printer2,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "A3 - 104",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
  {
    real_name: "HP LaserJet M211d (9YF82A)",
    location: "CS1",
    number: 4,
    status: "rest",
    img: printer3,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "C6 - 205",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
  {
    real_name: "Canon G3420",
    location: "CS1",
    number: 5,
    status: "rest",
    img: printer1,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "C3 - 103",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
  {
    real_name: "HP 108w (4ZB80A)",
    location: "CS1",
    number: 6,
    status: "rest",
    img: printer3,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "B8 - 203",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
  {
    real_name: "Canon LBP6030",
    location: "CS1",
    number: 7,
    status: "rest",
    img: printer3,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "B2 - 102",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
  {
    real_name: "Brother HL-L2366DW Wifi",
    location: "CS1",
    number: 8,
    status: "error",
    img: printer3,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "A4 - 205",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },

  {
    real_name: "Brother DCP-B7640DW Wifi",
    location: "CS2",
    number: 1,
    status: "rest",
    img: printer2,
    ink: "Canon 325",
    building: "H1 - 205",
    page_left: [180, 100],
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
  {
    real_name: "Canon LBP6030",
    location: "CS2",
    number: 2,
    status: "rest",
    img: printer1,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "H6 - 107",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
  {
    real_name: "HP 108w (4ZB80A)",
    location: "CS2",
    number: 3,
    status: "printing",
    img: printer2,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "H3 - 301",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
  {
    real_name: "Brother HL-L2321D",
    location: "CS2",
    number: 4,
    status: "rest",
    img: printer3,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "H4 - 103",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
  {
    real_name: "Canon LBP6030",
    location: "CS2",
    number: 5,
    status: "error",
    img: printer1,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "H5 - 305",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
  {
    real_name: "Canon LBP6030",
    location: "CS2",
    number: 6,
    status: "rest",
    img: printer3,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "H2 - 107",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
  {
    real_name: "Canon G3420",
    location: "CS2",
    number: 7,
    status: "printing",
    img: printer2,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "H2 - 201",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
  {
    real_name: "Canon LBP6030",
    location: "CS2",
    number: 8,
    status: "printing",
    img: printer1,
    ink: "Canon 325",
    page_left: [180, 100],
    building: "H3 - 102",
    allowedPaperType: ["A3", "A4"],
    file_type: ["PDF", "DOCX", "PNG", "JPEG"],
    printed: 45,
  },
]

export default function GlobalState({ children }) {
  class Log {
    constructor(id, filename, totalPages, printerName, userName) {
      this.id = id
      this.filename = filename
      this.totalPages = totalPages
      this.printerName = printerName
      this.userName = userName
      this.dateTime = new Date()
    }
  }

  class Student {
    constructor(username) {
      this.username = username
      this.balance = 100 // Default balance
      this.log = []
    }
    addBalance(amount) {
      this.balance += amount
    }
    addLog(newLog) {
      this.log.push(newLog)
    }
  }

  const [id, setId] = useState(
    () => JSON.parse(localStorage.getItem("id")) || 1
  )
  const [printersList, setPrintersList] = useState(() => {
    const savedPrinters = JSON.parse(localStorage.getItem("printers"))
    return savedPrinters || defaultPrinters
  })
  const [logList, setLogList] = useState(
    () => JSON.parse(localStorage.getItem("logs")) || []
  )
  const [studentList, setStudentList] = useState(
    () => JSON.parse(localStorage.getItem("students")) || []
  )
  const [curStudent, setCurStudent] = useState(null)
  const [tab, setTab] = useState("home")
  const [openUserSetting, setOpenUserSetting] = useState(false)
  const [collapse, setCollapse] = useState(false)
  const [curPrinter, setCurPrinter] = useState(null)
  const [addPrinter, setAddPrinter] = useState(false)
  const [files, setFiles] = useState([])

  useEffect(() => {
    localStorage.setItem("printers", JSON.stringify(printersList))
  }, [printersList])

  useEffect(() => {
    localStorage.setItem("id", JSON.stringify(id))
  }, [id])

  const addLog = (filename, totalPages, printerName, userName) => {
    const log = new Log(id, filename, totalPages, printerName, userName)
    setId((prevId) => prevId + 1)

    const updatedLogList = [...logList, log]
    setLogList(updatedLogList)

    localStorage.setItem("logs", JSON.stringify(updatedLogList))

    if (curStudent) {
      curStudent.addLog(log)
      const updatedStudentList = studentList.map((student) =>
        student.username === curStudent.username ? curStudent : student
      )
      setStudentList(updatedStudentList)
      localStorage.setItem("students", JSON.stringify(updatedStudentList))
    }
  }

  const addStudent = (username) => {
    const existingStudent = studentList.find(
      (student) => student.username === username
    )
    if (existingStudent) {
      setCurStudent(existingStudent)
    } else {
      const newStudent = new Student(username)
      const updatedStudentList = [...studentList, newStudent]
      setStudentList(updatedStudentList)
      setCurStudent(newStudent)

      localStorage.setItem("students", JSON.stringify(updatedStudentList))
    }
  }

  const addOnePrinter = (
    name,
    location,
    number,
    img,
    ink,
    page_left,
    allowedPaperType,
    file_type
  ) => {
    const newPrinter = {
      real_name: name,
      location,
      number,
      img,
      ink,
      page_left,
      allowedPaperType,
      file_type,
      printed: 0,
      status: "rest",
    }

    const updatedPrintersList = [...printersList, newPrinter]
    console.log(updatedPrintersList)
    setPrintersList(updatedPrintersList)
    
    localStorage.setItem("printers", JSON.stringify(updatedPrintersList))
  }

  return (
    <GlobalContext.Provider
      value={{
        tab,
        setTab,
        openUserSetting,
        setOpenUserSetting,
        collapse,
        setCollapse,
        curPrinter,
        setCurPrinter,
        addPrinter,
        setAddPrinter,
        files,
        setFiles,

        printersList,
        logList,
        curStudent,
        addLog,
        addOnePrinter,
        addStudent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
