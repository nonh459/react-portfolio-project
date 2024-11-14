import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non justo at lectus efficitur maximus ut interdum nisl. Sed nec libero tincidunt, suscipit dui in, fermentum est.
            </p>
            <img src="https://media.istockphoto.com/id/1696027785/photo/businessman-on-the-city-street.webp?a=1&b=1&s=612x612&w=0&k=20&c=yQoRInfgXdK7BdM0LYsLeNeiPfHAoGTlTnSjHIjS_I4=" alt="" />
            <h4>John Doe</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non justo at lectus efficitur maximus ut interdum nisl. Sed nec libero tincidunt, suscipit dui in, fermentum est.
            </p>
            <img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww" alt="" />
            <h4>Jane Doe</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non justo at lectus efficitur maximus ut interdum nisl. Sed nec libero tincidunt, suscipit dui in, fermentum est.
            </p>
            <img src="https://images.unsplash.com/photo-1622861431942-b45f2b5b6564?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww" alt="" />
            <h4>Joe Doe</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
