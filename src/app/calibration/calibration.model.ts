export class Calibration {

    public dateCalibration: string;
    public toolName: string;
    public serialNum: number;
    public manufacturer: string;
    public standard: number;
    public operation: number;
    public result: string;

    constructor(dateCalibration: string, toolName: string, serialNum: number, manufacturer: string, standard: number, operation: number,
        result: string) {
        this.dateCalibration = dateCalibration;
        this.toolName = toolName;
        this.serialNum = serialNum;
        this.standard = standard;
        this.operation = operation;
        this.result = result;
    }
}