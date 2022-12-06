import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FactsService } from './facts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  formFacts: FormGroup;
  facts:Array<any> = [];
  constructor(
    private readonly fb: FormBuilder,
    private readonly factsService: FactsService
    ) {
    this.formFacts = this.initForm();
  }
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.factsService.getFacts().subscribe(
      (res:any) => {
        this.facts = res;
      },
      (err:any) => {
        console.log(err);
      }
    );
  }

  initForm(): FormGroup{
    return this.fb.group({
      id: [null],
      emisor: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      descripcion: [null, [Validators.required]]
    });
  }
  onSubmit(data:any){
    this.formFacts.markAllAsTouched();
    if (!this.formFacts.valid) return
    if(!this.formFacts.get('id')?.value){
      this.onCreate(data);
    }else{
      this.onEdit(data);
    }
    this.formFacts.reset();
  }
  onCreate(data:any){
    this.factsService.createFacts(data).subscribe(
      (res:any) => {
        this.facts.push(res);
      },
      (err:any) => {
        console.log(err);
      }
    );
  }

  onEdit(data:any){
    this.factsService.updateFacts(data).subscribe(
      (res:any) => {
        const i = this.facts.findIndex(x=> x.id === data.id)
        this.facts[i] = res;
      },
      (err:any) => {
        console.log(err);
      }
    );
  }
  cancel(){
    this.formFacts.reset();
  }

  edit(id:number){
    const Facts = this.facts.find(x=>x.id === id);
    this.formFacts.setValue(Facts);
  }

  delete(id:number){
    this.factsService.deleteFacts(id).subscribe(
      () => {
        this.getAll();
      },
      (err:any) => {
        console.log(err);
      }
    );
  }

}
