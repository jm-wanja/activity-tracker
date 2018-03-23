import { Injectable } from '@angular/core';
import { Activity } from './../shared/activity.model';
import { savedActivities } from './../shared/activity';

@Injectable()
export class ActivityService {

  constructor() { }

  getAllActivities(): Activity[] {
    return savedActivities.slice(0);
  }

  getTotalActivities(allActivities: Activity[]) {
    return this.getAllActivities.length;
  }

  getTotalDistance(allActivities: Activity[]) {
    let totalDistance = 0;
    for (let i = 0; i < allActivities.length; i++) {
      totalDistance += allActivities[i].distance;
    }
    return totalDistance;
  }

  getFirstdate(allActivities: Activity[]) {
    let earlierDate = new Date('01/01/2000');
    for (let i = 0; i < allActivities.length; i++) {
      const currentDate = allActivities[i].date;
      if (currentDate < earlierDate) {
        earlierDate = currentDate;
      }
    }
    return earlierDate;
  }

}
