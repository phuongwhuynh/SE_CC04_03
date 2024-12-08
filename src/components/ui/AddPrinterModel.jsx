import { Dialog } from "primereact/dialog"
import { useContext, useState } from "react"
import { GlobalContext } from "../../context"
import React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import MyDropzone from "./Dropzone"
import printer from '../../assets/printer1.jpg'
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Select,
  Checkbox,
  Input,
  Radio,
  RadioGroup
} from "@mui/material"

const AddPrinterModel = () => {
    const { addPrinter, setAddPrinter, addOnePrinter } =
      useContext(GlobalContext)
    const [position, setPosition] = useState("center")
    const [cs, setCs] = useState('')
    const [ink,setInk] = useState("laser")
    const handleInkChange = e=>{
      setInk(e.target.value)
      print(e.target.value)
    }
    const handleChangeCS = (e)=>{
        setCs(e.target.value)
        console.log('Campus: ',e.target.value)
    }
    const [building,setBuilding] = useState('')
    const [printerName,setPrinterName] = useState('')
    const handleChangeBulding = (e) => {
      setBuilding(e.target.value)
      console.log('Building: ',e.target.value)
    }
    const handleNameChange = (e)=>{
      setPrinterName(e.target.value)
      console.log("Name: ", e.target.value);
    }
    const buildings = {"CS1":[
        "C6 - 501",
        "B4 - 605",
        "B1 - 208",
        "A4 - 511",
        "C4 - 301",
        "B8 - 301"
    ],
    "CS2":[
        "H1 - 203",
        "H2 - 401",
        "H7 - 502",
        "H4 - 403"
    ]}
    const [selectedSizes, setSelectedSizes] = useState(["a3", "a4"])
    const [selectedFunction, setSelectedFunction] = useState("")
    const handleCheckboxChange = (size) => {
      setSelectedSizes((prev) => {
        const updatedSizes = prev.includes(size)
          ? prev.filter((s) => s !== size)
          : [...prev, size]
        console.log("Updated Sizes:", updatedSizes) // Log the updated state here
        return updatedSizes
      })
    }
    const [inkType,setInkType] = useState("Canon 325")
    const handleInkTypeChange= e => {
      setInkType(e.target.value)
    }

    const handleSubmitAdd = () => {
      setAddPrinter(false)
      console.log(`Location: ${building.split('-')[0]}`)
      let page = [200,200]
      if(selectedSizes.length==3){
        page.push(100);
      }else if(selectedSizes.length == 4){
        page.push(100);
      }
      addOnePrinter(
        printerName,
        cs,
        9,
        printer,
        inkType,
        page,
        selectedSizes,
        ["PDF", "DOCX", "PNG", "JPEG"]
      );
    }
  return (
    <Dialog
      header={
        <span className="flex gap-2 items-center text-[18px] text-black my-[-10px]">
          Thêm máy in
        </span>
      }
      visible={addPrinter}
      position={position}
      style={{ width: "50vw" }}
      onHide={() => {
        setAddPrinter(false)
      }}
      footer={<></>}
      draggable={true}
      resizable={false}
    >
      <div className="flex gap-6 items-center">
        <div>
          <MyDropzone />
        </div>
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Cơ sở
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={cs}
              onChange={handleChangeCS}
              label="cs"
            >
              <MenuItem value="CS1">CS1 - LTK</MenuItem>
              <MenuItem value="CS2">CS2 - DA</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Tòa nhà
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={building}
              onChange={handleChangeBulding}
              label="cs"
            >
              {buildings[cs]?.map((building) => (
                <MenuItem value={building}>{building}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div>
          <p className="font-semibold">Thông tin máy in: </p>
          <div className="flex gap-4 items-center">
            <p>Tên máy in: </p>
            <Input
              value={printerName}
              className="w-52"
              onChange={handleNameChange}
            />
          </div>
          <div className="flex gap-4 items-center">
            <p>Loại máy in: </p>
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 120, width: "200px" }}
            >
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={ink}
                onChange={handleInkChange}
                label="cs"
              >
                <MenuItem value="laser">In laser trắng đen</MenuItem>
                <MenuItem value="phun">In phun màu</MenuItem>
                <MenuItem value="nhiet">In nhiệt</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex gap-4">
          <p>Chức năng: </p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={selectedFunction} 
              onChange={(e) => setSelectedFunction(e.target.value)}
            >
              {["In 1 mặt", "In 2 mặt", "In màu", "In WiFi"].map((item) => (
                <FormControlLabel
                  value={item}
                  control={<Radio />}
                  label={item}
                  className="mt-[-15px]"
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="mt-4 flex gap-12">
        <div>
          <p>Kích thước giấy: </p>
          <FormControl>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedSizes.includes("letter")}
                    onChange={() => handleCheckboxChange("letter")}
                    sx={{
                      color: selectedSizes.includes("letter")
                        ? "bg-blue"
                        : "inherit",
                      "&.Mui-checked": {
                        color: "bg-blue",
                      },
                    }}
                  />
                }
                label="Letter"
              />
              <br></br>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedSizes.includes("a3")}
                    onChange={() => handleCheckboxChange("a3")}
                    sx={{
                      color: selectedSizes.includes("a3")
                        ? "bg-blue"
                        : "inherit",
                      "&.Mui-checked": {
                        color: "bg-blue",
                      },
                    }}
                  />
                }
                label="A3"
              />
              <br></br>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedSizes.includes("a4")}
                    onChange={() => handleCheckboxChange("a4")}
                    sx={{
                      color: selectedSizes.includes("a4")
                        ? "bg-blue"
                        : "inherit",
                      "&.Mui-checked": {
                        color: "bg-blue",
                      },
                    }}
                  />
                }
                label="A4"
              />
              <br></br>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedSizes.includes("b4")}
                    onChange={() => handleCheckboxChange("b4")}
                    sx={{
                      color: selectedSizes.includes("b4")
                        ? "bg-blue"
                        : "inherit",
                      "&.Mui-checked": {
                        color: "bg-blue",
                      },
                    }}
                  />
                }
                label="B4"
              />
            </div>
          </FormControl>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <p>Công suất in khuyến nghị: </p>
            <Input value={"800-2000"} className="w-20 font-semibold" /> trang /
            tháng
          </div>
          <div className="flex gap-4 items-center">
            <p>Công suất tối đa: </p>
            <Input value={"1200"} className="w-20 font-semibold" /> trang /
            tháng
          </div>
          <div className="flex gap-4 items-center">
            <p>Bộ nhớ (In được file tối đa): </p>
            <Input value={"32"} className="w-12 font-semibold" /> MB tháng
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex gap-4 items-center">
          <p>Loại mực: </p>
          <Input
            value={inkType}
            className="w-40 font-semibold"
            onChange={handleInkTypeChange}
          />
        </div>
        <div className="flex gap-4 items-center">
          <p>Chất lượng in (Độ nét): </p>
          <Input value={"2400"} className="w-14 font-semibold" />
          x
          <Input value={"600"} className="w-14 font-semibold" />
          dpi
        </div>
      </div>
      <div className="flex justify-end mr-10 mb-0">
        <div className="buttonOwn2" onClick={handleSubmitAdd}>
          <a href="#" className="relative">
            <div className="flex items-center gap-2">Thêm vào</div>
          </a>
        </div>
      </div>
    </Dialog>
  )
}
export default AddPrinterModel
