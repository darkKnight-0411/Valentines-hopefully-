import { HandHeart } from 'lucide-react'

const Apology = () => {
  return (
    <div className="py-20 px-4 bg-white/90">
        <div className="max-w-3xl mx-auto text-center">
          <HandHeart className="w-16 h-16 text-pink-400 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            From the Bottom of My Heart
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600 space-y-6">
            <p className="text-xl leading-relaxed">
              I know my actions have hurt you, and for that, I am truly sorry. You deserve nothing but love, respect, and honesty. I promise to be better, to listen more, to understand deeper, and to love you the way you deserve to be loved.
            </p>
            <p className="text-xl leading-relaxed">
              Your happiness means everything to me, and I will work every day to rebuild the trust between us. You are my world, and I never want to lose you.
            </p>
            <div className="mt-8 p-6 bg-pink-50 rounded-lg shadow-inner">
              <p className="text-lg font-medium text-gray-700 italic">
                "Sometimes it takes a moment of darkness to see how brightly our love shines."
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Apology