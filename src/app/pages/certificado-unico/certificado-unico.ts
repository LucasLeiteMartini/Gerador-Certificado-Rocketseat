import { Component } from '@angular/core';
import { BaseUi } from '../../_components/base-ui/base-ui';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';

@Component({
  selector: 'app-certificado-unico',
  imports: [BaseUi, SecondaryButton],
  templateUrl: './certificado-unico.html',
  styleUrl: './certificado-unico.css',
})
export class CertificadoUnico { }
