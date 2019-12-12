import { getCriminals } from './criminals/criminalDataProvider.js'
import criminalList from './criminals/criminalList.js'
import ConvictionSelect from './convictions/convictionSelect.js'
import { getConvictions, useConvictions } from './convictions/ConvictionProvider.js'
import NoteFormComponent from './notes/noteForm.js'
import dialogComponent, { closeDialogButtonEvents } from './dialog.js'







// ConvictionSelect()






NoteFormComponent()
getCriminals().then(
  () => criminalList()
)
dialogComponent()
closeDialogButtonEvents()
ConvictionSelect()
useConvictions()
getConvictions().then(
  () => ConvictionSelect()
)
