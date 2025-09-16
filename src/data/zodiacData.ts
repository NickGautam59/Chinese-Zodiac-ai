import { ZodiacSign } from '../types/zodiac';

export const zodiacData: ZodiacSign[] = [
  {
    name: "Rat",
    emoji: "🐭",
    element: "Water",
    yinYang: "Yang",
    years: "1900, 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032",
    description: "Rats are known for their intelligence, adaptability, and charm. They are natural leaders who possess excellent problem-solving skills and strong intuition. Quick-witted and resourceful, Rats can thrive in almost any environment.",
    traits: {
      positive: ["Intelligent", "Adaptable", "Charming", "Resourceful", "Quick-witted", "Ambitious"],
      negative: ["Manipulative", "Opportunistic", "Restless", "Scheming", "Overly critical", "Greedy"]
    },
    luckyColors: ["Blue", "Gold", "Green"],
    luckyNumbers: [2, 3],
    compatibility: ["Dragon", "Monkey", "Ox"],
    recommendedVehicles: ["Tesla Model S", "BMW i8", "Audi A8", "Smart Car", "Electric Scooter"],
    favorableCities: ["New York", "Tokyo", "Singapore", "Hong Kong", "London"],
    bestMonths: ["February", "May", "August", "November"]
  },
  {
    name: "Ox",
    emoji: "🐂",
    element: "Earth",
    yinYang: "Yin",
    years: "1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033",
    description: "Oxen are reliable, strong, and determined individuals who value tradition and stability. They are hardworking and methodical, preferring to take their time to ensure quality results. Patient and persistent, they make excellent leaders.",
    traits: {
      positive: ["Reliable", "Determined", "Strong", "Patient", "Methodical", "Honest"],
      negative: ["Stubborn", "Narrow-minded", "Materialistic", "Demanding", "Inflexible", "Pessimistic"]
    },
    luckyColors: ["Red", "Blue", "Purple"],
    luckyNumbers: [1, 9],
    compatibility: ["Snake", "Rooster", "Rat"],
    recommendedVehicles: ["Ford F-150", "Land Rover Defender", "Mercedes G-Wagon", "Toyota Land Cruiser", "Jeep Wrangler"],
    favorableCities: ["Chicago", "Munich", "Zurich", "Melbourne", "Vancouver"],
    bestMonths: ["April", "July", "October", "January"]
  },
  {
    name: "Tiger",
    emoji: "🐅",
    element: "Wood",
    yinYang: "Yang",
    years: "1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034",
    description: "Tigers are brave, confident, and competitive individuals who love challenges and adventures. They are natural born leaders with strong personalities and magnetic charisma. Independent and passionate, they inspire others to follow their lead.",
    traits: {
      positive: ["Brave", "Confident", "Competitive", "Charismatic", "Independent", "Passionate"],
      negative: ["Impulsive", "Rebellious", "Unpredictable", "Short-tempered", "Reckless", "Disobedient"]
    },
    luckyColors: ["Orange", "Gray", "White"],
    luckyNumbers: [1, 3, 4],
    compatibility: ["Horse", "Dog", "Pig"],
    recommendedVehicles: ["Lamborghini Aventador", "Ferrari 488", "Porsche 911", "Jaguar F-Type", "Mustang GT"],
    favorableCities: ["Los Angeles", "Miami", "Dubai", "Barcelona", "Rio de Janeiro"],
    bestMonths: ["March", "June", "September", "December"]
  },
  {
    name: "Rabbit",
    emoji: "🐰",
    element: "Wood",
    yinYang: "Yin",
    years: "1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035",
    description: "Rabbits are gentle, elegant, and compassionate individuals who value peace and harmony. They have excellent taste and artistic sensibilities, preferring beauty and refinement in all aspects of life. Kind-hearted and diplomatic, they make wonderful friends.",
    traits: {
      positive: ["Gentle", "Elegant", "Compassionate", "Artistic", "Kind-hearted", "Diplomatic"],
      negative: ["Timid", "Conservative", "Superficial", "Pessimistic", "Indecisive", "Overly cautious"]
    },
    luckyColors: ["Pink", "Red", "Purple"],
    luckyNumbers: [3, 4, 6],
    compatibility: ["Sheep", "Pig", "Dog"],
    recommendedVehicles: ["Lexus ES", "Volvo XC90", "Audi A4", "Tesla Model X", "Mini Cooper"],
    favorableCities: ["Paris", "Vienna", "Florence", "Kyoto", "Prague"],
    bestMonths: ["May", "August", "November", "February"]
  },
  {
    name: "Dragon",
    emoji: "🐲",
    element: "Earth",
    yinYang: "Yang",
    years: "1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036",
    description: "Dragons are powerful, energetic, and ambitious individuals who are natural born leaders. They possess great wisdom, strength, and charisma, inspiring others with their vision and determination. Confident and generous, they are meant for great things.",
    traits: {
      positive: ["Powerful", "Energetic", "Ambitious", "Charismatic", "Confident", "Generous"],
      negative: ["Arrogant", "Impatient", "Hot-tempered", "Demanding", "Intolerant", "Egotistical"]
    },
    luckyColors: ["Gold", "Silver", "Gray"],
    luckyNumbers: [1, 6, 7],
    compatibility: ["Monkey", "Rat", "Rooster"],
    recommendedVehicles: ["Rolls-Royce Phantom", "Bentley Continental", "Mercedes S-Class", "BMW 7 Series", "Maserati Quattroporte"],
    favorableCities: ["Beijing", "Shanghai", "San Francisco", "Seattle", "Sydney"],
    bestMonths: ["April", "July", "October", "January"]
  },
  {
    name: "Snake",
    emoji: "🐍",
    element: "Fire",
    yinYang: "Yin",
    years: "1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037",
    description: "Snakes are wise, intuitive, and mysterious individuals who possess deep understanding and philosophical insights. They are excellent strategists with strong analytical minds and prefer quality over quantity in all aspects of life.",
    traits: {
      positive: ["Wise", "Intuitive", "Mysterious", "Elegant", "Philosophical", "Strategic"],
      negative: ["Jealous", "Suspicious", "Cunning", "Possessive", "Lazy", "Cold-hearted"]
    },
    luckyColors: ["Black", "Red", "Yellow"],
    luckyNumbers: [2, 8, 9],
    compatibility: ["Ox", "Rooster", "Monkey"],
    recommendedVehicles: ["Porsche Panamera", "Jaguar XJ", "Aston Martin DB11", "Tesla Model S", "Alfa Romeo Giulia"],
    favorableCities: ["Milan", "Stockholm", "Copenhagen", "Amsterdam", "Montreal"],
    bestMonths: ["June", "September", "December", "March"]
  },
  {
    name: "Horse",
    emoji: "🐎",
    element: "Fire",
    yinYang: "Yang",
    years: "1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038",
    description: "Horses are energetic, independent, and free-spirited individuals who love adventure and travel. They are optimistic and cheerful, with excellent communication skills and a natural ability to inspire others with their enthusiasm.",
    traits: {
      positive: ["Energetic", "Independent", "Free-spirited", "Optimistic", "Cheerful", "Adventurous"],
      negative: ["Impatient", "Hot-tempered", "Reckless", "Changeable", "Self-centered", "Rebellious"]
    },
    luckyColors: ["Yellow", "Green", "Purple"],
    luckyNumbers: [2, 3, 7],
    compatibility: ["Tiger", "Dog", "Sheep"],
    recommendedVehicles: ["Mustang Convertible", "BMW Z4", "Porsche Boxster", "Jeep Wrangler", "Harley Davidson"],
    favorableCities: ["Las Vegas", "Austin", "Phoenix", "Adelaide", "Marrakech"],
    bestMonths: ["July", "October", "January", "April"]
  },
  {
    name: "Sheep",
    emoji: "🐑",
    element: "Earth",
    yinYang: "Yin",
    years: "1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039",
    description: "Sheep are gentle, mild-mannered, and compassionate individuals who value harmony and peace. They are creative and artistic with excellent taste and a natural ability to appreciate beauty. Kind and generous, they care deeply for others.",
    traits: {
      positive: ["Gentle", "Compassionate", "Creative", "Artistic", "Kind", "Generous"],
      negative: ["Indecisive", "Pessimistic", "Moody", "Weak-willed", "Complaining", "Irresponsible"]
    },
    luckyColors: ["Green", "Red", "Purple"],
    luckyNumbers: [3, 4, 5],
    compatibility: ["Rabbit", "Horse", "Pig"],
    recommendedVehicles: ["Subaru Outback", "Honda CR-V", "Toyota Prius", "Volvo XC60", "Range Rover Evoque"],
    favorableCities: ["Portland", "Edinburgh", "Wellington", "Reykjavik", "Bruges"],
    bestMonths: ["August", "November", "February", "May"]
  },
  {
    name: "Monkey",
    emoji: "🐵",
    element: "Metal",
    yinYang: "Yang",
    years: "1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040",
    description: "Monkeys are intelligent, witty, and versatile individuals who love to learn and explore new things. They are natural entertainers with excellent social skills and the ability to adapt to any situation. Curious and innovative, they excel at problem-solving.",
    traits: {
      positive: ["Intelligent", "Witty", "Versatile", "Innovative", "Curious", "Adaptable"],
      negative: ["Mischievous", "Restless", "Inconsistent", "Opportunistic", "Jealous", "Suspicious"]
    },
    luckyColors: ["White", "Blue", "Gold"],
    luckyNumbers: [1, 7, 8],
    compatibility: ["Dragon", "Rat", "Snake"],
    recommendedVehicles: ["Mini Countryman", "Fiat 500", "Volkswagen Beetle", "Honda Civic", "Mazda MX-5"],
    favorableCities: ["San Francisco", "Tel Aviv", "Berlin", "Tokyo", "Melbourne"],
    bestMonths: ["September", "December", "March", "June"]
  },
  {
    name: "Rooster",
    emoji: "🐓",
    element: "Metal",
    yinYang: "Yin",
    years: "1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041",
    description: "Roosters are confident, hardworking, and punctual individuals who take pride in their appearance and achievements. They are natural perfectionists with strong attention to detail and excellent organizational skills. Honest and straightforward, they always speak their mind.",
    traits: {
      positive: ["Confident", "Hardworking", "Punctual", "Organized", "Honest", "Loyal"],
      negative: ["Vain", "Boastful", "Critical", "Impatient", "Inflexible", "Aggressive"]
    },
    luckyColors: ["Gold", "Brown", "Yellow"],
    luckyNumbers: [5, 7, 8],
    compatibility: ["Ox", "Snake", "Dragon"],
    recommendedVehicles: ["Cadillac Escalade", "Lincoln Navigator", "Mercedes GLS", "BMW X7", "Lexus LX"],
    favorableCities: ["Atlanta", "Dallas", "Phoenix", "Nashville", "Charlotte"],
    bestMonths: ["October", "January", "April", "July"]
  },
  {
    name: "Dog",
    emoji: "🐕",
    element: "Earth",
    yinYang: "Yang",
    years: "1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042",
    description: "Dogs are loyal, honest, and responsible individuals who have a strong sense of justice and fairness. They are reliable friends who will always stand by those they care about. Protective and caring, they make excellent guardians and companions.",
    traits: {
      positive: ["Loyal", "Honest", "Responsible", "Just", "Reliable", "Protective"],
      negative: ["Pessimistic", "Cynical", "Lazy", "Cold", "Stubborn", "Worrying"]
    },
    luckyColors: ["Red", "Green", "Purple"],
    luckyNumbers: [3, 4, 9],
    compatibility: ["Tiger", "Rabbit", "Horse"],
    recommendedVehicles: ["Subaru Forester", "Toyota 4Runner", "Honda Pilot", "Ford Explorer", "Chevrolet Tahoe"],
    favorableCities: ["Denver", "Salt Lake City", "Calgary", "Oslo", "Helsinki"],
    bestMonths: ["November", "February", "May", "August"]
  },
  {
    name: "Pig",
    emoji: "🐷",
    element: "Water",
    yinYang: "Yin",
    years: "1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043",
    description: "Pigs are honest, generous, and compassionate individuals who possess great inner strength and determination. They are natural peacekeepers who prefer harmony over conflict. Kind-hearted and optimistic, they see the best in everyone and everything.",
    traits: {
      positive: ["Honest", "Generous", "Compassionate", "Optimistic", "Patient", "Reliable"],
      negative: ["Naive", "Gullible", "Materialistic", "Lazy", "Self-indulgent", "Impulsive"]
    },
    luckyColors: ["Yellow", "Gray", "Brown"],
    luckyNumbers: [2, 5, 8],
    compatibility: ["Tiger", "Rabbit", "Sheep"],
    recommendedVehicles: ["Honda Accord", "Toyota Camry", "Nissan Altima", "Buick LaCrosse", "Chrysler 300"],
    favorableCities: ["Portland", "San Diego", "Miami", "Brisbane", "Nice"],
    bestMonths: ["December", "March", "June", "September"]
  }
];