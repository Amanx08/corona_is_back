import React from 'react'

function Symptoms_card() {
  return (
    <>
      <div className="section-4-main maX-width px-5 lg:px-0">
    <div className=" lg:py-24 py-10">
        <h3 className=" lg:text-[2.5rem] text-[1.7rem] font-semibold text-secondary-font text-center">Symptoms of COVID-19</h3>
        <div className="grid lg:grid-cols-2 gap-8 lg:pt-14 pt-4">

            <div className="simple-card flex flex-col justify-center items-center bg-[#FBF3FF] p-8 gap-5 rounded-2xl">
                <h4 className="lg:text-4xl text-[1.7rem] font-semibold text-primary-font"> New loss of smell</h4>
                <img src="./assets/no-smell.png" className="lg:w-48 w-40"/>
                <div className=" text-primary-para lg:text-[1.37rem]">With COVID-19, more than 8 in 10 people may briefly lose their sense of smell. Along with it, they lose their ability to taste. Researchers are still trying to determine how and why the COVID-19 virus affects smell and taste. One study suggests the virus doesn't directly damage olfactory sensory neurons.</div>
             </div>
             <div className="simple-card flex flex-col justify-center items-center bg-[#FBF3FF] p-8 gap-5 rounded-2xl">
                <h4 className="lg:text-4xl text-[1.7rem] font-semibold text-primary-font">New loss of taste</h4>
                <img src="./assets/no-tongue-taste-5023721-4183720 1.png" className="lg:w-48 w-40"/>
                <div className=" text-primary-para lg:text-[1.37rem] ">With COVID-19, more than 8 in 10 people may briefly lose their sense of smell. Along with it, they lose their ability to taste. Researchers are still trying to determine how and why the COVID-19 virus affects smell and taste. One study suggests the virus doesn't directly damage olfactory sensory neurons.</div>
             </div>
             
             <div className="simple-card flex flex-col justify-center items-center bg-[#FBF3FF] p-8 gap-5 rounded-2xl">
                <h4 className="lg:text-4xl text-[1.7rem] font-semibold text-primary-font">Fewer</h4>
                <img src="./assets/fever-5023719-4183718 1.png" className="lg:w-48 w-40"/>
                <div className=" text-primary-para lg:text-[1.37rem] ">With COVID-19, more than 8 in 10 people may briefly lose their sense of smell. Along with it, they lose their ability to taste. Researchers are still trying to determine how and why the COVID-19 virus affects smell and taste. One study suggests the virus doesn't directly damage olfactory sensory neurons.</div>
             </div>
             <div className="simple-card flex flex-col justify-center items-center bg-[#FBF3FF] p-8 gap-5 rounded-2xl">
                <h4 className="lg:text-4xl text-[1.7rem] font-semibold text-primary-font">Headache</h4>
                <img src="./assets/headache-5023725-4183724 1.png" className="lg:w-48 w-40"/>
                <div className=" text-primary-para lg:text-[1.37rem] ">With COVID-19, more than 8 in 10 people may briefly lose their sense of smell. Along with it, they lose their ability to taste. Researchers are still trying to determine how and why the COVID-19 virus affects smell and taste. One study suggests the virus doesn't directly damage olfactory sensory neurons.</div>
             </div>
             
        </div>
        <div className="flex justify-center">
            <button className="bg-[#9D1ADA] px-10 py-5 text-[#ffff] font-semibold lg:my-20 my-5 rounded-lg">SEE MORE</button>
        </div>
    </div>
</div>
    </>
  )
}

export default Symptoms_card
