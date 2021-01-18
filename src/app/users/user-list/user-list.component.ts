import { Component, OnInit } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';
import { HttpWorkerService } from 'src/app/shared/services/http-worker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: MyWorker[];
  searchStr = '';
  column = "byid";
  reverse = false;

  constructor(private HttpWorkerService: HttpWorkerService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      let users = this.HttpWorkerService.getAll();
      this.users = (await users === null)||(await users === undefined) ? [] : await users;
    } catch (err) {
      console.error(err);
    }

    try {
      this.users = await this.HttpWorkerService.getAll();
    } catch (err) {
      console.log(err);
    }
  }

  onLinkProfile(id: number) {
    this.router.navigate([this.router.url, 'profile', id]);
  }

  onAddProfile() {
    this.router.navigate([this.router.url, 'profile']);
  }

  async onDelete(id: number) {
    try {
      await this.HttpWorkerService.deleteOneById(id);
    } catch (err) {
      console.error(err);
    }
    this.getData();
  }
}
