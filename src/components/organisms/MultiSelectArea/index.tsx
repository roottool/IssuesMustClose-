import { MultiSelect, MultiSeletProps } from '@src/components'
import { FC } from 'react'

const MultiSelectArea: FC<MultiSeletProps> = (props) => {
  const { instanceId, onChange, options, placeholder, value } = props

  return (
    <div>
      <label htmlFor={instanceId}>{placeholder}</label>
      <MultiSelect
        instanceId={instanceId}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}

export default MultiSelectArea
