import { FormBuilder } from '@angular/forms';

import { FormularioReactiveComponent } from './formulario-reactive.component';

describe('FormularioReactiveComponent', () => {
  let component: FormularioReactiveComponent;

  beforeEach(() => {
    component = new FormularioReactiveComponent(new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia crear un formulario con 3 campos ', () => {
    const formulario = component.miFormulario;
    const proyecto = formulario.get('proyecto');
    const horas = formulario.get('horas');
    const tecnologias = formulario.get('tecnologias');
    expect(proyecto).toBeTruthy();
    expect(horas).toBeTruthy();
    expect(tecnologias).toBeTruthy();
  });

  it('deberia verificar que el campo proyecto acepte minimo 3 letras ', () => {
    const formulario = component.miFormulario;
    const proyecto = formulario.get('proyecto');
    proyecto?.setValue('abc');

    expect(proyecto?.valid).toBeTruthy();
  });
  it('deberia verificar que el campo proyecto acepte maximo 15 letras ', () => {
    const formulario = component.miFormulario;
    const proyecto = formulario.get('proyecto');
    proyecto?.setValue('abcdefghjk');

    expect(proyecto?.valid).toBeFalsy();
  });

  it('deberia verificar  el campo horas  ', () => {
    const formulario = component.miFormulario;
    const horas = formulario.get('horas');
    expect(horas?.valid).toBeTruthy();
    horas?.setValue(0);
    expect(horas?.invalid).toBeTruthy();
    horas?.setValue(51);
    expect(horas?.invalid).toBeTruthy();
  });

  it('deberia verificar  el agregar tecnologias  ', () => {
    const tecnologiasArray = component.tecnologias;
    const tecnologiaControl = component.tecnologia;
    tecnologiaControl.setValue('Angular');
    component.agregarTecnologia();
    expect(tecnologiasArray?.value.length).toBe(1);
    expect(tecnologiasArray?.value).toEqual('Angular');
  });

  it('deberia verificar  el agregar proyectos  ', () => {
    const formulario = component.miFormulario;
    const proyecto = formulario.get('proyecto');
    const horas = formulario.get('horas');
    proyecto?.setValue('Blog');
    horas?.setValue(1);

    const tecnologiaControl = component.tecnologia;

    tecnologiaControl.setValue('Angular');
    component.agregarTecnologia();

    component.agregarProyecto();

    expect(component.proyectos.length).toBe(1);
  });
});
