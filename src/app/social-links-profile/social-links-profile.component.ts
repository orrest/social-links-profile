import { Component } from '@angular/core';

@Component({
  selector: 'app-social-links-profile',
  standalone: true,
  imports: [],
  templateUrl: './social-links-profile.component.html',
  styleUrl: './social-links-profile.component.css',
})
export class SocialLinksProfileComponent {
  name = 'Jessica Randall';
  location = 'London, United Kingdom';
  intro = '"Front-end developer and avid reader."';
  linkNames = ['GitHub', 'Fronted Mentor', 'LinkedIn', 'Twitter', 'Instagram'];
}
