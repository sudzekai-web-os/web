import { Label, Row, Section } from '../components/Preview'

function InputsPage() {
  return (
    <div>
      <h1 className="text text-bold mb-8 text-2xl">Поля ввода</h1>

      <Section title="Текстовые поля">
        <div className="grid w-full max-w-md gap-4">
          <div>
            <Label>Обычное поле</Label>
            <input className="input" placeholder="Placeholder" />
          </div>
          <div>
            <Label>Недоступно</Label>
            <input className="input" placeholder="Disabled" disabled />
          </div>
          <div>
            <Label>Неверное значение</Label>
            <input className="input input-invalid" value="Bad value" readOnly />
          </div>
        </div>
      </Section>

      <Section title="Размеры">
        <div className="grid w-full max-w-md gap-4">
          <div>
            <Label>Small</Label>
            <input className="input input-sm" placeholder="Small" />
          </div>
          <div>
            <Label>Medium</Label>
            <input className="input input-md" placeholder="Medium" />
          </div>
          <div>
            <Label>Large</Label>
            <input className="input input-lg" placeholder="Large" />
          </div>
        </div>
      </Section>

      <Section title="Textarea и Select">
        <div className="grid w-full max-w-md gap-4">
          <textarea className="input" placeholder="Многострочный текст" />
          <select className="input">
            <option>Вариант 1</option>
            <option>Вариант 2</option>
            <option>Вариант 3</option>
          </select>
        </div>
      </Section>

      <Section title="Чекбокс и радио">
        <Row>
          <div className="flex items-center gap-2">
            <input className="input" type="checkbox" defaultChecked />
            <span className="text">Чекбокс</span>
          </div>
          <div className="flex items-center gap-2">
            <input className="input" type="radio" name="demo" defaultChecked />
            <span className="text">Радио 1</span>
          </div>
          <div className="flex items-center gap-2">
            <input className="input" type="radio" name="demo" />
            <span className="text">Радио 2</span>
          </div>
        </Row>
      </Section>

      <Section title="Range и File">
        <div className="flex w-full max-w-md flex-col gap-4">
          <input className="input" type="range" defaultValue={40} />
          <input className="input" type="file" />
        </div>
      </Section>
    </div>
  )
}

export default InputsPage