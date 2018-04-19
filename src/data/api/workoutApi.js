const workouts = [
  {
    id: 'workout001',
    date: new Date('2018/04/15 2:00'),
    name: 'Chest',
    muscles: [
      'Pectoralis Major',
      'Pectoralis Minor',
      'Pecotralis Duh!'
    ],
    exercises: [
      {
        set: 1,
        name: 'Bench Press',
        reps: 8,
        weight: 130
      },
      {
        set: 2,
        name: 'Bench Press',
        reps: 8,
        weight: 130
      },
      {
        set: 1,
        name: 'Incline Bench Press',
        reps: 8,
        weight: 100
      },
      {
        set: 1,
        name: 'Incline Bench Press',
        reps: 8,
        weight: 100
      },
      {
        set: 1,
        name: 'Decline Bench Press',
        reps: 8,
        weight: 80
      },
      {
        set: 1,
        name: 'Decline Bench Press',
        reps: 8,
        weight: 80
      }
    ]
  },
  {
    id: 'workout002',
    date: new Date('2018/04/16 1:00'),
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
        name: 'Pullup',
        reps: 8,
        weight: 'body weight'
      },
      {
        set: 2,
        name: 'Pullup',
        reps: 6,
        weight: 'body weight'
      },
      {
        set: 1,
        name: 'Deadlift',
        reps: 6,
        weight: 205
      },
      {
        set: 2,
        name: 'Deadlift',
        reps: 6,
        weight: 205
      },
      {
        set: 1,
        name: 'Seated Row',
        reps: 6,
        weight: 105
      },
      {
        set: 2,
        name: 'Seated Row',
        reps: 8,
        weight: 85
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