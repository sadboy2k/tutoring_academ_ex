import { Injectable } from "@angular/core";
import { ReplaySubject, Subject } from "rxjs";
import { StudentModel } from "../shared/model/student";

@Injectable({ providedIn: "root" })
export class RegisterService {
  private student$ = new ReplaySubject<StudentModel>();
  public student = this.student$.asObservable();

  setStudent(student: StudentModel): void {
    this.student$.next(student);
  }
}
