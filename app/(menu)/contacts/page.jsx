'use client'

export default function Teams() {
  return (
    <div className=''>
      <div className=' sm:text-4xl  mt-5 text-gray-500 font-bold flex justify-center'>Наша адреса:</div>
      <div className=' sm:text-5xl mt-4 text-gray-400 flex justify-center'>м.Київ проспект Науки 57</div>
      <div className=" w-full bottom-0 p-2">
        <iframe
          className="w-full  h-screen"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.3753655665523!2d30.53589907642382!3d50.37820079256351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c77c8b2a34fd%3A0x307e8233a21ebb11!2z0JrQvtGA0YfQvNCw!5e0!3m2!1suk!2sua!4v1694616657719!5m2!1suk!2sua"

          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}