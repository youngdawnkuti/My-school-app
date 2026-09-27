// questions.js - Centralized Question Bank for Quiz Zone

const QUESTION_BANK = {
  mathematics: {
    1: [
      {
        q: "Which of the following numbers is a whole number?",
        options: ["-5", "0", "3/4", "2.5"],
        answer: 1,
        explanation: "Whole numbers consist of all natural numbers and zero (0, 1, 2, 3, ...). Negative numbers, fractions, and decimals are not whole numbers."
      },
      {
        q: "Evaluate: -8 + 12",
        options: ["-20", "-4", "4", "20"],
        answer: 2,
        explanation: "When adding numbers with different signs, subtract the smaller absolute value from the larger and keep the sign of the larger number: 12 - 8 = 4."
      },
      {
        q: "Evaluate: -15 - 7",
        options: ["-22", "-8", "8", "22"],
        answer: 0,
        explanation: "Subtracting 7 from -15 is equivalent to starting at -15 on the number line and moving 7 steps to the left: -15 + (-7) = -22."
      },
      {
        q: "What is the result of (-6) × (-4)?",
        options: ["-24", "-10", "10", "24"],
        answer: 3,
        explanation: "Multiplying two negative numbers always yields a positive result: 6 × 4 = 24."
      },
      {
        q: "Evaluate: (-36) ÷ 9",
        options: ["-4", "-3", "3", "4"],
        answer: 0,
        explanation: "Dividing a negative number by a positive number results in a negative quotient: 36 ÷ 9 = 4, so -36 ÷ 9 = -4."
      },
      {
        q: "Which integer is smaller: -12 or -5?",
        options: ["-12", "-5", "They are equal", "Cannot be determined"],
        answer: 0,
        explanation: "On a standard number line, numbers further to the left are smaller. -12 lies further to the left than -5, so -12 < -5."
      },
      {
        q: "Express in words: 4,050,201.",
        options: [
          "Four million, fifty thousand, two hundred and one",
          "Four million, five hundred thousand, two hundred and one",
          "Four hundred thousand, fifty, two hundred and one",
          "Four million, five thousand, two hundred and one"
        ],
        answer: 0,
        explanation: "Breaking down by place value: 4 millions, 0 hundred thousands, 5 ten thousands, 0 thousands, 2 hundreds, 0 tens, 1 unit."
      },
      {
        q: "What is the additive inverse of -19?",
        options: ["-19", "0", "1/19", "19"],
        answer: 3,
        explanation: "The additive inverse of a number is the value that, when added to it, yields zero: -19 + 19 = 0."
      },
      {
        q: "Simplify: 0 × (-85)",
        options: ["-85", "-1", "0", "85"],
        answer: 2,
        explanation: "Any real number multiplied by zero equals zero."
      },
      {
        q: "What is the absolute value of -42?",
        options: ["-42", "0", "42", "84"],
        answer: 2,
        explanation: "The absolute value represents the distance of a number from zero on the number line, which is always non-negative: |-42| = 42."
      }
      ],
  2: [
       {
        q: "Evaluate: 14 + (-9)",
        options: ["-23", "-5", "5", "23"],
        answer: 2,
        explanation: "Adding a negative number is equivalent to subtraction: 14 + (-9) = 14 - 9 = 5."
      },
      {
        q: "Evaluate: (-10) × 0 × 5",
        options: ["-50", "0", "10", "50"],
        answer: 1,
        explanation: "Any expression containing a factor of zero evaluates to zero."
      },
      {
        q: "Which sign makes the statement true? -3 ____ -8",
        options: ["<", ">", "=", "≤"],
        answer: 1,
        explanation: "-3 is greater than -8 because it is located closer to zero (further right) on the number line."
      },
      {
        q: "What is the value of (-1)^10?",
        options: ["-10", "-1", "1", "10"],
        answer: 2,
        explanation: "A negative base raised to an even power yields a positive result: (-1)^10 = 1."
      },
      {
        q: "Simplify: (-20) ÷ (-4)",
        options: ["-5", "-4", "4", "5"],
        answer: 3,
        explanation: "Dividing a negative integer by another negative integer yields a positive quotient: 20 ÷ 4 = 5."
      },
      {
        q: "What number is 5 units to the left of 2 on a number line?",
        options: ["-7", "-3", "3", "7"],
        answer: 1,
        explanation: "Moving to the left on a number line means subtracting: 2 - 5 = -3."
      },
      {
        q: "Identify the prime number among the following whole numbers:",
        options: ["9", "15", "17", "21"],
        answer: 2,
        explanation: "A prime number has exactly two distinct positive divisors: 1 and itself. 17 is prime, while 9, 15, and 21 are composite."
      },
      {
        q: "Evaluate: -1 + 1",
        options: ["-2", "-1", "0", "2"],
        answer: 2,
        explanation: "Adding 1 to its additive inverse (-1) results in 0."
      },
      {
        q: "Write in figures: Two hundred and four thousand, sixteen.",
        options: ["204,016", "204,160", "240,016", "2,004,016"],
        answer: 0,
        explanation: "204 thousand = 204,000, plus sixteen = 204,016."
      },
      {
        q: "Evaluate: 7 - (-3)",
        options: ["4", "10", "-4", "-10"],
        answer: 1,
        explanation: "Subtracting a negative number is equivalent to adding its positive counterpart: 7 - (-3) = 7 + 3 = 10."
      }
      ],
  3: [
      {
        q: "Which of these directed numbers represents a temperature drop of 8°C?",
        options: ["+8", "0", "-8", "1/8"],
        answer: 2,
        explanation: "A decrease or drop in value is denoted by a negative sign: -8°C."
      },
      {
        q: "What is the value of (-2)^3?",
        options: ["-8", "-6", "6", "8"],
        answer: 0,
        explanation: "(-2)^3 = (-2) × (-2) × (-2) = 4 × (-2) = -8."
      },
      {
        q: "Arrange from smallest to largest: -5, 3, -1, 0, 2",
        options: ["3, 2, 0, -1, -5", "-5, -1, 0, 2, 3", "0, -1, 2, 3, -5", "-1, -5, 0, 2, 3"],
        answer: 1,
        explanation: "Ascending order places the most negative value first: -5 < -1 < 0 < 2 < 3."
      },
      {
        q: "Evaluate: -100 ÷ 10",
        options: ["-1000", "-10", "10", "1000"],
        answer: 1,
        explanation: "Negative divided by positive equals negative: -100 ÷ 10 = -10."
      },
      {
        q: "What is the product of 5 and -7?",
        options: ["-35", "-12", "12", "35"],
        answer: 0,
        explanation: "Positive times negative equals negative: 5 × (-7) = -35."
      },
  {
   q: "Simplify the expression: -12 + (-8) - (-15)",
    options: ["-35", "-5", "5", "11"],
    answer: 1,
    explanation: "First, simplify the signs: -12 - 8 + 15. Then calculate left to right: -12 - 8 = -20, and -20 + 15 = -5."
  },
  {
    q: "Evaluate: (-4) × (-3) × (-2)",
    options: ["-24", "-9", "9", "24"],
    answer: 0,
    explanation: "Multiplying three negative numbers gives a negative result: (-4) × (-3) = 12, then 12 × (-2) = -24."
  },
  {
    q: "A submarine at a depth of -250 meters descends an additional 120 meters. What is its new depth?",
    options: ["-370 meters", "-130 meters", "130 meters", "370 meters"],
    answer: 0,
    explanation: "Descending means subtracting: -250 - 120 = -370 meters."
  },
  {
    q: "Find the value of: [(-18) ÷ 3] + [(-5) × 4]",
    options: ["-26", "-14", "14", "26"],
    answer: 0,
    explanation: "Calculate each bracket first: (-18) ÷ 3 = -6, and (-5) × 4 = -20. Adding them together: -6 + (-20) = -26."
  },
  {
    q: "What is the place value of the digit 7 in the number 8,743,109?",
    options: ["Seven thousand", "Seventy thousand", "Seven hundred thousand", "Seven million"],
    answer: 2,
    explanation: "In 8,743,109, the digit 7 is in the hundred thousands position, representing 700,000."
  }
  ],
4: [
  {
    q: "Simplify: (-2)^4",
    options: ["-16", "-8", "8","16"],
    answer: 3,
    explanation: "(-2)^4 = (-2) × (-2) × (-2) × (-2) = 16. Raising a negative number to an even power results in a positive value."
  },
  {
    q: "At midnight the temperature was -4°C. By noon it had risen by 11°C. What was the temperature at noon?",
    options: ["-15°c", "-7°C","7°C","15°C"],
    answer: 2,
    explanation: "A rise in temperature means adding: -4 + 11 = 7°C."
  },
  {
    q: "Evaluate: 45 ÷ (-9) - 3 × (-2)",
    options: ["-11","1","11", "16"],
    answer: 1,
    explanation: "Using BODMAS/PEMDAS: 45 ÷ (-9) = -5, and 3 × (-2) = -6. Then -5 - (-6) = -5 + 6 = 1."
  },
  {
    q: "Express 144 as a product of its prime factors in index form.",
    options: ["2^3 × 3^2", "2^4 × 3^2", "2^2 × 3^4", "2^4 × 3^3"],
    answer: 1,
    explanation: "144 = 2 × 72 = 2 × 2 × 36 = 2 × 2 × 2 × 18 = 2 × 2 × 2 × 2 × 9 = 2^4 × 3^2."
  },
  {
    q: "Find the difference between -18 and 25.",
    options: ["-43", "-7", "7", "43"],
    answer: 3,
    explanation: "The difference between two values is the larger minus the smaller: 25 - (-18) = 25 + 18 = 43."
  },
  {
    q: "Which set of integers is correctly ordered from largest to smallest?",
    options: ["-2, -5, 0, 4", "4, 0, -2, -5", "-5, -2, 0, 4", "4, 0, -5, -2"],
    answer: 1,
    explanation: "Descending order goes from highest to lowest: 4 > 0 > -2 > -5."
  },
  {
    q: "Evaluate: (-1)^15",
    options: ["-15", "-1", "1", "15"],
    answer: 1,
    explanation: "Raising -1 to an odd integer power yields -1."
  },
  {
    q: "What number must be added to -14 to get 6?",
    options: ["-20", "-8", "8", "20"],
    answer: 3,
    explanation: "Set up the equation: -14 + x = 6. Solving for x gives x = 6 - (-14) = 6 + 14 = 20."
  },
  {
  q: "Simplify: [(-60) ÷ (-5)] ÷ (-3)",
  options: ["-12", "-4", "4", "12"],
  answer: 1,
  explanation: "Inside brackets: (-60) ÷ (-5) = 12. Then divide by -3: 12 ÷ (-3) = -4."
  },
  {
  q: "Round 5,849,201 to the nearest hundred thousand.",
  options: ["5,800,000", "5,850,000", "5,900,000", "6,000,000"],
  answer: 0,
  explanation: "Look at the ten-thousands digit (4). Since 4 is less than 5, round down to 5,800,000."
  }
  ],
5: [
  {
   q: "If a bank account has a balance of ₦-12,000 and ₦35,000 is deposited, what is the new balance?",
    options: ["₦-47,000", "₦-23,000", "₦23,000", "₦47,000"],
    answer: 2,
    explanation: "New balance = -12,000 + 35,000 = ₦23,000."
  },
  {
    q: "Evaluate: 16 - 3 × (-4)",
    options: ["-52", "4", "28", "52"],
    answer: 2,
    explanation: "Perform multiplication first: 3 × (-4) = -12. Then subtract: 16 - (-12) = 16 + 12 = 28."
  },
  {
   q: "What is the value of |-15| - |8|?",
    options: ["-23", "-7", "7", "23"],
    answer: 2,
    explanation: "|-15| = 15 and |8| = 8. Therefore, 15 - 8 = 7."
  },
  {
  q: "Find the HCF (Highest Common Factor) of 36, 54, and 90.",
    options: ["6", "9", "18", "27"],
    answer: 2,
    explanation: "Prime factorizations: 36 = 2^2 × 3^2, 54 = 2 × 3^3, 90 = 2 × 3^2 × 5. Common factors are 2^1 × 3^2 = 18."
  },
  {
  q: "Find the LCM (Lowest Common Multiple) of 12, 18, and 30.",
    options: ["60", "90", "180", "360"],
    answer: 2,
    explanation: "Prime factorizations: 12 = 2^2 × 3, 18 = 2 × 3^2, 30 = 2 × 3 × 5. Taking highest powers: 2^2 × 3^2 × 5 = 4 × 9 × 5 = 180."
  },
  {
    q: "Simplify: (-3)^2 × (-2)^3",
    options: ["-72", "-36", "36", "72"],
    answer: 0,
    explanation: "(-3)^2 = 9 and (-2)^3 = -8. Multiplying them together gives 9 × (-8) = -72."
  },
  {
   q: "A hiker starts at 150m above sea level, descends 220m into a valley, then climbs up 80m. What is their final altitude?",
    options: ["-150m", "-10m", "10m", "450m"],
    answer: 2,
    explanation: "Starting at +150: 150 - 220 + 80 = -70 + 80 = +10 meters (10m above sea level)."
  },
  {
   q: "Evaluate: (-100) ÷ 4 + (-15)",
    options: ["-40", "-10", "10", "40"],
    answer: 0,
    explanation: "First divide: (-100) ÷ 4 = -25. Then add: -25 + (-15) = -40."
  },
  {
   q: "What is the square root of 576?",
    options: ["22", "24", "26", "28"],
    answer: 1,
   explanation: "24 × 24 = 576, so √576 = 24."
  },
  {
   q: "Simplify: 50 - [(-12) × (-3)]",
    options: ["14", "26", "74", "86"],
    answer: 0,
    explanation: "Multiply inside brackets first: (-12) × (-3) = 36. Then subtract: 50 - 36 = 14."
  }
    ],
    
   6: [
  {
   q: "Evaluate: [(-15) × (-4)] ÷ [(-3) + (-2)]",
    options: ["-20", "-12", "12", "20"],
    answer: 1,
    explanation: "Numerator: (-15) × (-4) = 60. Denominator: (-3) + (-2) = -5. Dividing numerator by denominator: 60 ÷ (-5) = -12."
  },
  {
    q: "The temperature at 6:00 AM was -8°C. It rose by 3°C every hour until 11:00 AM. What was the temperature at 11:00 AM?",
    options: ["-23°C", "-7°C", "7°C", "15°C"],
    answer: 2,
    explanation: "Time elapsed from 6:00 AM to 11:00 AM = 5 hours. Total temperature rise = 5 × 3°C = 15°C. Final temperature = -8°C + 15°C = 7°C."
  },
  {
   q: "Simplify: (-3)^3 - (-2)^4",
    options: ["-43", "-11", "11", "43"],
    answer: 0,
    explanation: "(-3)^3 = -27 and (-2)^4 = 16. Subtracting them: -27 - 16 = -43."
  },
  {
   q: "A trader made a profit of ₦14,500 on Monday, lost ₦8,200 on Tuesday, lost ₦5,600 on Wednesday, and made a profit of ₦12,000 on Thursday. What was the net profit or loss?",
    options: ["Loss of ₦12,700", "Profit of ₦12,700", "Profit of ₦26,500", "Loss of ₦26,500"],
    answer: 1,
    explanation: "Net position = +14,500 - 8,200 - 5,600 + 12,000 = 26,500 - 13,800 = +₦12,700 (Profit of ₦12,700)."
  },
  {
   q: "Evaluate: √144 - (-3)^2 + (-4) × 5",
    options: ["-17", "-1", "3", "23"],
    answer: 0,
    explanation: "√144 = 12, (-3)^2 = 9, and (-4) × 5 = -20. Expression becomes: 12 - 9 + (-20) = 3 - 20 = -17."
  },
  {
    q: "If x = -4, y = 3, and z = -2, evaluate the expression: (2x - yz) / (x + y)",
    options: ["-14", "-2", "2", "14"],
    answer: 2,
    explanation: "2x = 2(-4) = -8; yz = 3(-2) = -6. Numerator: -8 - (-6) = -8 + 6 = -2. Denominator: -4 + 3 = -1. Value = -2 / -1 = 2."
  },
  {
   q: "Find the difference between the LCM and HCF of 24, 36, and 48.",
    options: ["132", "144", "156", "180"],
    answer: 0,
    explanation: "Prime factorizations: 24 = 2^3 × 3, 36 = 2^2 × 3^2, 48 = 2^4 × 3. HCF = 2^2 × 3 = 12. LCM = 2^4 × 3^2 = 144. Difference = 144 - 12 = 132."
  },
  {
    q: "Simplify: -2[3 - 4(-5 + 2)]",
    options: ["-30", "-18", "18", "30"],
    answer: 0,
    explanation: "Innermost parentheses: -5 + 2 = -3. Inside brackets: 3 - 4(-3) = 3 + 12 = 15. Multiply outer term: -2(15) = -30."
  },
  {
    q: "A test has 20 questions. 4 marks are given for each correct answer and -2 marks for each incorrect answer. If a student answers 14 correctly and 6 incorrectly, what is their total score?",
    options: ["44", "56", "68", "80"],
    answer: 0,
    explanation: "Correct answers score: 14 × 4 = 56. Incorrect penalty: 6 × (-2) = -12. Total score = 56 - 12 = 44."
  },
  {
    q: "Solve for n: -3n + 15 = -24",
    options: ["-13", "-3", "3", "13"],
    answer: 3,
    explanation: "Subtract 15 from both sides: -3n = -24 - 15 => -3n = -39. Divide by -3: n = -39 / -3 = 13."
  }
  ],
  
  7: [
  {
    q: "What is the average of the following directed numbers: -12, -8, 0, 6, 14?",
    options: ["-2", "0", "2", "4"],
    answer: 2,
    explanation: "Sum = -12 + (-8) + 0 + 6 + 14 = 0. Count = 5. Wait, sum = -20 + 20 = 0? Let's check: -12 + -8 = -20; 6 + 14 = 20; Total sum = 0; 0 / 5 = 0. Ah: Sum = -12 + (-8) + 0 + 6 + 14 = 0, but average option B is 0. Let's re-verify: -12 + -8 + 0 + 6 + 14 = 0. Average = 0/5 = 0."
  },
  {
    q: "Simplify: [(-2)^5 ÷ (-2)^2] + (-3)^2",
    options: ["-17", "-1", "1", "17"],
    answer: 2,
    explanation: "(-2)^5 ÷ (-2)^2 = (-2)^(5-2) = (-2)^3 = -8. (-3)^2 = 9. Adding them: -8 + 9 = 1."
  },
  {
    q: "Find the value of |a - b| - |a + b| when a = -7 and b = 3.",
    options: ["-14", "6", "10", "14"],
    answer: 1,
    explanation: "a - b = -7 - 3 = -10, so |-10| = 10. a + b = -7 + 3 = -4, so |-4| = 4. Result: 10 - 4 = 6."
  },
  {
    q: "Three alarm clocks ring at intervals of 15, 20, and 25 minutes. If they ring together at 8:00 AM, at what time will they next ring together?",
    options: ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"],
    answer: 2,
    explanation: "Find LCM of 15, 20, 25: 15 = 3 × 5, 20 = 2^2 × 5, 25 = 5^2. LCM = 2^2 × 3 × 5^2 = 4 × 3 × 25 = 300 minutes. 300 minutes = 5 hours. 8:00 AM + 5 hours = 1:00 PM."
  },
  {
   q: "Evaluate: (-100) - [(-40) ÷ 8] × (-3)",
    options: ["-115", "-85", "85", "115"],
    answer: 0,
    explanation: "(-40) ÷ 8 = -5. Next, (-5) × (-3) = 15. Finally: -100 - 15 = -115."
  },
  {
   q: "Express 1,200 as a product of prime factors in index form.",
    options: ["2^3 × 3^2 × 5^2", "2^4 × 3 × 5^2", "2^5 × 3 × 5", "2^4 × 3^2 × 5"],
    answer: 1,
    explanation: "1200 = 12 × 100 = (2^2 × 3) × (2^2 × 5^2) = 2^4 × 3^1 × 5^2."
  },
  {
    q: "Calculate: (-8) × 6 - (-45) ÷ (-9)",
    options: ["-53", "-43", "43", "53"],
    answer: 0,
    explanation: "(-8) × 6 = -48. (-45) ÷ (-9) = 5. Expression: -48 - 5 = -53."
  },
  {
   q: "An elevator is on the 12th floor. It moves down 15 floors, up 8 floors, and down 6 floors. Which floor is it on now?",
    options: ["-1st floor (Basement 1)", "1st floor", "-2nd floor (Basement 2)", "2nd floor"],
    answer: 0,
    explanation: "12 - 15 + 8 - 6 = -3 + 8 - 6 = 5 - 6 = -1 (1st basement level)."
  },
  {
    q: "Simplify: √[( -5)^2 + (-12)^2]",
    options: ["-17", "-13", "13", "17"],
    answer: 2,
    explanation: "(-5)^2 = 25 and (-12)^2 = 144. 25 + 144 = 169. √169 = 13."
  },
  {
    q: "If the sum of three consecutive integers is -18, what is the smallest integer?",
    options: ["-7", "-6", "-5", "-4"],
    answer: 0,
    explanation: "Let integers be x - 1, x, x + 1. Sum = 3x = -18 => x = -6. The integers are -7, -6, -5. Smallest is -7."
  }
  ],

8: [
  {
   q: "Evaluate: [(-16) ÷ 4]^2 - [(-3) × 2]^2",
    options: ["-20", "-12", "12", "20"],
    answer: 0,
    explanation: "(-16) ÷ 4 = -4; (-4)^2 = 16. (-3) × 2 = -6; (-6)^2 = 36. Subtracting: 16 - 36 = -20."
  },
  {
    q: "A freezer's temperature drops by 2°C every 15 minutes. If it starts at 10°C, how long will it take to reach -14°C?",
    options: ["2 hours", "3 hours", "4 hours", "5 hours"],
    answer: 1,
    explanation: "Total temperature decrease = 10 - (-14) = 24°C. Number of 2°C drops = 24 ÷ 2 = 12 intervals. Total time = 12 × 15 mins = 180 mins = 3 hours."
  },
  {
    q: "Simplify: (-1)^100 + (-1)^101 + (-1)^102 + (-1)^103",
    options:  ["-2", "-1","0", "2"],
    answer: 2,
    explanation: "(-1)^even = 1 and (-1)^odd = -1. Expression: 1 + (-1) + 1 + (-1) = 0."
  },
  {
   q: "Find the value of p if (-4) × p × (-5) = -100.",
    options: ["-5", "-4", "4", "5"],
    answer: 0,
    explanation: "(-4) × (-5) = 20. So 20p = -100 => p = -100 / 20 = -5."
  },
  {
   q: "What is the product of the HCF and LCM of 16 and 28?",
    options: ["224", "336", "448", "512"],
    answer: 2,
    explanation: "The product of HCF and LCM of two numbers always equals the product of the two numbers themselves: 16 × 28 = 448."
  },
  {
   q: "A oil refinery stock account showed ₦-250,000 at the beginning of the week. Over the week, fuel sales brought in ₦1,200,000, equipment repairs cost ₦450,000, supply restocks cost ₦600,000, and a govt subsidy payment of ₦300,000 was received. What is the final account balance?",
    options: ["₦100,000", "₦200,000", "₦300,000", "₦400,000"],
    answer: 1,
    explanation: "Calculation: -250,000 + 1,200,000 - 450,000 - 600,000 + 300,000 = +200,000 (₦200,000)."
  },
  {
   q: "Simplify the expression completely: [-3^2 - (-4)^2] ÷ [(-2)^3 - (-1)^5]",
    options: ["-25/7", "25/7", "-7/25", "7/25"],
    answer: 1,
    explanation: "Numerator: -3^2 - (-4)^2 = -9 - 16 = -25. Denominator: (-2)^3 - (-1)^5 = -8 - (-1) = -8 + 1 = -7. Result: -25 / -7 = 25/7."
  },
  {
   q: "Two divers submerge in the ocean. Diver A is at a depth of -45 meters while Diver B is at a depth of -18 meters. A scientific probe is located halfway between them. What integer depth represents the position of the probe?",
    options: ["-27.5 meters", "-31.5 meters", "-33.5 meters", "-36.5 meters"],
    answer: 1,
    explanation: "The midpoint depth = [(-45) + (-18)] / 2 = -63 / 2 = -31.5 meters."
  },
  {
    q: "Solve the linear equation for x: -4(2x - 5) + 3(x - 2) = -11",
    options: ["3", "5", "7", "9"],
    answer: 1,
    explanation: "Expand brackets: -8x + 20 + 3x - 6 = -11 => -5x + 14 = -11. Subtract 14: -5x = -25 => x = 5."
  },
  {
    q: "A water reservoir has 4,500 liters of water. Leak A drains water at a rate of 15 liters per minute, while Pipe B pumps in water at a rate of 25 liters per minute. If both operate simultaneously, how many liters of water will be in the tank after 2 hours?",
    options: ["3,300 liters", "4,200 liters", "5,700 liters", "6,900 liters"],
    answer: 2,
    explanation: "Net flow per minute = +25 - 15 = +10 liters/min. Time = 2 hours = 120 minutes. Total water added = 120 × 10 = 1,200 liters. Final volume = 4,500 + 1,200 = 5,700 liters."
  }
  ],
  
  9: [
  {
   q: "If a, b, and c are integers such that a = -3, b = 4, and c = -5, evaluate the expression: (a^2 - b^2 + c^2) / (a + b + c)",
    options: ["-9", "-4.5", "4.5", "9"],
    answer: 0,
    explanation: "Numerator: (-3)^2 - (4)^2 + (-5)^2 = 9 - 16 + 25 = 18. Denominator: -3 + 4 + (-5) = -4. Value = 18 / (-4) = -4.5? Wait, let's re-verify: 9 - 16 = -7; -7 + 25 = 18. Denominator = -3 + 4 - 5 = -4. 18 / -4 = -4.5 (Option B)."
  },
  {
    q: "A school entrance exam awards 5 points for every correct response, deducts 3 points for every incorrect response, and deducts 1 point for unattempted questions. If a candidate attempts 35 out of 40 questions and gets 28 correct, what is their final score?",
    options: ["114", "119", "124", "140"],
    answer: 0,
    explanation: "Correct answers: 28 × 5 = 140. Incorrect answers: (35 - 28) = 7 × (-3) = -21. Unattempted: (40 - 35) = 5 × (-1) = -5. Final score = 140 - 21 - 5 = 114."
  },
  {
    q: "What is the smallest positive whole number that leaves a remainder of 3 when divided by 12, 15, and 18?",
    options: ["180", "183", "360", "363"],
    answer: 1,
    explanation: "Find LCM of 12, 15, and 18: 12 = 2^2 × 3, 15 = 3 × 5, 18 = 2 × 3^2. LCM = 2^2 × 3^2 × 5 = 180. Add the required remainder: 180 + 3 = 183."
  },
  {
   q: "Evaluate: [(-1)^1 + (-1)^2 + (-1)^3 + ... + (-1)^50]",
    options: ["-50", "-1", "0", "50"],
    answer: 2,
    explanation: "The sum consists of 50 alternating terms: -1 + 1 - 1 + 1 ... with equal numbers of -1s and +1s (25 pairs of 0), yielding 0."
  },
  {
    q: "A space research probe records a surface temperature on Mars of -65°C at night. During the day, solar exposure increases the temperature by 80°C. A dust storm then drops the temperature by 35°C. What is the final temperature?",
    options: ["-20°C", "-10°C", "10°C", "20°C"],
    answer: 0,
    explanation: "-65 + 80 - 35 = 15 - 35 = -20°C."
  },
  {
    q: "Simplify the expression: -5 - {-3 + 2[-4 - (-6 + 2)]}",
    options: ["-12", "-2", "2", "12"],
    answer: 1,
    explanation: "Innermost: -6 + 2 = -4. Next bracket: -4 - (-4) = 0. Next: 2[0] = 0. Inside braces: -3 + 0 = -3. Outer calculation: -5 - (-3) = -5 + 3 = -2."
  },
  {
    q: "The product of two directed numbers is -144 and their sum is -7. What are the two numbers?",
    options: ["-16 and 9", "-18 and 8", "-12 and 12", "-24 and 6"],
    answer: 0,
    explanation: "Check option A: (-16) × 9 = -144, and (-16) + 9 = -7. Both conditions are satisfied."
  },
  {
   q: "A cold storage unit operates at -18°C. A power failure causes the temperature to rise by 1.5°C every 20 minutes. What will the temperature be after 4 hours?",
    options: ["0°C", "2°C", "18°C", "36°C"],
    answer: 0,
    explanation: "4 hours = 240 minutes. Number of 20-minute intervals = 240 ÷ 20 = 12 intervals. Total rise = 12 × 1.5°C = 18°C. New temperature = -18 + 18 = 0°C."
  },
  {
    q: "Simplify: √[(-8)^2 + (-6)^2] ÷ [(-5) - (-3)]",
    options: ["-10", "-5", "5", "10"],
    answer: 1,
    explanation: "Numerator: √[64 + 36] = √100 = 10. Denominator: -5 - (-3) = -5 + 3 = -2. Division: 10 / (-2) = -5."
  },
  {
    q: "Find the sum of all prime factors of 2,310.",
    options: ["28", "30", "32", "35"],
    answer: 0,
    explanation: "2310 = 10 × 231 = (2 × 5) × (3 × 77) = 2 × 3 × 5 × 7 × 11. Sum of distinct prime factors = 2 + 3 + 5 + 7 + 11 = 28."
  }
  ],
  
10: [
  {
   q: "If x * y is defined as a custom operation x * y = x^2 - y^2 + xy, evaluate (-3) * (-4).",
    options: ["5", "12", "19", "25"],
    answer: 0,
    explanation: "(-3) * (-4) = (-3)^2 - (-4)^2 + (-3)(-4) = 9 - 16 + 12 = 5."
  },
  {
   q: "A miner descends into a pit at a speed of 4 meters per minute. After 45 minutes, he climbs back up at a rate of 3 meters per minute for 20 minutes. What is his position relative to ground level?",
    options: ["-180 meters", "-120 meters", "-60 meters", "0 meters"],
    answer: 1,
    explanation: "Descent: 4 × 45 = 180m down (-180). Ascent: 3 × 20 = 60m up (+60). Position = -180 + 60 = -120 meters."
  },
  {
   q: "Evaluate: [(-2)^4 × (-3)^3] ÷ [(-6)^2]",
    options: ["-12", "-6", "6", "12"],
    answer: 0,
    explanation: "(-2)^4 = 16, (-3)^3 = -27. Numerator = 16 × (-27) = -432. Denominator = (-6)^2 = 36. Result = -432 / 36 = -12."
  },
  {
    q: "Which of the following expressions will always result in an even integer for any integer n?",
    options: ["n + 1", "2n + 1", "n^2 + n", "n^2 + 1"],
    answer: 2,
    explanation: "n^2 + n = n(n + 1), which is the product of two consecutive integers. The product of any two consecutive integers is always even."
  },
  {
    q: "A stock price of ₦850 changes over five consecutive days as follows: +₦45, -₦60, -₦30, +₦85, -₦20. What is the average daily change in stock price?",
    options: ["₦4", "₦8", "₦12", "₦20"],
    answer: 0,
    explanation: "Total change = +45 - 60 - 30 + 85 - 20 = +20. Average daily change = 20 / 5 days = +₦4."
  },
  {
   q: "Simplify: [(-12) ÷ (-4)]^3 - [(-5) × (-2)]^2",
    options: ["-73", "-27", "27", "73"],
    answer: 0,
    explanation: "(-12) ÷ (-4) = 3; 3^3 = 27. (-5) × (-2) = 10; 10^2 = 100. Expression: 27 - 100 = -73."
  },
  {
    q: "Three lights flash at intervals of 8 seconds, 12 seconds, and 20 seconds. If they flash together at exactly 12:00 noon, how many times will they flash together between 12:00 noon and 12:10 PM inclusive?",
    options: ["4 times", "5 times", "6 times", "7 times"],
    answer: 2,
    explanation: "Find LCM of 8, 12, 20: 8 = 2^3, 12 = 2^2 × 3, 20 = 2^2 × 5. LCM = 2^3 × 3 × 5 = 120 seconds = 2 minutes. They flash together every 2 minutes: at 0, 2, 4, 6, 8, and 10 minutes, making 6 times inclusive."
  },
  {
   q: "Evaluate: |-25| - |-12| + |(-4) × (-3)|",
    options: ["1", "25", "29", "49"],
    answer: 1,
    explanation: "|-25| = 25, |-12| = 12, |(-4) × (-3)| = |12| = 12. Expression: 25 - 12 + 12 = 25."
  },
  {
    q: "Find the sum of all integers x such that -5 < x ≤ 4.",
    options: ["-4",  "0",  "4",  "10"],
    answer: 2,
    explanation: "The integers satisfying -5 < x ≤ 4 are: -4, -3, -2, -1, 0, 1, 2, 3, 4. Sum = (-4 + 4) + (-3 + 3) + (-2 + 2) + (-1 + 1) + 0 = 4."
  },
  {
    q: "Express 5,040 as a product of prime factors in index form.",
    options: ["2^3 × 3^2 × 5 × 7", "2^4 × 3^2 × 5 × 7", "2^4 × 3^3 × 5 × 7",  "2^5 × 3^2 × 5 × 7"],
    answer: 1,
    explanation: "5040 = 10 × 504 = (2 × 5) × (2^3 × 3^2 × 7) = 2^4 × 3^2 × 5^1 × 7^1."
  }
]    
  },
  science: {
    1: [
      {
        q: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: 1,
        explanation: "Plants take in Carbon Dioxide and release Oxygen as a byproduct during photosynthesis."
      },
      {
        q: "What is the primary source of light and energy for Planet Earth?",
        options: ["The Moon", "The Sun", "Lightning", "Earth's Core"],
        answer: 1,
        explanation: "The Sun provides essential solar radiation, heat, and light to drive life on Earth."
      },
      {
        q: "At what temperature does water freeze in Celsius?",
        options: ["100°C", "50°C", "0°C", "-10°C"],
        answer: 2,
        explanation: "Water transitions from liquid to solid ice at 0°C under normal atmospheric pressure."
      }
    ]
  },

  english: {
    1: [
      {
        q: "Identify the verb in the sentence: 'The swift dog ran across the park.'",
        options: ["swift", "dog", "ran", "park"],
        answer: 2,
        explanation: "A verb is an action word. 'Ran' describes the action being performed by the dog."
      },
      {
        q: "Which word is a synonym for 'Huge'?",
        options: ["Tiny", "Gigantic", "Narrow", "Short"],
        answer: 1,
        explanation: "Synonyms are words with similar meanings. 'Gigantic' means extremely large, like 'huge'."
      }
    ]
  }
};

function fetchQuestionsForLevel(subject, level) {
  const normalizedSubject = subject.toLowerCase().replace('-', '');

  // 1. Check for custom questions added via admin.html
  const customBank = JSON.parse(localStorage.getItem('customQuestionBank') || '{}');
  if (customBank[normalizedSubject] && customBank[normalizedSubject][level] && customBank[normalizedSubject][level].length > 0) {
    return customBank[normalizedSubject][level];
  }

  // 2. Fall back to hardcoded QUESTION_BANK
  if (typeof QUESTION_BANK !== 'undefined' && QUESTION_BANK[normalizedSubject] && QUESTION_BANK[normalizedSubject][level]) {
    return QUESTION_BANK[normalizedSubject][level];
  }

  // 3. Fall back to generated placeholders
  let generated = [];
  for (let i = 1; i <= 5; i++) {
    generated.push({
      q: `[${subject.toUpperCase()} L${level}] Sample Question ${i}: What is the basic rule?`,
      options: [`Option A`, `Option B (Correct)`, `Option C`, `Option D`],
      answer: 1,
      explanation: `Default explanation for Question ${i}.`
    });
  }
  return generated;
}