
import { Worker } from './worker.model';

export class WorkerService{
    private worker: Worker[]=[
        new Worker('QA','Kewan',false,null),
        new Worker('QA','Zachi',false,null)
    ]

    
  constructor() {}

  getRecipes() {
    return this.worker.slice();
  }

  getRecipe(index: number) {
    return this.worker[index];
  }

}