import React from "react";
import "./App.css";
import { debugData } from "../utils/debugData";
import { Button } from "./ui/button";
import { useFetchNui } from "@/hooks/useFetchNui";

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

interface ReturnClientDataCompProps {
  data: unknown;
}

const ReturnClientDataComp: React.FC<ReturnClientDataCompProps> = ({
  data,
}) => (
  <>
    <h5>Returned Data:</h5>
    <pre>
      <code>{JSON.stringify(data, null)}</code>
    </pre>
  </>
);

interface ReturnData {
  x: number;
  y: number;
  z: number;
}

const App: React.FC = () => {
  const { data, mutate, isLoading } = useFetchNui<ReturnData>("getClientData");

  return (
    <div className="nui-wrapper">
      <div className="popup-thing">
        <div>
          <h1>This is the NUI Popup!</h1>
          <p>Exit with the escape key</p>
          <Button onClick={mutate}>Get Client Data</Button>
          {isLoading && <p>Loading...</p>}
          {data && <ReturnClientDataComp data={data} />}
        </div>
      </div>
    </div>
  );
};

export default App;
