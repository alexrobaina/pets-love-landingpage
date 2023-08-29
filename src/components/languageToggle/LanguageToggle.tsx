import { useState, useCallback } from 'react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

const LanguageToggle = () => {
  const locale = useLocale()
  const router = useRouter()

  const options = [
    { value: 'en', text: 'English 🌎' },
    { value: 'es', text: 'Español 🌎' },
  ]
  const [selected, setSelected] = useState(locale)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    router.push(`/${e.target.value}`)
    setSelected(e.target.value)
    console.log('selected:', selected)
  }, [])

  return (
    <div>
      <select
        defaultValue={selected}
        onChange={(e) => {
          handleChange(e)
        }}
        className=" w-30 rounded outline-none cursor-pointer inline-block px-2 py-2 pr-4 pl-3 divide-y text-primary-400 lg:hover:bg-transparent lg:border-0 lg:p-0 hover:text-primary-400 bg-text-primary-400 "
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageToggle
