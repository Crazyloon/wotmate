export const workoutTypes = {
  lift: {
    id: 0,
    labels: {
      0: "Lift",
      1: "Reps",
      2: "Weight"
    }
  },
  cardio: {
    id: 1,
    labels: {
      0: "Cardio",
      1: "Duration",
      2: "Distance"
    }
  },
  activity: {
    id: 2,
    labels: {
      0: "Activity",
      1: "Duration",
      2: "Intensity"
    }
  },
};

export const workoutIntensity = {
  light: 'Light',
  moderate: 'Moderate',
  variable: 'Variable',
  heavy: 'Heavy',
  extreme: 'Extreme'
};

const workouts = [
  {
    id: 'workout001',
    date: new Date('2018/04/15 14:00'),
    name: 'Chest Day',
    muscles: [
      'Pectoralis Major',
      'Pectoralis Minor',
      'Pecotralis Duh!'
    ],
    exercises: [
      {
        type: workoutTypes.lift,
        sets: [
          {
            name: 'Bench Press',
            reps: 8,
            weight: 130
          },
          {
            name: 'Bench Press',
            reps: 8,
            weight: 130
          },
          {
            name: 'Bench Press',
            reps: 8,
            weight: 130
          },
          {
            name: 'Incline Bench Press',
            reps: 8,
            weight: 100
          },
          {
            name: 'Incline Bench Press',
            reps: 8,
            weight: 100
          },
          {
            name: 'Decline Bench Press',
            reps: 8,
            weight: 80
          },
          {
            name: 'Decline Bench Press',
            reps: 8,
            weight: 80
          }
        ]
      }
    ]
  },
  {
    id: 'workout002',
    date: new Date('2018/04/16 13:00'),
    name: 'Back Day',
    muscles: [
      'Latissimus dorsi',
      'Trapezius',
      'Rhomboid minor',
      'Rhomboid major'
    ],
    exercises: [
      {
        type: workoutTypes.lift,
        sets: [
          {
            name: 'Pullup',
            reps: 8,
            weight: 'body weight'
          },
          {
            name: 'Pullup',
            reps: 6,
            weight: 'body weight'
          },
          {
            name: 'Deadlift',
            reps: 6,
            weight: 205
          },
          {
            name: 'Deadlift',
            reps: 6,
            weight: 205
          },
          {
            name: 'Seated Row',
            reps: 6,
            weight: 105
          },
          {
            name: 'Seated Row',
            reps: 8,
            weight: 85
          }
        ]
      }
    ]
  },
  {
    id: 'workout003',
    date: new Date('2018/04/17 13:30'),
    name: 'Park Day',
    muscles: [],
    exercises: [
      {
        type: workoutTypes.cardio,
        sets: [
          {
            name: 'Sprint',
            duration: 30,
            distance: 100
          },
          {
            name: 'Sprint',
            duration: 30,
            distance: 100
          },
          {
            name: 'Sprint',
            duration: 30,
            distance: 100
          },
          {
            name: 'Sprint',
            duration: 30,
            distance: 100
          }
        ]
      },
      {
        type: workoutTypes.lift,
        sets: [
          {
            name: 'Lunges',
            reps: 6,
            weight: 100
          },
          {
            name: 'Lunges',
            reps: 6,
            weight: 100
          }
        ]
      },
      {
        type: workoutTypes.activity,
        sets: [
          {
            name: 'Yoga',
            duration: 30,
            intensity: workoutIntensity.heavy
          }
        ]
      }
    ]
  }
];

class WorkoutApi {
  static getAllWorkouts(){
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(Object.assign([], workouts));
      }, 1000);
    });
  }
}

export default WorkoutApi;