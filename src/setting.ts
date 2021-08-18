/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-30 15:56:27
 * @LastEditors: songone
 * @LastEditTime: 2021-08-17 13:57:01
 */
interface ISettings {
  title: string // Overrides the default title
  showSettings: boolean // Controls settings panel display
  showTagsView: boolean // Controls tagsview display
  showSidebarLogo: boolean // Controls siderbar logo display
  fixedHeader: boolean // If true, will fix the header component
  errorLog: string[] // The env to enable the errorlog component, default 'production' only
  sidebarTextTheme: boolean // If true, will change active text color for sidebar based on theme
  devServerPort: number // Port number for webpack-dev-server
  systemId: number
}

// You can customize below settings :)
const settings: ISettings = {
  title: 'license系统',
  showSettings: false,
  showTagsView: true,
  fixedHeader: false,
  showSidebarLogo: true,
  errorLog: ['production'],
  sidebarTextTheme: false,
  devServerPort: 9527,
  systemId: 1
}

export default settings
