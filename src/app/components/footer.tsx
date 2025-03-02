import golden from '../../../public/golden.png' 
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]

export function Footer() {
  return (
    <section className="bg-[#E84c3d] py-16 text-white"> 

      <div className='container mx-auto px-4'> 

        <div className='border-b border-white/20 pb-8'>
          <h4 data-aos="fade-right" className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

          <div data-aos="zoom-in-down" className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>

        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Pet Shop Dev</h3>
            <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação.</p>
            <a
              href="https://wa.me/5585985244438"
              className='bg-green-500 px-4 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2'
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>
          </div>


          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
            <p>Email: <a href="malito:petshop@gmail.com" target='_blank' rel='noopener noreferer'>petshop@gmail.com</a></p>
            <p>Telefone: <a href="https://wa.me/5585985244438" target='_blank' rel='noopener noreferer'>(85) 98524-4438</a></p>
            <p>Rua 46, centro, Campo Grande | MS</p>
          </div>


          <div>
            <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
            <div className='flex gap-4'>
              <a
                href="#"
                target='_blank'
                rel='noopener noreferer'
              >
                <FacebookLogo className='w-8 h-8' />
              </a>
              <a
                href="#"
                target='_blank'
                rel='noopener noreferer'
              >
                <InstagramLogo className='w-8 h-8' />
              </a>
              <a
                href="https://wa.me/5585985244438"
                target='_blank'
                rel='noopener noreferer'
              >
                <WhatsappLogo className='w-8 h-8' />
              </a>
            </div>
          </div>
        </footer>

        <div className='text-center mt-8'>
          <p>&copy; Pet Shop - Todos Direitos Reservados.</p>
        </div>
      </div>
    </section>
  )
}