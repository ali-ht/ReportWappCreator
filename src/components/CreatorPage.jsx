import { useState } from "react"
import StatusSelection from "./StatusSelection"
import DescriptionInput from "./DescriptionInput"
import EndButtons from "./EndButtons"
import TopBar from "./TopBar"
import { Typography } from "@mui/material"

export default function CreatorPage() {
  const [StatusSelected, setStatusSelected] = useState("")
  const [DescriptionText, setDescriptionText] = useState("")
  //TODO remove isButtonEnabled and setIsButtonEnabled
  const [isButtonEnabled, setIsButtonEnabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const submit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const changeStatusState = (value) => {
    setStatusSelected(value)
    setEnableButton(true, DescriptionText.length)
  }

  const changeDescriptionState = (value) => {
    setDescriptionText(value)
    //trim value to find noSpace text length
    const trimmedValue = value.trim()
    setEnableButton(StatusSelected.length, trimmedValue.length)
  }

  const setEnableButton = (statusLength, descriptionLength) => {
    if (statusLength > 0 && descriptionLength > 0) {
      setIsButtonEnabled(true)
    } else {
      setIsButtonEnabled(false)
    }
  }

  return (
    <>
      {/* TODO: change TopBar name */}
      <TopBar />
      {/* TODO: remove gap and display  */}

      <div style={{ padding: "16px", gap: "32px", display: "grid" }}>
        {/* TODO: remove div  */}

        <div style={{ display: "grid", gap: "12px" }}>
          <Typography sx={{ fontFamily: "IRANYekanWeb", color: "#114FBB" }}>
            وضعیت پروژه را انتخاب کنید
          </Typography>
          {/* remove  onSeted =>  Send the StatusSelected as an input to it /// onSeted=> onChange */}
          <StatusSelection onSeted={changeStatusState} />
        </div>
        {/* TODO: remove div  */}

        <div style={{ display: "grid", gap: "8px" }}>
          <Typography sx={{ fontFamily: "IRANYekanWeb", color: "#114FBB" }}>
            توضیحات
          </Typography>

          <DescriptionInput onSeted={changeDescriptionState} />
        </div>
      </div>

      {/* TODO: use  styled  */}

      <div
        style={{
          padding: "8px 12px 8px 12px",
          bottom: "0px",
          position: "fixed",
          width: "calc(100% - 24px)",
          backgroundColor: "white",
        }}>
        <EndButtons
          title="ذخیره و انتشار"
          disable={!isButtonEnabled || isLoading}
          onClick={submit}
        />
      </div>
    </>
  )
}
