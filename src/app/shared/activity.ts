import { Activity } from './activity.model';

export const savedActivities: Activity[] = [
    {
        'id' : 1,
        'name' : 'Interview',
        'date' : new Date('14/03/2018'),
        'distance' : 13.1,
        'comments' : 'Rainy morning, little traffic',
        'gpxData' : '../../assets/gpx/us-embassy.gpx'
    },
    {
        'id' : 2,
        'name' : 'Event',
        'date' : new Date('17/03/2018'),
        'distance' : 6.2,
        'comments' : 'Cool evening',
        'gpxData' : '../../assets/gpx/45-degrees.gpx'
    },
    {
        'id' : 3,
        'name' : 'Shopping',
        'date' : new Date('19/03/2018'),
        'distance' : 4.1,
        'comments' : 'Crowded roads',
        'gpxData' : '../../assets/gpx/gardencity.gpx'
    }
];
