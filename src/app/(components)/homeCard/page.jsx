import React from 'react'
import { client } from '../../../../sanity/lib/client'
import { urlForImage } from '../../../../sanity/lib/image'
const HomeCard1 = async ()=>{
    let response = await client.fetch(
      `*[_type == 'homeCard']`,
      {},
      {
        cache : "no-cache",
      }
      )

      // console.log(`response` , response)
      return response
  }
const HomeCard = async ()  => {
    let homeCard = await HomeCard1();
    console.log(homeCard)
    return (

        <div className=''>
            {homeCard.map((e,i)=>{
                return(
            <div className="center flex items-center justify-center  my-4 scale-90 sm:scale-[1]" key={i}>
                <div className="article-card w-[380px] h-[238px] rounded-2xl overflow-hidden relative transition-all duration-300 shadow-lg shadow-slate-600 ">
                    <div className="content box-border w-full absolute bottom-0 px-[30px]  py-[20px] h-auto  ">
                        <p className="date  m-0 font-semibold text-white opacity-90">{e.name}</p>
                        <p className="title m-0 font-semibold text-white opacity-90 ">{e.price}</p>
                        <div className="  pt-2 text-orange-400 dark:text-slate-200   ">
                                <button className={`{text-sm object-fill font-semibold p-1 px-3 rounded-full text-white  bg-slate-800 hover:bg-slate-700 active:bg-slate-900  dark:bg-orange-500 dark:hover:bg-orange-400 dark:active:bg-orange-600   }`}>{e.button}</button>
                            </div>
                    </div>
                    <div  >
                        <img width={500} height={500} className='w-full h-full object-cover ' src={urlForImage(e.image).url()} alt="article-cover" /></div>
                       
                </div>
            </div>
                )
                
            })}
        </div>
    )
}

export default HomeCard;