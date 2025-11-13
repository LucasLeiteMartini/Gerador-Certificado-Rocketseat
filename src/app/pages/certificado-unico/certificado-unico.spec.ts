import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoUnico } from './certificado-unico';

describe('CertificadoUnico', () => {
  let component: CertificadoUnico;
  let fixture: ComponentFixture<CertificadoUnico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificadoUnico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadoUnico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
