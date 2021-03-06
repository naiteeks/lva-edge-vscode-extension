import { MediaGraphInstance } from "../../Common/Types/LVASDKTypes";
import { IotHubData } from "./IotHubData";

export class GraphInstanceData {
    public static async getGraphInstances(iotHubData: IotHubData, deviceId: string, moduleId: string): Promise<MediaGraphInstance[]> {
        const response = await iotHubData.directMethodCall(deviceId, moduleId, "GraphInstanceList");
        return response?.value;
    }

    public static putGraphInstance(iotHubData: IotHubData, deviceId: string, moduleId: string, instanceData: MediaGraphInstance): Promise<MediaGraphInstance[]> {
        return iotHubData.directMethodCall(deviceId, moduleId, "GraphInstanceSet", instanceData);
    }

    public static activateGraphInstance(iotHubData: IotHubData, deviceId: string, moduleId: string, instanceName: string): Promise<void> {
        return iotHubData.directMethodCall(deviceId, moduleId, "GraphInstanceActivate", {
            name: instanceName
        });
    }

    public static deactivateGraphInstance(iotHubData: IotHubData, deviceId: string, moduleId: string, instanceName: string): Promise<void> {
        return iotHubData.directMethodCall(deviceId, moduleId, "GraphInstanceDeactivate", {
            name: instanceName
        });
    }

    public static deleteGraphInstance(iotHubData: IotHubData, deviceId: string, moduleId: string, instanceName: string): Promise<void> {
        return iotHubData.directMethodCall(deviceId, moduleId, "GraphInstanceDelete", {
            name: instanceName
        });
    }
}
