import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TDEEExplanation() {
  return (
    <Card className="mt-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">Co je TDEE?</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          TDEE (Total Daily Energy Expenditure) neboli Celkový denní energetický výdej je odhadem množství kalorií, 
          které vaše tělo spálí za den. Tento údaj zahrnuje váš bazální metabolismus (BMR) a další faktory, 
          jako je fyzická aktivita, trávení potravy a další tělesné procesy.
        </p>
        <p className="mt-4 text-gray-700">
          Znalost vašeho TDEE je klíčová pro efektivní řízení vaší váhy. Pokud chcete zhubnout, 
          měli byste přijímat méně kalorií, než je vaše TDEE. Pro nabírání váhy byste měli přijímat více kalorií. 
          Pro udržení váhy by měl být váš příjem kalorií přibližně roven vašemu TDEE.
        </p>
      </CardContent>
    </Card>
  )
}

