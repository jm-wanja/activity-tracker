import { Component, OnInit } from '@angular/core';
import { Activity } from './../shared/activity.model';
import { ActivityService } from './../services/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: Activity[];
  totalActivities: number;
  totalDistance: number;
  firstDate: Date;

  constructor(private _activityService: ActivityService) { }

  ngOnInit() {
    this.activities = this._activityService.getAllActivities();
    this.totalActivities = this._activityService.getTotalActivities(this.activities);
    this.totalDistance = this._activityService.getTotalDistance(this.activities);
    this.firstDate = this._activityService.getFirstdate(this.activities);
  }

}
