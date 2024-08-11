import { useState } from "react";
import StatusSelection from "./StatusSelection";
import DescriptionInput from "./DescriptionInput";
import EndButtons from "./EndButtons";
import TopBar from "./TopBar";
import { Typography } from "@mui/material";

export default function CreatorPage() {

    const [isStausSelected, setIsStatusSelected] = useState(false);
    const [isDescriptionWritten, setIsDescriptionWritten] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const submit = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }

    const changeStatusState = () => {
        setIsStatusSelected(true);
        setEnableButton(true, isDescriptionWritten);
    };

    const changeDescriptionState = (value) => {
        setIsDescriptionWritten(value);
        setEnableButton(isStausSelected, value);
    };

    const setEnableButton = (statusSelected, descriptionWritten) => {
        if (statusSelected && descriptionWritten) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    };

    return (
        <div>
            <TopBar />
            <div style={{ padding: "16px", gap: "32px", display: "grid" }}>
                <div style={{display:'grid' , gap:'12px'}}>
                    <Typography sx={{fontFamily: 'IRANYekanWeb' , color:'#114FBB'}}>وضعیت پروژه را انتخاب کنید</Typography>
                    <StatusSelection onSeted={changeStatusState} />
                </div>
                <div style={{display:'grid' , gap:'8px'}}>
                <Typography sx={{fontFamily: 'IRANYekanWeb' , color:'#114FBB'}}>توضیحات</Typography>
                <DescriptionInput onSeted={changeDescriptionState} />
                </div>
            </div>
            <div
                style={{
                    padding: "8px 12px 8px 12px",
                    bottom: "0px",
                    position: "fixed",
                    width: "calc(100% - 24px)",
                    backgroundColor: "white",
                }}
            >
                <EndButtons title="ذخیره و انتشار" disable={!isButtonEnabled || isLoading} onClick={submit} />
            </div>
        </div>
    );
}
