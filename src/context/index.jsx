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
  }
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
  {
    email: "hung.huynhbk2022@hcmut.edu.vn",
    name: "HUỲNH GIA HƯNG",
    major: "Khoa học máy tính",
    studentID: "2252274",
    password: "Student123456",
    role: "student",
    balance: 100,

  },
  {
    email: "phuong.huynhlan@hcmut.edu.vn",
    name: "HUỲNH LAN PHƯƠNG",
    major: "Khoa học máy tính",
    studentID: "2252654",
    password: "Student123456",
    role: "student",
    balance: 100,

  },
  {
    email: "khoa.huynh314@hcmut.edu.vn",
    name: "HUỲNH NGỌC KHOA",
    major: "Khoa học máy tính",
    studentID: "2211591",
    password: "Student123456",
    role: "student",
    balance: 100,

  },
  {
    email: "spso@hcmut.edu.vn",
    name: "HCMUT SPSO",
    major: "SPSO",

    studentID: "",
    password: "Spso123456",
    role: "spso",
    balance: 100,

  }

]

export default function GlobalState({ children }) {
  const [selectedPrinter, setSelectedPrinter]=useState("");
  const [copies, setCopies] = useState(1);
  const [maxPages, setMaxPages]=useState(1);
  const [range, setRange] = useState("");
  const [pagesPerSheet, setPagesPerSheet] = useState(1);
  const [orientation, setOrientation] = useState("Dọc");
  const [margin, setMargin] = useState(0.02);
  const [isDoubleSided, setIsDoubleSided] = useState(false);
  const [flipOption, setFlipOption] = useState("dai");
  const [filePreview, setFilePreview] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [pdfPages, setPdfPages] = useState([]);
  const [fileName, setFileName] = useState('');
  const [paperSize, setPaperSize]=useState();
  class Log {
    constructor(filename, totalPages, printerName, studentID) {
      this.filename = filename
      this.totalPages = totalPages
      this.printerName = printerName
      this.userid = studentID
      const time=new Date()
      const formattedDateTime = time.toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // For 24-hour format
      });
      
      this.dateTime = formattedDateTime
    }
  }

  const updateUserBalance = (increaseBalance) => {
    setUsersList((prevUsersList) =>
      prevUsersList.map((user) =>
        user.studentID === curStudent.studentID
          ? { ...user, balance: user.balance + increaseBalance }
          : user
      )
    );
  };

  const getUserBalance = () => {
    if (!curStudent) return 0;
    const user = usersList.find((user) => user.studentID === curStudent.studentID);
    return user ? user.balance : null; // Return the balance or null if not found
  };

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

  const [curStudent, setCurStudent] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"))
    return savedUser || null
  })
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



  useEffect(() => {
    if (curStudent !== JSON.parse(localStorage.getItem("user"))) {
      localStorage.setItem("user", JSON.stringify(curStudent))
    }
  }, [curStudent])

  const addLog = (filename, totalPages, printerName, studentID) => {
    const log = new Log(filename, totalPages, printerName, studentID)

    const updatedLogList = [...logList, log]
    setLogList(updatedLogList)

    localStorage.setItem("logs", JSON.stringify(updatedLogList))
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
        usersList,
        setCurStudent,
        updateUserBalance,
        getUserBalance,

        //for service.jsx
        selectedPrinter, setSelectedPrinter,
        copies, setCopies,
        maxPages, setMaxPages,
        range, setRange,
        pagesPerSheet, setPagesPerSheet,
        orientation, setOrientation,
        margin, setMargin,
        isDoubleSided, setIsDoubleSided,
        flipOption, setFlipOption,
        filePreview, setFilePreview,
        fileType, setFileType,
        pdfPages, setPdfPages,
        fileName, setFileName,
        paperSize, setPaperSize
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}