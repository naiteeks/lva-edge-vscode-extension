import { v4 as uuid } from "uuid";
import { ICanvasNode, ICanvasPort } from "@vienna/react-dag-editor";
import { MediaGraphNodeType } from "../types/graphTypes";

// returns a human readable string for a given MediaGraphNodeType
export function getNodeTypeTitle(type: MediaGraphNodeType): string {
  switch (type) {
    case MediaGraphNodeType.Source:
      return "sources";
    case MediaGraphNodeType.Processor:
      return "processors";
    case MediaGraphNodeType.Sink:
      return "sinks";
    default:
      return "";
  }
}

// returns the appropriate ports for a node (proper input and input according to type)
export function getPorts(node: any, type?: MediaGraphNodeType): ICanvasPort[] {
  const ports = [];
  const nodeType = typeof type === "undefined" ? node.nodeType : type;

  if (
    nodeType === MediaGraphNodeType.Source ||
    nodeType === MediaGraphNodeType.Processor
  ) {
    ports.push({
      id: uuid(),
      shape: "modulePort",
      isInputDisabled: true,
      isOutputDisabled: false,
      name: `${node.name} input port`,
      ariaLabel: `input port for ${node.name}`, // will be localized in topology converter
    });
  }

  if (
    nodeType === MediaGraphNodeType.Sink ||
    nodeType === MediaGraphNodeType.Processor
  ) {
    ports.push({
      id: uuid(),
      shape: "modulePort",
      isInputDisabled: false,
      isOutputDisabled: true,
      name: `${node.name} output port`, // will be localized in topology converter
    });
  }

  return ports;
}

// determines appearance properties for a node
export function getNodeProperties(type: MediaGraphNodeType) {
  switch (type) {
    case MediaGraphNodeType.Source:
      return {
        iconName: "Upload",
        color: "var(--vscode-terminal-ansiBrightBlue)",
        colorAlt: "var(--vscode-terminal-ansiBlue)",
      };
    case MediaGraphNodeType.Processor:
      return {
        iconName: "ProgressRingDots",
        color: "var(--vscode-terminal-ansiBrightGreen)",
        colorAlt: "var(--vscode-terminal-ansiGreen)",
      };
    case MediaGraphNodeType.Sink:
      return {
        iconName: "Download",
        color: "var(--vscode-terminal-ansiBrightYellow)",
        colorAlt: "var(--vscode-terminal-ansiYellow)",
      };
    default:
      return {};
  }
}

// evaluates if a node can be connected to another node (has to be downstream)
export function nodeCanConnectToNode(source: ICanvasNode, target: ICanvasNode) {
  if (source.data && target.data) {
    const sourceNodeType = source.data.nodeType;
    const targetNodeType = target.data.nodeType;

    switch (sourceNodeType) {
      case MediaGraphNodeType.Source:
      case MediaGraphNodeType.Processor:
        return (
          MediaGraphNodeType.Processor === targetNodeType ||
          MediaGraphNodeType.Sink === targetNodeType
        );
      case MediaGraphNodeType.Sink:
        return false;
      default:
        break;
    }
  }
  return true;
}
