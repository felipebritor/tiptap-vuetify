import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'

export default class Paragraph extends AbstractExtensionAdapter {
  constructor (options) {
    super(options, null)
  }

  get availableButtons () {
    return [
      {
        name: 'paragraph',
        tooltip: 'Paragraph',
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('format_textdirection_l_to_r'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-paragraph fa-lg'),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-paragraph')
        }
      }
    ]
  }
}