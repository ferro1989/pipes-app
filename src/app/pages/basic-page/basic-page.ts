import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { AvailableLocales, LocaleService } from '../../services/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.html',
})
export default class BasicPage {

  localeService = inject(LocaleService);

  nameLower = signal('daniel');
  nameUpper = signal('DANIEL');
  fullName = signal('dAniEl FeRRo');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);
    onCleanup(() => clearInterval(interval));
  });

  changeLocale(locale: AvailableLocales){
    console.log({locale});
    this.localeService.changeLocale(locale);
  }
}
