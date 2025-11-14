import { useState, useEffect } from 'react'
import { useAppSelector } from '../../store/hooks'
import { VisuallyHidden } from './styles'
import { getMessage } from '@utils/getBMIMessage'

const LiveRegion = () => {
  const [announcementMessage, setAnnouncementMessage] = useState('')

  const value = useAppSelector((state) => state.bmi.value)
  const category = useAppSelector((state) => state.bmi.category)

  useEffect(() => {
    if (value !== null && category !== null) {
      const message = `Seu IMC é de ${value}. Categoria: ${category}. ${getMessage(category)}`
      setAnnouncementMessage(message)
    }

    if (value === null) {
      setAnnouncementMessage('')
    }
  }, [value, category])

  return (
    <VisuallyHidden aria-live="polite" aria-atomic="true">
      {announcementMessage}
    </VisuallyHidden>
  )
}

export default LiveRegion
