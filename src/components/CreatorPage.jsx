import { useState } from "react";
import StatusSelection from "./StatusSelection";
import DescriptionInput from "./DescriptionInput";
import EndButtons from "./EndButtons";
import TopBar from "./TopBar";
import { Typography } from "@mui/material";

export default function CreatorPage() {
  const [StatusSelected, setStatusSelected] = useState("");
  const [DescriptionText, setDescriptionText] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const changeStatusState = (value) => {
    setStatusSelected(value);
    setEnableButton(value.length, DescriptionText.trim().length);
  };

  const changeDescriptionState = (value) => {
    setDescriptionText(value);
    const trimmedValue = value.trim();
    setEnableButton(StatusSelected.length, trimmedValue.length);
  };

  const setEnableButton = (statusLength, descriptionLength) => {
    setIsButtonEnabled(statusLength > 0 && descriptionLength > 0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopBar />

      <div style={{ flex: 1 , padding: '16px', overflowY: 'auto' }}>
        <Typography sx={{ fontFamily: "IRANYekanWeb", color: "#114FBB", marginBottom: '12px', marginTop: '50px' }}>
          وضعیت پروژه را انتخاب کنید
        </Typography>
        <StatusSelection
          setStatus={changeStatusState}
          selectedValue={StatusSelected}
        />

        <Typography sx={{ fontFamily: "IRANYekanWeb", color: "#114FBB", marginTop: '32px', marginBottom: '8px' }}>
          توضیحات
        </Typography>
        <DescriptionInput
          setDescription={changeDescriptionState}
          descriptionValue={DescriptionText}
        />
      </div>

      <div
        style={{
          padding: '8px 12px',
          backgroundColor: 'white',
          borderTop: '1px solid #ddd',
          position: 'sticky',
          bottom: 0,
        }}>
        <EndButtons
          title="ذخیره و انتشار"
          disable={!isButtonEnabled || isLoading}
          onClick={submit}
        />
      </div>
    </div>
  );
}
