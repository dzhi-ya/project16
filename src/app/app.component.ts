import { Component } from '@angular/core';
import {
  MyWorker,
  MyWorkerType,
} from './shared/worker.model';
import { HttpWorkerService } from './shared/services/http-worker.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[];
  myWorkerType = MyWorkerType;
  edit = false;
  workerData = {
    id: 0,
    name: '',
    surname: '',
    phone: '',
    type: 1
  };
  searchStr = '';

  constructor(
    private httpProductService: HttpWorkerService, private router: Router
  ) {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      let workers = this.httpProductService.getAll();
      this.workers = (await workers === null)||(await workers === undefined) ? [] : await workers;
    } catch (err) {
      console.error(err);
    }

    try {
      this.workers = await this.httpProductService.getAll();
    } catch (err) {
      console.log(err);
    }
  }

  async onAddWorker(worker: MyWorker) {
    try {
        let id =
          this.workers.length > 0
            ? this.workers[this.workers.length - 1].id + 1
            : 0;
        worker.id = id;
      await this.httpProductService.postOne(worker);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }

  async onEditWorker(worker) {
    try {
    await this.httpProductService.putOneById(worker.id ,worker);
  } catch (err) {
    console.error(err);
  } finally {
    this.edit = false;
    this.getData();
  }
  }
  
  async onDeleteById(id: number) {
    try {
      await this.httpProductService.deleteOneById(id);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }
  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }


  onEditById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    this.workerData = {
      id: this.workers[index].id,
      name: this.workers[index].name,
      surname: this.workers[index].surname,
      phone: this.workers[index].phone,
      type: this.workers[index].type
    }
    this.edit = true;
  }

  onCancelEdit() {
    this.edit = false;
  }
}
