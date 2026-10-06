import { Row, Section } from '../components/Preview'

function ButtonsPage() {
  return (
    <div>
      <h1 className="text text-bold mb-8 text-2xl">Кнопки</h1>

      <Section title="Типы">
        <Row>
          <button className="btn">Кнопка</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-danger">Danger</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-info">Info</button>
        </Row>
      </Section>

      <Section title="Размеры">
        <Row>
          <button className="btn btn-sm">Small</button>
          <button className="btn btn-md">Medium</button>
          <button className="btn btn-lg">Large</button>
          <button className="btn btn-p-0 px-3">P-0 + padding</button>
        </Row>
      </Section>

      <Section title="Выравнивание">
        <Row>
          <button className="btn btn-primary btn-md w-40 btn-start">Слева</button>
          <button className="btn btn-primary btn-md w-40 btn-end">Справа</button>
        </Row>
      </Section>

      <Section title="Контур / граница">
        <Row>
          <button className="btn btn-primary btn-outline">Outline</button>
          <button className="btn btn-danger btn-outline">Outline danger</button>
          <button className="btn btn-primary btn-border">Border</button>
        </Row>
      </Section>

      <Section title="Состояния">
        <Row>
          <button className="btn btn-primary btn-active">Активная</button>
          <button className="btn btn-primary" disabled>
            Недоступна
          </button>
        </Row>
      </Section>

      <Section title="Утилиты">
        <Row>
          <button className="btn bg-transparent">Прозрачный фон</button>
          <button className="btn btn-primary bg-transparent">
            Primary прозрачный
          </button>
          <button className="btn btn-primary border-0">Без границы</button>
        </Row>
      </Section>

      <Section title="Принудительные состояния">
        <Row>
          <button className="btn btn-primary btn-state-hover">Hover</button>
          <button className="btn btn-primary btn-state-active">Active</button>
          <button className="btn btn-primary btn-state-focus">Focus</button>
          <button className="btn btn-primary btn-state-disabled">Disabled</button>
        </Row>
      </Section>
    </div>
  )
}

export default ButtonsPage