import { Component, Input } from "@angular/core";



@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html', 
  styleUrls: ['./user.component.css'], 
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() { 
    return 'assets/users/' + this.avatar;

  }
    onSelectUser() {
        console.log('User selected');
    }
}
