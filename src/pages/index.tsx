import { FC, useState } from 'react'

import { Picture } from '@/components/atoms'
import MultiSelectArea from '@/components/organisms/MultiSelectArea'
import { CONSTANTS } from '@/utils/constants'

const Home: FC = () => {
  const { LOGO_ALT, SEARCH_FILTER } = CONSTANTS
  const { LABELS, LANGUAGES } = SEARCH_FILTER

  const [selectedLanguages, setLangages] = useState<string[]>([])
  const handleLangSelectionChange = (value: string[]) => {
    setLangages(value)
  }
  const [selectedLabels, setLabels] = useState<string[]>([])
  const handlLabelSelectionChange = (value: string[]) => {
    setLabels(value)
  }

  return (
    <div>
      <div>
        <Picture
          imageAlt={LOGO_ALT}
          imagePath={require('@public/images/big_logo.png')}
          webpPath={require('@public/images/big_logo.webp')}
        />
      </div>
      <div>
        <MultiSelectArea
          instanceId="languages"
          onChange={handleLangSelectionChange}
          options={LANGUAGES}
          placeholder="Languages"
          value={selectedLanguages}
        />
        <MultiSelectArea
          instanceId="labels"
          onChange={handlLabelSelectionChange}
          options={LABELS}
          placeholder="Labels"
          value={selectedLabels}
        />
      </div>

      <div>
        <button>test</button>
        <button>test2</button>
      </div>
    </div>
  )
}

export default Home
