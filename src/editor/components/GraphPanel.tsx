import * as React from "react";
import Localizer from "../../localization";
import {
  MediaGraphParameterDeclaration,
  MediaGraphParameterType,
  MediaGraphTopology,
} from "../../lva-sdk/lvaSDKtypes";

export interface IGraphPanelProps {
  exportGraph: () => void;
  data: MediaGraphTopology;
}

export const GraphPanel: React.FunctionComponent<IGraphPanelProps> = (
  props
) => {
  const [data, setData] = React.useState<MediaGraphTopology>(props.data);

  const { properties } = data;
  const { parameters } = properties || {};

  return (
    <>
      <button onClick={props.exportGraph}>{Localizer.l("Export")}</button>

      <h2>{Localizer.l("Parameters")}</h2>
      {parameters &&
        parameters.map((parameter) => {
          const key = "parameter-" + parameter.name;
          return (
            <div
              key={key}
              style={{
                marginTop: 20,
              }}
            >
              <label htmlFor={key}>
                <strong>{parameter.name}</strong>
              </label>
              <p>
                {parameter.description && Localizer.l(parameter.description)}
              </p>
              <GraphPanelEditField parameter={parameter} keyName={key} />
            </div>
          );
        })}
    </>
  );
};

interface IGraphPanelEditFieldProps {
  parameter: MediaGraphParameterDeclaration;
  keyName: string;
}

const GraphPanelEditField: React.FunctionComponent<IGraphPanelEditFieldProps> = (
  props
) => {
  const { keyName, parameter } = props;
  const [defaultValue, setDefaultValue] = React.useState<string>(
    parameter.default || ""
  );
  const [type, setType] = React.useState<string>(parameter.type);

  function handleChange(e: React.FormEvent) {
    parameter.default = (e.target as any).value;
    setDefaultValue(parameter.default || "");
    if (!parameter.default) {
      delete parameter.default;
    }
  }

  function handleTypeChange(e: React.FormEvent) {
    parameter.type = (e.target as any).value;
    setType(parameter.type);
  }

  return (
    <>
      <select value={type} onChange={handleTypeChange}>
        <option key="undefined">undefined</option>
        {Object.keys(MediaGraphParameterType).map((value: string) => (
          <option key={value}>{value}</option>
        ))}
      </select>
      <input
        type="text"
        id={keyName}
        value={defaultValue}
        placeholder={Localizer.l("Optional default value")}
        onChange={handleChange}
      />
    </>
  );
};