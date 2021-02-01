import s from './Layout.module.css'
import cn from 'classnames'

const Layout = ({ id, title, urlBg, colorBg, children })=> {
  const style = {
    backgroundImage: `url(${urlBg})`,
    backgroundColor: colorBg
}
  return (
    <section style={ style } className={s.root} id={ id }>
      <div className={s.wrapper}>
        <article>
            <div className={s.title}>
                <h3>{ title }</h3>
                <span className={s.separator}></span>
            </div>
            <div className={cn(s.desc, s.full)}>
                { children }
            </div>
        </article>
      </div>
    </section>
  )
}

export default Layout