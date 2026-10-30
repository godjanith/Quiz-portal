export type Question = {
  id: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const questions: Question[] = [
  {
    "id": "q1",
    "topic": "Speed",
    "difficulty": "Easy",
    "question": "A vehicle covers 120 km in 2 hours. What is its average speed?",
    "options": [
      "30 km/h",
      "120 km/h",
      "62 km/h",
      "60 km/h"
    ],
    "answer": 3,
    "explanation": "Average speed = distance ÷ time = 120 ÷ 2 = 60 km/h."
  },
  {
    "id": "q2",
    "topic": "Speed",
    "difficulty": "Easy",
    "question": "A vehicle covers 150 km in 3 hours. What is its average speed?",
    "options": [
      "52 km/h",
      "25 km/h",
      "50 km/h",
      "100 km/h"
    ],
    "answer": 2,
    "explanation": "Average speed = distance ÷ time = 150 ÷ 3 = 50 km/h."
  },
  {
    "id": "q3",
    "topic": "Speed",
    "difficulty": "Easy",
    "question": "A vehicle covers 210 km in 3 hours. What is its average speed?",
    "options": [
      "140 km/h",
      "72 km/h",
      "35 km/h",
      "70 km/h"
    ],
    "answer": 3,
    "explanation": "Average speed = distance ÷ time = 210 ÷ 3 = 70 km/h."
  },
  {
    "id": "q4",
    "topic": "Speed",
    "difficulty": "Easy",
    "question": "A vehicle covers 96 km in 2 hours. What is its average speed?",
    "options": [
      "96 km/h",
      "24 km/h",
      "48 km/h",
      "50 km/h"
    ],
    "answer": 2,
    "explanation": "Average speed = distance ÷ time = 96 ÷ 2 = 48 km/h."
  },
  {
    "id": "q5",
    "topic": "Speed",
    "difficulty": "Easy",
    "question": "A vehicle covers 180 km in 4 hours. What is its average speed?",
    "options": [
      "90 km/h",
      "22.5 km/h",
      "47 km/h",
      "45 km/h"
    ],
    "answer": 3,
    "explanation": "Average speed = distance ÷ time = 180 ÷ 4 = 45 km/h."
  },
  {
    "id": "q6",
    "topic": "Speed",
    "difficulty": "Easy",
    "question": "A vehicle covers 225 km in 5 hours. What is its average speed?",
    "options": [
      "90 km/h",
      "47 km/h",
      "22.5 km/h",
      "45 km/h"
    ],
    "answer": 3,
    "explanation": "Average speed = distance ÷ time = 225 ÷ 5 = 45 km/h."
  },
  {
    "id": "q7",
    "topic": "Speed",
    "difficulty": "Medium",
    "question": "A vehicle covers 84 km in 1.5 hours. What is its average speed?",
    "options": [
      "28 km/h",
      "112 km/h",
      "56 km/h",
      "58 km/h"
    ],
    "answer": 2,
    "explanation": "Average speed = distance ÷ time = 84 ÷ 1.5 = 56 km/h."
  },
  {
    "id": "q8",
    "topic": "Speed",
    "difficulty": "Medium",
    "question": "A vehicle covers 270 km in 6 hours. What is its average speed?",
    "options": [
      "90 km/h",
      "47 km/h",
      "45 km/h",
      "22.5 km/h"
    ],
    "answer": 2,
    "explanation": "Average speed = distance ÷ time = 270 ÷ 6 = 45 km/h."
  },
  {
    "id": "q9",
    "topic": "Speed",
    "difficulty": "Medium",
    "question": "A vehicle covers 132 km in 2.2 hours. What is its average speed?",
    "options": [
      "60 km/h",
      "30 km/h",
      "120 km/h",
      "62 km/h"
    ],
    "answer": 0,
    "explanation": "Average speed = distance ÷ time = 132 ÷ 2.2 = 60 km/h."
  },
  {
    "id": "q10",
    "topic": "Speed",
    "difficulty": "Medium",
    "question": "A vehicle covers 360 km in 4.5 hours. What is its average speed?",
    "options": [
      "40 km/h",
      "82 km/h",
      "80 km/h",
      "160 km/h"
    ],
    "answer": 2,
    "explanation": "Average speed = distance ÷ time = 360 ÷ 4.5 = 80 km/h."
  },
  {
    "id": "q11",
    "topic": "Speed",
    "difficulty": "Medium",
    "question": "Convert 36 km/h into metres per second.",
    "options": [
      "5 m/s",
      "20 m/s",
      "12 m/s",
      "10 m/s"
    ],
    "answer": 3,
    "explanation": "To convert km/h to m/s, multiply by 5/18: 36 × 5/18 = 10 m/s."
  },
  {
    "id": "q12",
    "topic": "Speed",
    "difficulty": "Medium",
    "question": "Convert 54 km/h into metres per second.",
    "options": [
      "17 m/s",
      "7.5 m/s",
      "30 m/s",
      "15 m/s"
    ],
    "answer": 3,
    "explanation": "To convert km/h to m/s, multiply by 5/18: 54 × 5/18 = 15 m/s."
  },
  {
    "id": "q13",
    "topic": "Speed",
    "difficulty": "Medium",
    "question": "Convert 72 km/h into metres per second.",
    "options": [
      "22 m/s",
      "40 m/s",
      "20 m/s",
      "10 m/s"
    ],
    "answer": 2,
    "explanation": "To convert km/h to m/s, multiply by 5/18: 72 × 5/18 = 20 m/s."
  },
  {
    "id": "q14",
    "topic": "Speed",
    "difficulty": "Medium",
    "question": "Convert 90 km/h into metres per second.",
    "options": [
      "12.5 m/s",
      "27 m/s",
      "50 m/s",
      "25 m/s"
    ],
    "answer": 3,
    "explanation": "To convert km/h to m/s, multiply by 5/18: 90 × 5/18 = 25 m/s."
  },
  {
    "id": "q15",
    "topic": "Speed",
    "difficulty": "Medium",
    "question": "Convert 108 km/h into metres per second.",
    "options": [
      "30 m/s",
      "60 m/s",
      "32 m/s",
      "15 m/s"
    ],
    "answer": 0,
    "explanation": "To convert km/h to m/s, multiply by 5/18: 108 × 5/18 = 30 m/s."
  },
  {
    "id": "q16",
    "topic": "Speed",
    "difficulty": "Medium",
    "question": "Convert 5 m/s into kilometres per hour.",
    "options": [
      "20 km/h",
      "18 km/h",
      "9 km/h",
      "36 km/h"
    ],
    "answer": 1,
    "explanation": "To convert m/s to km/h, multiply by 18/5: 5 × 18/5 = 18 km/h."
  },
  {
    "id": "q17",
    "topic": "Speed",
    "difficulty": "Medium",
    "question": "Convert 8 m/s into kilometres per hour.",
    "options": [
      "57.6 km/h",
      "30.8 km/h",
      "14.4 km/h",
      "28.8 km/h"
    ],
    "answer": 3,
    "explanation": "To convert m/s to km/h, multiply by 18/5: 8 × 18/5 = 28.8 km/h."
  },
  {
    "id": "q18",
    "topic": "Speed",
    "difficulty": "Medium",
    "question": "Convert 12 m/s into kilometres per hour.",
    "options": [
      "86.4 km/h",
      "45.2 km/h",
      "43.2 km/h",
      "21.6 km/h"
    ],
    "answer": 2,
    "explanation": "To convert m/s to km/h, multiply by 18/5: 12 × 18/5 = 43.2 km/h."
  },
  {
    "id": "q19",
    "topic": "Speed",
    "difficulty": "Medium",
    "question": "Convert 15 m/s into kilometres per hour.",
    "options": [
      "56 km/h",
      "27 km/h",
      "108 km/h",
      "54 km/h"
    ],
    "answer": 3,
    "explanation": "To convert m/s to km/h, multiply by 18/5: 15 × 18/5 = 54 km/h."
  },
  {
    "id": "q20",
    "topic": "Speed",
    "difficulty": "Medium",
    "question": "Convert 25 m/s into kilometres per hour.",
    "options": [
      "90 km/h",
      "180 km/h",
      "45 km/h",
      "92 km/h"
    ],
    "answer": 0,
    "explanation": "To convert m/s to km/h, multiply by 18/5: 25 × 18/5 = 90 km/h."
  },
  {
    "id": "q21",
    "topic": "Time",
    "difficulty": "Easy",
    "question": "How long will it take to travel 180 km at a constant speed of 60 km/h?",
    "options": [
      "3 hours",
      "1.5 hours",
      "5 hours",
      "6 hours"
    ],
    "answer": 0,
    "explanation": "Time = distance ÷ speed = 180 ÷ 60 = 3 hours."
  },
  {
    "id": "q22",
    "topic": "Time",
    "difficulty": "Easy",
    "question": "How long will it take to travel 240 km at a constant speed of 80 km/h?",
    "options": [
      "3 hours",
      "5 hours",
      "1.5 hours",
      "6 hours"
    ],
    "answer": 0,
    "explanation": "Time = distance ÷ speed = 240 ÷ 80 = 3 hours."
  },
  {
    "id": "q23",
    "topic": "Time",
    "difficulty": "Easy",
    "question": "How long will it take to travel 150 km at a constant speed of 50 km/h?",
    "options": [
      "6 hours",
      "5 hours",
      "1.5 hours",
      "3 hours"
    ],
    "answer": 3,
    "explanation": "Time = distance ÷ speed = 150 ÷ 50 = 3 hours."
  },
  {
    "id": "q24",
    "topic": "Time",
    "difficulty": "Easy",
    "question": "How long will it take to travel 210 km at a constant speed of 70 km/h?",
    "options": [
      "1.5 hours",
      "5 hours",
      "3 hours",
      "6 hours"
    ],
    "answer": 2,
    "explanation": "Time = distance ÷ speed = 210 ÷ 70 = 3 hours."
  },
  {
    "id": "q25",
    "topic": "Time",
    "difficulty": "Easy",
    "question": "How long will it take to travel 300 km at a constant speed of 75 km/h?",
    "options": [
      "2 hours",
      "4 hours",
      "8 hours",
      "6 hours"
    ],
    "answer": 1,
    "explanation": "Time = distance ÷ speed = 300 ÷ 75 = 4 hours."
  },
  {
    "id": "q26",
    "topic": "Time",
    "difficulty": "Easy",
    "question": "How long will it take to travel 96 km at a constant speed of 32 km/h?",
    "options": [
      "6 hours",
      "5 hours",
      "3 hours",
      "1.5 hours"
    ],
    "answer": 2,
    "explanation": "Time = distance ÷ speed = 96 ÷ 32 = 3 hours."
  },
  {
    "id": "q27",
    "topic": "Time",
    "difficulty": "Medium",
    "question": "How long will it take to travel 420 km at a constant speed of 60 km/h?",
    "options": [
      "9 hours",
      "3.5 hours",
      "14 hours",
      "7 hours"
    ],
    "answer": 3,
    "explanation": "Time = distance ÷ speed = 420 ÷ 60 = 7 hours."
  },
  {
    "id": "q28",
    "topic": "Time",
    "difficulty": "Medium",
    "question": "How long will it take to travel 144 km at a constant speed of 48 km/h?",
    "options": [
      "6 hours",
      "5 hours",
      "3 hours",
      "1.5 hours"
    ],
    "answer": 2,
    "explanation": "Time = distance ÷ speed = 144 ÷ 48 = 3 hours."
  },
  {
    "id": "q29",
    "topic": "Time",
    "difficulty": "Medium",
    "question": "How long will it take to travel 225 km at a constant speed of 45 km/h?",
    "options": [
      "7 hours",
      "10 hours",
      "5 hours",
      "2.5 hours"
    ],
    "answer": 2,
    "explanation": "Time = distance ÷ speed = 225 ÷ 45 = 5 hours."
  },
  {
    "id": "q30",
    "topic": "Time",
    "difficulty": "Medium",
    "question": "How long will it take to travel 360 km at a constant speed of 90 km/h?",
    "options": [
      "4 hours",
      "8 hours",
      "2 hours",
      "6 hours"
    ],
    "answer": 0,
    "explanation": "Time = distance ÷ speed = 360 ÷ 90 = 4 hours."
  },
  {
    "id": "q31",
    "topic": "Time",
    "difficulty": "Medium",
    "question": "A cyclist travels 20 km at 40 km/h. How many minutes does the trip take?",
    "options": [
      "15 minutes",
      "30 minutes",
      "32 minutes",
      "60 minutes"
    ],
    "answer": 1,
    "explanation": "Time = distance ÷ speed = 20 ÷ 40 hours = 30 minutes."
  },
  {
    "id": "q32",
    "topic": "Time",
    "difficulty": "Medium",
    "question": "A cyclist travels 45 km at 60 km/h. How many minutes does the trip take?",
    "options": [
      "45 minutes",
      "47 minutes",
      "22.5 minutes",
      "90 minutes"
    ],
    "answer": 0,
    "explanation": "Time = distance ÷ speed = 45 ÷ 60 hours = 45 minutes."
  },
  {
    "id": "q33",
    "topic": "Time",
    "difficulty": "Medium",
    "question": "A cyclist travels 120 km at 80 km/h. How many minutes does the trip take?",
    "options": [
      "90 minutes",
      "180 minutes",
      "45 minutes",
      "92 minutes"
    ],
    "answer": 0,
    "explanation": "Time = distance ÷ speed = 120 ÷ 80 hours = 90 minutes."
  },
  {
    "id": "q34",
    "topic": "Time",
    "difficulty": "Medium",
    "question": "A cyclist travels 15 km at 45 km/h. How many minutes does the trip take?",
    "options": [
      "40 minutes",
      "22 minutes",
      "20 minutes",
      "10 minutes"
    ],
    "answer": 2,
    "explanation": "Time = distance ÷ speed = 15 ÷ 45 hours = 20 minutes."
  },
  {
    "id": "q35",
    "topic": "Time",
    "difficulty": "Medium",
    "question": "A cyclist travels 80 km at 64 km/h. How many minutes does the trip take?",
    "options": [
      "150 minutes",
      "37.5 minutes",
      "75 minutes",
      "77 minutes"
    ],
    "answer": 2,
    "explanation": "Time = distance ÷ speed = 80 ÷ 64 hours = 75 minutes."
  },
  {
    "id": "q36",
    "topic": "Time",
    "difficulty": "Hard",
    "question": "A cyclist travels 20 km at 50 km/h. How many minutes does the trip take?",
    "options": [
      "48 minutes",
      "12 minutes",
      "26 minutes",
      "24 minutes"
    ],
    "answer": 3,
    "explanation": "Time = distance ÷ speed = 20 ÷ 50 hours = 24 minutes."
  },
  {
    "id": "q37",
    "topic": "Time",
    "difficulty": "Hard",
    "question": "A cyclist travels 48 km at 72 km/h. How many minutes does the trip take?",
    "options": [
      "80 minutes",
      "40 minutes",
      "20 minutes",
      "42 minutes"
    ],
    "answer": 1,
    "explanation": "Time = distance ÷ speed = 48 ÷ 72 hours = 40 minutes."
  },
  {
    "id": "q38",
    "topic": "Time",
    "difficulty": "Hard",
    "question": "A cyclist travels 12 km at 48 km/h. How many minutes does the trip take?",
    "options": [
      "15 minutes",
      "7.5 minutes",
      "30 minutes",
      "17 minutes"
    ],
    "answer": 0,
    "explanation": "Time = distance ÷ speed = 12 ÷ 48 hours = 15 minutes."
  },
  {
    "id": "q39",
    "topic": "Time",
    "difficulty": "Hard",
    "question": "A cyclist travels 60 km at 100 km/h. How many minutes does the trip take?",
    "options": [
      "72 minutes",
      "36 minutes",
      "38 minutes",
      "18 minutes"
    ],
    "answer": 1,
    "explanation": "Time = distance ÷ speed = 60 ÷ 100 hours = 36 minutes."
  },
  {
    "id": "q40",
    "topic": "Time",
    "difficulty": "Hard",
    "question": "A cyclist travels 18 km at 90 km/h. How many minutes does the trip take?",
    "options": [
      "14 minutes",
      "24 minutes",
      "6 minutes",
      "12 minutes"
    ],
    "answer": 3,
    "explanation": "Time = distance ÷ speed = 18 ÷ 90 hours = 12 minutes."
  },
  {
    "id": "q41",
    "topic": "Distance",
    "difficulty": "Easy",
    "question": "A car travels at 45 km/h for 2 hours. How far does it travel?",
    "options": [
      "92 km",
      "180 km",
      "90 km",
      "45 km"
    ],
    "answer": 2,
    "explanation": "Distance = speed × time = 45 × 2 = 90 km."
  },
  {
    "id": "q42",
    "topic": "Distance",
    "difficulty": "Easy",
    "question": "A car travels at 60 km/h for 3 hours. How far does it travel?",
    "options": [
      "90 km",
      "360 km",
      "180 km",
      "182 km"
    ],
    "answer": 2,
    "explanation": "Distance = speed × time = 60 × 3 = 180 km."
  },
  {
    "id": "q43",
    "topic": "Distance",
    "difficulty": "Easy",
    "question": "A car travels at 72 km/h for 2.5 hours. How far does it travel?",
    "options": [
      "182 km",
      "360 km",
      "90 km",
      "180 km"
    ],
    "answer": 3,
    "explanation": "Distance = speed × time = 72 × 2.5 = 180 km."
  },
  {
    "id": "q44",
    "topic": "Distance",
    "difficulty": "Easy",
    "question": "A car travels at 35 km/h for 4 hours. How far does it travel?",
    "options": [
      "142 km",
      "140 km",
      "70 km",
      "280 km"
    ],
    "answer": 1,
    "explanation": "Distance = speed × time = 35 × 4 = 140 km."
  },
  {
    "id": "q45",
    "topic": "Distance",
    "difficulty": "Easy",
    "question": "A car travels at 80 km/h for 1.5 hours. How far does it travel?",
    "options": [
      "240 km",
      "120 km",
      "122 km",
      "60 km"
    ],
    "answer": 1,
    "explanation": "Distance = speed × time = 80 × 1.5 = 120 km."
  },
  {
    "id": "q46",
    "topic": "Distance",
    "difficulty": "Easy",
    "question": "A car travels at 54 km/h for 2 hours. How far does it travel?",
    "options": [
      "54 km",
      "108 km",
      "110 km",
      "216 km"
    ],
    "answer": 1,
    "explanation": "Distance = speed × time = 54 × 2 = 108 km."
  },
  {
    "id": "q47",
    "topic": "Distance",
    "difficulty": "Medium",
    "question": "A car travels at 96 km/h for 0.5 hours. How far does it travel?",
    "options": [
      "50 km",
      "96 km",
      "24 km",
      "48 km"
    ],
    "answer": 3,
    "explanation": "Distance = speed × time = 96 × 0.5 = 48 km."
  },
  {
    "id": "q48",
    "topic": "Distance",
    "difficulty": "Medium",
    "question": "A car travels at 42 km/h for 3.5 hours. How far does it travel?",
    "options": [
      "294 km",
      "73.5 km",
      "147 km",
      "149 km"
    ],
    "answer": 2,
    "explanation": "Distance = speed × time = 42 × 3.5 = 147 km."
  },
  {
    "id": "q49",
    "topic": "Distance",
    "difficulty": "Medium",
    "question": "A car travels at 65 km/h for 2 hours. How far does it travel?",
    "options": [
      "132 km",
      "130 km",
      "260 km",
      "65 km"
    ],
    "answer": 1,
    "explanation": "Distance = speed × time = 65 × 2 = 130 km."
  },
  {
    "id": "q50",
    "topic": "Distance",
    "difficulty": "Medium",
    "question": "A car travels at 90 km/h for 4 hours. How far does it travel?",
    "options": [
      "720 km",
      "180 km",
      "362 km",
      "360 km"
    ],
    "answer": 3,
    "explanation": "Distance = speed × time = 90 × 4 = 360 km."
  },
  {
    "id": "q51",
    "topic": "Distance",
    "difficulty": "Medium",
    "question": "A runner moves at 8 m/s for 25 seconds. What distance does the runner cover?",
    "options": [
      "202 m",
      "400 m",
      "100 m",
      "200 m"
    ],
    "answer": 3,
    "explanation": "Distance = speed × time = 8 × 25 = 200 metres."
  },
  {
    "id": "q52",
    "topic": "Distance",
    "difficulty": "Medium",
    "question": "A runner moves at 12 m/s for 15 seconds. What distance does the runner cover?",
    "options": [
      "360 m",
      "182 m",
      "90 m",
      "180 m"
    ],
    "answer": 3,
    "explanation": "Distance = speed × time = 12 × 15 = 180 metres."
  },
  {
    "id": "q53",
    "topic": "Distance",
    "difficulty": "Medium",
    "question": "A runner moves at 5 m/s for 48 seconds. What distance does the runner cover?",
    "options": [
      "240 m",
      "242 m",
      "120 m",
      "480 m"
    ],
    "answer": 0,
    "explanation": "Distance = speed × time = 5 × 48 = 240 metres."
  },
  {
    "id": "q54",
    "topic": "Distance",
    "difficulty": "Medium",
    "question": "A runner moves at 15 m/s for 20 seconds. What distance does the runner cover?",
    "options": [
      "300 m",
      "150 m",
      "302 m",
      "600 m"
    ],
    "answer": 0,
    "explanation": "Distance = speed × time = 15 × 20 = 300 metres."
  },
  {
    "id": "q55",
    "topic": "Distance",
    "difficulty": "Medium",
    "question": "A runner moves at 20 m/s for 12 seconds. What distance does the runner cover?",
    "options": [
      "242 m",
      "240 m",
      "120 m",
      "480 m"
    ],
    "answer": 1,
    "explanation": "Distance = speed × time = 20 × 12 = 240 metres."
  },
  {
    "id": "q56",
    "topic": "Distance",
    "difficulty": "Hard",
    "question": "A bus moves at 36 km/h for 20 minutes. What distance does it cover?",
    "options": [
      "12 km",
      "14 km",
      "24 km",
      "6 km"
    ],
    "answer": 0,
    "explanation": "Convert time to hours: 20/60 hours. Distance = 36 × 20/60 = 12 km."
  },
  {
    "id": "q57",
    "topic": "Distance",
    "difficulty": "Hard",
    "question": "A bus moves at 54 km/h for 40 minutes. What distance does it cover?",
    "options": [
      "36 km",
      "72 km",
      "18 km",
      "38 km"
    ],
    "answer": 0,
    "explanation": "Convert time to hours: 40/60 hours. Distance = 54 × 40/60 = 36 km."
  },
  {
    "id": "q58",
    "topic": "Distance",
    "difficulty": "Hard",
    "question": "A bus moves at 72 km/h for 15 minutes. What distance does it cover?",
    "options": [
      "36 km",
      "9 km",
      "20 km",
      "18 km"
    ],
    "answer": 3,
    "explanation": "Convert time to hours: 15/60 hours. Distance = 72 × 15/60 = 18 km."
  },
  {
    "id": "q59",
    "topic": "Distance",
    "difficulty": "Hard",
    "question": "A bus moves at 90 km/h for 12 minutes. What distance does it cover?",
    "options": [
      "9 km",
      "20 km",
      "36 km",
      "18 km"
    ],
    "answer": 3,
    "explanation": "Convert time to hours: 12/60 hours. Distance = 90 × 12/60 = 18 km."
  },
  {
    "id": "q60",
    "topic": "Distance",
    "difficulty": "Hard",
    "question": "A bus moves at 108 km/h for 25 minutes. What distance does it cover?",
    "options": [
      "47 km",
      "45 km",
      "22.5 km",
      "90 km"
    ],
    "answer": 1,
    "explanation": "Convert time to hours: 25/60 hours. Distance = 108 × 25/60 = 45 km."
  },
  {
    "id": "q61",
    "topic": "Relative Speed",
    "difficulty": "Easy",
    "question": "Two vehicles travel in opposite directions at 35 km/h and 45 km/h. What is their relative speed?",
    "options": [
      "160 km/h",
      "40 km/h",
      "82 km/h",
      "80 km/h"
    ],
    "answer": 3,
    "explanation": "For opposite directions, add the speeds: 35 + 45 = 80 km/h."
  },
  {
    "id": "q62",
    "topic": "Relative Speed",
    "difficulty": "Easy",
    "question": "Two vehicles travel in opposite directions at 40 km/h and 55 km/h. What is their relative speed?",
    "options": [
      "97 km/h",
      "47.5 km/h",
      "95 km/h",
      "190 km/h"
    ],
    "answer": 2,
    "explanation": "For opposite directions, add the speeds: 40 + 55 = 95 km/h."
  },
  {
    "id": "q63",
    "topic": "Relative Speed",
    "difficulty": "Easy",
    "question": "Two vehicles travel in opposite directions at 60 km/h and 70 km/h. What is their relative speed?",
    "options": [
      "260 km/h",
      "132 km/h",
      "130 km/h",
      "65 km/h"
    ],
    "answer": 2,
    "explanation": "For opposite directions, add the speeds: 60 + 70 = 130 km/h."
  },
  {
    "id": "q64",
    "topic": "Relative Speed",
    "difficulty": "Easy",
    "question": "Two vehicles travel in opposite directions at 28 km/h and 32 km/h. What is their relative speed?",
    "options": [
      "60 km/h",
      "120 km/h",
      "62 km/h",
      "30 km/h"
    ],
    "answer": 0,
    "explanation": "For opposite directions, add the speeds: 28 + 32 = 60 km/h."
  },
  {
    "id": "q65",
    "topic": "Relative Speed",
    "difficulty": "Medium",
    "question": "Two vehicles travel in opposite directions at 48 km/h and 52 km/h. What is their relative speed?",
    "options": [
      "102 km/h",
      "100 km/h",
      "50 km/h",
      "200 km/h"
    ],
    "answer": 1,
    "explanation": "For opposite directions, add the speeds: 48 + 52 = 100 km/h."
  },
  {
    "id": "q66",
    "topic": "Relative Speed",
    "difficulty": "Medium",
    "question": "Two vehicles travel in opposite directions at 65 km/h and 75 km/h. What is their relative speed?",
    "options": [
      "70 km/h",
      "280 km/h",
      "140 km/h",
      "142 km/h"
    ],
    "answer": 2,
    "explanation": "For opposite directions, add the speeds: 65 + 75 = 140 km/h."
  },
  {
    "id": "q67",
    "topic": "Relative Speed",
    "difficulty": "Medium",
    "question": "Two vehicles travel in opposite directions at 24 km/h and 36 km/h. What is their relative speed?",
    "options": [
      "120 km/h",
      "30 km/h",
      "60 km/h",
      "62 km/h"
    ],
    "answer": 2,
    "explanation": "For opposite directions, add the speeds: 24 + 36 = 60 km/h."
  },
  {
    "id": "q68",
    "topic": "Relative Speed",
    "difficulty": "Medium",
    "question": "Two vehicles travel in opposite directions at 80 km/h and 95 km/h. What is their relative speed?",
    "options": [
      "177 km/h",
      "350 km/h",
      "87.5 km/h",
      "175 km/h"
    ],
    "answer": 3,
    "explanation": "For opposite directions, add the speeds: 80 + 95 = 175 km/h."
  },
  {
    "id": "q69",
    "topic": "Relative Speed",
    "difficulty": "Medium",
    "question": "Two cars travel in the same direction at 75 km/h and 40 km/h. What is their relative speed?",
    "options": [
      "35 km/h",
      "37 km/h",
      "70 km/h",
      "17.5 km/h"
    ],
    "answer": 0,
    "explanation": "For the same direction, subtract the slower speed: 75 − 40 = 35 km/h."
  },
  {
    "id": "q70",
    "topic": "Relative Speed",
    "difficulty": "Medium",
    "question": "Two cars travel in the same direction at 90 km/h and 55 km/h. What is their relative speed?",
    "options": [
      "70 km/h",
      "35 km/h",
      "17.5 km/h",
      "37 km/h"
    ],
    "answer": 1,
    "explanation": "For the same direction, subtract the slower speed: 90 − 55 = 35 km/h."
  },
  {
    "id": "q71",
    "topic": "Relative Speed",
    "difficulty": "Medium",
    "question": "Two cars travel in the same direction at 64 km/h and 28 km/h. What is their relative speed?",
    "options": [
      "18 km/h",
      "72 km/h",
      "38 km/h",
      "36 km/h"
    ],
    "answer": 3,
    "explanation": "For the same direction, subtract the slower speed: 64 − 28 = 36 km/h."
  },
  {
    "id": "q72",
    "topic": "Relative Speed",
    "difficulty": "Medium",
    "question": "Two cars travel in the same direction at 100 km/h and 65 km/h. What is their relative speed?",
    "options": [
      "70 km/h",
      "37 km/h",
      "35 km/h",
      "17.5 km/h"
    ],
    "answer": 2,
    "explanation": "For the same direction, subtract the slower speed: 100 − 65 = 35 km/h."
  },
  {
    "id": "q73",
    "topic": "Relative Speed",
    "difficulty": "Medium",
    "question": "Two cars travel in the same direction at 52 km/h and 34 km/h. What is their relative speed?",
    "options": [
      "9 km/h",
      "20 km/h",
      "18 km/h",
      "36 km/h"
    ],
    "answer": 2,
    "explanation": "For the same direction, subtract the slower speed: 52 − 34 = 18 km/h."
  },
  {
    "id": "q74",
    "topic": "Relative Speed",
    "difficulty": "Medium",
    "question": "Two cars travel in the same direction at 88 km/h and 48 km/h. What is their relative speed?",
    "options": [
      "20 km/h",
      "40 km/h",
      "42 km/h",
      "80 km/h"
    ],
    "answer": 1,
    "explanation": "For the same direction, subtract the slower speed: 88 − 48 = 40 km/h."
  },
  {
    "id": "q75",
    "topic": "Relative Speed",
    "difficulty": "Medium",
    "question": "Two cars travel in the same direction at 70 km/h and 25 km/h. What is their relative speed?",
    "options": [
      "47 km/h",
      "45 km/h",
      "90 km/h",
      "22.5 km/h"
    ],
    "answer": 1,
    "explanation": "For the same direction, subtract the slower speed: 70 − 25 = 45 km/h."
  },
  {
    "id": "q76",
    "topic": "Relative Speed",
    "difficulty": "Medium",
    "question": "Two cars travel in the same direction at 120 km/h and 75 km/h. What is their relative speed?",
    "options": [
      "22.5 km/h",
      "47 km/h",
      "90 km/h",
      "45 km/h"
    ],
    "answer": 3,
    "explanation": "For the same direction, subtract the slower speed: 120 − 75 = 45 km/h."
  },
  {
    "id": "q77",
    "topic": "Relative Speed",
    "difficulty": "Hard",
    "question": "A faster cyclist at 60 km/h is 30 km behind another cyclist moving at 45 km/h. How long until the faster cyclist catches up?",
    "options": [
      "4 hours",
      "7 hours",
      "1 hours",
      "2 hours"
    ],
    "answer": 3,
    "explanation": "Relative speed = 60 − 45 = 15 km/h. Time = gap ÷ relative speed = 30 ÷ 15 = 2 hours."
  },
  {
    "id": "q78",
    "topic": "Relative Speed",
    "difficulty": "Hard",
    "question": "A faster cyclist at 80 km/h is 48 km behind another cyclist moving at 56 km/h. How long until the faster cyclist catches up?",
    "options": [
      "4 hours",
      "1 hours",
      "7 hours",
      "2 hours"
    ],
    "answer": 3,
    "explanation": "Relative speed = 80 − 56 = 24 km/h. Time = gap ÷ relative speed = 48 ÷ 24 = 2 hours."
  },
  {
    "id": "q79",
    "topic": "Relative Speed",
    "difficulty": "Hard",
    "question": "A faster cyclist at 54 km/h is 20 km behind another cyclist moving at 30 km/h. How long until the faster cyclist catches up?",
    "options": [
      "0.83 hours",
      "0.42 hours",
      "1.67 hours",
      "2.83 hours"
    ],
    "answer": 0,
    "explanation": "Relative speed = 54 − 30 = 24 km/h. Time = gap ÷ relative speed = 20 ÷ 24 = 0.833333 hours."
  },
  {
    "id": "q80",
    "topic": "Relative Speed",
    "difficulty": "Hard",
    "question": "A faster cyclist at 72 km/h is 15 km behind another cyclist moving at 42 km/h. How long until the faster cyclist catches up?",
    "options": [
      "0.25 hours",
      "0.5 hours",
      "2.5 hours",
      "1 hours"
    ],
    "answer": 1,
    "explanation": "Relative speed = 72 − 42 = 30 km/h. Time = gap ÷ relative speed = 15 ÷ 30 = 0.5 hours."
  },
  {
    "id": "q81",
    "topic": "Average Speed",
    "difficulty": "Medium",
    "question": "A traveller covers equal distances at 30 km/h and 60 km/h. What is the average speed for the whole journey?",
    "options": [
      "20 km/h",
      "40 km/h",
      "42 km/h",
      "80 km/h"
    ],
    "answer": 1,
    "explanation": "For equal distances, average speed = 2ab/(a+b) = 2×30×60/(30+60) = 40 km/h."
  },
  {
    "id": "q82",
    "topic": "Average Speed",
    "difficulty": "Medium",
    "question": "A traveller covers equal distances at 40 km/h and 80 km/h. What is the average speed for the whole journey?",
    "options": [
      "53.33 km/h",
      "26.67 km/h",
      "106.67 km/h",
      "55.33 km/h"
    ],
    "answer": 0,
    "explanation": "For equal distances, average speed = 2ab/(a+b) = 2×40×80/(40+80) = 53.3333 km/h."
  },
  {
    "id": "q83",
    "topic": "Average Speed",
    "difficulty": "Medium",
    "question": "A traveller covers equal distances at 24 km/h and 48 km/h. What is the average speed for the whole journey?",
    "options": [
      "32 km/h",
      "34 km/h",
      "64 km/h",
      "16 km/h"
    ],
    "answer": 0,
    "explanation": "For equal distances, average speed = 2ab/(a+b) = 2×24×48/(24+48) = 32 km/h."
  },
  {
    "id": "q84",
    "topic": "Average Speed",
    "difficulty": "Medium",
    "question": "A traveller covers equal distances at 36 km/h and 72 km/h. What is the average speed for the whole journey?",
    "options": [
      "24 km/h",
      "50 km/h",
      "48 km/h",
      "96 km/h"
    ],
    "answer": 2,
    "explanation": "For equal distances, average speed = 2ab/(a+b) = 2×36×72/(36+72) = 48 km/h."
  },
  {
    "id": "q85",
    "topic": "Average Speed",
    "difficulty": "Medium",
    "question": "A traveller covers equal distances at 20 km/h and 30 km/h. What is the average speed for the whole journey?",
    "options": [
      "26 km/h",
      "12 km/h",
      "24 km/h",
      "48 km/h"
    ],
    "answer": 2,
    "explanation": "For equal distances, average speed = 2ab/(a+b) = 2×20×30/(20+30) = 24 km/h."
  },
  {
    "id": "q86",
    "topic": "Average Speed",
    "difficulty": "Medium",
    "question": "A traveller covers equal distances at 45 km/h and 90 km/h. What is the average speed for the whole journey?",
    "options": [
      "120 km/h",
      "62 km/h",
      "60 km/h",
      "30 km/h"
    ],
    "answer": 2,
    "explanation": "For equal distances, average speed = 2ab/(a+b) = 2×45×90/(45+90) = 60 km/h."
  },
  {
    "id": "q87",
    "topic": "Average Speed",
    "difficulty": "Medium",
    "question": "A traveller covers equal distances at 50 km/h and 75 km/h. What is the average speed for the whole journey?",
    "options": [
      "120 km/h",
      "60 km/h",
      "30 km/h",
      "62 km/h"
    ],
    "answer": 1,
    "explanation": "For equal distances, average speed = 2ab/(a+b) = 2×50×75/(50+75) = 60 km/h."
  },
  {
    "id": "q88",
    "topic": "Average Speed",
    "difficulty": "Medium",
    "question": "A traveller covers equal distances at 32 km/h and 64 km/h. What is the average speed for the whole journey?",
    "options": [
      "85.33 km/h",
      "44.67 km/h",
      "21.33 km/h",
      "42.67 km/h"
    ],
    "answer": 3,
    "explanation": "For equal distances, average speed = 2ab/(a+b) = 2×32×64/(32+64) = 42.6667 km/h."
  },
  {
    "id": "q89",
    "topic": "Average Speed",
    "difficulty": "Medium",
    "question": "A vehicle travels for equal amounts of time at 30 km/h and 50 km/h. What is its average speed?",
    "options": [
      "42 km/h",
      "20 km/h",
      "40 km/h",
      "80 km/h"
    ],
    "answer": 2,
    "explanation": "For equal time intervals, average speed is the arithmetic mean: (30 + 50) ÷ 2 = 40 km/h."
  },
  {
    "id": "q90",
    "topic": "Average Speed",
    "difficulty": "Medium",
    "question": "A vehicle travels for equal amounts of time at 40 km/h and 60 km/h. What is its average speed?",
    "options": [
      "25 km/h",
      "50 km/h",
      "52 km/h",
      "100 km/h"
    ],
    "answer": 1,
    "explanation": "For equal time intervals, average speed is the arithmetic mean: (40 + 60) ÷ 2 = 50 km/h."
  },
  {
    "id": "q91",
    "topic": "Average Speed",
    "difficulty": "Medium",
    "question": "A vehicle travels for equal amounts of time at 45 km/h and 75 km/h. What is its average speed?",
    "options": [
      "62 km/h",
      "60 km/h",
      "30 km/h",
      "120 km/h"
    ],
    "answer": 1,
    "explanation": "For equal time intervals, average speed is the arithmetic mean: (45 + 75) ÷ 2 = 60 km/h."
  },
  {
    "id": "q92",
    "topic": "Average Speed",
    "difficulty": "Medium",
    "question": "A vehicle travels for equal amounts of time at 20 km/h and 40 km/h. What is its average speed?",
    "options": [
      "32 km/h",
      "15 km/h",
      "60 km/h",
      "30 km/h"
    ],
    "answer": 3,
    "explanation": "For equal time intervals, average speed is the arithmetic mean: (20 + 40) ÷ 2 = 30 km/h."
  },
  {
    "id": "q93",
    "topic": "Average Speed",
    "difficulty": "Medium",
    "question": "A vehicle travels for equal amounts of time at 55 km/h and 65 km/h. What is its average speed?",
    "options": [
      "62 km/h",
      "120 km/h",
      "60 km/h",
      "30 km/h"
    ],
    "answer": 2,
    "explanation": "For equal time intervals, average speed is the arithmetic mean: (55 + 65) ÷ 2 = 60 km/h."
  },
  {
    "id": "q94",
    "topic": "Average Speed",
    "difficulty": "Medium",
    "question": "A vehicle travels for equal amounts of time at 36 km/h and 54 km/h. What is its average speed?",
    "options": [
      "45 km/h",
      "22.5 km/h",
      "47 km/h",
      "90 km/h"
    ],
    "answer": 0,
    "explanation": "For equal time intervals, average speed is the arithmetic mean: (36 + 54) ÷ 2 = 45 km/h."
  },
  {
    "id": "q95",
    "topic": "Average Speed",
    "difficulty": "Hard",
    "question": "A journey has two parts: 60 km in 1 hours, then 120 km in 2 hours. What is the overall average speed?",
    "options": [
      "60 km/h",
      "62 km/h",
      "30 km/h",
      "120 km/h"
    ],
    "answer": 0,
    "explanation": "Total distance = 60+120 = 180 km; total time = 1+2 = 3 hours. Average speed = 180 ÷ (3) = 60 km/h."
  },
  {
    "id": "q96",
    "topic": "Average Speed",
    "difficulty": "Hard",
    "question": "A journey has two parts: 90 km in 1.5 hours, then 150 km in 2.5 hours. What is the overall average speed?",
    "options": [
      "30 km/h",
      "60 km/h",
      "120 km/h",
      "62 km/h"
    ],
    "answer": 1,
    "explanation": "Total distance = 90+150 = 240 km; total time = 1.5+2.5 = 4.0 hours. Average speed = 240 ÷ (4.0) = 60 km/h."
  },
  {
    "id": "q97",
    "topic": "Average Speed",
    "difficulty": "Hard",
    "question": "A journey has two parts: 80 km in 2 hours, then 120 km in 1 hours. What is the overall average speed?",
    "options": [
      "33.33 km/h",
      "68.67 km/h",
      "133.33 km/h",
      "66.67 km/h"
    ],
    "answer": 3,
    "explanation": "Total distance = 80+120 = 200 km; total time = 2+1 = 3 hours. Average speed = 200 ÷ (3) = 66.6667 km/h."
  },
  {
    "id": "q98",
    "topic": "Average Speed",
    "difficulty": "Hard",
    "question": "A journey has two parts: 45 km in 0.5 hours, then 105 km in 1.5 hours. What is the overall average speed?",
    "options": [
      "150 km/h",
      "77 km/h",
      "37.5 km/h",
      "75 km/h"
    ],
    "answer": 3,
    "explanation": "Total distance = 45+105 = 150 km; total time = 0.5+1.5 = 2.0 hours. Average speed = 150 ÷ (2.0) = 75 km/h."
  },
  {
    "id": "q99",
    "topic": "Average Speed",
    "difficulty": "Hard",
    "question": "A journey has two parts: 100 km in 2 hours, then 180 km in 3 hours. What is the overall average speed?",
    "options": [
      "58 km/h",
      "112 km/h",
      "56 km/h",
      "28 km/h"
    ],
    "answer": 2,
    "explanation": "Total distance = 100+180 = 280 km; total time = 2+3 = 5 hours. Average speed = 280 ÷ (5) = 56 km/h."
  },
  {
    "id": "q100",
    "topic": "Average Speed",
    "difficulty": "Hard",
    "question": "A journey has two parts: 72 km in 1 hours, then 108 km in 2 hours. What is the overall average speed?",
    "options": [
      "30 km/h",
      "120 km/h",
      "62 km/h",
      "60 km/h"
    ],
    "answer": 3,
    "explanation": "Total distance = 72+108 = 180 km; total time = 1+2 = 3 hours. Average speed = 180 ÷ (3) = 60 km/h."
  },
  {
    "id": "q101",
    "topic": "Trains",
    "difficulty": "Easy",
    "question": "A 120 m train passes a pole in 6 seconds. What is its speed?",
    "options": [
      "74 km/h",
      "144 km/h",
      "72 km/h",
      "36 km/h"
    ],
    "answer": 2,
    "explanation": "While passing a pole, distance = train length = 120 m. Speed = 120/6 = 20 m/s = 72 km/h."
  },
  {
    "id": "q102",
    "topic": "Trains",
    "difficulty": "Easy",
    "question": "A 150 m train passes a pole in 10 seconds. What is its speed?",
    "options": [
      "108 km/h",
      "54 km/h",
      "56 km/h",
      "27 km/h"
    ],
    "answer": 1,
    "explanation": "While passing a pole, distance = train length = 150 m. Speed = 150/10 = 15 m/s = 54 km/h."
  },
  {
    "id": "q103",
    "topic": "Trains",
    "difficulty": "Easy",
    "question": "A 180 m train passes a pole in 9 seconds. What is its speed?",
    "options": [
      "144 km/h",
      "72 km/h",
      "74 km/h",
      "36 km/h"
    ],
    "answer": 1,
    "explanation": "While passing a pole, distance = train length = 180 m. Speed = 180/9 = 20 m/s = 72 km/h."
  },
  {
    "id": "q104",
    "topic": "Trains",
    "difficulty": "Medium",
    "question": "A 200 m train passes a pole in 8 seconds. What is its speed?",
    "options": [
      "45 km/h",
      "90 km/h",
      "92 km/h",
      "180 km/h"
    ],
    "answer": 1,
    "explanation": "While passing a pole, distance = train length = 200 m. Speed = 200/8 = 25 m/s = 90 km/h."
  },
  {
    "id": "q105",
    "topic": "Trains",
    "difficulty": "Medium",
    "question": "A 240 m train passes a pole in 12 seconds. What is its speed?",
    "options": [
      "144 km/h",
      "74 km/h",
      "36 km/h",
      "72 km/h"
    ],
    "answer": 3,
    "explanation": "While passing a pole, distance = train length = 240 m. Speed = 240/12 = 20 m/s = 72 km/h."
  },
  {
    "id": "q106",
    "topic": "Trains",
    "difficulty": "Medium",
    "question": "A 300 m train passes a pole in 15 seconds. What is its speed?",
    "options": [
      "74 km/h",
      "72 km/h",
      "144 km/h",
      "36 km/h"
    ],
    "answer": 1,
    "explanation": "While passing a pole, distance = train length = 300 m. Speed = 300/15 = 20 m/s = 72 km/h."
  },
  {
    "id": "q107",
    "topic": "Trains",
    "difficulty": "Medium",
    "question": "A 150 m train crosses a 250 m platform in 20 seconds. What is the train speed?",
    "options": [
      "74 km/h",
      "144 km/h",
      "72 km/h",
      "36 km/h"
    ],
    "answer": 2,
    "explanation": "Total distance = train + platform = 150+250 = 400 m. Speed = 400/20 = 20 m/s = 72 km/h."
  },
  {
    "id": "q108",
    "topic": "Trains",
    "difficulty": "Medium",
    "question": "A 180 m train crosses a 220 m platform in 20 seconds. What is the train speed?",
    "options": [
      "36 km/h",
      "72 km/h",
      "144 km/h",
      "74 km/h"
    ],
    "answer": 1,
    "explanation": "Total distance = train + platform = 180+220 = 400 m. Speed = 400/20 = 20 m/s = 72 km/h."
  },
  {
    "id": "q109",
    "topic": "Trains",
    "difficulty": "Medium",
    "question": "A 200 m train crosses a 300 m platform in 25 seconds. What is the train speed?",
    "options": [
      "74 km/h",
      "144 km/h",
      "36 km/h",
      "72 km/h"
    ],
    "answer": 3,
    "explanation": "Total distance = train + platform = 200+300 = 500 m. Speed = 500/25 = 20 m/s = 72 km/h."
  },
  {
    "id": "q110",
    "topic": "Trains",
    "difficulty": "Medium",
    "question": "A 120 m train crosses a 180 m platform in 15 seconds. What is the train speed?",
    "options": [
      "144 km/h",
      "74 km/h",
      "72 km/h",
      "36 km/h"
    ],
    "answer": 2,
    "explanation": "Total distance = train + platform = 120+180 = 300 m. Speed = 300/15 = 20 m/s = 72 km/h."
  },
  {
    "id": "q111",
    "topic": "Trains",
    "difficulty": "Medium",
    "question": "A 240 m train crosses a 360 m platform in 30 seconds. What is the train speed?",
    "options": [
      "74 km/h",
      "144 km/h",
      "72 km/h",
      "36 km/h"
    ],
    "answer": 2,
    "explanation": "Total distance = train + platform = 240+360 = 600 m. Speed = 600/30 = 20 m/s = 72 km/h."
  },
  {
    "id": "q112",
    "topic": "Trains",
    "difficulty": "Medium",
    "question": "A 160 m train crosses a 240 m platform in 20 seconds. What is the train speed?",
    "options": [
      "72 km/h",
      "74 km/h",
      "36 km/h",
      "144 km/h"
    ],
    "answer": 0,
    "explanation": "Total distance = train + platform = 160+240 = 400 m. Speed = 400/20 = 20 m/s = 72 km/h."
  },
  {
    "id": "q113",
    "topic": "Trains",
    "difficulty": "Hard",
    "question": "Two trains of lengths 120 m and 180 m move in the opposite directions at 36 km/h and 54 km/h. How many seconds do they take to cross each other?",
    "options": [
      "24 seconds",
      "12 seconds",
      "6 seconds",
      "14 seconds"
    ],
    "answer": 1,
    "explanation": "Total length = 120+180 = 300 m. Relative speed = 36+54 = 90 km/h. Convert relative speed to m/s: 90/3.6 = 25 m/s. Time = 300 ÷ (90/3.6) = 12 seconds."
  },
  {
    "id": "q114",
    "topic": "Trains",
    "difficulty": "Hard",
    "question": "Two trains of lengths 150 m and 200 m move in the opposite directions at 45 km/h and 63 km/h. How many seconds do they take to cross each other?",
    "options": [
      "23.33 seconds",
      "5.83 seconds",
      "13.67 seconds",
      "11.67 seconds"
    ],
    "answer": 3,
    "explanation": "Total length = 150+200 = 350 m. Relative speed = 45+63 = 108 km/h. Convert relative speed to m/s: 108/3.6 = 30 m/s. Time = 350 ÷ (108/3.6) = 11.6667 seconds."
  },
  {
    "id": "q115",
    "topic": "Trains",
    "difficulty": "Hard",
    "question": "Two trains of lengths 100 m and 150 m move in the same directions at 54 km/h and 36 km/h. How many seconds do they take to cross each other?",
    "options": [
      "25 seconds",
      "52 seconds",
      "100 seconds",
      "50 seconds"
    ],
    "answer": 3,
    "explanation": "Total length = 100+150 = 250 m. Relative speed = |54−36| = 18 km/h. Convert relative speed to m/s: 18/3.6 = 5 m/s. Time = 250 ÷ (18/3.6) = 50 seconds."
  },
  {
    "id": "q116",
    "topic": "Trains",
    "difficulty": "Hard",
    "question": "Two trains of lengths 180 m and 220 m move in the same directions at 72 km/h and 54 km/h. How many seconds do they take to cross each other?",
    "options": [
      "160 seconds",
      "40 seconds",
      "80 seconds",
      "82 seconds"
    ],
    "answer": 2,
    "explanation": "Total length = 180+220 = 400 m. Relative speed = |72−54| = 18 km/h. Convert relative speed to m/s: 18/3.6 = 5 m/s. Time = 400 ÷ (18/3.6) = 80 seconds."
  },
  {
    "id": "q117",
    "topic": "Trains",
    "difficulty": "Hard",
    "question": "Two trains of lengths 140 m and 160 m move in the opposite directions at 36 km/h and 72 km/h. How many seconds do they take to cross each other?",
    "options": [
      "12 seconds",
      "10 seconds",
      "20 seconds",
      "5 seconds"
    ],
    "answer": 1,
    "explanation": "Total length = 140+160 = 300 m. Relative speed = 36+72 = 108 km/h. Convert relative speed to m/s: 108/3.6 = 30 m/s. Time = 300 ÷ (108/3.6) = 10 seconds."
  },
  {
    "id": "q118",
    "topic": "Trains",
    "difficulty": "Hard",
    "question": "Two trains of lengths 200 m and 100 m move in the same directions at 60 km/h and 42 km/h. How many seconds do they take to cross each other?",
    "options": [
      "120 seconds",
      "62 seconds",
      "60 seconds",
      "30 seconds"
    ],
    "answer": 2,
    "explanation": "Total length = 200+100 = 300 m. Relative speed = |60−42| = 18 km/h. Convert relative speed to m/s: 18/3.6 = 5 m/s. Time = 300 ÷ (18/3.6) = 60 seconds."
  },
  {
    "id": "q119",
    "topic": "Trains",
    "difficulty": "Hard",
    "question": "Two trains of lengths 160 m and 240 m move in the opposite directions at 54 km/h and 72 km/h. How many seconds do they take to cross each other?",
    "options": [
      "13.43 seconds",
      "5.71 seconds",
      "22.86 seconds",
      "11.43 seconds"
    ],
    "answer": 3,
    "explanation": "Total length = 160+240 = 400 m. Relative speed = 54+72 = 126 km/h. Convert relative speed to m/s: 126/3.6 = 35 m/s. Time = 400 ÷ (126/3.6) = 11.4286 seconds."
  },
  {
    "id": "q120",
    "topic": "Trains",
    "difficulty": "Hard",
    "question": "Two trains of lengths 125 m and 175 m move in the same directions at 45 km/h and 27 km/h. How many seconds do they take to cross each other?",
    "options": [
      "62 seconds",
      "30 seconds",
      "60 seconds",
      "120 seconds"
    ],
    "answer": 2,
    "explanation": "Total length = 125+175 = 300 m. Relative speed = |45−27| = 18 km/h. Convert relative speed to m/s: 18/3.6 = 5 m/s. Time = 300 ÷ (18/3.6) = 60 seconds."
  },
  {
    "id": "q121",
    "topic": "Boats and Streams",
    "difficulty": "Easy",
    "question": "A boat moves at 10 km/h in still water and the stream flows at 2 km/h. What is the downstream speed?",
    "options": [
      "6 km/h",
      "12 km/h",
      "14 km/h",
      "24 km/h"
    ],
    "answer": 1,
    "explanation": "Downstream speed = boat speed + stream speed = 10+2 = 12 km/h."
  },
  {
    "id": "q122",
    "topic": "Boats and Streams",
    "difficulty": "Easy",
    "question": "A boat moves at 12 km/h in still water and the stream flows at 3 km/h. What is the downstream speed?",
    "options": [
      "15 km/h",
      "17 km/h",
      "7.5 km/h",
      "30 km/h"
    ],
    "answer": 0,
    "explanation": "Downstream speed = boat speed + stream speed = 12+3 = 15 km/h."
  },
  {
    "id": "q123",
    "topic": "Boats and Streams",
    "difficulty": "Easy",
    "question": "A boat moves at 15 km/h in still water and the stream flows at 4 km/h. What is the downstream speed?",
    "options": [
      "38 km/h",
      "19 km/h",
      "9.5 km/h",
      "21 km/h"
    ],
    "answer": 1,
    "explanation": "Downstream speed = boat speed + stream speed = 15+4 = 19 km/h."
  },
  {
    "id": "q124",
    "topic": "Boats and Streams",
    "difficulty": "Easy",
    "question": "A boat moves at 18 km/h in still water and the stream flows at 5 km/h. What is the downstream speed?",
    "options": [
      "46 km/h",
      "25 km/h",
      "23 km/h",
      "11.5 km/h"
    ],
    "answer": 2,
    "explanation": "Downstream speed = boat speed + stream speed = 18+5 = 23 km/h."
  },
  {
    "id": "q125",
    "topic": "Boats and Streams",
    "difficulty": "Easy",
    "question": "A boat moves at 20 km/h in still water and the stream flows at 4 km/h. What is the downstream speed?",
    "options": [
      "12 km/h",
      "48 km/h",
      "24 km/h",
      "26 km/h"
    ],
    "answer": 2,
    "explanation": "Downstream speed = boat speed + stream speed = 20+4 = 24 km/h."
  },
  {
    "id": "q126",
    "topic": "Boats and Streams",
    "difficulty": "Easy",
    "question": "A boat speed in still water is 12 km/h and stream speed is 2 km/h. What is the upstream speed?",
    "options": [
      "5 km/h",
      "12 km/h",
      "10 km/h",
      "20 km/h"
    ],
    "answer": 2,
    "explanation": "Upstream speed = boat speed − stream speed = 12−2 = 10 km/h."
  },
  {
    "id": "q127",
    "topic": "Boats and Streams",
    "difficulty": "Easy",
    "question": "A boat speed in still water is 15 km/h and stream speed is 3 km/h. What is the upstream speed?",
    "options": [
      "14 km/h",
      "12 km/h",
      "24 km/h",
      "6 km/h"
    ],
    "answer": 1,
    "explanation": "Upstream speed = boat speed − stream speed = 15−3 = 12 km/h."
  },
  {
    "id": "q128",
    "topic": "Boats and Streams",
    "difficulty": "Easy",
    "question": "A boat speed in still water is 18 km/h and stream speed is 4 km/h. What is the upstream speed?",
    "options": [
      "16 km/h",
      "7 km/h",
      "14 km/h",
      "28 km/h"
    ],
    "answer": 2,
    "explanation": "Upstream speed = boat speed − stream speed = 18−4 = 14 km/h."
  },
  {
    "id": "q129",
    "topic": "Boats and Streams",
    "difficulty": "Medium",
    "question": "A boat speed in still water is 20 km/h and stream speed is 5 km/h. What is the upstream speed?",
    "options": [
      "15 km/h",
      "7.5 km/h",
      "30 km/h",
      "17 km/h"
    ],
    "answer": 0,
    "explanation": "Upstream speed = boat speed − stream speed = 20−5 = 15 km/h."
  },
  {
    "id": "q130",
    "topic": "Boats and Streams",
    "difficulty": "Medium",
    "question": "A boat speed in still water is 25 km/h and stream speed is 7 km/h. What is the upstream speed?",
    "options": [
      "20 km/h",
      "9 km/h",
      "36 km/h",
      "18 km/h"
    ],
    "answer": 3,
    "explanation": "Upstream speed = boat speed − stream speed = 25−7 = 18 km/h."
  },
  {
    "id": "q131",
    "topic": "Boats and Streams",
    "difficulty": "Medium",
    "question": "A boat travels downstream at 18 km/h and upstream at 10 km/h. What is the speed of the stream?",
    "options": [
      "4 km/h",
      "8 km/h",
      "2 km/h",
      "6 km/h"
    ],
    "answer": 0,
    "explanation": "Stream speed = (downstream − upstream) ÷ 2 = (18−10) ÷ 2 = 4 km/h."
  },
  {
    "id": "q132",
    "topic": "Boats and Streams",
    "difficulty": "Medium",
    "question": "A boat travels downstream at 20 km/h and upstream at 12 km/h. What is the speed of the stream?",
    "options": [
      "2 km/h",
      "8 km/h",
      "6 km/h",
      "4 km/h"
    ],
    "answer": 3,
    "explanation": "Stream speed = (downstream − upstream) ÷ 2 = (20−12) ÷ 2 = 4 km/h."
  },
  {
    "id": "q133",
    "topic": "Boats and Streams",
    "difficulty": "Medium",
    "question": "A boat travels downstream at 24 km/h and upstream at 16 km/h. What is the speed of the stream?",
    "options": [
      "4 km/h",
      "6 km/h",
      "2 km/h",
      "8 km/h"
    ],
    "answer": 0,
    "explanation": "Stream speed = (downstream − upstream) ÷ 2 = (24−16) ÷ 2 = 4 km/h."
  },
  {
    "id": "q134",
    "topic": "Boats and Streams",
    "difficulty": "Medium",
    "question": "A boat travels downstream at 15 km/h and upstream at 9 km/h. What is the speed of the stream?",
    "options": [
      "1.5 km/h",
      "6 km/h",
      "5 km/h",
      "3 km/h"
    ],
    "answer": 3,
    "explanation": "Stream speed = (downstream − upstream) ÷ 2 = (15−9) ÷ 2 = 3 km/h."
  },
  {
    "id": "q135",
    "topic": "Boats and Streams",
    "difficulty": "Medium",
    "question": "A boat travels downstream at 28 km/h and upstream at 20 km/h. What is the speed of the stream?",
    "options": [
      "4 km/h",
      "8 km/h",
      "6 km/h",
      "2 km/h"
    ],
    "answer": 0,
    "explanation": "Stream speed = (downstream − upstream) ÷ 2 = (28−20) ÷ 2 = 4 km/h."
  },
  {
    "id": "q136",
    "topic": "Boats and Streams",
    "difficulty": "Hard",
    "question": "A boat travels 48 km downstream. Its still-water speed is 12 km/h and stream speed is 3 km/h. How long does the trip take?",
    "options": [
      "6.4 hours",
      "3.2 hours",
      "1.6 hours",
      "5.2 hours"
    ],
    "answer": 1,
    "explanation": "Downstream speed = 12 + 3 = 15 km/h. Time = distance ÷ speed = 48 ÷ 15 = 3.2 hours."
  },
  {
    "id": "q137",
    "topic": "Boats and Streams",
    "difficulty": "Hard",
    "question": "A boat travels 36 km upstream. Its still-water speed is 15 km/h and stream speed is 3 km/h. How long does the trip take?",
    "options": [
      "6 hours",
      "3 hours",
      "1.5 hours",
      "5 hours"
    ],
    "answer": 1,
    "explanation": "Upstream speed = 15 − 3 = 12 km/h. Time = distance ÷ speed = 36 ÷ 12 = 3 hours."
  },
  {
    "id": "q138",
    "topic": "Boats and Streams",
    "difficulty": "Hard",
    "question": "A boat travels 60 km downstream. Its still-water speed is 18 km/h and stream speed is 3 km/h. How long does the trip take?",
    "options": [
      "4.86 hours",
      "5.71 hours",
      "2.86 hours",
      "1.43 hours"
    ],
    "answer": 2,
    "explanation": "Downstream speed = 18 + 3 = 21 km/h. Time = distance ÷ speed = 60 ÷ 21 = 2.85714 hours."
  },
  {
    "id": "q139",
    "topic": "Boats and Streams",
    "difficulty": "Hard",
    "question": "A boat travels 42 km upstream. Its still-water speed is 16 km/h and stream speed is 2 km/h. How long does the trip take?",
    "options": [
      "6 hours",
      "5 hours",
      "1.5 hours",
      "3 hours"
    ],
    "answer": 3,
    "explanation": "Upstream speed = 16 − 2 = 14 km/h. Time = distance ÷ speed = 42 ÷ 14 = 3 hours."
  },
  {
    "id": "q140",
    "topic": "Boats and Streams",
    "difficulty": "Hard",
    "question": "A boat travels 72 km downstream. Its still-water speed is 20 km/h and stream speed is 4 km/h. How long does the trip take?",
    "options": [
      "5 hours",
      "3 hours",
      "6 hours",
      "1.5 hours"
    ],
    "answer": 1,
    "explanation": "Downstream speed = 20 + 4 = 24 km/h. Time = distance ÷ speed = 72 ÷ 24 = 3 hours."
  }
];
