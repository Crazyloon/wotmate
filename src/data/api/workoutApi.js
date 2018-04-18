const workouts = {
  workout001: {
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
  }
};

class WorkoutApi {
  static getAllWorkouts(){
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(Object.assign({}, workouts));
      }, 1000);
    });
  }
}

export default WorkoutApi;