import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  isSmallScreen: boolean = false;
  contacts$: Observable<Contact[]>;
  displayedColumns: string[] = this.isSmallScreen ? ['name', 'email', 'actions'] : ['name', 'birthdate', 'email', 'cellphone', 'phone', 'actions'];
  // displayedColumns = [
  //   'name',
  //   'birthdate',
  //   'email',
  //   'cellphone',
  //   'phone',
  //   'actions',
  // ];

  // contactService: ContactService;

  constructor(
    private contactService: ContactService,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {
    // this.contactService = new ContactService();
    // this.contacts = [];
    this.contacts$ = this.contactService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar os contatos!');
        return of([]);
      })
    );
  }
  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.Small, // Pode usar Breakpoints.XSmall para tamanhos de tela ainda menores
    ]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }
  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
  onEdit() {
    console.log('editar');
  }
  onDelete() {
    console.log('deletar');
  }
}
