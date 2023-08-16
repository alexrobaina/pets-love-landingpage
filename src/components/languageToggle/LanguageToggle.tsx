import { useState } from 'react'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const App = () => {
  const locale = useLocale()
  const options = [
    { value: '', text: '🌎' },
    { value: 'en', text: 'English 🌎' },
    { value: 'es', text: 'Español 🌎' },
  ]
  const [selected, setSelected] = useState(options[0].value)

  const handleChange = (event: any) => {
    console.log(event.target.value)
    setSelected(event.target.value)
  }

  return (
    <div>
      <Link href={`./${selected}`}>
        <select
          value={selected}
          onChange={handleChange}
          className=" w-10 cursor-pointer py-2 pr-4 pl-3 text-primary-950 lg:hover:bg-transparent lg:border-0 lg:p-0 hover:text-primary-400 bg-text-primary-400 "
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </Link>
    </div>
  )
}

export default App
