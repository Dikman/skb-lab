import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, LOCALE_ID } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent {

  public readonly locales = environment.locales;

  public readonly current = { name: 'Undefined', code: '' };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) locale: string,
    sanitizer: DomSanitizer,
    icons: MatIconRegistry,
  ) {
    this.locales.forEach(item => icons.addSvgIcon(item.code, sanitizer.bypassSecurityTrustResourceUrl(item.image)));
    this.current = { ...this.current, ...this.locales.find(item => item.code === locale) };
  }

  public onSelectLocale(locale: string): void {
    this.document.location.href = `../${locale}`;
  }

}
