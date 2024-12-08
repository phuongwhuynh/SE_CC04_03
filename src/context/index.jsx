import { createContext, useState, useEffect } from "react"

// Predefined printers
import printer1 from "../assets/printer1.jpg"
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

const defaultUsers = [
  {
    email: "anh.huynhanh@hcmut.edu.vn",
    name: "HUỲNH NGUYỄN NGỌC ANH",
    major: "Khoa học máy tính",
    studentID: "2252022",
    password: "Student123456",
    role: "student",
    log: [],
    balance: 100,
  },
  {
    email: "quan.hoangstephen180@hcmut.edu.vn",
    name: "HOÀNG MINH QUÂN",
    major: "Khoa học máy tính",
    studentID: "2212787",
    password: "Student123456",
    role: "student",
    log: [],
    balance: 100,
  },
  // More users...
]

export default function GlobalState({ children }) {
  class Log {
    constructor(filename, totalPages, printerName, studentID) {
      this.filename = filename
      this.totalPages = totalPages
      this.printerName = printerName
      this.userid = studentID
      this.dateTime = new Date()
    }
  }

  class Student {
    constructor(email, name, major, id, password, role, log = []) {
      this.email = email
      this.name = name
      this.major = major
      this.studentID = id
      this.password = password
      this.role = role
      this.log = log
      this.balance = 100 // Default balance
    }

    addBalance(amount) {
      this.balance += amount
    }

    addLog(newLog) {
      this.log = [...this.log, newLog]
    }
  }

  const [printersList, setPrintersList] = useState(() => {
    const savedPrinters = JSON.parse(localStorage.getItem("printers"))
    return savedPrinters || defaultPrinters
  })
  const [usersList, setUsersList] = useState(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"))
    return savedUsers || defaultUsers
  })
  const [logList, setLogList] = useState(() => {
    const savedLogs = JSON.parse(localStorage.getItem("logs"))
    return savedLogs || []
  })
  const [curStudent, setCurStudent] = useState(null)
  const [tab, setTab] = useState("home")
  const [openUserSetting, setOpenUserSetting] = useState(false)
  const [collapse, setCollapse] = useState(false)
  const [curPrinter, setCurPrinter] = useState(null)
  const [addPrinter, setAddPrinter] = useState(false)
  const [files, setFiles] = useState([])

  useEffect(() => {
    if (printersList !== JSON.parse(localStorage.getItem("printers"))) {
      localStorage.setItem("printers", JSON.stringify(printersList))
    }
  }, [printersList])

  useEffect(() => {
    if (usersList !== JSON.parse(localStorage.getItem("users"))) {
      localStorage.setItem("users", JSON.stringify(usersList))
    }
  }, [usersList])

  useEffect(() => {
    if (logList !== JSON.parse(localStorage.getItem("logs"))) {
      localStorage.setItem("logs", JSON.stringify(logList)) // Corrected here
    }
  }, [logList])



  const addLog = (filename, totalPages, printerName, studentID) => {
    const log = new Log(filename, totalPages, printerName, studentID)

    const updatedLogList = [...logList, log]
    setLogList(updatedLogList)

    localStorage.setItem("logs", JSON.stringify(updatedLogList))

    // if (curStudent) {
    //   const updatedStudent = { ...curStudent }
    //   updatedStudent.addLog(log)

    //   const updatedStudentList = studentList.map((student) =>
    //     student.email === updatedStudent.email ? updatedStudent : student
    //   )
    //   setStudentList(updatedStudentList)
    //   localStorage.setItem("users", JSON.stringify(updatedStudentList)) // Corrected here
    // }
  }

  const addStudent = (email) => {
    const existingStudent = usersList.find(
      (student) => student.email === email
    )
    if (existingStudent) {
      setUsersList(existingStudent)
    } else {
      const newStudent = new Student(
        email,
        "New Student", //??
        "Khoa học máy tính", // ??
        "NewID", // ??
        "Student123456", // ??
        "student"
      )
      const updatedStudentList = [...studentList, newStudent]
      setUsersList(updatedStudentList)
      setCurStudent(newStudent)

      localStorage.setItem("users", JSON.stringify(updatedStudentList))
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
        usersList,
        setUsersList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
