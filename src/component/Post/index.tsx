import React from 'react'
import Image from 'next/image'
export default function Index() {
  return (
    <div>
      <div className='w-[90%] mx-auto flex justify-center gap-8 border-t-2 border-gray-200 py-2'>
        <h6 className='mt-2' >Posts</h6>
        <h6  className='mt-2'>Reels</h6>
        <h6  className='mt-2'>Tagged</h6>
      </div>
      <div className='grid grid-cols-12 w-[90%] mx-auto mt-8'>
        <div className='col-span-4'>
            <Image src="https://scontent.cdninstagram.com/v/t39.30808-6/434255825_18426135067063583_2310471909181737387_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=Fcq-JcxR1FgAX8oWX_I&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMzMTUyODg0MDAzMTA3MzU1Mw%3D%3D.2-ccb7-5&oh=00_AfCEww0Z6qILFWupk-YgWO4vBTT225NqAGtN_MhK5prK4w&oe=660B3C76&_nc_sid=10d13b" width={100} height={100} layout="responsive" alt="this is image"/>
        </div>
        <div className='col-span-4'>
            <Image src="https://scontent.cdninstagram.com/v/t39.30808-6/433427739_18424748518063583_6378642322453849208_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=Rn8urbLYw74AX-7GlBj&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMyNTg3NTQ2NjAyMzU3MjIwOA%3D%3D.2-ccb7-5&oh=00_AfBTWxjMailHcQE29mcKP1SduPKPTO3OBlyMHSamNkDyeg&oe=660A9AD8&_nc_sid=10d13b" width={100} height={100} layout="responsive" alt="this is image"/>
        </div>
        <div className='col-span-4'>
            <Image src="https://scontent.cdninstagram.com/v/t39.30808-6/412164714_18404785603063583_8589720649904866649_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=NdvXE-REkTIAX8Skglj&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI2MTM1MjkwODY0MjAzOTk4OA%3D%3D.2-ccb7-5&oh=00_AfA9x3sdp3o9ofS8VztiEo9nTgifaovLVpCA6WH4qW8l_A&oe=66099BEB&_nc_sid=10d13b" width={100} height={100} layout="responsive" alt="this is image"/>
        </div>

      </div>
      <div className='grid grid-cols-12 w-[90%] mx-auto'>
        <div className='col-span-4'>
            <Image src="https://scontent.cdninstagram.com/v/t39.30808-6/434212856_18426843160063583_3470096427604180923_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=08ZL1C44W6UAX-WtWqe&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMzNDQ1OTQ4NTI5NjQzMTkyMw%3D%3D.2-ccb7-5&oh=00_AfDXtL2VS2ysJ7brc4ym2cu-a7yxM9otrd-bEYg6BzBHYQ&oe=660C35F2&_nc_sid=10d13b" width={100} height={100} layout="responsive" alt="this is image"/>
        </div>
        <div className='col-span-4'>
            <Image src="https://scontent.cdninstagram.com/v/t39.30808-6/434368080_18426841534063583_2834339675094600237_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=KErDCCtx1xgAX-KwhLp&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMzNDQ1NTE0Mzg2NDU2Njk3NA%3D%3D.2-ccb7-5&oh=00_AfCCxkjAQP9tGrRKQxaDQIYeo671hKIJ5TazrvN7CVh_Kw&oe=660C9367&_nc_sid=10d13b" width={100} height={100} layout="responsive" alt="this is image"/>
        </div>
        <div className='col-span-4'>
            <Image src="https://scontent.cdninstagram.com/v/t39.30808-6/434105119_18426837145063583_8958720105592674370_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=EwMD54pgogQAX_T4j8f&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMzNDQzOTE3NDg0MDY3NjY5OA%3D%3D.2-ccb7-5&oh=00_AfAjOqpUzfKe1n6PikvmdKs8UcnAvQRuERxOP69e9M-qdA&oe=6609F6B8&_nc_sid=10d13b" width={100} height={100} layout="responsive" alt="this is image"/>
        </div>

      </div>
      <div className='grid grid-cols-12 w-[90%] mx-auto'>
        <div className='col-span-4'>
            <Image src="https://scontent.cdninstagram.com/v/t39.30808-6/434214809_18426841564063583_6693675798716744551_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=zMhztgcl7p8AX8WGhDc&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMzNDQ1NTE0Mzg3MjkxMDc3NA%3D%3D.2-ccb7-5&oh=00_AfBzse2p3EABA22zxq7RittYBbLvBpaDzaph8-4PIRojAQ&oe=660C3D64&_nc_sid=10d13b" width={100} height={100} layout="responsive" alt="this is image"/>
        </div>
        <div className='col-span-4'>
            <Image src="https://scontent.cdninstagram.com/v/t39.30808-6/434325569_18426841555063583_9070692449590388244_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=MGvBIBY0dTYAX9qZz7U&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMzNDQ1NTE0Mzg2NDcyNzk4MQ%3D%3D.2-ccb7-5&oh=00_AfBJ2dZ0fdCdFR68D43U6VlS6daNzRS1fXuulWXfJFxhsQ&oe=660BC041&_nc_sid=10d13b" width={100} height={100} layout="responsive" alt="this is image"/>
        </div>
        <div className='col-span-4'>
            <Image src="https://scontent.cdninstagram.com/v/t39.30808-6/434362534_18426841546063583_8089620036700693010_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=0Ukuz12UC84AX_7DrQU&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMzNDQ1NTE0Mzg3MzA1OTQ1NA%3D%3D.2-ccb7-5&oh=00_AfARFxBTfAu6bmSh-up3rDQuKc_JRj2ewU5cjIVLTD2q9Q&oe=660CA982&_nc_sid=10d13b" width={100} height={100} layout="responsive" alt="this is image"/>
        </div>

      </div>

    </div>
  )
}
