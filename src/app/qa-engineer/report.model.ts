export class report {
    public VendorName: string;
    public Location: string;
    public SupplierClass: string;
    public AuditPlannedQuarter: string;
    public LastAuditDate: Date;
    public NewVendorApproval: string;
    public SupplierCertificationDescription: string;
    public AuditorName: string;  


    constructor(VendorName: string, Location: string, SupplierClass: string, AuditPlannedQuarter: string,
        LastAuditDate: Date, NewVendorApproval: string, 
        SupplierCertificationDescription: string, AuditorName: string) {
        this.VendorName = VendorName;
        this.Location = Location;
        this.SupplierClass = SupplierClass;
        this.AuditPlannedQuarter = AuditPlannedQuarter;
        this.LastAuditDate = LastAuditDate;
        this.NewVendorApproval = NewVendorApproval;
        this.SupplierCertificationDescription = SupplierCertificationDescription;
        this.AuditorName = AuditorName;

    }
}