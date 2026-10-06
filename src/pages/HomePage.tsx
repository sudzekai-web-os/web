import { Link } from 'react-router-dom'
import { Section } from '../components/Preview'

function HomePage() {
  return (
    <div>
      <h1 className="text text-bold mb-8 text-2xl">Превью дизайн-системы</h1>

      <Section title="Категории">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link to="/buttons" className="frame frame-hover frame-hover-color frame-p-4">
            <span className="text text-semibold">Кнопки</span>
          </Link>
          <Link to="/inputs" className="frame frame-hover frame-hover-color frame-p-4">
            <span className="text text-semibold">Поля ввода</span>
          </Link>
          <Link to="/frames" className="frame frame-hover frame-hover-color frame-p-4">
            <span className="text text-semibold">Рамки</span>
          </Link>
          <Link to="/text" className="frame frame-hover frame-hover-color frame-p-4">
            <span className="text text-semibold">Текст</span>
          </Link>
        </div>
      </Section>
    </div>
  )
}

export default HomePage