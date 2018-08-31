<<<<<<< HEAD
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
            weight: {
              value: 130,
              scale: 'lbs'
            }
          },
          {
            name: 'Bench Press',
            reps: 8,
            weight: {
              value: 130,
              scale: 'lbs'
            }
          },
          {
            name: 'Bench Press',
            reps: 8,
            weight: {
              value: 130,
              scale: 'lbs'
            }
          },
          {
            name: 'Incline Bench Press',
            reps: 8,
            weight: {
              value: 100,
              scale: 'lbs'
            }
          },
          {
            name: 'Incline Bench Press',
            reps: 8,
            weight: {
              value: 100,
              scale: 'lbs'
            }
          },
          {
            name: 'Decline Bench Press',
            reps: 8,
            weight: {
              value: 80,
              scale: 'lbs'
            }
          },
          {
            name: 'Decline Bench Press',
            reps: 8,
            weight: {
              value: 80,
              scale: 'lbs'
            }
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
            weight: {
              value: 'body weight',
              scale: 'lbs'
            }
          },
          {
            name: 'Pullup',
            reps: 6,
            weight: {
              value: 'body weight',
              scale: 'lbs'
            }
          },
          {
            name: 'Deadlift',
            reps: 6,
            weight: {
              value: 205,
              scale: 'lbs'
            }
          },
          {
            name: 'Deadlift',
            reps: 6,
            weight: {
              value: 205,
              scale: 'lbs'
            }
          },
          {
            name: 'Seated Row',
            reps: 6,
            weight: {
              value: 105,
              scale: 'lbs'
            }
          },
          {
            name: 'Seated Row',
            reps: 8,
            weight: {
              value: 85,
              scale: 'lbs'
            }
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
            duration: {
              value: 30,
              scale: 'sec'
            },
            distance: {
              value: 100,
              scale: 'yrd'
            }
          },
          {
            name: 'Sprint',
            duration: {
              value: 30,
              scale: 'sec'
            },
            distance: {
              value: 100,
              scale: 'yrd'
            }
          },
          {
            name: 'Sprint',
            duration: {
              value: 30,
              scale: 'sec'
            },
            distance: {
              value: 100,
              scale: 'yrd'
            }
          },
          {
            name: 'Sprint',
            duration: {
              value: 30,
              scale: 'sec'
            },
            distance: {
              value: 100,
              scale: 'yrd'
            }
          }
        ]
      },
      {
        type: workoutTypes.lift,
        sets: [
          {
            name: 'Lunges',
            reps: 6,
            weight: {
              value: 100,
              scale: 'kgs'
            }
          },
          {
            name: 'Lunges',
            reps: 6,
            weight: {
              value: 100,
              scale: 'kgs'
            }
          }
        ]
      },
      {
        type: workoutTypes.activity,
        sets: [
          {
            name: 'Yoga',
            duration: {
              value: 30,
              scale: 'min'
            },
            intensity: workoutIntensity.heavy
          }
        ]
      }
    ]
  }
];

let currentId = 0;


class WorkoutApi {
  static getAllWorkouts(){
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(Object.assign([], workouts));
      }, 1000);
    });
  }

  static addWorkout(workout){
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        workouts.push(workout);
        resolve(Object.assign([], workouts));
      }, 1000);
    });
  }

  static getNextId(){
    currentId = currentId + 1;
    return currentId.toString().padStart(12, "0");
  }
}

=======
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
            weight: {
              value: 130,
              scale: 'lbs'
            }
          },
          {
            name: 'Bench Press',
            reps: 8,
            weight: {
              value: 130,
              scale: 'lbs'
            }
          },
          {
            name: 'Bench Press',
            reps: 8,
            weight: {
              value: 130,
              scale: 'lbs'
            }
          },
          {
            name: 'Incline Bench Press',
            reps: 8,
            weight: {
              value: 100,
              scale: 'lbs'
            }
          },
          {
            name: 'Incline Bench Press',
            reps: 8,
            weight: {
              value: 100,
              scale: 'lbs'
            }
          },
          {
            name: 'Decline Bench Press',
            reps: 8,
            weight: {
              value: 80,
              scale: 'lbs'
            }
          },
          {
            name: 'Decline Bench Press',
            reps: 8,
            weight: {
              value: 80,
              scale: 'lbs'
            }
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
            weight: {
              value: 'body weight',
              scale: 'lbs'
            }
          },
          {
            name: 'Pullup',
            reps: 6,
            weight: {
              value: 'body weight',
              scale: 'lbs'
            }
          },
          {
            name: 'Deadlift',
            reps: 6,
            weight: {
              value: 205,
              scale: 'lbs'
            }
          },
          {
            name: 'Deadlift',
            reps: 6,
            weight: {
              value: 205,
              scale: 'lbs'
            }
          },
          {
            name: 'Seated Row',
            reps: 6,
            weight: {
              value: 105,
              scale: 'lbs'
            }
          },
          {
            name: 'Seated Row',
            reps: 8,
            weight: {
              value: 85,
              scale: 'lbs'
            }
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
            duration: {
              value: 30,
              scale: 'sec'
            },
            distance: {
              value: 100,
              scale: 'yrd'
            }
          },
          {
            name: 'Sprint',
            duration: {
              value: 30,
              scale: 'sec'
            },
            distance: {
              value: 100,
              scale: 'yrd'
            }
          },
          {
            name: 'Sprint',
            duration: {
              value: 30,
              scale: 'sec'
            },
            distance: {
              value: 100,
              scale: 'yrd'
            }
          },
          {
            name: 'Sprint',
            duration: {
              value: 30,
              scale: 'sec'
            },
            distance: {
              value: 100,
              scale: 'yrd'
            }
          }
        ]
      },
      {
        type: workoutTypes.lift,
        sets: [
          {
            name: 'Lunges',
            reps: 6,
            weight: {
              value: 100,
              scale: 'kgs'
            }
          },
          {
            name: 'Lunges',
            reps: 6,
            weight: {
              value: 100,
              scale: 'kgs'
            }
          }
        ]
      },
      {
        type: workoutTypes.activity,
        sets: [
          {
            name: 'Yoga',
            duration: {
              value: 30,
              scale: 'min'
            },
            intensity: workoutIntensity.heavy
          }
        ]
      }
    ]
  }
];

let currentId = 0;


class WorkoutApi {
  static getAllWorkouts(){
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(Object.assign([], workouts));
      }, 1000);
    });
  }

  static addWorkout(workout){
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        workouts.push(workout);
        resolve(Object.assign([], workouts));
      }, 1000);
    });
  }

  static getNextId(){
    currentId = currentId + 1;
    return currentId.toString().padStart(12, "0");
  }
}

>>>>>>> fc2641cb0f23a39a3e85159a617b456835d0b532
export default WorkoutApi;