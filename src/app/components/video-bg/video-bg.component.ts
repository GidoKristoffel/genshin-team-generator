import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-video-bg',
  templateUrl: './video-bg.component.html',
  styleUrls: ['./video-bg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoBgComponent {}
