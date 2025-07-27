import { Component, computed, Input, input } from "@angular/core";



@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html', 
  styleUrls: ['./user.component.css'], 
})
export class UserComponent {
  // @Input() avatar!: string;
  // @Input() name!: string;
  avatar = input.required<string>(); // signal for required input
  name = input.required<string>();  // signal for required input

  imagePath = computed(() => { 
    return 'assets/users/' + this.avatar;

  });

  onSelectUser() {
      console.log('User selected');
  }
}
