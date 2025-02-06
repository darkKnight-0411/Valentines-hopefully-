import body from '../assets/Body.jpg'
import fantastic from '../assets/fantAssTic.jpg'
import titly from '../assets/TitLyFy.jpg'
import smile from '../assets/Smile.jpg'
import soul from '../assets/Soul.jpg'
import thigh from '../assets/thighhhhhhhhhhhhhhhhhhh.jpg'
const AboutYou = () => {
  return (
    <div className="py-20 px-4 bg-white/80 backdrop-blur-sm w-full">
        <div className=" md:px-14 w-full flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why I Love You &#10084;
          </h2>
          
          <div className="w-full grid md:grid-cols-2 gap-8">
            {[
                
              {
                title: "The Most Beautiful Smile",
                desc: "Your Smile is the most beautiful thing I have seen. It is worth killing for because it is so cute and adorable",
                img: smile
              },
              {
                title: "Your Perfect Personality",
                desc: "Loyalty, Kindness, Loving, Caring and Gracious, what more can I ask from the Universe, I got the perfect girl",
                img: soul
              },
              {
                title: "The Curvilicious Body",
                desc: "The body is so so secy and curvy, I want to keep touching every part of it, the stomach, waist, hands, everything",
                img: body
              },
              { 
                title: "An Incredible Ass",
                desc: "The massive ass, ist absolutely hypnotic, I want kiss it, lick it, eat it, get smothered by it in all positions",
                img: fantastic
              },
              {
                title: "Succulent, Sexy, Soft Boobies",
                desc: "Your boobies are absolutely perfect, I want to suck them, lick them , touch them , because they are secy and perfect",
                img: titly
              },
              {
                title: "Your Thicc Thighs",
                desc: "Those thigh, thicc, firm, so grabable, legit want to get my head squished between those thighs of yours",
                img: thigh
              }
              
              
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow flex justify-center items-center w-full space-x-5"
              >
                <div className='w-1/2'>
                    <img src={item.img} className='h-64 aspect-square object-cover object-center rounded-lg'></img>
                </div>
                <div className='w-1/2'>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                    </h3>
                    <p className="text-gray-600">
                    {item.desc}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default AboutYou