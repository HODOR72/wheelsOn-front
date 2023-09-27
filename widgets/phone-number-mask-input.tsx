import { FunctionComponent } from "react";
import TFReact from "tformat.js";

interface PhoneNumberMaskInput {
  setFormattedValue(value: string): any;
  setUnformattedValue(value: string): any;
}

export const PhoneNumberMaskInput: FunctionComponent<PhoneNumberMaskInput> = ({
  setFormattedValue,
  setUnformattedValue,
}) => {
  return (
    <div
      style={{
        position: "relative",
        padding: 2,
        height: 42,
        borderRadius: "4px",
        marginTop: 8,
        boxShadow: "-1px 2px 4px rgba(0, 0, 0, 0.17)",
        border: "0.5px solid #F1F1F1",
        background:
          "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(159,159,159,1) 100%)",
      }}
    >
      <TFReact
        style={{
          width: "100%",
          borderRadius: "4px",
          paddingLeft: "0.5em",
          height: 37,
          boxShadow: "inset -1px 2px 4px rgba(0, 0, 0, 0.17)",
          background: "#F1F1F1",
          border: "0.5px solid #F1F1F1",
          outline: "none !important",
        }}
        placeholder="+7 "
        template="+7 (xxx) xxx xx xx"
        showPrefixOnFocus={true}
        onFormatted={(val: string, rawVal: string) => {
          setFormattedValue(val);
          setUnformattedValue(rawVal);
        }}
      />
    </div>
  );
};
