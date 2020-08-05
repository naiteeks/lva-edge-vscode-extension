import { Client, Registry } from "azure-iothub";

export class IotHubData {
    private iotHubClient?: Client;
    private registryClient?: Registry;

    constructor(connectionString: string) {
        this.iotHubClient = Client.fromConnectionString(connectionString);
        this.registryClient = Registry.fromConnectionString(connectionString);
    }

    public directMethodCall(deviceId: string, moduleId: string, methodName: string, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!this.iotHubClient) {
                resolve(null);
                return;
            }

            this.iotHubClient.invokeDeviceMethod(
                deviceId,
                moduleId,
                {
                    methodName,
                    payload: {
                        "@apiVersion": "1.0",
                        ...payload
                    },
                    responseTimeoutInSeconds: 10,
                    connectTimeoutInSeconds: 10
                },
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result.payload);
                    }
                }
            );
        });
    }

    public async getDevices() {
        const response = await this.registryClient?.list();
        return response?.responseBody;
    }

    public async getDevice(deviceId: string) {
        const response = await this.registryClient?.get(deviceId);
        return response?.responseBody;
    }

    public async getModules(deviceId: string) {
        const response = await this.registryClient?.getModulesOnDevice(deviceId);
        return response?.responseBody;
    }

    public async getModule(deviceId: string, moduleId: string) {
        const response = await this.registryClient?.getModule(deviceId, moduleId);
        return response?.responseBody;
    }
}