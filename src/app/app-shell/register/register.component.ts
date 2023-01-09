import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import * as _ from "lodash";
import { random } from "lodash";

import { HttpClient } from "@angular/common/http";
import { Subject, takeUntil } from "rxjs";
import { RegisterService } from "../app-action.service";
import { StudentModel } from "src/app/shared/model/student";
import { NotificationService } from "src/app/shared/notify/notification.service";
import { ToastComponent } from "@syncfusion/ej2-angular-notifications";
import { TabComponent } from "@syncfusion/ej2-angular-navigations";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit, OnDestroy {
  @ViewChild("tabObj")
  public tabObj!: TabComponent;
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(2015, 0, 1);
  registerForm!: FormGroup;
  public times: string[] = ["Lunes", "Miércoles", "Viernes"];
  controlsValidationConfig: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  @ViewChild("element") element!: ToastComponent;
  public position = { X: "Right" };
  title = "";
  content = "";

  constructor(
    private formBuilder: FormBuilder,
    private regService: RegisterService,
    private http: HttpClient,
    private notifierService: NotificationService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: [""],
      lastname: [""],
      email: [""],
      dateOfBirth: [""],
      matterEnglish: [true],
      matterMath: [true],
      times: [""],
    });
    this.controlsValidationConfig = this.buildControlsValidation();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  handleSubmit() {
    let student = new StudentModel();
    student.id = random(9999);
    this.setControlValidation();
    if (this.registerForm.valid) {
      student.name = this.formControls["name"].value;
      student.lastname = this.formControls["lastname"].value;
      student.email = this.formControls["email"].value;
      student.dob = this.formControls["dateOfBirth"].value;
      if (this.formControls["matterMath"].value) {
        student.matters.push("Matematica");
      }
      if (this.formControls["matterEnglish"].value) {
        student.matters.push("Ingles");
      }
      student.schedule = this.formControls["times"].value;
      this.getStudentGender(student.name)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data) => {
          switch (data.gender) {
            case "male":
              student.gender = "Masculino";
              break;
            case "female":
              student.gender = "Femenino";
              break;

            default:
              student.gender = "Privado";
              break;
          }
          this.regService.setStudent(student);
          this.onCreate(
            "Estudiante registrado",
            "Estudiante:" + student.name + " " + student.lastname
          );
          this.clearForm();
          this.tabObj.select(0);
        });
    } else {
      this.onCreate(
        "Algo no va bien",
        "Aun no completa los datos correctamente, por favor revise los datos insertados nuevamente"
      );
    }
  }

  setControlValidation(formControlName?: string): boolean {
    if (formControlName) {
      this.formControls[formControlName].setValidators(
        this.controlsValidationConfig[formControlName]
      );
      this.formControls[formControlName].markAsTouched();
      this.formControls[formControlName].updateValueAndValidity();
    } else {
      _.each(this.formControls, (value, key) => {
        if (this.controlsValidationConfig.hasOwnProperty(key)) {
          this.formControls[key].setValidators(
            this.controlsValidationConfig[key]
          );
          this.formControls[key].markAsTouched();
          this.formControls[key].updateValueAndValidity();
        }
      });
    }
    return this.registerForm.invalid;
  }

  buildControlsValidation(): object {
    const validations = {
      name: [Validators.required],
      lastname: [Validators.required],
      email: [Validators.required, Validators.email],
      dateOfBirth: [Validators.required],
    };
    return validations;
  }

  getStudentGender(name: string) {
    const nm = name.split(" ");
    return this.http.get<any>("https://api.genderize.io/?name=" + nm[0]);
  }

  onCreate(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.element.show({ title, content });
  }

  clearForm(): void {
    _.each(this.formControls, (value, key) => {
      if (this.controlsValidationConfig.hasOwnProperty(key)) {
        this.formControls[key].setValue("");
      }
    });
  }
}
