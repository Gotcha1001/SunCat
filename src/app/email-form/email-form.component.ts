import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {
  emailForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private emailService: EmailService, private router: Router) {
    this.emailForm = this.formBuilder.group({
      subject: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  home() {
    this.router.navigate(['']);
  }

  onSubmit() {
    if (this.emailForm.valid) {
      const emailData = this.emailForm.value;
      this.emailService.sendEmail(emailData).subscribe({
        next: () => {
          console.log("Email is sent, thank you");
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error("Sorry, there has been an error", error);
        },
      });
    }
  }
}

