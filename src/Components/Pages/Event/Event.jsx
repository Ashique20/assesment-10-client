import { useEffect, useState } from "react";

const Event = () => {

    const [seconds, setSeconds] = useState(59);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prev) => (prev > 0 ? prev - 1 : 59));
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
    return (
       <div className="p-2">
         <div className="flex justify-between  m-32   bg-[#4c3e67]  gap-14  rounded-3xl">
            <div className="w-3/4 relative  m-4">

                <div className="justify center flex ">
                    <div >
                    <img src="https://i.shgcdn.com/6b84f70c-dc04-4385-b36e-6fba242c727b/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                    </div>
                   <div>
                   <img  src="https://i.shgcdn.com/787513c9-e343-46f1-b103-0c3d7625a2b2/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                   </div>
                </div>
                <div >
                    <img className=" "src="https://umanitoba.ca/art/sites/art/files/styles/21x9_1100w/public/2020-08/exhibitions-events.jpg?itok=ih_87Wlz" alt="" />
                </div>
                <h1 className="text-5xl     font bold absolute top-36  left-28 text-red-500 font-bold">Grand Art Event! Register Now...</h1>
            </div >
            <div className=" w-2/4 p-2 rounded-2xl ">
                <h1 className="mt-10 text-3xl text-black">Event Starts in: </h1>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-40 ">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": seconds }}></span>
            </span>
            sec
          </div>
        </div>
                
            </div>
        </div>
       </div>
    )
}

export default Event