// import { createApp } from 'vue'
// import App from './App.vue';
// 如果要使用.scss样式文件，则需要引入base.scss文件
// import 'element-plus/packages/theme-chalk/src/base.scss'
import 'element-plus/lib/theme-chalk/index.css'
import { createI18n } from 'vue-i18n'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import localeEN from 'element-plus/lib/locale/lang/en'
import messages from '../utils/i18n'
import {
    ElAlert,
    ElAside,
    ElAutocomplete,
    ElAvatar,
    ElBacktop,
    ElBadge,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElButton,
    ElButtonGroup,
    ElCalendar,
    ElCard,
    ElCarousel,
    ElCarouselItem,
    ElCascader,
    ElCascaderPanel,
    ElCheckbox,
    ElCheckboxButton,
    ElCheckboxGroup,
    ElCol,
    ElCollapse,
    ElCollapseItem,
    ElCollapseTransition,
    ElColorPicker,
    ElContainer,
    ElDatePicker,
    ElDialog,
    ElDivider,
    ElDrawer,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElFooter,
    ElForm,
    ElFormItem,
    ElHeader,
    ElIcon,
    ElImage,
    ElInput,
    ElInputNumber,
    ElLink,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElOption,
    ElOptionGroup,
    ElPageHeader,
    ElPagination,
    ElPopconfirm,
    ElPopover,
    ElPopper,
    ElProgress,
    ElRadio,
    ElRadioButton,
    ElRadioGroup,
    ElRate,
    ElRow,
    ElScrollbar,
    ElSelect,
    ElSlider,
    ElStep,
    ElSteps,
    ElSubmenu,
    ElSwitch,
    ElTabPane,
    ElTable,
    ElTableColumn,
    ElTabs,
    ElTag,
    ElTimePicker,
    ElTimeSelect,
    ElTimeline,
    ElTimelineItem,
    ElTooltip,
    ElTransfer,
    ElTree,
    ElUpload,
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
} from 'element-plus';

const components = [
    ElAlert,
    ElAside,
    ElAutocomplete,
    ElAvatar,
    ElBacktop,
    ElBadge,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElButton,
    ElButtonGroup,
    ElCalendar,
    ElCard,
    ElCarousel,
    ElCarouselItem,
    ElCascader,
    ElCascaderPanel,
    ElCheckbox,
    ElCheckboxButton,
    ElCheckboxGroup,
    ElCol,
    ElCollapse,
    ElCollapseItem,
    ElCollapseTransition,
    ElColorPicker,
    ElContainer,
    ElDatePicker,
    ElDialog,
    ElDivider,
    ElDrawer,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElFooter,
    ElForm,
    ElFormItem,
    ElHeader,
    ElIcon,
    ElImage,
    ElInput,
    ElInputNumber,
    ElLink,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElOption,
    ElOptionGroup,
    ElPageHeader,
    ElPagination,
    ElPopconfirm,
    ElPopover,
    ElPopper,
    ElProgress,
    ElRadio,
    ElRadioButton,
    ElRadioGroup,
    ElRate,
    ElRow,
    ElScrollbar,
    ElSelect,
    ElSlider,
    ElStep,
    ElSteps,
    ElSubmenu,
    ElSwitch,
    ElTabPane,
    ElTable,
    ElTableColumn,
    ElTabs,
    ElTag,
    ElTimePicker,
    ElTimeSelect,
    ElTimeline,
    ElTimelineItem,
    ElTooltip,
    ElTransfer,
    ElTree,
    ElUpload,
]

const plugins = [
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
]

const i18n = createI18n({
    locale: localeZH.name,
    fallbackLocale: localeEN.name,
    messages,
})


export default (app) => {
    components.forEach(component => {
        app.component(component.name, component)
    })

    plugins.forEach(plugin => {
        app.use(plugin)
    })

    app.use(i18n)
}