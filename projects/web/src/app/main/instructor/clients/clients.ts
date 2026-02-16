import { Component, ChangeDetectionStrategy, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { SkeletonModule } from 'primeng/skeleton';
import { Client, ClientStatus, ClientService } from 'core';

type TagSeverity = 'success' | 'warn' | 'danger' | 'secondary' | 'info' | 'contrast' | null | undefined;

@Component({
  selector: 'bee-clients',
  imports: [DatePipe, CardModule, ButtonModule, TableModule, TagModule, AvatarModule, SkeletonModule],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Clients implements OnInit {
  private clientService = inject(ClientService);

  clients = signal<Client[]>([]);
  totalRecords = signal(0);
  loading = signal(true);
  readonly rows = 5;

  ngOnInit(): void {
    this.loadClients({ first: 0, rows: this.rows });
  }

  loadClients(event: TableLazyLoadEvent): void {
    this.loading.set(true);

    const first = event.first ?? 0;
    const rows = event.rows ?? this.rows;

    this.clientService.getClients(first, rows).subscribe((response) => {
      this.clients.set(response.items);
      this.totalRecords.set(response.total);
      this.loading.set(false);
    });
  }

  statusSeverity(status: ClientStatus): TagSeverity {
    switch (status) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'danger';
      case 'pending':
        return 'warn';
    }
  }

  initials(client: Client): string {
    return client.firstName.charAt(0) + client.lastName.charAt(0);
  }
}
