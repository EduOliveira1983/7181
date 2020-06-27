//using 
import { BrowserModule } from '@angular/platform-browser'; //vai rodar via browser
import { NgModule} from '@angular/core'; //criando o modulo
import { ReactiveFormsModule } from '@angular/forms';

//
import { AppComponent } from './app.component'; //componente raiz

//Metadata - @ = Decorador -> gera informações adicionais (extension c#)
@NgModule({
  declarations: [ //quais componentes
    AppComponent
  ],
  imports: [ //o que é extra
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [], //o que vai ser provido para os componentes
  bootstrap: [AppComponent] //Que componente vai iniciar
})
//export = public c#
export class AppModule { }
