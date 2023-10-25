import { Grow } from '@mui/material'
import Image from 'next/image'

export default function AboutPage () {
  return (
    <Grow
    in={true}
    style={{ transformOrigin: '0 0 0' }}
    {...({ timeout: 400 })}
  >
    <section className='about-section'>
      
      <Image
          className='about-image'
          width="236"
          height="287"
          src={`https://img.dog-learn.com/dog-breeds/shiba-inu/images/shiba-inu-u3.jpg`}
          alt="Image Avatar"
        />
      
      <div className='about-description'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          consequuntur corporis delectus doloribus eos, expedita facilis
          fugiat, fuga harum impedit ipsam, itaque, libero, magni maxime
          minima molestiae natus nihil numquam obcaecati odit, officia
          pariatur quasi quidem quo quos repellendus repudiandae saepe, sequi
          similique soluta tempora tenetur, tempore, tenetur, tenetur, tenetur,
          tenetur, tenetur, tenetur, tenetur, tenetur, tenetur, tenetur, tenetur,
          tenetur, tenetur, tenetur, tenetur, tenetur, tenetur, tenetur, tenetur,
          tenetur, tenetur, tenetur, tenetur, tenetur, tenetur, tenetur, tenetur,
        </p>
      </div>
    </section>
    </Grow>
  )
}
