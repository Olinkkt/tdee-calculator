'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { calculateBMR, calculateTDEE } from '@/lib/tdeeCalculations'

type Gender = 'male' | 'female'
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive'
type Units = 'metric' | 'imperial'

export default function TDEEKalkulator() {
  const [gender, setGender] = useState<Gender>('male')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate')
  const [units, setUnits] = useState<Units>('metric')
  const [result, setResult] = useState<{bmr: number, tdee: number} | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const bmr = calculateBMR(Number(age), Number(weight), Number(height), gender, units)
    const tdee = calculateTDEE(bmr, activityLevel)
    setResult({ bmr, tdee })
  }

  return (
    <Card className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg shadow-lg">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="gender">Pohlaví</Label>
              <Select value={gender} onValueChange={(value: Gender) => setGender(value)}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Vyberte pohlaví" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Muž</SelectItem>
                  <SelectItem value="female">Žena</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="age">Věk</Label>
              <Input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Zadejte věk" required />
            </div>
            <div>
              <Label htmlFor="weight">Váha ({units === 'metric' ? 'kg' : 'lb'})</Label>
              <Input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={`Zadejte váhu v ${units === 'metric' ? 'kg' : 'lb'}`} required />
            </div>
            <div>
              <Label htmlFor="height">Výška ({units === 'metric' ? 'cm' : 'inch'})</Label>
              <Input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={`Zadejte výšku v ${units === 'metric' ? 'cm' : 'inch'}`} required />
            </div>
            <div>
              <Label htmlFor="activityLevel">Úroveň aktivity</Label>
              <Select value={activityLevel} onValueChange={(value: ActivityLevel) => setActivityLevel(value)}>
                <SelectTrigger id="activityLevel">
                  <SelectValue placeholder="Vyberte úroveň aktivity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedavý životní styl (Minimální nebo žádné cvičení)</SelectItem>
                  <SelectItem value="light">Lehká aktivita (1-2x týdně cvičení/sport)</SelectItem>
                  <SelectItem value="moderate">Střední aktivita (3-5x týdně cvičení/sport)</SelectItem>
                  <SelectItem value="active">Vysoká aktivita (6-7x týdně intenzivní cvičení)</SelectItem>
                  <SelectItem value="veryActive">Extrémní aktivita (2x denně cvičení/fyzicky náročná práce)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="units">Jednotky</Label>
              <Select value={units} onValueChange={(value: Units) => setUnits(value)}>
                <SelectTrigger id="units">
                  <SelectValue placeholder="Vyberte jednotky" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">Metrické (kg/cm)</SelectItem>
                  <SelectItem value="imperial">Imperiální (lb/inch)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            Vypočítat TDEE
          </Button>
        </form>
        {result && (
          <div className="mt-8 p-6 bg-white bg-opacity-70 rounded-lg shadow-inner">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Výsledky</h2>
            <p className="mb-2"><strong>Bazální metabolismus (BMR):</strong> {result.bmr.toFixed(0)} kcal</p>
            <p className="mb-4"><strong>Celkový denní energetický výdej (TDEE):</strong> {result.tdee.toFixed(0)} kcal</p>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Doporučený kalorický příjem:</h3>
            <ul className="space-y-2">
              <li>Udržení váhy: {result.tdee.toFixed(0)} kcal</li>
              <li>Mírné hubnutí (-10%): {(result.tdee * 0.9).toFixed(0)} kcal</li>
              <li>Výrazné hubnutí (-20%): {(result.tdee * 0.8).toFixed(0)} kcal</li>
              <li>Mírné nabírání (+10%): {(result.tdee * 1.1).toFixed(0)} kcal</li>
              <li>Výrazné nabírání (+20%): {(result.tdee * 1.2).toFixed(0)} kcal</li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

