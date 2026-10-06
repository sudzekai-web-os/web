import { Row, Section } from '../components/Preview'

function FramesPage() {
  return (
    <div>
      <h1 className="text text-bold mb-8 text-2xl">Рамки</h1>

      <Section title="Типы">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="frame frame-p-4">Базовый frame</div>
          <div className="frame frame-secondary frame-p-4">Secondary</div>
          <div className="frame frame-tertiary frame-p-4">Tertiary</div>
          <div className="frame frame-quaternary frame-p-4">Quaternary</div>
          <div className="frame frame-info frame-p-4">Info</div>
          <div className="frame frame-danger frame-p-4">Danger</div>
          <div className="frame frame-success frame-p-4">Success</div>
          <div className="frame frame-muted frame-p-4">Muted</div>
        </div>
      </Section>

      <Section title="Плотность (padding)">
        <Row>
          <div className="frame frame-p-0">p-0</div>
          <div className="frame frame-p-2">p-2</div>
          <div className="frame frame-p-4">p-4</div>
          <div className="frame frame-p-6">p-6</div>
        </Row>
      </Section>

      <Section title="Тень и hover">
        <Row>
          <div className="frame frame-p-4 frame-elevated">Elevated</div>
          <div className="frame frame-p-4 frame-hover frame-hover-opacity">
            Hover opacity
          </div>
          <div className="frame frame-info frame-p-4 frame-hover frame-hover-color">
            Hover color
          </div>
        </Row>
      </Section>
    </div>
  )
}

export default FramesPage