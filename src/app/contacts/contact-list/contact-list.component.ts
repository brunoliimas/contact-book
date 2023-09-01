import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  contacts$: Observable<Contact[]>;
  displayedColumns = [
    'name',
    'birthdate',
    'email',
    'cellphone',
    'phone',
    'actions',
  ];

  // contactService: ContactService;

  constructor(
    private contactService: ContactService,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {
    this.contacts$ = this.contactService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar os contatos!');
        return of([]);
      })
    );
  }
  ngOnInit(): void {}
  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  onEdit() {
    console.log('editar');
  }

  onDelete(id: number) {
    this.contactService.delete(id);
    location.reload();
  }
}
