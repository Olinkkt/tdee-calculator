import TDEEKalkulator from '@/components/TDEEKalkulator'
import TDEEExplanation from '@/components/TDEEExplanation'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">TDEE Kalkulačka</h1>
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl p-6 sm:p-10">
          <TDEEKalkulator />
          <TDEEExplanation />
        </div>
      </div>
    </main>
  )
}

