export class Calibration {

    public dateCalibration: Date;
    public dueDateCalibration: Date;
    public toolName: string;
    public serialNum: number;
    public manufacturer: string;
    public standard: number;
    public operation: number;
    public result: string;

    constructor(dateCalibration: Date,dueDateCalibration: Date,  toolName: string, serialNum: number, manufacturer: string, standard: number, operation: number,
        result: string) {
        this.dateCalibration = dateCalibration;
        this.dueDateCalibration = dueDateCalibration;
        this.toolName = toolName;
        this.serialNum = serialNum;
        this.standard = standard;
        this.operation = operation;
        this.result = result;
    }
}