import React from 'react'

const PlantCare = () => {
  return (
    <>
      <h1>PlantCare</h1>
      <p id="plantcare">The Basics of Plant Care.</p>
      <div className="top-tips">
        <div className="tip first">
          <h6>Watering <i className="fas fa-tint"></i></h6>
          <p>
            Most plant owners become concerned that they are not sufficiently watering their houseplant,
            but in the plant world there is a tendency to overwater!
            This can be far more damaging to your plant health than having a slightly dry houseplant.
            The most accurate assessment of a plant’s need for water is through the old weight test.
            Pick up the container of the plant and see how much it weighs; the lighter it is, the more it needs a drink.
            Unless noted otherwise, most houseplants would prefer being slightly dry than soaked.
          </p>
        </div>
        <div className="tip">
          <h6>Fertilizing <i className="fas fa-prescription-bottle-alt"></i></h6>
          <p>Although plants carry out photosynthesis to produce the sugars they need to survive, there is a more direct form of nutrition to maximise houseplant potential.
            Providing fertilizers to your houseplants ensures they remain happy and healthy.
            Nutrition can be delivered via a granule that breaks down over time, or it can be added more directly via a water soluble fertilizer.
          </p>
        </div>
        <div className="tip">
          <h6>Sun light <i className="fas fa-sun"></i></h6>
          <p>
            When it comes to houseplants, light is just as essential as water!
            The amount of light required varies by species: Houseplants typically require high light (six or more hours a day),
            medium light (four to six hours a day), or low light (less than three hours a day).
            Plants will either require bright or direct light (sunlight from a south-facing window),
            indirect or filtered light (sunlight through a curtain or light from a bulb).
          </p>
        </div>
        <div className="tip">
          <h6>Soil <i className="fas fa-leaf"></i></h6>
          <p>
            The first step towards healthy plant life is the soil.
            The best growing media is soil-less and is a combination of equal parts peat moss, vermiculite/perlite, and compost.
            When a healthy base is established the other parts become far easier.
          </p>
        </div>
        <div className="tip last">
          <h6>Temperature <i className="fas fa-thermometer-three-quarters"></i></h6>
          <p>
            Aim to keep the plant in a warm environment with sufficient air circulation, and periodically rotate it to ensure consistent growth.
            During the winter months, keep plants away from the cold draft areas in the house.
            The warmer it gets for houseplants, the happier they are, so try to remain vigilant when it comes to placement.
          </p>
        </div>
      </div>
    </>
  )
}
export default PlantCare
