import StatusSelection from "./StatusSelection";
import DescriptionInput from "./DescriptionInput";
import EndButtons from "./EndButtons";

export default function CreatorPage() {
    return (
        <div>
            <div style={{padding:'16px' , gap:'32px' , display:'grid'}}>
                <StatusSelection/>
                <DescriptionInput/>
            </div>
            <div style={{padding:'8px 12px 8px 12px' , bottom:'0px' , position:'fixed' , width:'calc(100% - 24px)' , backgroundColor:'white'}}>
            <EndButtons title="ذخیره و انتشار" disable={false}/>
            </div>
        </div>
    );
  }