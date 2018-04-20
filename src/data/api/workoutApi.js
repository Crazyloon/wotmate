const workoutTypes = {
  lift: 0,
  cardio: 1,
  activity: 2
};

const workoutIntensity = {
  light: 0,
  moderate: 1,
  variable: 2,
  heavy: 3,
  exhaustive: 4
};

const workouts = [
  {
    id: 'workout001',
    date: new Date('2018/04/15 14:00'),
    name: 'Chest',
    muscles: [
      'Pectoralis Major',
      'Pectoralis Minor',
      'Pecotralis Duh!'
    ],
    exercises: [
      {
        set: 1,
        type: workoutTypes.lift,
        name: 'Bench Press',
        reps: 8,
        weight: 130
      },
      {
        set: 2,
        type: workoutTypes.lift,
        name: 'Bench Press',
        reps: 8,
        weight: 130
      },
      {
        set: 1,
        type: workoutTypes.lift,
        name: 'Incline Bench Press',
        reps: 8,
        weight: 100
      },
      {
        set: 1,
        type: workoutTypes.lift,
        name: 'Incline Bench Press',
        reps: 8,
        weight: 100
      },
      {
        set: 1,
        type: workoutTypes.lift,
        name: 'Decline Bench Press',
        reps: 8,
        weight: 80
      },
      {
        set: 1,
        type: workoutTypes.lift,
        name: 'Decline Bench Press',
        reps: 8,
        weight: 80
      }
    ]
  },
  {
    id: 'workout002',
    date: new Date('2018/04/16 13:00'),
    name: 'Back',
    muscles: [
      'Latissimus dorsi',
      'Trapezius',
      'Rhomboid minor',
      'Rhomboid major'
    ],
    exercises: [
      {
        set: 1,
        type: workoutTypes.lift,
        name: 'Pullup',
        reps: 8,
        weight: 'body weight'
      },
      {
        set: 2,
        type: workoutTypes.lift,
        name: 'Pullup',
        reps: 6,
        weight: 'body weight'
      },
      {
        set: 1,
        type: workoutTypes.lift,
        name: 'Deadlift',
        reps: 6,
        weight: 205
      },
      {
        set: 2,
        type: workoutTypes.lift,
        name: 'Deadlift',
        reps: 6,
        weight: 205
      },
      {
        set: 1,
        type: workoutTypes.lift,
        name: 'Seated Row',
        reps: 6,
        weight: 105
      },
      {
        set: 2,
        type: workoutTypes.lift,
        name: 'Seated Row',
        reps: 8,
        weight: 85
      }
    ]
  },
  {
    id: 'workout003',
    date: new Date('2018/04/17 13:30'),
    name: 'Cardio',
    muscles: [],
    exercises: [
      {
        set: 1,
        type: workoutTypes.cardio,
        name: 'Sprint',
        duration: 30,
        distance: 100
      },
      {
        set: 2,
        type: workoutTypes.cardio,
        name: 'Sprint',
        duration: 30,
        distance: 100
      },
      {
        set: 3,
        type: workoutTypes.cardio,
        name: 'Sprint',
        duration: 30,
        distance: 100
      },
      {
        set: 4,
        type: workoutTypes.cardio,
        name: 'Sprint',
        duration: 30,
        distance: 100
      },
      {
        set: 1,
        type: workoutTypes.lift,
        name: 'Lunges',
        reps: 6,
        weight: 100
      },
      {
        set: 2,
        type: workoutTypes.lift,
        name: 'Lunges',
        reps: 6,
        weight: 100
      },
      {
        set: 1,
        type: workoutTypes.activity,
        name: 'Yoga',
        duration: 30,
        intensity: workoutIntensity.heavy
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