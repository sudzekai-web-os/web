import { Row, Section } from '../components/Preview'

function TextPage() {
  return (
    <div>
      <h1 className="text text-bold mb-8 text-2xl">Текст</h1>

      <Section title="Цвета">
        <Row>
          <span className="text">Обычный</span>
          <span className="text text-primary">Primary</span>
          <span className="text text-muted">Muted</span>
          <span className="text text-danger">Danger</span>
          <span className="text text-success">Success</span>
          <span className="text text-info">Info</span>
          <span className="text text-link">Link</span>
          <span className="text text-alternative">Alternative</span>
        </Row>
      </Section>

      <Section title="Начертание и шрифт">
        <Row>
          <span className="text text-semibold">Semibold</span>
          <span className="text text-bold">Bold</span>
          <span className="text text-mono">Mono</span>
          <span className="text text-nowrap">Nowrap</span>
        </Row>
      </Section>

      <Section title="Выравнивание">
        <div className="flex w-full max-w-lg flex-col gap-2">
          <p className="text text-center">Центр</p>
          <p className="text text-start">Начало</p>
          <p className="text text-end">Конец</p>
        </div>
      </Section>

      <Section title="Усечение">
        <p className="text text-truncate w-full max-w-xs">
          Этот длинный текст будет обрезан, когда выйдет за пределы своего
          контейнера, чтобы не разрывать строку.
        </p>
      </Section>

      <Section title="Размеры (масштабируются)">
        <Row>
          <span className="text text-xs">xs</span>
          <span className="text text-sm">sm</span>
          <span className="text text-base">base</span>
          <span className="text text-lg">lg</span>
          <span className="text text-xl">xl</span>
          <span className="text text-2xl">2xl</span>
          <span className="text text-3xl">3xl</span>
          <span className="text text-4xl">4xl</span>
        </Row>
      </Section>
    </div>
  )
}

export default TextPage