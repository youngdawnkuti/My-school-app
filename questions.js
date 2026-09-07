
const QUESTION_BANK = {
  mathematics: {
    1: [
      {
        q: "What is 15 + 27?",
        options: ["32", "42", "41", "52"],
        answer: 1,
        explanation: "Breaking it down: 10 + 20 = 30, and 5 + 7 = 12. Adding 30 + 12 gives 42."
      },
      {
        q: "What is 8 × 7?",
        options: ["48", "54", "56", "64"],
        answer: 2,
        explanation: "Multiplying 8 by 7 results in 56."
      },
      {
        q: "Which number is an even number?",
        options: ["13", "21", "34", "45"],
        answer: 2,
        explanation: "An even number ends in 0, 2, 4, 6, or 8. 34 ends in 4, making it even."
      },
      {
        q: "What is 100 − 43?",
        options: ["57", "63", "53", "67"],
        answer: 0,
        explanation: "Subtracting 40 from 100 gives 60, and subtracting 3 more leaves 57."
      },
      {
        q: "What is half of 84?",
        options: ["42", "44", "40", "38"],
        answer: 0,
        explanation: "Dividing 80 by 2 gives 40, and 4 divided by 2 is 2. Combined, 40 + 2 = 42."
      }
    ],
    2: [
      {
        q: "Solve for x: x + 12 = 30",
        options: ["18", "42", "15", "20"],
        answer: 0,
        explanation: "Subtract 12 from both sides: x = 30 - 12, so x = 18."
      },
      {
        q: "What is the perimeter of a square with a side length of 6 cm?",
        options: ["12 cm", "24 cm", "36 cm", "18 cm"],
        answer: 1,
        explanation: "A square has 4 equal sides. Perimeter = 4 × 6 cm = 24 cm."
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
