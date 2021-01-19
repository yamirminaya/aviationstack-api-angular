import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AviationstackService } from './services/aviationstack.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  forma: FormGroup;
  info: any;

  constructor(public _AS: AviationstackService, private fb: FormBuilder) {
    this.crearFormulario();
    this.resetFormulario();
  }

  get codeFlightValid() {
    return (
      this.forma.get('flight_iata').invalid &&
      this.forma.get('flight_iata').touched
    );
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.forma = this.fb.group({
      flight_iata: [''],
    });
  }

  resetFormulario() {
    this.forma.reset({
      flight_iata: '',
    });
  }

  obtener() {
    this._AS.flights(this.forma.value).subscribe((result) => {
      console.log(result);
      this.info = result.data[0];
    });
    // console.log(this.forma.value);
    // this.emailS.send(this.forma.value).subscribe(
    //   (data) => {
    //     let res: any = data;
    //     console.log(`👏 > 👏 > 👏 > 👏`);
    //   },
    //   (err) => {
    //     console.log(err);
    //   },
    //   () => {}
    // );
    // console.log(this.forma);
    // if (this.forma.invalid) {
    //   return Object.values(this.forma.controls).forEach((control) => {
    //     if (control instanceof FormGroup) {
    //       Object.values(control.controls).forEach((control) =>
    //         control.markAsTouched()
    //       );
    //     } else {
    //       control.markAsTouched();
    //     }
    //   });
    // }
    // this.resetFormulario();
  }
}
