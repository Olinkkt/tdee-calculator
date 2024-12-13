type Gender = 'male' | 'female'
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive'
type Units = 'metric' | 'imperial'

export function calculateBMR(age: number, weight: number, height: number, gender: Gender, units: Units): number {
  // Převod na metrické jednotky, pokud jsou zadány imperiální
  if (units === 'imperial') {
    weight = weight * 0.453592 // lb na kg
    height = height * 2.54 // inch na cm
  }

  // Mifflin-St Jeor Equation
  let bmr = 10 * weight + 6.25 * height - 5 * age
  bmr = gender === 'male' ? bmr + 5 : bmr - 161

  return Math.round(bmr)
}

export function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9
  }

  return Math.round(bmr * activityMultipliers[activityLevel])
}

