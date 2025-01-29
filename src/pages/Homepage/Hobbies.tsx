
import HobbyCard from '../../components/HobbyCard'

const Hobbies = () => {
  const activities = [
    {
      title: "Reading",
      icon: "menu_book",
      description: "Reading is an incredible way of learning as books can concentrate years of study and people's perspectives."
    },
    {
      title: "Piano",
      icon: "piano",
      description: "Helps me relax and improves coordination with both hands. I like to play classical and well-known songs."
    },
    {
      title: "Calisthenics",
      icon: "sports_gymnastics",
      description: "A very good way to improve strength and stamina. This along with jumping rope are my favorite forms of exercise."
    },
    {
      title: "Ping pong",
      icon: "sports_tennis",
      description: "Wherever I see ping pong matches, chances are good that I'll join to the action. A fun way to meet people."
    }
  ]

  return (
    <div className="flex w-full flex-col bg-black lg:px-[100px] lg:pt-[50px] lg:pb-[50px]">
      {/* Activities title */}
      <div className="flex w-full flex-col lg:gap-[40px] items-center">
        <h2 className="mt-[50px] w-full text-[35px] text-white">
          Hobbies and Activities
        </h2>
        
        <div className="flex flex-row flex-wrap lg:gap-[40px]">
          {
            activities.map(({title, icon, description}, key) => (
              <HobbyCard 
                key={key}
                title={title}
                icon={icon}
                description={description}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Hobbies
