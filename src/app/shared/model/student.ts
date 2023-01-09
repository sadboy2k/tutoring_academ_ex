export class StudentModel {
  id!: number;
  name!: string;
  lastname!: string;
  email!: string;
  matters: string[] = [];
  schedule!: string[];
  dob!: string;
  gender!: string;
  constructor(data?: any) {
    if (data) {
      this.id = data.id || 0;
      this.name = data.name || "";
      this.lastname = data.lastname || "";
      this.email = data.email || "";
      this.matters = data.matters || ["Ingles"];
      this.schedule = data.schedule || ["Lunes"];
      this.dob = data.dob || "";
      this.gender = data.gender || "Privado";
    }
  }
}
