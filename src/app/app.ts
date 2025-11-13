import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { PrimaryButton } from './_components/primary-button/primary-button';
import { SecondaryButton } from './_components/secondary-button/secondary-button';
import { ItemCertificado } from './_components/item-certificado/item-certificado';
import { BaseUi } from './_components/base-ui/base-ui';
import { Certificados } from './pages/certificados/certificados';
import { CertificadoForm } from './pages/certificado-form/certificado-form';
import { CertificadoUnico } from './pages/certificado-unico/certificado-unico';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    PrimaryButton,
    SecondaryButton,
    ItemCertificado,
    BaseUi,
    Certificados,
    CertificadoForm,
    CertificadoUnico,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gerador-certificado-rocketseat');
  exibeNavbar = false;
}
