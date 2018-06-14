
export class Worker {
  public department: string;
  public name: string;
  public sign: boolean;
  public date: Date;

  constructor(department: string, name: string, sign: boolean, date: Date) {
    this.department = department;
    this.name = name;
    this.sign = sign;
    this.date=date;
  }
}
